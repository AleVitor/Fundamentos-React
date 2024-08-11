import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

const filtrarDisponiveis = (produtos) => {
  return produtos.filter(produto => produto.disponivel);
};

const produtos = [ 
  { nome: "Laptop", disponivel: true }, 
  { nome: "Tablet", disponivel: false }, 
  { nome: "Smartphone", disponivel: true },
  { nome: "Console", disponivel: false }
  ];

function Main(){
  var disponivel = filtrarDisponiveis(produtos);
  console.log(disponivel);
}

Main();