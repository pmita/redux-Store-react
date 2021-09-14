import React from 'react';
//importing everything react router related
import {Link} from 'react-router-dom';

const Navigation = () => {
    return(
        <nav>
            <Link to='/'>
                <h2>Home</h2>
            </Link>
            <Link to='/cart'>
                <h2>Cart</h2>
            </Link>
            <Link to='/products'>
                <h2>Home</h2>
            </Link>
        </nav>
    );
}

export default Navigation;