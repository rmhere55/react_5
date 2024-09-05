import React, { useEffect, useState } from 'react';
import Coin from './Product';
import Loader from './Loader';
import axios from 'axios';

const Home = () => {
  const [coin, setCoin] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllCoins = async () => {
      try {
        const { data } = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
          params: {
            vs_currency: 'inr',
            order: 'market_cap_desc',
            per_page: 20,
            page: 1,
            sparkline: false
          }
        });
        console.log(data);
        setCoin(data);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false); // Set loading to false even if there's an error
      }
    };

    fetchAllCoins();
  }, []);

  return (
    <div className='home'>
      {loading ? (
        <Loader />
      ) : (
        coin.map((i) => (
          <Coin
            name={i.name}
            symbol={i.symbol}
            key={i.id}
            imgSrc={i.image}
            price={i.current_price} // Use current_price instead of currency_price
          />
        ))
      )}
    </div>
  );
};

export default Home;
