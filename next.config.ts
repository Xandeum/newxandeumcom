import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/blog",
        destination: "https://www.xandeum.network/blog",
        permanent: true,
      },
      {
        source: "/blog-feed.xml",
        destination: "https://www.xandeum.network/blog-feed.xml",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
