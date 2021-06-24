import React from 'react';
import ProductHeaderList from './ProductListHeader';
import ProductMonth from './ProductMonth';
import Product from './Product';


function ProductList() {
  return(
    <React.Fragment>
      <h4>Product List Module</h4>
      <ProductHeaderList />
      <ProductMonth />
      <Product />
      <Product />
      <Product />
      <ProductMonth />
      <Product />
      <Product />
      <Product />
      <ProductMonth />
      <Product />
      <Product />
      <Product />
    </React.Fragment>
  );
}


export default ProductList;