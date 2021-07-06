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
        {  
           month: "January",
           selection: [  
              "Apples",
              "Hazelnuts",
              "Pears",
              "Garlic",
              "Mushrooms",
              "Onions",
              "Potatoes",
              "Turnips"
           ]
        },
        {  
           month: "February",
           selection: [  
              "Apples",
              "Hazelnuts",
              "Pears",
              "Garlic",
              "Mushrooms",
              "Onions",
              "Potatoes"
           ]
        },
        {  
           month: "March",
           selection: [  
              "Apples",
              "Hazelnuts",
              "Pears",
              "Rhubarb",
              "Garlic",
              "Mushrooms",
              "Onions",
              "Potatoes"
           ]
        },
        {  
           month: "April",
           selection: [  
              "Apples",
              "Hazelnuts",
              "Pears",
              "Rhubarb",
              "Asparagus",
              "Garlic",
              "Lettuce",
              "Mushrooms",
              "Onions",
              "Potatoes"
           ]
        },
        {  
           month: "May",
           selection: [  
              "Apples",
              "Hazelnuts",
              "Pears",
              "Rhubarb",
              "Asparagus",
              "Cauliflower",
              "Garlic",
              "Lettuce",
              "Potatoes",
              "Radishes"
           ]
        },
        {  
           month: "June",
           selection: [  
              "Apples",
              "Hazelnuts",
              "Pears",
              "Rhubarb",
              "Blackberries",
              "Cherries",
              "Raspberries",
              "Strawberries",
              "Asparagus",
              "Broccoli",
              "Cauliflower",
              "Kohlrabi",
              "Lettuce",
              "Mushrooms",
              "Potatoes",
              "Radishes",
              "Squash"
           ]
        },
        {  
           month: "July",
           selection: [  
              "Apples",
              "Hazelnuts",
              "Pears",
              "Rhubarb",
              "Apricots",
              "Blackberries",
              "Blueberries",
              "Cherries",
              "Melons",
              "Nectarines",
              "Peaches",
              "Raspberries",
              "Strawberries",
              "Tomatoes",
              "Beets",
              "Broccoli",
              "Brussel Sprouts",
              "Cabbage",
              "Carrots",
              "Cauliflower",
              "Cucumber",
              "Eggplant",
              "Garlic",
              "Green Beans",
              "Kohlrabi",
              "Lettuce",
              "Mushrooms",
              "Potatoes",
              "Radishes",
              "Squash",
              "Turnips"
           ]
        },
        {  
           month: "August",
           selection: [  
              "Apples",
              "Apricots",
              "Blackberries",
              "Blueberries",
              "Cherries",
              "Melons",
              "Nectarines",
              "Peaches",
              "Pears",
              "Plums",
              "Raspberries",
              "Rhubarb",
              "Strawberries",
              "Tomatoes",
              "Beets",
              "Broccoli",
              "Brussel Sprouts",
              "Cabbage",
              "Carrots",
              "Cauliflower",
              "Corn",
              "Cucumber",
              "Eggplant",
              "Garlic",
              "Green Beans",
              "Kohlrabi",
              "Lettuce",
              "Mushrooms",
              "Onions",
              "Peas",
              "Peppers",
              "Potatoes",
              "Radishes",
              "Squash",
              "Turnips"
           ]
        },
        {  
           month: "September",
           selection: [  
              "Apples",
              "Blueberries",
              "Grapes",
              "Melons",
              "Peaches",
              "Pears",
              "Plums",
              "Raspberries",
              "Tomatoes",
              "Broccoli",
              "Brussel Sprouts",
              "Cabbage",
              "Carrots",
              "Cauliflower",
              "Corn",
              "Cucumber",
              "Eggplant",
              "Garlic",
              "Green Beans",
              "Kohlrabi",
              "Lettuce",
              "Mushrooms",
              "Onions",
              "Peas",
              "Peppers",
              "Potatoes",
              "Radishes",
              "Squash",
              "Turnips"
           ]
        },
        {  
           month: "October",
           selection: [  
              "Apples",
              "Grapes",
              "Hazelnuts",
              "Melons",
              "Peaches",
              "Pears",
              "Tomatoes",
              "Broccoli",
              "Brussel Sprouts",
              "Cabbage",
              "Carrots",
              "Cauliflower",
              "Corn",
              "Cucumber",
              "Eggplant",
              "Garlic",
              "Green Beans",
              "Kohlrabi",
              "Lettuce",
              "Mushrooms",
              "Onions",
              "Peas",
              "Peppers",
              "Potatoes",
              "Pumpkins",
              "Radishes",
              "Squash",
              "Turnips"
           ]
        },
        {  
           month: "November",
           selection: [  
              "Apples",
              "Hazelnuts",
              "Pears",
              "Broccoli",
              "Carrots",
              "Cauliflower",
              "Garlic",
              "Mushrooms",
              "Onions",
              "Potatoes",
              "Squash",
              "Turnips"
           ]
        },
        {  
           month: "December",
           selection: [  
              "Apples",
              "Hazelnuts",
              "Pears",
             "Broccoli",
              "Carrots",
              "Cauliflower",
              "Garlic",
              "Mushrooms",
              "Onions",
              "Potatoes",
              "Turnips"
           ]
        }
     ]

    }
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
      currentlyVisibleState = <NewProduct />
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