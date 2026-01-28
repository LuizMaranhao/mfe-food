import dynamic from 'next/dynamic';

const RemoteMenu = dynamic(() => import('menu/MenuList'), { 
  ssr: false, 
  loading: () => <p>Carregando Menu...</p> 
});

const RemoteOrder = dynamic(() => import('order/OrderSummary'), { 
  ssr: false, 
  loading: () => <p>Carregando Sacola...</p> 
});

export default function Home() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif' }}>
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ color: '#d35400' }}>Gourmet Delivery 🚀</h1>
      </header>
      
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '30px' }}>
        <section>
          <h2>Cardápio</h2>
          <RemoteMenu />
        </section>
        <aside>
          <RemoteOrder />
        </aside>
      </div>
    </div>
  );
}