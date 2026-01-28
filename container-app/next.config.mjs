import { NextFederationPlugin } from '@module-federation/nextjs-mf';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'container',
        filename: 'static/chunks/remoteEntry.js',
        // O Container consome os remotes
        remotes: {
          menu: 'menu@http://localhost:3001/_next/static/chunks/remoteEntry.js',
          order: 'order@http://localhost:3002/_next/static/chunks/remoteEntry.js',
        },
        shared: {
          react: {
            singleton: true,
            requiredVersion: false,
            eager: true, // Adicionado para carregar imediatamente no container
          },
          'react-dom': {
            singleton: true,
            requiredVersion: false,
            eager: true,
          },
        },
      })
    );
    return config;
  },
};

export default nextConfig;