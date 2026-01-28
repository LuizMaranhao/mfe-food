# 🍔 MFE Food - Micro Front-ends Architecture

Este é um projeto profissional desenvolvido com **Next.js 15**, focado em uma arquitetura de **Micro Front-ends (MFE)**. O objetivo é criar um ecossistema modular onde diferentes partes da aplicação (Container, Menu e Pedidos) funcionam de forma independente, mas integrada através do **Module Federation**.

## 🚀 Estrutura do Projeto

O repositório é um Monorepo organizado da seguinte forma:

* **container-app (Porta 3000):** O núcleo da aplicação que consome os micro front-ends.
* **menu-mfe (Porta 3001):** Micro front-end responsável pela exibição do cardápio.
* **order-mfe (Porta 3002):** Micro front-end responsável pela gestão de pedidos.

## 🛠️ Tecnologias Utilizadas

* **React 19** e **Next.js 15**.
* **SASS (.scss):** Estilização profissional e modular.
* **Module Federation:** Integração entre as aplicações via Webpack.
* **Turbopack:** Utilizado para desenvolvimento local de alta performance.

## 🏃 Como Rodar Localmente

Para visualizar o projeto completo, você precisará rodar as três aplicações simultaneamente:

1.  **Instale as dependências** em cada pasta:
    ```bash
    cd container-app && npm install
    cd ../menu-mfe && npm install
    cd ../order-mfe && npm install
    ```

2.  **Inicie cada serviço** (em terminais separados):
    * No `container-app`: `npm run dev`
    * No `menu-mfe`: `npm run dev`
    * No `order-mfe`: `npm run dev`

3.  Acesse `http://localhost:3000` para ver a aplicação integrada.

---
*Este projeto foi desenvolvido com foco em escalabilidade e performance para estratégias de tráfego pago.*
