import { withContentlayer } from "next-contentlayer";
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "standalone",
  images: {
    // 这里可以改成你的cdn域名
    domains: ["gcore.jsdelivr.net", "cdn.jsdelivr.net"],
  },
};

export default withContentlayer(nextConfig);
