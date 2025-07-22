/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/intro',  // 添加这行
  assetPrefix: '/intro', // 确保静态资源前缀也正确
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
