import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard(props) {
  let date = new Date(1000 * props.product.last_updated_at);

  return (
    <div className={'border-2 p-4 mb-5'}>
      <div className={'bg-teal-100'}>{props.name}</div>
      <div className={'bg-teal-300'}>{`price: $${props.product.usd}`}</div>
      <div className={'bg-blue-100'}>{`Updated: ${date.toLocaleString()}`}</div>
      <div
        className={'bg-blue-300'}
      >{`24h: % ${props.product.usd_24h_change}`}</div>
      <div
        className={'bg-blue-500'}
      >{`Mkt Cap ${props.product.usd_market_cap}`}</div>
    </div>
  );
}

export default ProductCard;
