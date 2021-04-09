import React, { Component } from 'react';
import {Modal,Form} from 'react-bootstrap';

import ProductForm from './ProductForm';
import Product from './Product';
import Cart from '../cart.js';
import CartItem from './components/cartItem';
import '../global.js';
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
// import {useCart} from 'react-use-cart '
import DirectusSDK from '@directus/sdk-js';
import axios from 'axios';

const directus = new DirectusSDK(global.URL);

// const { addItem } = useCart();

   
// router.post((req, res) => {
//   var user_name = req.body.user;
//   var password = req.body.password;
//   console.log("User name = "+user_name+", password is "+password);
//   res.end("yes");
// });
export class Order extends Component {
 constructor(props){

  super(props);
     this.state={
      products:[],
      product:{},
      selectedOption:{},
      selected_products:[],
      localCart:[],
      product_id:"",
      price:{},
      cart:[], 
      cartArr:[],
      total: 0,
      quantity:0,
      show: true,
      max: 5,
      min: 0,
      confirming: true,
      sent:false,
      infos:[] 
    }
     this.addToList = this.addToList.bind(this);
     this.handleInputChange = this.handleInputChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
    //  this.calculateTotal = this.calculateTotal.bind(this);
     this.getCart = this.getCart.bind(this);
     this.insertData = this.insertData.bind(this);
     
  }
  
  calculate = (selectedOption) => {
    return product.quantity * product.price;
  };

  handleChange = (selectedOption) => {
    this.setState({ selectedOption:JSON.parse(selectedOption.target.value) });
    
  }
 
  handleInputChange = (event) => {
    this.setState({product: JSON.parse(event.target.value)});
    // console.log(JSON.parse(event.target.value))

  }
//   handleSubmit=(e)=> {
//     e.preventDefault()
  
// const data = {
//      name:this.state.name,
//      email:this.state.email,
//      phone:this.state.phone,
//      message:this.state.message
//      }

// axios.post( 'localhost:3000',data)
//   .then(res=>{this.setState({
//     sent:true,
//   },this.resetForm())
//   }).catch(()=>{
//     console.log('message not sent');
//   })
//  }


handleSubmit =(e)=>{
  e.preventDefault();

  let  selected_products = this.state.selected_products.map((item,index) => {
     
    item['product_id'] = item.id;
    item['product_name'] = item.product_name;
    item['product_image'] = item.product_image;
    return item;
});

console.log(selected_products)


var input={email: e.target.elements?.email?.value,
  name: e.target.elements.name.value,
  phone: e.target.elements.phone.value,
  address: e.target.elements?.address?.value,
  message: e.target.elements?.message?.value,
  date: e.target.elements?.date?.value,
  time: e.target.elements?.time?.value,
  selected_products :this.state.selected_products};



var requestOptions = {
  method: 'POST',
  body: JSON.stringify(input)
  };

fetch(global.URL+"custom/email", requestOptions)
    .then(response =>response.json())
    .then(result =>console.log("RESPONSE RECEIVED: ", result))
          .catch((err) => {
            console.log("AXIOS ERROR: ", err.response);
          })


  // var formdata = new FormData();
  // formdata.append("grant_type", "client_credentials");
  // formdata.append("client_id", "abf00ccfee58b1f7d175588b9e9b8e60");
  // formdata.append("client_secret", "c5c8c09549f7a5d67cd906dc686d515a");
  
  // alert(e.target.elements.startDate.value)
   this.insertData(e)
  // var requestOptions = {
  //   method: 'POST',
  //   body: formdata
  // };

//   fetch("https://api.sendpulse.com/oauth/access_token", requestOptions)
//     .then(response =>response.json())
//     .then(result =>{
// //       var token = "Bearer "+(result.access_token).toString();
// // // console.log(token)
// //       var myHeaders = new Headers();
// //   myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
// //   myHeaders.append("Authorization", token);
// //   var urlencoded = new URLSearchParams();


// //   let  selected_products = this.state.selected_products.map((item,index) => {
     
// //     item['product_id'] = item.id;
// //     item['product_name'] = item.product_name;
// //     item['product_image'] = item.product_image;
// //     return item;
// // });

// // console.log(selected_products)

// //   var order = {
// //     subject: "order",
// //     template: {
// //     id: 70632,
// //     variables: {
// //     email: e.target.elements?.email?.value,
// //     name: e.target.elements.name.value,
// //     phone: e.target.elements.phone.value,
// //     address: e.target.elements?.address?.value,
// //     message: e.target.elements?.message?.value,
// //     date: e.target.elements?.date?.value,
// //     time: e.target.elements?.time?.value,
// //     selected_products :JSON.stringify(this.state.selected_products)
    
// //     }
    
// //     },
// //     from: {
// //     name: "in2uitions",
// //     email: "contact@in2uitions.com"
// //     },
// //     to: [
// //     {
// //     email: "nadine.hawat@in2uitions.com",
// //     name: "nadine"
// //     }
// //     ]
// // };

//         })
//         .catch(error => console.log(error.response));
//       };

// request
// 	.then((result) => {
// 		console.log(result.body)
// 	})
// 	.catch((err) => {
// 		console.log(err.statusCode)
// 	})



 //console.log(JSON.stringify(selected_products))

//   urlencoded.append("email",JSON.stringify(order));
//   var requestOptions = {
//   method: 'POST',
//   headers: myHeaders,
//   body: urlencoded
//   };

//   fetch("https://api.sendpulse.com/smtp/emails", requestOptions)
//   .then(response => response.json())
//   .then(res => console.log("RESPONSE RECEIVED: ", res))
//     .catch((err) => {
//       console.log("AXIOS ERROR: ", err.response);
//     })

//     })
//     .catch(error => console.log(error.response));
 }

