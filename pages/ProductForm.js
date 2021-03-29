import React, { Component } from 'react';

import DatePicker from 'react-datepicker';
import {Form} from 'react-bootstrap';
import axios from 'axios';

export class ProductForm extends Component {
    constructor(props){

        // this.product_id = product_id;
        // this.quantity = 0;
        // this.date = new Date();
      
    
        super(props);
           this.state={startDate:new Date(),
           name: '',
           email: '',
           phone: '',
           message: '',
           sent:false,
          };
          
       
          this.handleChange = this.handleChange.bind(this);
          // this.handleSubmit = this.handleSubmit.bind(this);

        }
        handleChange(date) {
            this.setState({
              startDate: date
            })
          }
          
        // handleSubmit(e) {
        //     e.preventDefault()
          
        //     let data = {
        //      name:this.state.name,
        //      email:this.state.email,
        //      phone:this.state.phone,
        //      message:this.state.message
        //      }
        // axios.post('api/forma', data)
        //   .then(res=>this.setState({
        //     sent:true,
        //   },this.resetForm())
        //   }).catch(()=>{
        //     console.log('message not sent');
        //   })
        //  }
        // }
      resetForm() {
            this.setState({
              name: '',
              email: '',
              phone: '',
              message: '',
            })
          }
    render(){
return(
<div> 
<Form class="pt-4" >
<Form.Group controlId="exampleForm.ControlInput1">
    <Form.Control type="name"  name="name" value={this.state.name} onChange={this.handleChange.bind(this, 'name')} placeholder="Name" />
  </Form.Group>
    <Form.Group controlId="exampleForm.ControlInput2">
      <Form.Control type="email" name="email" value={this.state.email} onChange={this.handleChange.bind(this, 'email')} placeholder="Email" />
    </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput3">
          <Form.Control type="phone"  name="phone" value={this.state.phone} onChange={this.handleChange.bind(this, 'phone')} placeholder="Phone Number" />
        </Form.Group>
     <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Control as="textarea" name="message" value={this.state.textarea} onChange={this.handleChange.bind(this, 'textarea')} placeholder="Address, Builling Detail" rows={3} />
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