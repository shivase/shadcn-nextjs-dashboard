/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  output: 'standalone',
  swcMinify: true,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true }
};
