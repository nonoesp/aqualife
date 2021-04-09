import React, { Component } from 'react';
import {Modal} from 'react-bootstrap';
import DirectusSDK from '@directus/sdk-js';
import '../global.js';
import Order from './Order';

import {Button} from 'react-bootstrap';

const directus = new DirectusSDK(global.URL);
import 'bootstrap/dist/css/bootstrap.min.css';

class Product extends Component {

    constructor(props){
        super(props);
      
        this.state={addModalsShow: false, }

    }

render(){
    let addModalsClose = () => this.setState({addModalsShow : false}); 

  var product = (this.props.product)?this.props.product:{}
      return(
    <div > 
        <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
          <div class="bgProduct">
    <Modal.Header closeButton >
        </Modal.Header>
        </div>
 <section id="productDetail"> 
   <Modal.Body>
<div class="row rowStyle">
<div class="col-md-4"> 
        <div class="row" class="order"> 
             <p class="orderTitle"> {product.product_name} </p> 
             {/* <span class="orderSubTitle"> Fill out your info</span> */}
             <p class="description"> {product.product_description} </p>
             <a href ="#products"> <Button  onClick={()=> this.setState({addModalsShow: true})}> ORDER NOW 
                        </Button> </a>
                        <section  id="order"> 
                <Order
                show={this.state.addModalsShow}
                //if its true the product will be show if it's false not show
                onHide={addModalsClose}
                />
                </section>
        </div>  
    <div class="row"> 
       
    </div>
</div>
      <div class="col-md-4 popUpBottle"> 
      <img src={global.ASSET_URL+product.product_image+'?key=system-medium-contain'} class="bottleDetail" alt="bottle" />
         </div> 
   <div class="col-md-4 specification"> 
        <div class="row">
            <p class="bottleCategory"> POTASSIUM <span class="px-4 cat"> {product.potassium}  </span></p>
            
        </div>
        <div class="row">
            <p class="bottleCategory">CALCIUM   <span class="px-4 cat"> {product.calcium}</span></p>
          
        </div>
        <div class="row ">
            <p class="bottleCategory">MAGNESIUM     <span class="px-4 cat">{product.magnesium} </span></p>
        
        </div>
        <div class="row ">
            <p class="bottleCategory">IRON  <span class="px-4 cat">{product.iron} </span></p>
        </div>
        <div class="row ">
            <p class="bottleCategory">BICARBONATE     <span class="px-4 cat">{product.bicarbonate} </span></p>
        
        </div>
        <div class="row ">
            <p class="bottleCategory">CHLORIDES    <span class="px-4 cat">{product.chlorides} </span></p>
          
        </div>
        <div class="row ">
            <p class="bottleCategory">SULFATES <span class="px-4 cat">{product.sulfates} </span></p>
            
        </div>
        <div class="row ">
            <p class="bottleCategory">pH <span class="px-4 cat">{product.ph} </span></p>
            
        </div>
    </div>
    

</div>

    </Modal.Body>
</section>
  </Modal> 
  </div>
      );
}
  }
  export default Product;