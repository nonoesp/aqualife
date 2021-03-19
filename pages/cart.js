// import React, { Component } from "react";
// import axios from "axios";
// import CartItem from "./cartItem";
// import "bootstrap/dist/css/bootstrap.min.css";

// export default class Cart extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       items: []
//     };
//   }
//   componentDidMount() {
//     axios
//       .get("http://localhost:8055/cart/")
//       .then(response => {
//         this.setState({
//           items: response.data.items
//         });
//         console.log(response.data.items);
//       })
//       .catch(function(err) {
//         console.log(err);
//       });
//   }

//   checkItems() {
//     return this.state.items.map((currItem, i) => {
//       return <CartItem book={currItem} key={i}></CartItem>;
//     });
//   }

//   Calculate = item => {
//     return item.qty * item.price;
//   };

//   render() {
//     return (
//       <div className="container">
//         <div className="row">{this.checkItems()}</div>
//       </div>
//     );
//   }
// }