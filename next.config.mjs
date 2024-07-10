/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.pexels.com",
                port: "",
                pathname: "/**"
            },
            {
                protocol: "https",
                hostname: "flaticon.com",
                port: "",
                pathname: "/**"
            },
            {
                protocol: "https",
                hostname: "tuk-cdn.s3.amazonaws.com",
                port: "",
                pathname: "/**"
            }
        ],
        domains: ['www.bwillcreative.com','chart.googleapis.com','images.remotePatterns']
    },
    eslint: {
        ignoreDuringBuilds: true,
      },
};

export default nextConfig;
