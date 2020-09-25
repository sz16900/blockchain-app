import React from 'react';
import Loader from '../Components/Loader';
import ProductCard from '../Components/ProductCard';
import { useAxiosGet } from '../Hooks/httpRequests';

function Home() {
  const allUrl = `https://api.coingecko.com/api/v3/coins/list`;
  let allCoins = useAxiosGet(allUrl);
  let arrayOfIds = [];
  if (allCoins.data) {
    for (let i = 0; i <= 300; ++i) {
      arrayOfIds.push(allCoins.data[i].id);
    }
  }
  let theString = arrayOfIds.join('%2C');

  const url = `https://api.coingecko.com/api/v3/simple/price?ids=${theString}&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true`;

  let products = useAxiosGet(url);

  let content = null;

  if (products.error) {
    content = (
      <div>
        <div className="bg-red-300 p-3">
          There was an error please refresh or try again later.
        </div>
      </div>
    );
  }

  if (products.loading) {
    content = <Loader></Loader>;
  }

  if (products.data) {
    console.log(products.data);
    content = Object.keys(products.data).map(function (key, index) {
      return (
        <div>{<ProductCard product={products.data[key]} name={key} />}</div>
      );
    });
  }

  return <div className="grid grid-cols-4 gap-4">{content}</div>;
}

export default Home;
