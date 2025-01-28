import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 images: {
  domains: ["www.google.com"], // ✅ Added "www.google.com" to allow external images
 },
};

export default nextConfig;
