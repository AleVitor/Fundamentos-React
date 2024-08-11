import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

function verificarEstoque(produtos) {
  return produtos.filter(produto => produto.quantidadeEmEstoque > 0);
}

const produtos = [ 
  { nome: "Laptop", quantidadeEmEstoque: 5 }, 
  { nome: "Tablet", quantidadeEmEstoque: 0 }, 
  { nome: "Smartphone", quantidadeEmEstoque: 3 } 
];

const produtosEmEstoque = verificarEstoque(produtos);

console.log(produtosEmEstoque);
