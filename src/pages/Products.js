import React from 'react';
//importing our components
import ProductsContainer from '../components/ProductsContainer/ProductsContainer';

const Products = () => {
    return(
        <section className='productsPage'>
            <h1>Welcome, here are our products</h1>
            <ProductsContainer />
        </section>
    );
}

export default Products;