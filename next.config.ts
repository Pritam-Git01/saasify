import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  
  // Enable if you're using images
  images: {
    domains: [],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // TypeScript configuration
  typescript: {
    ignoreBuildErrors: false,
  },

  // ESLint configuration
  eslint: {
    ignoreDuringBuilds: false,
  },

  // Disable x-powered-by header
  poweredByHeader: false,

  // Enable compression
  compress: true,

  // Redirect trailing slashes
  trailingSlash: false,
};

export default nextConfig;