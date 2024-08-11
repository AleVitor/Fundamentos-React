import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

function encontrarProdutoPorNome(produtos, nome) {
  return produtos.find(produto => produto.nome === nome);
}

const produtos = [ 
  { nome: "Laptop", preco: 1000 }, 
  { nome: "Tablet", preco: 400 }, 
  { nome: "Smartphone", preco: 1500 } 
];

const produtoEncontrado = encontrarProdutoPorNome(produtos, "Laptop");
console.log(produtoEncontrado);
