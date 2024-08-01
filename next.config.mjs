/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true
    },
    images: {
        domains: ['via.placeholder.com', 'images.unsplash.com'], // Add any other image domains you use
    },
};

export default nextConfig;
