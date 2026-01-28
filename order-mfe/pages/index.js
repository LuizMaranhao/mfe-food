import dynamic from 'next/dynamic';

// Importamos o componente com SSR desativado para evitar o erro de Hook no servidor
const OrderSummaryNoSSR = dynamic(() => import('../components/OrderSummary'), { 
  ssr: false 
});

export default function Home() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Microsserviço de Pedidos (3002)</h1>
      <OrderSummaryNoSSR />
    </div>
  );
}