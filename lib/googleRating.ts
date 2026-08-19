/**
 * Live-Bewertung aus dem Google-Unternehmensprofil (Places API New).
 *
 * Abruf läuft server-seitig und wird 24 h gecacht – es geht also kein
 * Request vom Browser der Besucher:innen an Google (DSGVO) und die
 * API-Kosten bleiben bei ~30 Abrufen/Monat im Gratis-Kontingent.
 *
 * Ohne GOOGLE_PLACES_API_KEY / GOOGLE_PLACE_ID liefert getGoogleRating()
 * null – die Seiten zeigen dann den im CMS gepflegten Text (Fallback).
 */

export type GoogleRating = {
  /** Durchschnittsbewertung, z. B. 5.0 */
  rating: number;
  /** Deutsch formatiert, z. B. "5,0" – für das Kennzahlen-Band */
  ratingFormatted: string;
  /** Anzahl der Google-Rezensionen */
  count: number;
  /** Link direkt zu allen Rezensionen des Profils */
  reviewsUrl: string;
  /** Fertig formatiert, z. B. "5,0 ★ · 25 Google-Bewertungen" */
  note: string;
};

export async function getGoogleRating(
  placeId = process.env.GOOGLE_PLACE_ID
): Promise<GoogleRating | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey || !placeId) return null;

  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${placeId}?languageCode=de`,
      {
        headers: {
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask": "rating,userRatingCount",
        },
        next: { revalidate: 86400 },
      }
    );
    if (!res.ok) {
      console.error(`Google Places API: ${res.status} ${await res.text()}`);
      return null;
    }

    const data = (await res.json()) as {
      rating?: number;
      userRatingCount?: number;
    };
    if (typeof data.rating !== "number" || typeof data.userRatingCount !== "number") {
      return null;
    }

    const formatted = data.rating.toLocaleString("de-DE", {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    });
    return {
      rating: data.rating,
      ratingFormatted: formatted,
      count: data.userRatingCount,
      reviewsUrl: `https://search.google.com/local/reviews?placeid=${placeId}`,
      note: `${formatted} ★ · ${data.userRatingCount} Google-Bewertungen`,
    };
  } catch (err) {
    console.error("Google Places API nicht erreichbar:", err);
    return null;
  }
}