  addToList() {
    // console.log(this.state.product.id)
    var cart = new Cart(this.state.product.id);
    cart.addTocart();
    this.getCart();

  }
  async insertData(e) {

   // var outpout = new Array();
    let products = this.state.selected_products.map((item,index) => {
     
      item['products_id'] = item.id;
      return item;
  });
    //console.log(JSON.stringify(products))

    var infos =await directus.items('infos').create({
          name: e.target.elements?.name?.value,
          email:e.target.elements?.email?.value,
          address: e.target.elements?.address?.value,
          phone_number:e.target.elements?.phone?.value,
          date: e.target.elements?.startDate?.value,
          time: e.target.elements?.time?.value,
          message:e.target.elements?.message?.value,
          products:products,
      
    });
   

    }

  async componentDidMount(){
     var products= await  directus.items('products').read()
      
        this.setState({
        products:products.data,
        product:products.data[0],
       
    })
  
    this.getCart();
}

async getCart()
    {
      
      var localCart = JSON.parse(localStorage.getItem('cart'));
      if(localCart)
      {
        const product_ids = localCart.map(e => e['product_id']);
         
        
        if(product_ids.length > 0 && !product_ids.includes(undefined))
        {
                  var selected_products= await  directus.items('products').read(product_ids)
  
                  var array = [selected_products.data].flat()
                  for(var i=0;i<array.length;i++){
                    array[i]['quantity'] = localCart.filter(item => 
                                            item.product_id == array[i].id
                                          )[0].quantity
                                         
                  }
           
                  this.setState({
                    selected_products:array,
                    localCart:localCart
                    //products:products
                })        
            
                var total = array.map((value,index) => value.quantity * value.product_price )
                total = total.reduce((a, b) => a + b, 0)
                this.setState({
                  total:total
               
                })
           
        }
        else{
          this.setState({
            selected_products:[],
            total:0
        })  
        }
      }
    }


// calculateTotal(price) {
//   this.setState({
//     total: this.state.total + price
//   });
// }
render(){
  // var products = this.state.products.map((product) {
  //   return (
  //     <Product
  //       name={product.product_name}
  //       price={product.product_price}
  //       handleShow={this.showProduct}
  //       // handleTotal={this.calculateTotal}
  //     />
  //   );
  // });
      return(
        <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
    <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body class="p-4">
        <Form class="pt-4" onSubmit={this.handleSubmit}>
    <div class="row"> 
     <div class="col-md-4"> 
        <div class="order pb-4"> 
            <p class="orderTitle">Place an order </p>
            <span class="orderSubTitle"> Fill out your info</span>
           
        </div> 
        <ProductForm/>
</div>
<div class="col-md-8"> 
        <div class="order"> 
            <p class="orderTitle">Choose Your Products </p>
            <span class="orderSubTitle"> Pick the product you ant and quantity</span>
        </div> 
        <div class="row py-4"> 
    
   <select class="form-control col-md-8"   onChange={this.handleInputChange}>
            {this.state.products.map((product,index) => (
              <option key={'product-'+index} value={JSON.stringify(product)}>{product.product_name}  {product.product_price} USD </option>
            ))}
      </select>
    
        <div class="px-2 addBtnPadding"> 
            <div class="px-4 py-1 addBtn">
                <button type="button" onClick={() => this.addToList()}> Add to list  </button> 
                {/* <button onClick={this.addToList}> Add to list  </button>  */}
                </div>
            </div>

           </div>
      <span class="orderSubTitle">Your list</span>
          {this.state.selected_products.map((product,index) => {
        if(product.quantity > 0)
        {
          return (<CartItem  key={product.product_name+"-"+product.quantity} cart={product} getData={this.getCart}/>)
        }
              
      })}
            <div class="row align-items-center "> <p class="total  pt-5">Total (Inc.VAT): </p>
            <span class="price px-5  pt-4" >{this.state.total} USD</span>
            </div>
            <div class="row pr-5 " id="confirm"> 
                <input type="submit" value=" Confirm Order" class="px-4 py-1 addBtn" />

          </div>
         
         
      {/* <Product
          name={product.name}
          price={product.price}
          info={product.info}
          handleTotal={this.calculateTotal}
        />  */}
      {/* <div>
        <ProductForm handleProduct={this.createProduct} />
        {products}
        <Total total={this.state.total} />
      </div> */}
</div>

</div>
</Form>
    </Modal.Body>
  </Modal> 
      );


    }
      }
export default Order;
