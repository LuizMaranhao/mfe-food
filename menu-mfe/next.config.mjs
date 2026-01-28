import { NextFederationPlugin } from '@module-federation/nextjs-mf';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'menu',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          // Expondo o componente principal para o Container
          './MenuList': './components/MenuList',
        },
        shared: {
          react: {
            singleton: true,
            requiredVersion: false,
            eager: true,
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