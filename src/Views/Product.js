import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../Components/Loader';
import { useAxiosGet } from '../Hooks/httpRequests';

function Product() {
  const { id } = useParams();
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  let product = useAxiosGet(url);

  let content = null;

  if (product.error) {
    content = (
      <div>
        <div className="bg-red-300 p-3">
          There was an error please refresh or try again later.
        </div>
      </div>
    );
  }

  if (product.loading) {
    content = <Loader></Loader>;
  }

  if (product.data) {
    content = (
      <div>
        <h1 className="text-2xl font-bold mb-3">{product.data.name}</h1>
        <div className="flex">
          <img src={product.data.sprites.back_default} alt={product.name} />
          <img src={product.data.sprites.front_default} alt={product.name} />
        </div>
        <div className="text-xl mb-3">
          Main Abilities:{' '}
          <span className="font-bold text-xl mb-3">
            {product.data.abilities[0].ability.name}
          </span>
        </div>
        <div>
          Lorem Ipsum Detal Mega Manga Chone Ipsum Lorem Ipsum Detal Mega Manga
          Chone Ipsum Lorem Ipsum Detal Mega Manga Chone Ipsum Lorem Ipsum Detal
          Mega Manga Chone Ipsum{' '}
        </div>
      </div>
    );
  }

  return <div>{content}</div>;
}

export default Product;

// "back_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png"
