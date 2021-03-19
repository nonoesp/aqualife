import React, {Component ,useState} from 'react';
import Header from './Header';
import About from './About';
import Order from './Order';
import Product from './Product';
import News from './News';
import Contact from './Contact';
import Footer from './Footer';
import dynamic from 'next/dynamic'


import DirectusSDK from '@directus/sdk-js';

import ScrollAnimation from 'react-animate-on-scroll';

const directus = new DirectusSDK('http://aqualifecms.businessexchange.me');
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "react-slick";



// const { VideoScroll } = dynamic(
//   () => import('react-video-scroll'),
//   {ssr: false}
//   )

// if (typeof window !== 'undefined') { 
//   const { VideoScroll } = require('react-video-scroll'); 
// }  

const VideoScroll = dynamic(() => import("react-video-scroll").then((mod) => mod.VideoScroll), {
  ssr: false
});

import {Button} from 'react-bootstrap';



class index extends Component {
  constructor(props){
    super(props);

    this.state={deps:[],products:[],product:{},categories:[],category:{},news:[],addModalsShow: false, addModalsShowNews:false, addModalsShowProduct: false,cart:[],isLoading:true}

    this.onScroll = this.onScroll.bind(this);
}
async componentDidMount(){

      var prod= await  directus.items('products').read()
      var news = await  directus.items('news').read()
     
      var cat = await  directus.items('categories').read({ fields: ['*.*.*'] })
      //console.log(cat.data[0].products.products_id);
      this.setState({
          products:prod.data,
          categories:cat.data,
          news:news.data,
          isLoading:false
      })
  }

  onScroll = (props) => {
    const { currentFrame } = props
    this.setState({ frame: Math.floor(currentFrame)})
  }
    onScroll = props => this.setState({ frame: props.currentFrame })
  
    onLoad = ({ wrapper, playbackRate, el }) => {
      // wrapper.style.marginTop = `calc(180% - ${Math.floor(el.duration) *
      //   playbackRate +
      //   'px'})`
      // wrapper.style.marginBottom = `calc(180% - ${Math.floor(el.duration) *
      //   playbackRate +
      //   'px'})`
    }
  render(){
    const {cart} =this.state;
   
    let addModalsClose = () => this.setState({addModalsShow : false});
    let addModalsCloseProduct = () => this.setState({addModalsShowProduct : false});
    let addModalsCloseNews = () => this.setState({addModalsShowNews : false});
    
    var settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <div> 
    <ScrollAnimation animateIn="fadeIn"> 
               <VideoScroll
                        onLoad={this.onLoad}
                        onScroll={this.onScroll}
                        playbackRate={15}
                        id="one"
                        style={{ position: 'sticky' }}
                      >
                        <video
                          id="v0"
                          src="../aqualife.mp4"
                          tabIndex="0"
                          autobuffer="autobuffer"
                          preload="preload"
                          style={{ width: '100%', objectFit: 'contain', transitionduration: '3s', }}
                          playsInline
                        />
                      </VideoScroll> 
      </ScrollAnimation>
      {/* <div class="app-container">
      <Video />
      </div> */}
         <div class="app-container">
         <Header />
         </div>
         <section id="about"> 
          <About/>
        </section>
        {/* <section id="test"> 
          <Orsers/>
        </section> */}
  <section id="products" > 
  <div class="App pt-5">    
    <Carousel {...settings}>
    {this.state.categories.map((category)=> (
      <div>
   <h3 class="title">{category.title}</h3>
        <p class="productBrief">{category.name}</p>
        <p class="description"> {category.description}</p>
        <div>
        <Button cart={cart}> 
           <Button 
           onClick={()=> this.setState({addModalsShow: true})}> 
             Place order 
             </Button>

          </Button >
    
    <div class="bottlePosition">
       {category.products.map((product,index)=> (
        <img src={'http://aqualifecms.businessexchange.me/assets/'+product.products_id.product_image+'?key=system-medium-contain'}  onClick={()=> this.setState({product:product.products_id,addModalsShowProduct: true})} class={"bottle"+index} alt="bottle" />
                          )) }
                  <Product show={this.state.addModalsShowProduct} product={this.state.product} onHide={addModalsCloseProduct}/>
                  </div>
              <Order
              show={this.state.addModalsShow}
              //if its true the product will be show if it's false not show
             onHide={addModalsClose}
             />
             
            </div>
      </div>
      ))}
    </Carousel>
   
 </div>
 </section>
 <section id="news">

   <div class="App">
     <p class="title"> Latest News and Release</p>
   </div>
   
   <div class="contentModule">
     <div class="row py-5">

       {this.state.news.map((news)=> (
             <div class="col-md-4">
             <img src={'http://aqualifecms.businessexchange.me/assets/'+news.image+'?key=system-medium-contain'} class="appLogo" alt="logo" />
             <div >
             <div class="category">
              <p class="categoryTitle">{news.category} </p>
                <p class="created">{news.date}  </p>
                </div>
       <p class="categoryDesc">{news.title} </p>
       <p class="subDesc">{news.brief}</p>
       </div>
      
       <div>
        <ButtonToolBar> 
           <Button 
           onClick={()=> this.setState({addModalsShowNews: true})}> 
              <p class="readMore"> Read More</p>
             </Button>

              </ButtonToolBar >
              
              <News
              show={this.state.addModalsShowNews}
              //if its true the product will be show if it's false not show
             onHide={addModalsCloseNews}
             />
             
            </div>
       </div> 
           ))} 
       </div>
   </div>
</section>

<div class="contentModule">
  <Contact/>
</div>
<div class="App">
  <Footer/>
  </div>
         </div>
    )
  }
  }
  export default index;
