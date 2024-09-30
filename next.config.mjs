/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['i1.sndcdn.com'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "script-src 'self' https://w.soundcloud.com; frame-src https://w.soundcloud.com;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
