"use client"; // Obrigatório no Next.js 15

import React, { useState, useEffect } from 'react';

export default function OrderSummary() {
  // Inicializamos com um array vazio para evitar undefined
  const [itens, setItens] = useState([]);

  useEffect(() => {
    const escutarAdicao = (event) => {
      setItens((prev) => [...prev, event.detail]);
    };

    window.addEventListener('add-to-cart', escutarAdicao);
    return () => window.removeEventListener('add-to-cart', escutarAdicao);
  }, []);

  return (
    <div style={{ padding: '15px', border: '1px solid #ccc', borderRadius: '10px' }}>
      <h3>Sacola</h3>
      {itens.length === 0 ? <p>Vazia</p> : (
        itens.map((item, i) => <div key={i}>{item.nome} - R$ {item.preco}</div>)
      )}
    </div>
  );
}
