/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'], // Formats modernes
    deviceSizes: [640, 750, 828, 1080, 1200, 1920], // Breakpoints responsive
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // Tailles icônes
    minimumCacheTTL: 31536000, // Cache 1 an
  },
  // Compression des assets
  compress: true,
  // Prefetch automatique des liens
  experimental: {
    optimizeCss: true,
  },
}

export default nextConfig
