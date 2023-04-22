import React from 'react';

const PriceCard = ({price}) => {
    return (
        <div>
            <div>
                <span className='text-3xl font-bold text-purple-800'>{price.price}</span>
                <span className='text-2xl'>/mon</span>
            </div>
            <h4 className='text-4xl font-semibold'>{price.name}</h4>
        </div>
    );
};

export default PriceCard;