import React, { useEffect, useState } from 'react';
import PriceCard from '../PriceCard/PriceCard';

const PriceList = () => {
    const [prices, setPrices] = useState([]);

    useEffect(() => {
        fetch('prices.json')
        .then(res => res.json())
        .then(data => setPrices(data));
    },[])
    return (
        <div>
            <h2 className='text-5xl bg-purple-700 p-3 text-center text-white'>Awesome affordable prices</h2>
          <div className='grid md:grid-cols-3 gap-3'>
          {
                prices.map(price => <PriceCard
                key={prices.id}
                price={price}
                ></PriceCard>)
            }
          </div>
        </div>
    );
};

export default PriceList;