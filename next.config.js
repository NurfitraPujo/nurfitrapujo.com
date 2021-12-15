/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
};

const withImages = require("next-images");
module.exports = withImages();

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({});

module.exports = {
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|png)",
        locale: false,
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=100000, must-revalidate",
          },
        ],
      },
      {
        source: "/framework*",
        locale: false,
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=100000, must-revalidate",
          },
        ],
      },
    ];
  },
};

module.exports = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
};
