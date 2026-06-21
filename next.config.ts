import type { NextConfig } from "next";

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
});

const isDev = process.env.NODE_ENV === 'development';

// 👇 typed BEFORE it's passed into the untyped require()-based wrappers
const baseConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
    reactRemoveProperties: process.env.NODE_ENV === 'production',
  },

  modularizeImports: {
    'lodash': { transform: 'lodash/{{member}}' },
    'date-fns': { transform: 'date-fns/{{member}}' },
    '@mui/icons-material': { transform: '@mui/icons-material/{{member}}' },
  },

  productionBrowserSourceMaps: false,

  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all',
            },
          },
        },
      };
    }
    return config;
  },

  turbopack: {
    resolveAlias: {},
  },

  experimental: {
    optimizeCss: true,
    esmExternals: true,
    turbopackMinify: !isDev,
    turbopackRemoveUnusedExports: !isDev,
    turbopackScopeHoisting: !isDev,
    turbopackSourceMaps: true,
    turbopackTreeShaking: false,
    optimizePackageImports: [
      'lodash',
      'date-fns',
      '@mui/icons-material',
      '@mui/material',
      'recharts',
      'react-icons',
    ],
  },
};

// wrappers applied last — the type-checking already happened above
const nextConfig: NextConfig = withPWA(withBundleAnalyzer(baseConfig));

export default nextConfig;