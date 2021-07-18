import React from 'react';
import ProductHeader from './ProductHeader';
import ProductList from './ProductList';
import NewProduct from './NewProduct';
import ProductDetail from './ProductDetail';
import EditProduct from './EditProduct';

class ProductController extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedProduct: null,
      editing: false,
      availableProduce: [  
      //   {  
      //      month: "January",
      //      id: "a21101",
      //      key: "a21101",
      //      selection: [  
      //         "Apples",
      //         "Hazelnuts",
      //         "Pears",
      //         "Garlic",
      //         "Mushrooms",
      //         "Onions",
      //         "Potatoes",
      //         "Turnips"
      //      ]
      //   }
     ]

    }
   }

   handleAddNewProductsList = (newProduce) => {
      const newProduceList = this.state.availableProduce.concat(newProduce);
      this.setState({
         formVisibleOnPage: false,
         availableProduce: newProduceList
      });
   }

   handleClick = () => {
      if (this.state.selectedProduct != null) {
        this.setState({
           formVisibleOnPage: false,
           selectedProduct: null,
           editing: false
        });
     } else {
        this.setState(prevState => ({
           formVisibleOnPage: !prevState.formVisibleOnPage
        }));
     }
   }

  render(){

   let currentlyVisibleState = null;
   let buttonText = null;

   if (this.state.editing) {
      currentlyVisibleState = <EditProduct />
      buttonText = "Return to Product List";
   } else if (this.state.selectedProduct != null) {
      currentlyVisibleState = <ProductDetail />
      buttonText = "Return to Product List";
   } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewProduct onProduceCreation= { this.handleAddNewProductsList }/>
      buttonText = "Return to Product List";
   } else {
      currentlyVisibleState = <ProductList availableProduce={this.state.availableProduce} />
      buttonText = "Add Produce";
   }



    return(
      <React.Fragment>
        <h2>Product Controller</h2>
        <ProductHeader />
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default ProductController;