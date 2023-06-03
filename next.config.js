// next.config.js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.prismic.io',
        port: '',
        pathname: '/pequenachef/**',
      },
    ],
  },
}