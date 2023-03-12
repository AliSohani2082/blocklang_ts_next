/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.resolve.alies = {
      ...config.resolve.alias,
      "@styles": path.resolve(__dirname, "src/styles"),
    };

    return config;
  },
};

module.exports = nextConfig;
