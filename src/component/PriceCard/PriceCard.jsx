import React from 'react';
import Feature from '../Feature/Feature';

const PriceCard = ({price}) => {
    return (
        <div className='bg-indigo-500 m-4 rounded-md p-4 flex flex-col'>
            <div className='text-center'>
                <span className='text-3xl font-bold '>{price.price}</span>
                <span className='text-2xl text-white'>/mon</span>
            </div>
            <h4 className='text-4xl font-semibold text-center mb-2'>{price.name}</h4>
            <p className='text-white underline font-bold text-lg'>Features :</p>
            {
                price.features.map((feature, idx) => <Feature 
                key={idx}
                feature={feature}
                ></Feature>)
            }
            <button className="rounded-md text-lg font-bold py-3 bg-green-700 w-full text-white mt-auto">Buy Now</button>
        </div>
    );
};

export default PriceCard;