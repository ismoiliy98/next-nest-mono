const withPreact = require('next-plugin-preact');
const { PORT } = process.env;
const appPort = (parseInt(PORT, 10) || 3000) + 1;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    externalDir: true,
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/api/:path*',
          destination: `http://localhost:${appPort}/api/:path*`,
        },
      ],
    };
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['svg-url-loader'],
    });
    return config;
  },
};

module.exports = withPreact(nextConfig);
