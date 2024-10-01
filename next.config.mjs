/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "unpkg.com",
        pathname: "/leaflet@**",
      },
      {
        protocol: "https",
        hostname: "i1.sndcdn.com",
        pathname: "/artworks-**",
      },
    ],
  },
};

export default nextConfig;
