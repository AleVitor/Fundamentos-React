import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

const filtrarPorCategoria = (produtos, categoria) => {
  return produtos.filter(produto => produto.categoria === categoria);
};

const produtos = [
  { nome: "Laptop", categoria: "Eletrônicos" },
  { nome: "Camisa", categoria: "Roupas" },
  { nome: "Smartphone", categoria: "Eletrônicos" }
];

const produtosFiltrados = filtrarPorCategoria(produtos, "Eletrônicos");

console.log(produtosFiltrados);
