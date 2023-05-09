/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["media.graphassets.com"],
    deviceSizes: [640, 1024, 1200, 1920],
  },
  experimental: {
  workerThreads: false,
  cpus: 1
},
    
};

module.exports = nextConfig;
