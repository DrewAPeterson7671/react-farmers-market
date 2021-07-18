import React from 'react';
import ProductForm from './ProductForm';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';


function NewProduct(props) {
  
  function handleNewProduceSubmission(event) {
    event.preventDefault();
    props.onProduceCreation({
      month: event.target.month.value,
      selection: [event.target.product.value],
      id: v4()
    })
    
  }
  


  return(
    <React.Fragment>
      <h3>New Product Module</h3>
      <ProductForm
         formSubmissionHandler={handleNewProduceSubmission }
         buttonText="Add Produce!"/>
    </React.Fragment>
  )
}

NewProduct.propTypes = {
  onProduceCreation: PropTypes.func
}

export default NewProduct;