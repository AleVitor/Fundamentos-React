import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

const Main = () => {

  const filtrarAcimaPreco = (produtos, valorMinimo) => {
    return produtos.filter(produto => produto.preco > valorMinimo);
  };

  const produtos = [ 
    { nome: "Laptop", preco: 1000 }, 
    { nome: "Tablet", preco: 400 }, 
    { nome: "Smartphone", preco: 1500 } 
  ];

  const resultado = filtrarAcimaPreco(produtos, 600);

  console.log(resultado);

  return (
    <div>
      <h1>Veja o console para o resultado</h1>
    </div>
  );
};

Main();