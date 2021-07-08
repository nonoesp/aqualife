import React, { Component } from 'react';
import {Modal} from 'react-bootstrap';
import '../global.js';

import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';


class News extends Component {
 constructor(props){
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
      <Modal.Body class="p-4 news-block">
<div class="px-4 text-center"> 
<p class="categoryDesc"> {this.props.news?.title}</p>
<img src={global.ASSET_URL+this.props.news?.image+'?key=system-large-contain'} class="newsImage w-100 w-md-50" alt="logo" />



</div>
<p class="description p-4"> {this.props.news?.brief}</p>
 </Modal.Body>
  </Modal> 
      );
}
  }
  export default News;
