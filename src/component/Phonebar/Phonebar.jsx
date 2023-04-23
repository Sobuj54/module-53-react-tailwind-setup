import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Phonebar = () => {
    const [phones, setPhones] =useState([]);

    useEffect(() =>{
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res => res.json())
        // .then(data => setPhones(data));

        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data =>{
            const loadedData = data.data.data;
            //console.log(loadedData);
            const phonesData = loadedData.map(phone => {
                const parts = phone.slug.split('-');
                const price = parseInt(parts[1]);
                const phoneInfo = {
                    name: phone.phone_name,
                    price: price
                }
                return phoneInfo;
            })
            console.log(phonesData);
        });
    },[])

    return (
        <div>
            
        </div>
    );
};

export default Phonebar;