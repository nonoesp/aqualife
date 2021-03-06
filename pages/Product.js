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
<div class="row rowStyle my-4 mx-1">
<div class="col-md-4 paddingDesc"> 
        <div class="row" class="order"> 
             <p class="orderSubTitle m-0">{this.props.category}</p>
             <p class="orderTitle mb-4"> {product.product_name} </p> 
             {/* <span class="orderSubTitle"> Fill out your info</span> */}
             <p class="description"> {product.product_description} </p>
             <a href ="#products" id="orderNow" > 
             <button type="button" class="btn btn-primary px-4 mt-3"  onClick={()=> this.setState({addModalsShow: true})}> ORDER NOW</button>
             
             </a>
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
      {/* <img src={global.ASSET_URL+product.product_image+'?key=system-medium-contain'} class="bottleDetail" alt="bottle" /> */}
      <img src={global.ASSET_URL+product.product_image_popup+'?key=system-medium-contain'} class="bottleDetail  my-5 my-md-1 w-50 w-md-75" alt="bottle" />
         </div> 
   <div class="col-md-4 specification  "> 
       
       <table>
       <tr class="bottleCategory">
            POTASSIUM 
             <td class="pl-4 cat"> 
                    {product.potassium}
                </td>
        </tr>
  <tr class="bottleCategory">
            CALCIUM 
             <td class="pl-4 cat"> 
                    {product.calcium}
                </td>
        </tr>
  <tr class="bottleCategory">
            MAGNESIUM 
             <td class="pl-4 cat"> 
                    {product.magnesium}
                </td>
        </tr>
   <tr class="bottleCategory">
            IRON 
             <td class="pl-4 cat"> 
                    {product.iron}
                </td>
        </tr>
   <tr class="bottleCategory">
            BICARBONATE 
             <td class="pl-4 cat"> 
                    {product.bicarbonate}
                </td>
        </tr>
  <tr class="bottleCategory">
            CHLORIDES 
             <td class="pl-4 cat"> 
                    {product.chlorides}
                </td>
        </tr>
  <tr class="bottleCategory">
            SULFATES 
             <td class="pl-4 cat"> 
                    {product.sulfates}
                </td>
        </tr>
  <tr class="bottleCategory">
            pH 
             <td class="pl-4 cat"> 
                    {product.ph}
                </td>
        </tr>
       </table>
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
