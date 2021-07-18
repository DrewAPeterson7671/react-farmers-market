import React from 'react';
import Product from './Product';
import PropTypes from 'prop-types';

function ProductMonth(props) {
  return(
    <React.Fragment>
      <h4>{props.month}</h4>
      {props.selection.map((product) => 
        <Product 
          product={product} />
      )}
      <hr />
    </React.Fragment>
  );
}

ProductMonth.propTypes = {
  month: PropTypes.string,
  selection: PropTypes.array
}

export default ProductMonth;