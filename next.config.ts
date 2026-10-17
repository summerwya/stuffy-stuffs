import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "standalone",
    images: {
        unoptimized: false,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'danbooru.donmai.us',
                pathname: '/data/**', // This covers where Danbooru hosts its image files
            },
        ],
    },
};

export default nextConfig;
