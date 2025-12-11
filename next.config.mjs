/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    unoptimized: true
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      {
        source: "/privacy",
        destination: "/legal#privacy",
        permanent: true,
      },
      {
        source: "/terms",
        destination: "/legal#terms",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
