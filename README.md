# 🍔 Gourmet Delivery - Micro Front-end Ecosystem

Este é um ecossistema premium de entrega de comida desenvolvido com a arquitetura de **Micro Front-ends**. O projeto utiliza as tecnologias mais modernas do mercado para garantir escalabilidade e independência de times.

## 🚀 Tecnologias
* **Next.js 15** (Core Framework)
* **Module Federation** (Orquestração de Micro Front-ends)
* **SASS** (Estilização Profissional)
* **React (Hooks & Context)**
* **Vercel** (Deployment & CI/CD)

## 🏗️ Arquitetura do Sistema
O projeto é dividido em três aplicações independentes:

1.  **Container (Porta 3000):** O Host principal que consome os remotos e gerencia a experiência do usuário.
2.  **Products MFE (Porta 3001):** Micro Front-end responsável pela listagem e detalhes dos produtos.
3.  **Order MFE (Porta 3002):** Micro Front-end que gerencia a sacola de compras e lógica de pedidos.

## 🛠️ Como executar
```bash
# Clone o repositório
git clone [SEU_LINK_GITHUB]

# Instale as dependências em cada pasta e inicie
# No Container
cd container && npm install && npm run dev

# Nos Remotos
cd ../products && npm install && npm run dev
cd ../order && npm install && npm run dev
