import React from 'react';
import PropTypes from 'prop-types';

function Product(props) {
  return(
    <React.Fragment>
      <p>{props.product}</p>
    </React.Fragment>
  );
}

Product.propTypes = {
  product: PropTypes.string
}

export default Product;