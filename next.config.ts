import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "**.amazonaws.com" },
      { protocol: "https", hostname: "**.awsli.com.br" },
      { protocol: "https", hostname: "**.mlstatic.com" },
      { protocol: "https", hostname: "**.tcdn.com.br" },
      { protocol: "https", hostname: "**.madeiramadeira.com.br" },
      { protocol: "https", hostname: "**.multimixmoveis.com" },
      { protocol: "https", hostname: "salescdn.net" },
      { protocol: "https", hostname: "product-hub-prd.madeiramadeira.com.br" },
      { protocol: "https", hostname: "cdn.awsli.com.br" },
      { protocol: "https", hostname: "m.media-amazon.com" },
      { protocol: "https", hostname: "http2.mlstatic.com" },
      { protocol: "https", hostname: "www.multimixmoveis.com" },
      { protocol: "https", hostname: "images.tcdn.com.br" },
    ],
  },
  trailingSlash: true,
  turbopack: {
    root: "..",
  },
};

export default nextConfig;