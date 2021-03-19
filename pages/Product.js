import React, { Component } from 'react';
import {Modal, Form} from 'react-bootstrap';
import DirectusSDK from '@directus/sdk-js';

const directus = new DirectusSDK('http://localhost:8055/');
import 'bootstrap/dist/css/bootstrap.min.css';


export class Product extends Component {
 constructor(props){
   super(props); 
     var product = props.product?props.product:{}
     this.state={product:product,category:props.category}

 }


render(){ 
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
      <img src={'http://aqualifecms.businessexchange.me/assets/'+this.state.product.product_image+'?key=system-medium-contain'} class="bottleDetail" alt="bottle" />
         </div> 
  
     <div class="col-md-4"> 
        <div class="row" class="order"> 
             <p class="orderTitle"> {this.state.product.product_name} </p> 
             <span class="orderSubTitle"> Fill out your info</span>
        </div>  
        <div> 
        <div class="row pt-5">
            <p class="bottleCategory"> Calories</p>
            <span class="px-5"> {this.state.product.calories}  </span>
        </div>
        <div class="row">
            <p class="bottleCategory">Total Fat 0g</p>
            <span class="px-5"> {this.state.product.fat}</span>
        </div>
        <div class="row ">
            <p class="bottleCategory">Sodium 0mg</p>
            <span class="px-5">{this.state.product.sodium} </span>
        </div>
    </div>
    <div class="row"> 
        <p class="description"> {this.state.product.product_description} </p>
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
