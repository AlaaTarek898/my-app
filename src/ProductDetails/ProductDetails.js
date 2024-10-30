// ProductDetails.js
import React from 'react';
import Button from 'react-bootstrap/Button';
import styles from './ProductDetails.module.css';

const ProductDetails = ({ product, back }) => {
  return (
    <div className={styles.detailsContainer}>
        <div className='col-md-3'>
            <img className={styles.img} src={product.image} alt='product'/>
        </div>
        <div className='col-md-9'>
            <p className={styles.title} >{product.title}</p>
            <p className={styles.description} >{product.description}</p>
            <p className={styles.price}>price{product.price}</p>
      
            <Button variant="primary"  onClick={back}>Back to Products</Button>
        </div>
    
    </div>
  );
};

export default ProductDetails;
