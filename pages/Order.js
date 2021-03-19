import React, { Component } from 'react';
import {Modal} from 'react-bootstrap';

import ProductForm from './ProductForm';
import Product from './Product';

import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
// import {useCart} from 'react-use-cart '
import DirectusSDK from '@directus/sdk-js';

const directus = new DirectusSDK('https://aqualifecms.businessexchange.me/');

// const { addItem } = useCart();

export class Order extends Component {
 constructor(props){

  super(props);
     this.state={
      products:[],
      product:{},
      selectedOption:{},
      product_id:"",
      cart:[], 
      total: 0,
      quantity:0,
      show: true,
      max: 5,
      min: 0
    }
     this.addToList = this.addToList.bind(this);
     this.handleInputChange = this.handleInputChange.bind(this);
     this.calculateTotal = this.calculateTotal.bind(this);
   // this.showProduct = this.showProduct.bind(this);
  }
  Calculate = item => {
    return product.quantity * product.price;
  };

  handleChange = (selectedOption) => {
    this.setState({ selectedOption:JSON.parse(selectedOption.target.value) });
    
  }
 
    
  handleInputChange = (event) => {
    this.setState({product: event.target.value});

  }

  addToList() {
    var array = this.state.products.concat(this.state.selectedOption)
    // console.log(this.state.product)
    // this.setState({
    //   products: this.state.products.push(this.state.selectedOption),
    //   // quantity: this.state.quantity + 1
    // });
    // this.props.handleTostal(this.props.price);
    console.log(array)
  }

// addToList =(id)=>{
 
//   let tempProduct =[...this.state.products];
//   const index = tempProduct.indexOf(this.getItem(id));
//   const product= tempProduct[index];
//   product.inCart=true;
//   product.count=1;
//   const price=product.product_price;
//   product.total=product_price;
//   this.setState(() =>{
//     return {products:tempProduct, Cart:[...this.state.cart,product]}
//   })
// }

  // addToList(product) {
  //   this.setState({
  //     // products: this.state.products.push(product),
  //     // quantity: this.state.quantity + 1
  //   });
  // }
  async componentDidMount(){
    var products= await  directus.items('products').read()

    this.setState({
        products:products.data,
    })
}
getData()
{
    return this;
}
checkCart(){
  this.cartArr = [];
  if(localStorage.getItem('cart') != null)
  {
      this.cartArr = JSON.parse(localStorage.getItem('cart'));
  }

 this.index = this.cartArr.findIndex(item => {
          return (item.product_id == this.product_id)
        })
        
    if(this.index == -1)
    {
        this.index = this.cartArr.push(this) - 1;

 this.quantity = this.cartArr[this.index].quantity;  
  
}
}
saveCart()
{
    if(this.cartArr[this.index])
    {
        this.cartArr[this.index].quantity = this.quantity;
    }
    
     const getCircularReplacer = () => {
        const seen = new WeakSet();
        return (key, value) => {
          if (typeof value === "object" && value !== null) {
            if (seen.has(value)) {
              return;
            }
            seen.add(value);
          }
          return value;
        };
      };
 localStorage.setItem("cart", JSON.stringify(this.cartArr, getCircularReplacer()));
   }
  //  removeItem()
  //  {
  //     this.cartArr.splice(this.index, 1);            
  //  }

  IncrementItem = () => {
    this.setState(prevState => {
      if(prevState.quantity < 9) {
        return {
          quantity: prevState.quantity + 1
        }
      } else {
        return null;
      }
    });
}
DecreaseItem = () => {
  this.setState(prevState => {
    if(prevState.quantity > 0) {
      return {
        quantity: prevState.quantity - 1
      }
    } else {
      // this.removeItem();
    }
    this.saveCart();
  });
   // this.props.handleTotal(-this.props.price);
}

calculateTotal(price) {
  this.setState({
    total: this.state.total + price
  });
  console.log(this.state.total);
}
render(){
  // var products = this.state.products.map((product) {
  //   return (
  //     <Product
  //       name={product.product_name}
  //       price={product.product_price}
  //       handleShow={this.showProduct}
  //       // handleTotal={this.calculateTotal}
  //     />
  //   );
  // });
      return(
        <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
    <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body class="px-4">
    <div class="row"> 
     <div class="col-md-4"> 
        <div class="order pb-4"> 
            <p class="orderTitle">Place an order </p>
            <span class="orderSubTitle"> Fill out your info</span>
           
        </div> 
        <ProductForm/>
</div>
<div class="col-md-8"> 
        <div class="order"> 
            <p class="orderTitle">Choose Your Products </p>
            <span class="orderSubTitle"> Pick the product you ant and quantity</span>
        </div> 
        <div class="row py-4"> 

      {/* <select class="form-control col-md-8" onChange={this.handleInputChange} >
              {this.state.products.map((product,index)=> (
                     <option key={index} value={product}>{product.product_name} </option>
                    ))}

   {this.state.products.map(product => (
       <option key={product} value={product}>{product.product_name} </option>
      ))}
 </select> */}
    
   {/* <select value={this.state.products} onChange={this.handleChange}>
            {this.state.products.map((product) => (
              <option value={JSON.stringify(product)}>{product.product_price}</option>
            ))}
      </select>*/}
    
        <div class="px-2"> 
            <div class="px-4 py-1 addBtn">
                {/* <button  onClick={() => this.addToList()}> Add to list  </button>  */}
                <button onClick={this.addToList}> Add to list  </button> 
                </div>
            </div>

           </div>
      <span class="orderSubTitle">Your list</span>
        <div class="list pt-3"> 
            <img src='../images/bottle.png' alt="bottle"/>
              <div class="px-4"> <p> Aqualife Drinking water 0.5L</p>
                <span class="orderSubTitle"> qty</span>
               <div class="qty pt-3">  
               <button onClick={this.IncrementItem}>+</button>
               <input className="inputne" value={this.state.quantity} onChange={this.handleChange}/>
                      <button onClick = {this.DecreaseItem}  disabled={this.state.qty < 1}>-</button>
                </div> 
                </div>

        <span class="price">4.00 USD</span>
            </div>
            {/* <div class="row align-items-center "> <p class="total  pt-5">Total (Inc.VAT): </p>
            <span class="price px-5  pt-4" >4.00 USD</span>
            </div>
            <div class="row pr-5" id="confirm"> 
            <div class="px-4 py-1 addBtn" >
                Confirm Order
            </div> </div> */}
      {/* <Product
          name={product.name}
          price={product.price}
          info={product.info}
          handleTotal={this.calculateTotal}
        />  */}
      {/* <div>
        <ProductForm handleProduct={this.createProduct} />
        {products}
        <Total total={this.state.total} />
      </div> */}
</div>

</div>
    </Modal.Body>
  </Modal> 
      );


    }
      }
export default Order;
