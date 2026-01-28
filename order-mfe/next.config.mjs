import { NextFederationPlugin } from '@module-federation/nextjs-mf';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ativa o suporte ao Webpack para o Module Federation
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'order', // Identificador único do micro frontend
        filename: 'static/chunks/remoteEntry.js', // Arquivo que o Container irá ler
        exposes: {
          // Disponibiliza o componente de Sacola para outros apps
          './OrderSummary': './components/OrderSummary',
        },
        shared: {
          // Singleton garante que o Container e os Micros usem o MESMO React
          react: {
            singleton: true,
            requiredVersion: false,
            eager: true, // Força o carregamento imediato para evitar erro de useState
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
