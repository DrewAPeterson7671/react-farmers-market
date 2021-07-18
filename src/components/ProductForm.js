import React from 'react';
import PropTypes from 'prop-types';

function ProductForm(props) {
  return(
    <React.Fragment>
      <h4>Product Form</h4>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='month'
          placeholder='Month' />
        <input
          type='text'
          name='product'
          placeholder='Products Available' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ProductForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default ProductForm;

