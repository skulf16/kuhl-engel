import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/coaching-fuer-frauen",
        destination: "/karrierecoaching",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
