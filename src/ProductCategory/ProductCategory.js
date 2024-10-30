// ProductCategory.js
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from './ProductCategory.module.css'
const ProductCategory = ({ category, onClick }) => {
  if (!category) return null; // تأكد من وجود بيانات قبل العرض

  return (
    <Button className="category-card" onClick={() => onClick(category)}>
         <Card className={styles.card}>
          <Button>{category}</Button>
          </Card>
    </Button>
  );
};

export default ProductCategory;
