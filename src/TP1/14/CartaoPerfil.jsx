// src/CartaoPerfil.jsx
import React from 'react';
import './CartaoPerfil.css';

const CartaoPerfil = () => {
  return (
    <div className="cartao-perfil">
      <img 
        src="https://via.placeholder.com/150" 
        alt="Foto de Perfil" 
        className="cartao-perfil-imagem" 
      />
      <h2 className="cartao-perfil-titulo">Vitor</h2>
      <p className="cartao-perfil-descricao">
        Sou o Vitor, tenho 19 anos e sou principalmente desenvolvedor Back-End
      </p>
    </div>
  );
}

export default CartaoPerfil;