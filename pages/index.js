import React, {Component ,useState} from 'react';
import Header from './Header';
import About from './About';
import Order from './Order';
import Product from './Product';
import News from './News';
import Contact from './Contact';
import Footer from './Footer';
import Test from './Test';
import dynamic from 'next/dynamic'
import '../global.js';

import DirectusSDK from '@directus/sdk-js';

import ScrollAnimation from 'react-animate-on-scroll';

// const directus = new DirectusSDK('http://aqualifecms.businessexchange.me');
const directus = new DirectusSDK(global.URL);
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
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);

    this.state={deps:[],products:[],product:{},categories:[],category:{},news:[],addModalsShow: false, addModalsShowNews:false, addModalsShowProduct: false,cart:[],isLoading:true}

    this.onScroll = this.onScroll.bind(this);

}
next() {
  this.carousel.slickNext();
}
previous() {
  this.carousel.slickPrev();
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
 
    onLoad = ({ wrapper, playbackRate, el }) => {
      console.log(wrapper);
      console.log(playbackRate);
      console.log(el);
      document.getElementById("one").style.marginTop = `calc(${Math.floor(document.getElementById('v0').duration) * playbackRate + 'px'})`
     
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
        <div  class="d-none d-md-block"> 
        <VideoScroll
       
            onLoad={this.onLoad}
            onScroll={this.onScroll}
            playbackRate={300}
            id="one"
            style={{ position: 'sticky' }}
            >
                <video
                id="v0"
                src="../aqualife.mp4"
                tabIndex="0"
                autobuffer="autobuffer"
                preload="preload"
                style={{ width: '100%', objectFit: 'cover', transitionduration: '3s',
                position: 'fixed',
                top: 0,
                height: '100%' }}
                playsInline
                />
         </VideoScroll> 
         </div>
    <div class="mobileVideo"> 
       <video 
        autoPlay
        loop
        muted
         src="../aqualife.mp4"
          type="video/mp4"
         >
         
           </video>
      </div>
         {/* <div class="col-md-12">
         <video src="../aqualife.mp4"/>
         </div> */}
      <div class="body-container">

          <div class="app-container">
            <Header />
          </div>
          <section id="about">
            <About/>
          </section>
          {/* 
          <section id="test">
            <Orsers/>
          </section>
          */}
          <section id="products" >
            <div class="App pt-5">
                {this.state.product?<Product show={this.state.addModalsShowProduct} product={(this.state.product)?this.state.product:{}} onHide={addModalsCloseProduct}/>:null}
                <Carousel ref={c =>
                  (this.carousel = c)} {...settings}  >
                  {this.state.categories.map((category,index)=> (
                  <div key={'category'+index}>
                      <h3 class="title">{category.title}</h3>
                      <p class="productBrief">{category.name}</p>
                      <p class="description"> {category.description}</p>
                      <div>
                        <Button cart={cart}
                            onClick={()=> this.setState({addModalsShow: true})}> 
                        Place order 
                        </Button>
                   
                        <div class="bottlePosition">
                            {category.products.map((product,index)=> (
                            <img key={'prod-image-'+index} src={global.ASSET_URL+product.products_id.product_image+'?key=system-medium-contain'} title={product.products_id.product_name} onClick={()=> this.setState({product:product.products_id,addModalsShowProduct: true})} class={"bottle"+index} alt="bottle" />
                            )) }
                           
                        </div>
                      </div>
                  </div>
                  ))}
                </Carousel>
                <Order
                show={this.state.addModalsShow}
                //if its true the product will be show if it's false not show
                onHide={addModalsClose}
                />
                <div>
                <div class="button" onClick={this.next} class="rightArrow">
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 238.926 443.519">
                          <g id="left-arrow" transform="translate(341.224 443.52) rotate(-180)">
                            <g id="Group_1" data-name="Group 1">
                              <path id="Path_1" data-name="Path 1" d="M143.492,221.863,336.226,29.129A17.064,17.064,0,0,0,312.094,5l-204.8,204.8a17.067,17.067,0,0,0,0,24.132l204.8,204.8A17.066,17.066,0,0,0,336.226,414.6Z" fill="#7db8c5"/>
                            </g>
                          </g>
                        </svg>

                  </div>
                  <div class="button" onClick={this.previous} class="leftArrow">
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 238.926 443.519">
                        <g id="left-arrow" transform="translate(-102.298 0)">
                          <g id="Group_1" data-name="Group 1">
                            <path id="Path_1" data-name="Path 1" d="M143.492,221.863,336.226,29.129A17.064,17.064,0,0,0,312.094,5l-204.8,204.8a17.067,17.067,0,0,0,0,24.132l204.8,204.8A17.066,17.066,0,0,0,336.226,414.6Z" fill="#7db8c5"/>
                          </g>
                        </g>
                      </svg>

                  </div>
                </div>
            </div>
          </section>
          <section id="news">
            <div class="App">
                <p class="title"> Latest News and Release</p>
            </div>
            <div class="contentModule">
                <div class="row py-5">
                  {this.state.news.map((news,index) => (
                  <div class="col-md-4" key={'news'+index}>
                      <img src={global.ASSET_URL+news.image+'?key=system-medium-contain'} class="appLogo" alt="logo" />
                      {/* <img src={'http://aqualifecms.businessexchange.me/assets/'+news.image+'?key=system-medium-contain'} class="appLogo" alt="logo" /> */}
                      <div >
                        <div class="category">
                            <p class="categoryTitle">{news.category} </p>
                            <p class="created">{news.date}  </p>
                        </div>
                        <p class="categoryDesc">{news.title} </p>
                        <p class="subDesc">{news.brief}</p>
                      </div>
                      <div>
                        <Button> 
                        <Button 
                            onClick={()=>
                            this.setState({addModalsShowNews: true})}> 
                            <p class="readMore"> Read More</p>
                        </Button>
                        </Button>
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
   </div>
    )
  }
  }
  export default index;
