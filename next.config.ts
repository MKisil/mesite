import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    GITHUB_API_KEY: process.env.GITHUB_API_KEY,
    GITHUB_USERNAME: process.env.GITHUB_USERNAME,
  },
};

export default nextConfig;
