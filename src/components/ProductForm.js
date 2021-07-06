import React from 'react';

function ProductForm() {
  return(
    <React.Fragment>
      <h4>Product Form</h4>
      <form>
        <input
          type='text'
          name='month'
          placeholder='Month' />
        <input
          type='text'
          name='product'
          placeholder='Products Available' />
        <button>Add Another Product</button>
        <button type='submit'>Submit</button>
      </form>
    </React.Fragment>
  );
}

export default ProductForm;

