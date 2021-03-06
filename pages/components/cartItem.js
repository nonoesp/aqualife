import React, { Component } from 'react';

import Cart from '../../cart.js';

import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
// import {useCart} from 'react-use-cart '
import '../../global.js';


export class CartItem extends Component {
 constructor(props){

  super(props);
     this.state={
        cartModel:[],
        cart:(props.cart)?props.cart:{},
        totalCurr:0,
    }
     this.removeCart = this.removeCart.bind(this);
     this.decFromCart = this.decFromCart.bind(this);
     this.addToCart = this.addToCart.bind(this);
   // this.showProduct = this.showProduct.bind(this);
  }
  
  async componentDidMount(){
      var cart  = new Cart(this.state.cart.id)
      cart.checkCart();

        this.setState({
            cartModel :cart.getData()
        },()=>{
            if(this.state.cartModel.quantity  < 1)
            {
                this.removeCart();
            }
        })

       
        
    }
    removeCart(){
        this.state.cartModel.removeFromCart();
        this.props.getData();
    }

    decFromCart(){  
              this.state.cartModel.decFromCart();
              if(this.state.cartModel.quantity <= 1){
                    this.props.getData();
               }
               this.props.getData();
          }

    addToCart(){
              this.state.cartModel.addTocart();
              this.props.getData();
          }
    total(){
        if(this.state.cartModel=null){
            this.setState.totalCurr =0;
        }
        this.props.getData();
          }

    render(){
        return(

                <div class="list pt-3"> 
                    <img class="p-md-3 p-2" src={global.ASSET_URL+this.state.cart.product_image+'?key=system-medium-contain'} alt="bottle"/>
                    <div class="px-4"> <p> { this.state.cart.product_name }</p>
                        <span class="orderSubTitle"> qty</span>
                    <div class="qty pt-3">  
                   
                    <button class="add" type="button"  onClick = {this.decFromCart}  disabled={this.state.cartModel.quantity < 1}>-</button>
                    <input className="inputne" value={this.state.cartModel.quantity} />
                    <button  class="remove" type="button" onClick={this.addToCart}>+</button>
                        </div> 
                        </div>

                    <span class="price">{ this.state.cart.product_price } USD</span>
                </div>
        );


            }
     }
export default CartItem;
