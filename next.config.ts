import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    devIndicators: false,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "substackcdn.com",
                pathname: "/image/fetch/**",
            },
            {
                protocol: "https",
                hostname: "substack-post-media.s3.amazonaws.com",
                pathname: "/**",
            },
        ],
    },
    /* config options here */
};

export default nextConfig;
