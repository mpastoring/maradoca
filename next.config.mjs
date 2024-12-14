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
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "frame-src 'self' https://w.soundcloud.com;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
