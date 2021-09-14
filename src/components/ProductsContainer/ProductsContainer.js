import React, {useState, useEffect} from 'react';
//importing our assets
import {productsData} from '../../assets/Data';
//importing our components
import ProductItem from './ProductItem';

const ProductsContainer = () => {
    //defining our temporary state
    const [products, setProducts] = useState([]);

    //define our useEffect functionality
    useEffect(() => {
        setProducts(productsData);
    }, [])
    return(
        <div className='productsSection'>
            {products.map(item => (
                <ProductItem
                    key={item.id}
                    name={item.name}
                    price={item.price}
                    desc={item.description}
                    img={item.img}
                    isItemInCart={item.isItemInCart}
                    id={item.id}
                />
            ))}
        </div>
    );
}

export default ProductsContainer;