import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

function calcularTotalItens(itens) {
  return itens.reduce((total, item) => {
    return total + item.quantidade * item.precoUnitario;
  }, 0);
}

const itens = [ 
  { nome: "Laptop", quantidade: 1, precoUnitario: 1000 }, 
  { nome: "Tablet", quantidade: 2, precoUnitario: 400 }, 
  { nome: "Smartphone", quantidade: 1, precoUnitario: 1500 } 
];

const total = calcularTotalItens(itens);
console.log(total);
