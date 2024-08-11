import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './main.css'

const Main = () => {
    const ratings = [4, 5, 3, 4, 5, 2, 5];
  
    const calculateAverage = (array) => {
      if (array.length === 0) return 0;
      const total = array.reduce((acc, rating) => acc + rating, 0);
      return total / array.length;
    };
  
    const averageRating = calculateAverage(ratings);

    console.log('Média das avaliações:', averageRating);
  
    return (
      <div>
        <h1>Calculadora de Média de Avaliações</h1>
        <p>A média das avaliações é: {averageRating}</p>
      </div>
    );
  };
  
Main();