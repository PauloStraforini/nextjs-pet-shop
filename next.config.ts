import type { NextConfig } from "next";

const nextConfig = {
  eslint: {
    // Atenção: Isso permite que o build termine mesmo com erros de lint.
    ignoreDuringBuilds: true,
  },
}