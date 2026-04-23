/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/tutelapp',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}
module.exports = nextConfig
