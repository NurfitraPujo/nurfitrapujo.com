/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
};

const withImages = require("next-images");
module.exports = withImages();

module.exports = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({});
