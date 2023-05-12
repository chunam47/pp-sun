/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    loader: "custom",
    loaderFile: "./app/image.ts",
  },
};

module.exports = nextConfig;
