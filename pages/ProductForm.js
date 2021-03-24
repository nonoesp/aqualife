import React, { Component } from 'react';

import DatePicker from 'react-datepicker';
import {Form} from 'react-bootstrap';



export class ProductForm extends Component {
    constructor(props){

        // this.product_id = product_id;
        // this.quantity = 0;
        // this.date = new Date();
      
    
        super(props);
           this.state={startDate:new Date()};
          
       
          this.handleChange = this.handleChange.bind(this);
          this.onFormSubmit = this.onFormSubmit.bind(this);

        }
        handleChange(date) {
            this.setState({
              startDate: date
            })
          }
          
          onFormSubmit(e) {
            e.preventDefault();
            // console.log(this.state.startDate)
          }
    submit(e) {
            e.preventDefault();
            this.props.handleProduct(product);
          }


          submit(e) {
            e.preventDefault();
            var product = {
              name: this.name,
              price: this.price,
             
            };
            console.log(this.refs.name.value, this.refs.price.value);
            this.props.handleProduct(product);
            this.refs.name.value = "";
            this.refs.price.value = 0;
            this.refs.info.value = "";
          }



    render(){
return(
<div> 
<Form class="pt-4" onSubmit={this.submit.bind(this)}>
<Form.Group controlId="exampleForm.ControlInput1">
    <Form.Control type="name" placeholder="Name" />
  </Form.Group>
    <Form.Group controlId="exampleForm.ControlInput2">
      <Form.Control type="email" placeholder="Email" />
    </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput3">
          <Form.Control type="phone" placeholder="Phone Number" />
        </Form.Group>
     <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Control as="textarea" placeholder="Address, Builling Detail" rows={3} />
        </Form.Group>

            <span class="orderSubTitle"> Preffered Delivery Time</span>
<div class="row py-3"> 
<div class="col-lg-4" id="datePicker">
  <DatePicker
      selected={ this.state.startDate }
      onChange={ this.handleChange }
      name="startDate"
      dateFormat="MM/dd/yyyy"
  />
{/* <button class="btn btn-primary">Show Date</button> */}
</div> 

<div class="col-lg-8 px-5 date">
    <select class="form-control " name="time" onChange={this.handleInputChange}>
            <option selected>am</option>
                <option value="1">pm</option>
    </select>
</div>
</div> 
    <Form.Group controlId="exampleForm.ControlTextarea2">
    <Form.Control as="textarea" placeholder="Aditional Message" rows={3} />
  </Form.Group>
</Form>
</div>
      );
    }
}

export default ProductForm; 