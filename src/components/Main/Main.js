import React from 'react';
import './Main.css';
import backGroundImg from '../../backGround.png';
// import AnimalCard from '../AnimalCard/AnimalCard.js';
import AnimalList from '../AnimalList/AnimalList.js';

export default function Main({ animal }) {
  return (
    <main style={{ backgroundImage: `url(${backGroundImg})` }}>
      <AnimalList animal={animal} />
    </main>
  );
}

