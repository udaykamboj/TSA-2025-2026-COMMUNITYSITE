/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ["http://10.0.0.70:3000", "http://localhost:3000"],
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
 
}

export default nextConfig
