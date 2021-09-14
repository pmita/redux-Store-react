import React from 'react';

const ProductItem = ({
    name = 'enter name here',
    price = 'enter price here',
    desc = 'enter description here',
    img,
    isItemInCart,
    id
}) => {
    return(
        <div className='productItem'>
            <img src={img} alt='our product to sell' />
            <div className='productItem--details'>
                <span className='productItem--name'>{name}</span>
                <span className='productItem--price'>{price}</span>
            </div>

            <p className='productItem--description'>{desc}</p>

            <button 
                className='btn actionBtn'
                disabled={isItemInCart}
            >
                {!isItemInCart ? 'ADD TO CART' : 'ITEM IN BASKET'}
            </button>
        </div>
    );
}

export default ProductItem;