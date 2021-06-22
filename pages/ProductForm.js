import React, { Component } from 'react';

import DatePicker from 'react-datepicker';
import {Form} from 'react-bootstrap';

import '../global.js';
// import sendpulse from "sendpulse-api";

class ProductForm extends Component {
    constructor(props){

        // this.product_id = product_id;
        // this.quantity = 0;
        // this.date = new Date();
      
    
        super(props);
           this.state={
           startDate:new Date(),
           name: '',
           email: '',
           phone: '',
           address:'',
           message: '',
           sent:false,
           date:'',
           time: 'am',
          };
          
       
          this.handleChange = this.handleChange.bind(this);
          // this.getData=this.getData.bind(this);
          // this.handleSubmit = this.handleSubmit.bind(this);
          this.handleChangeTime = this.handleChangeTime.bind(this);

        }
      handleChange(date) {
            this.setState({
              startDate: date
            })
          }
      handleName=(e)=>{
        
        this.setState({
          name:e.target.value
        })
      }
      handleEmail=(e)=>{
        console.log(e.target.value)
        this.setState({
          email:e.target.value
        })
      }
      
      handlePhone=(e)=>{
        this.setState({
          phone:e.target.value
        })
      }
   
      handleMessage=(e)=>{
        this.setState({
          message:e.target.value
        })
      }
    handleChangeTime(e) {
          this.setState({
            time:e.target.value
          });
        }
    resetForm=()=> {
            this.setState({
              name: '',
              email: '',
              phone: '',
              message: ''
            })
        setTimeout(() =>{
              this.setState({
                  sent:false,
              })
            },3000)
          }

    render(){
return(
<div> 

<Form.Group controlId="exampleForm.ControlInput1">
    <Form.Control type="text"  name="name" value={this.state.name} onChange={this.handleName} placeholder="Name" required/>
  </Form.Group>
    <Form.Group controlId="exampleForm.ControlInput2">
      <Form.Control type="email" name="email" value={this.state.email} onChange={this.handleEmail} placeholder="Email" required />
    </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput3">
          <Form.Control type="phone"  name="phone"  value={this.state.phone} onChange={this.handlePhone} placeholder="Phone Number" required/>
        </Form.Group>
     <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Control as="textarea" name="message" value={this.state.textarea} onChange={this.handleMessage} placeholder="Address, Builling Detail" rows={3} required/>
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
    <select class="form-control" value={this.state.time} name="time" onChange={ this.handleChangeTime} >
            <option value="am" selected >am</option>
                <option value="pm" >pm</option>
    </select>

</div>
</div> 
    <Form.Group controlId="exampleForm.ControlTextarea2">
    <Form.Control as="textarea" name="address" placeholder="Aditional Message" rows={3} required />
  </Form.Group>
  {/* <div class="row pr-5 pb-5" id="confirm"> 

  <input type="submit" value=" Confirm Order" class="px-4 py-1 addBtn"/>

            </div> */}
</div>
      );
    }
}

export default ProductForm; 