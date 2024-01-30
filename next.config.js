/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {hostname: "th.bing.com"},
            {hostname: "lh3.googleusercontent.com"},
        ]
    },
}

module.exports = nextConfig
