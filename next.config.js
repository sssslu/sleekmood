/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cf.product-image.s.zigzag.kr',
      },
    ],
  },
};

module.exports = nextConfig;