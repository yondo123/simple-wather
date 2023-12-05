/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    emotion: true
  },
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'openweathermap.org' }]
  },
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `${process.env.NEXT_PUBLIC_BASE_URL}/:path*`
      }
    ];
  }
};

export default nextConfig;
