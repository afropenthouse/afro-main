/** @type {import('next').NextConfig} */
const nextConfig = {
     experimental: {
    serverActions: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
    images: {
        remotePatterns: [
            { hostname: 'res.cloudinary.com', protocol: 'https', port: '' },
            { hostname: 'lh3.googleusercontent.com', protocol: 'https', port: '' },
        ]
    },
    webpack(config) {
        config.experiments = {
            ...config.experiments,
            topLevelAwait: true,
        }
        return config
    }
}

module.exports = nextConfig