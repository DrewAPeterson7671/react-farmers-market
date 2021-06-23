import React from 'react';
import ProductHeader from './ProductHeader';
import ProductList from './ProductList';
import NewProduct from './NewProduct';
import ProductDetail from './ProductDetail';
import EditProduct from './EditProduct';

function ProductController() {
  return(
    <React.Fragment>
      <h2>Product Controller</h2>
      <ProductHeader />
      <NewProduct />
      <ProductDetail />
      <EditProduct />
      <ProductList />
    </React.Fragment>
  );
}

export default ProductController;