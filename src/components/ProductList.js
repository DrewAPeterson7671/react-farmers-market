import React from 'react';
import ProductMonth from './ProductMonth';
import PropTypes from "prop-types";


function ProductList(props) {
  return(
    <React.Fragment>
      <h4>Product List Module</h4>
      <hr />
      {props.availableProduce.map((product) =>
        <ProductMonth
          month={product.month}
          selection={product.selection}
          key={product.id} />
      )}
    </React.Fragment>
  );
}

ProductList.propTypes = {
  availableProduce: PropTypes.array
}


export default ProductList;