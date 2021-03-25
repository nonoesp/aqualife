import React, { Component } from 'react';
import {Modal, Form} from 'react-bootstrap';
import DirectusSDK from '@directus/sdk-js';
import '../global.js';

const directus = new DirectusSDK(global.URL);
import 'bootstrap/dist/css/bootstrap.min.css';

class Product extends Component {


render(){ 

  var product = (this.props.product)?this.props.product:{}
      return(
        <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
    <Modal.Header closeButton>
        </Modal.Header>
 <section id="productDetail"> 
   <Modal.Body>
<div class="row">

      <div class="col-md-6 popUpBottle"> 
      <img src={global.ASSET_URL+product.product_image+'?key=system-medium-contain'} class="bottleDetail" alt="bottle" />
         </div> 
    
     <div class="col-md-4"> 
        <div class="row" class="order"> 
             <p class="orderTitle"> {product.product_name} </p> 
             <span class="orderSubTitle"> Fill out your info</span>
        </div>  
        <div> 
        <div class="row pt-5">
            <p class="bottleCategory"> Calories</p>
            <span class="px-5"> {product.calories}  </span>
        </div>
        <div class="row">
            <p class="bottleCategory">Total Fat 0g</p>
            <span class="px-5"> {product.fat}</span>
        </div>
        <div class="row ">
            <p class="bottleCategory">Sodium 0mg</p>
            <span class="px-5">{product.sodium} </span>
        </div>
    </div>
    <div class="row"> 
        <p class="description"> {product.product_description} </p>
    </div>
</div>
</div>
    </Modal.Body>
</section>
  </Modal> 
      );
}
  }
  export default Product;
