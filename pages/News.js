import React, { Component } from 'react';
import {Modal, Form} from 'react-bootstrap';
import '../global.js';
import DatePicker from 'react-datepicker';

import { CartProvider, useCart } from "react-use-cart";
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
// import {useCart} from 'react-use-cart '
import DirectusSDK from '@directus/sdk-js';

const directus = new DirectusSDK(global.URL);

// const { addItem } = useCart();

class News extends Component {
 constructor(props){

  // this.product_id = product_id;
  // this.quantity = 0;
  // this.date = new Date();
  super(props);
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
      <Modal.Body class="p-4 ">
<div class="px-4 text-center"> 
<p class="title"> {this.props.news.title}</p>
<img src={global.ASSET_URL+this.props.news.image+'?key=system-large-contain'} class="newsImage w-50" alt="logo" />



</div>
<p class="description p-4"> {this.props.news.brief}</p>
 </Modal.Body>
  </Modal> 
      );
}
  }
  export default News;
