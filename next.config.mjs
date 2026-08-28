/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [75, 95],
  },
  async redirects() {
    return [
      {
        source: "/gym",
        destination: "https://saravananhome.duckdns.org:8443",
        permanent: false,
      },
    ];
  },
};
export default nextConfig;
