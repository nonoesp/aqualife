import React, { Component } from 'react';
import {Modal} from 'react-bootstrap';

import ProductForm from './ProductForm';
import Product from './Product';
import Cart from '../cart.js';
import CartItem from './components/cartItem';
import '../global.js';
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
// import {useCart} from 'react-use-cart '
import DirectusSDK from '@directus/sdk-js';

const directus = new DirectusSDK(global.URL);

// const { addItem } = useCart();

export class Order extends Component {
 constructor(props){

  super(props);
     this.state={
      products:[],
      product:{},
      selectedOption:{},
      selected_products:[],
      product_id:"",
      price:{},
      cart:[], 
      cartArr:[],
      total: 0,
      quantity:0,
      show: true,
      max: 5,
      min: 0
    }
     this.addToList = this.addToList.bind(this);
     this.handleInputChange = this.handleInputChange.bind(this);
     this.calculateTotal = this.calculateTotal.bind(this);
     this.getCart = this.getCart.bind(this);
  }
  calculate = (selectedOption) => {
    return product.quantity * product.price;
  };

  handleChange = (selectedOption) => {
    this.setState({ selectedOption:JSON.parse(selectedOption.target.value) });
    
  }
 
    
  handleInputChange = (event) => {
    this.setState({product: JSON.parse(event.target.value)});
    console.log(JSON.parse(event.target.value))

  }

  addToList() {
    // console.log(this.state.product.id)
    var cart = new Cart(this.state.product.id);
    cart.addTocart();
    this.getCart();

  }

  async componentDidMount(){
    var products= await  directus.items('products').read()

    this.setState({
        products:products.data,
    })
    this.getCart();
}
async getCart()
    {
      
      var localCart = JSON.parse(localStorage.getItem('cart'));
      if(localCart)
      {
        const product_ids = localCart.map(e => e['product_id']);
        console.log(localCart)  
        if(product_ids.length > 0)
        {
                  var selected_products= await  directus.items('products').read(product_ids)
  
                  var array = [selected_products.data].flat()
            
                  // var products = this.state.products.filter( function( el ) {
                  //   return array.indexOf( el ) < 0;
                  // } );
                  //var products = this.state.products.filter( ( el ) => array.filter( ( item ) => item.product_id != el.product_id ) );
                  console.log(products)
                // alert('');
                  this.setState({
                    selected_products:array,
                    //products:products
                })        
            
                var total = localCart.map((value,index) => value.quantity * ((selected_products.data[index])?selected_products.data[index].product_price:0))
                total = total.reduce((a, b) => a + b, 0)
                this.setState({
                  total:total
                })
        }
        else{
          this.setState({
            selected_products:[]
        })  
        }
      }
      
      
    
      

      // this.$http.post('/api/getCart',{localCart:localCart})
      // .then(response => {
      //    this.cart = response.data.cart ;
      //  });
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
    
   <select class="form-control col-md-8"   onChange={this.handleInputChange}>
            {this.state.products.map((product,index) => (
              <option key={'product-'+index} value={JSON.stringify(product)}>{product.product_name}  {product.product_price} USD </option>
            ))}
      </select>
    
        <div class="px-2 addBtnPadding"> 
            <div class="px-4 py-1 addBtn">
                <button  onClick={() => this.addToList()}> Add to list  </button> 
                {/* <button onClick={this.addToList}> Add to list  </button>  */}
                </div>
            </div>

           </div>
      <span class="orderSubTitle">Your list</span>
      {this.state.selected_products.map((product,index) => (
              <CartItem  key={'product'+index} cart={product} getData={this.getCart} />
            ))}
            <div class="row align-items-center "> <p class="total  pt-5">Total (Inc.VAT): </p>
            <span class="price px-5  pt-4" >{this.state.total} USD</span>
            </div>
            <div class="row pr-5 pb-5" id="confirm"> 
            <div class="px-4 py-1 addBtn" >
                Confirm Order
            </div> </div>
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
