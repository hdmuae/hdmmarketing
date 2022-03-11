/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/contacts",
        destination: "/",
        permanent: false,
      },
      {
        source: "/about-us",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
