"use client";

const pratos = [
  { id: 1, nome: 'Hambúrguer Artesanal', preco: 35.00, desc: 'Blend de 180g e queijo cheddar.' },
  { id: 2, nome: 'Batata Canoa XL', preco: 22.00, desc: 'Batatas crocantes com alecrim.' },
  { id: 3, nome: 'Suco Natural 500ml', preco: 12.00, desc: 'Laranja ou Morango.' },
];

export default function MenuList() {
  const adicionar = (prato) => {
    const evento = new CustomEvent('add-to-cart', { detail: prato });
    window.dispatchEvent(evento);
  };

  return (
    <div style={{ display: 'grid', gap: '15px' }}>
      {pratos.map(prato => (
        <div key={prato.id} style={{ padding: '15px', border: '1px solid #eee', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h3 style={{ margin: 0 }}>{prato.nome}</h3>
            <p style={{ fontSize: '0.9rem', color: '#666' }}>{prato.desc}</p>
            <strong>R$ {prato.preco.toFixed(2)}</strong>
          </div>
          <button 
            onClick={() => adicionar(prato)}
            style={{ background: '#d35400', color: '#fff', border: 'none', padding: '8px 15px', borderRadius: '5px', cursor: 'pointer' }}
          >
            Adicionar +
          </button>
        </div>
      ))}
    </div>
  );
}