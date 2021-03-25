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
      <Modal.Body class="px-5">
<div class="px-4"> 
<p class="title"> Title</p>
<p class="description"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>


</div>
 </Modal.Body>
  </Modal> 
      );
}
  }
  export default News;
