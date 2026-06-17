import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Silence workspace root detection warning (project has its own lockfile)
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
