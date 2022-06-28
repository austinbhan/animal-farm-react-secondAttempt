import React from 'react';
import AnimalCard from '../AnimalCard/AnimalCard';

export default function AnimalList({ animal }) {
  return (
    <div>{ animal.map((item, i) => <AnimalCard 
      {...item}
      key={ item.name + i } />)
    }</div>
  );
}
