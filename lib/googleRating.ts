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

export type GoogleReview = {
  author: string;
  rating: number;
  text: string;
  /** Von Google fertig formatiert, z. B. "vor 6 Monaten" */
  relativeTime: string;
};

export type GoogleRating = {
  /** Durchschnittsbewertung, z. B. 5.0 */
  rating: number;
  /** Deutsch formatiert, z. B. "5,0" – für das Kennzahlen-Band */
  ratingFormatted: string;
  /** Anzahl der Google-Rezensionen */
  count: number;
  /** Link direkt zu allen Rezensionen des Profils */
  reviewsUrl: string;
  /** Link zum Bewertung-schreiben-Dialog des Profils */
  writeReviewUrl: string;
  /** Fertig formatiert, z. B. "5,0 ★ · 25 Google-Bewertungen" */
  note: string;
  /** Bis zu 5 Rezensionen (Auswahl trifft Google), gefiltert auf ≥ MIN_CARD_RATING */
  reviews: GoogleReview[];
};

/**
 * Karten unter 4 Sternen zeigen wir nicht im Karussell (wie bei den gängigen
 * Bewertungs-Widgets). Transparenz bleibt gewahrt: Gesamtrating und Anzahl
 * enthalten alle Bewertungen, der Link führt zu sämtlichen Rezensionen.
 */
const MIN_CARD_RATING = 4;

type PlaceReview = {
  rating?: number;
  relativePublishTimeDescription?: string;
  text?: { text?: string };
  authorAttribution?: { displayName?: string };
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
          "X-Goog-FieldMask": "rating,userRatingCount,reviews",
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
      reviews?: PlaceReview[];
    };
    if (typeof data.rating !== "number" || typeof data.userRatingCount !== "number") {
      return null;
    }

    const formatted = data.rating.toLocaleString("de-DE", {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    });
    const reviews: GoogleReview[] = (data.reviews ?? [])
      .filter(
        (r) =>
          (r.rating ?? 0) >= MIN_CARD_RATING &&
          r.text?.text &&
          r.authorAttribution?.displayName
      )
      .map((r) => ({
        author: r.authorAttribution!.displayName!,
        rating: r.rating!,
        text: r.text!.text!,
        relativeTime: r.relativePublishTimeDescription ?? "",
      }));

    return {
      rating: data.rating,
      ratingFormatted: formatted,
      count: data.userRatingCount,
      reviewsUrl: `https://search.google.com/local/reviews?placeid=${placeId}`,
      writeReviewUrl: `https://search.google.com/local/writereview?placeid=${placeId}`,
      note: `${formatted} ★ · ${data.userRatingCount} Google-Bewertungen`,
      reviews,
    };
  } catch (err) {
    console.error("Google Places API nicht erreichbar:", err);
    return null;
  }
}
