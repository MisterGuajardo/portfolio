import type { NextConfig } from "next";

const REPO = "portfolio";
const IS_PRODUCTION = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: IS_PRODUCTION ? `/${REPO}` : "",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
