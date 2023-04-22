import React from 'react';

const Navbar = () => {
    const routes =[
        {id:1, name:'Home', path:'/'},
        {id:1, name:'About', path:'/about'},
        {id:1, name:'Contact', path:'/contact'},
        {id:1, name:'Products', path:'/products'},
        {id:1, name:'Services', path:'/services'}
    ]
    return (
        <div>
            {
                routes.map(route=><li>{route.name}</li>)
            }
        </div>
    );
};

export default Navbar;