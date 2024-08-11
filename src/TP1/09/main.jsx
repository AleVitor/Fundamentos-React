import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

const agruparPorCategoria = (produtos) => {
  return produtos.reduce((acc, produto) => {
    const { categoria, nome } = produto;
    if (!acc[categoria]) {
      acc[categoria] = [];
    }
    acc[categoria].push(nome);
    return acc;
  }, {});
};

const produtos = [
  { nome: "Laptop", categoria: "Eletrônicos" },
  { nome: "Camisa", categoria: "Roupas" },
  { nome: "Smartphone", categoria: "Eletrônicos" },
  { nome: "Calça", categoria: "Roupas" },
  { nome: "Fone de Ouvido", categoria: "Eletrônicos" }
];

const resultado = agruparPorCategoria(produtos);
console.log(resultado);
