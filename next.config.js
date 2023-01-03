const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    webpack: config => {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ["@svgr/webpack"]
        });
        return config;
    }
}

module.exports = nextConfig
// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// });

// module.exports = withBundleAnalyzer({});
