import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    LLM_BASE_URL: process.env.LLM_BASE_URL,
  },
};

export default nextConfig;
