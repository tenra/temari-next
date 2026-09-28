/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Next 12 の SWC は libssl.so.1.1 依存のため現行 Vercel で読めず、WASM 最小化が落ちる
  swcMinify: false,
  images: {
    domains: ["images.microcms-assets.io"],
  },
  typescript: {
    // あなたのプロジェクトに型エラーがあったとしても、プロダクションビルドを正常に完了するために危険な許可をする。
    ignoreBuildErrors: true
  }
}

module.exports = nextConfig
