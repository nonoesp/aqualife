import React, {Component ,useState} from 'react';
import Header from './Header';
import About from './About';
import Order from './Order';
import Product from './Product';
import News from './News';
import Contact from './Contact';
import Footer from './Footer';

import '../global.js';
import $ from 'jquery';
import DirectusSDK from '@directus/sdk-js';

const directus = new DirectusSDK(global.URL);
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Carousel from "react-slick";


import {Button} from 'react-bootstrap';
// import disableScroll from 'disable-scroll';

class index extends Component {
  constructor(props){
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);

    this.state={deps:[],products:[],product:{},categories:[],category:{},categoryItem:{},news:[],addModalsShow: false, addModalsShowNews:false, addModalsShowProduct: false,cart:[],isLoading:true}

    this.onScroll = this.onScroll.bind(this);

}
next() {
  this.carousel.slickNext();
}
previous() {
  this.carousel.slickPrev();
}
async componentDidMount(){

  // disableScroll.on();
        
      var prod= await  directus.items('products').read()
      var news = await  directus.items('news').read()
     
      var cat = await  directus.items('categories').read({ fields: ['*.*.*'] })
      // var catItem = await  directus.items('categories').read()
      //console.log(cat.data[0].products.products_id);
      this.setState({
          products:prod.data,
          categories:cat.data,
          news:news.data,
          isLoading:false,
          categoryItem:cat.data[0],
      })

      $(window).scroll(function() {
        if ($(document).scrollTop() > $(window).height()) {
          $('.headerLg').css('visibility','visible');
          $(".headerPosition").show();
          
        }

    });
  }

  onScroll = (props) => {
    const { currentFrame } = props
    this.setState({ frame: Math.floor(currentFrame)})
  }
 
    // onLoad = ({ wrapper, playbackRate, el }) => {
    //   document.getElementById("one").style.marginTop = `calc(${Math.floor(document.getElementById('v0').duration) * playbackRate + 'px'})`
     
    // }
     myCallback = () => {
      $(".animLogo").show();
      $(".headerPosition").show();
      
      $(".animLogo").animate({top: (window.innerWidth > 760)?'50px':'30px',
      width: '135px',
      left: '48.2%'},500, function() {
        $(".animLogo").hide();
        $('.headerLg').css('visibility','visible');
       
        // disableScroll.off();

          // window.scroll({
          //   top: (window.innerWidth > 760)? ($('.videoPlayerDesk').height() ):($('.videoPlayerMob').height() + $('#myHeader').height()),
          //   left: 0,
          //   behavior: 'smooth'
          // });
        $('video').slideUp();
       
      });
     };
  render(){
    const {cart} =this.state;
   
    let addModalsClose = () => this.setState({addModalsShow : false});
    let addModalsCloseProduct = () => this.setState({addModalsShowProduct : false});
    let addModalsCloseNews = () => this.setState({addModalsShowNews : false});
    
    var settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      infinite: false,
    };

    return (
     
      <div>
      <div class="app-container">
            <Header />
          </div>
          <section id="video" class="pt-md-0">
              <img src='../images/footer-logo.png' style={{display:'none'}} class="animLogo beforeAnim" alt="logo"  />
              <div  class="d-none d-md-block"> 

              
                <video 
                playsinline
                  autoPlay
                  onEnded={() => this.myCallback()}
                  muted
                  src="../aqualifewithbg.mp4"
                  type="video/mp4"
                  class="videoPlayerDesk"
                    
                  >
                  
                    </video>
              

              </div>
            
              <div class="mobileVideo"> 
                <video 
                  playsinline
                  autoPlay
                  onEnded={() => this.myCallback()}
                  muted
                  src="../aqualifewithbg.mp4"
                    type="video/mp4"
                    class="videoPlayerMob"
                  >
                  
                    </video>
                </div>
              {/* <div class="col-md-12">
              <video src="../aqualife.mp4"/>
              </div> */}
         </section>
      
        <section id="about">
            <About/>
          </section>
          {/* 
          <section id="test">
            <Orsers/>
          </section>
          */}
          <section id="products" >
            <div class="contentModule pt-5">
              <div> 
                     <h3 class="py-3 pt-md-0  title">{this.state.categoryItem.title}</h3>
                      
                      <p class="py-3 col-md-4 px-0 description"> {this.state.categoryItem.description}</p>
                      <Button cart={cart}
                            onClick={()=> this.setState({addModalsShow: true})}> 
                        PLACE ORDER
                        </Button>
              </div>
                {this.state.product?<Product show={this.state.addModalsShowProduct} product={(this.state.product)?this.state.product:{}} onHide={addModalsCloseProduct}/>:null}
                <Carousel adaptiveHeight={true}  ref={c =>
                  (this.carousel = c)} {...settings} >
                  {this.state.categories.map((category,index)=> (
                  <div key={'category'+index} class="position">
                    
                        <div class="bottlePosition">
                         
                            {category.products.map((product,index)=> {  
                              if(product.products_id)
                              {
                                  return(
                                  <div class="col-4 mx-auto content"> 
                                    <img key={'prod-image-'+index} src={global.ASSET_URL+product.products_id.product_image+'?key=system-medium-contain'} onClick={()=> this.setState({product:product.products_id,addModalsShowProduct: true})} class={"bottle"+index} alt="bottle" />
                                    <div class="middle"> 
                                      <div class="text pt-5">{product.products_id.size}</div>
                                    </div>
                                  </div>
                                  )
                                  
                              }
                             
                              }) }
                        </div>
                        <div class="categorySection px-5"> 
                        <p class="py-2 px-5 productBrief">{category.name}</p> </div>
           
                  </div>
                  ))}
            
                </Carousel>
          <section  id="order"> 
                <Order
                show={this.state.addModalsShow}
                //if its true the product will be show if it's false not show
                onHide={addModalsClose}
                />
                </section>
                <div class="Arrow ">
                <div class="button" onClick={this.next} class="rightArrow">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 238.926 443.519">
                          <g id="left-arrow" transform="translate(341.224 443.52) rotate(-180)">
                            <g id="Group_1" data-name="Group 1">
                              <path id="Path_1" data-name="Path 1" d="M143.492,221.863,336.226,29.129A17.064,17.064,0,0,0,312.094,5l-204.8,204.8a17.067,17.067,0,0,0,0,24.132l204.8,204.8A17.066,17.066,0,0,0,336.226,414.6Z" fill="#7db8c5"/>
                            </g>
                          </g>
                        </svg>
                     
                  </div>
        
         <div class="button" onClick={this.previous} class="leftArrow">
         <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 238.926 443.519">
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
                <p class="title pt-5"> Latest News and Release</p>
            </div>
            <div class="contentModule">
                <div class="row pt-5">
                  {this.state.news.map((news,index) => (
                  <div class="col-md-4" key={'news'+index}>
                      <img src={global.ASSET_URL+news.image+'?key=system-medium-contain'} class="appLogo" alt="logo" />
                      {/* <img src={'http://aqualifecms.businessexchange.me/assets/'+news.image+'?key=system-medium-contain'} class="appLogo" alt="logo" /> */}
                      <div class="pt-4">
                        <div class="category">
                            <p class="categoryTitle">{news.category} </p>
                            <p class="created">{news.date}  </p>
                        </div>
                        <p class="categoryDesc">{news.title} </p>
                        <p class="subDesc">{news.brief}</p>
                      </div>
                      <div>
                       
                      
                        <p onClick={()=>
                            this.setState({addModalsShowNews: true})} class="readMore btn "> Read More</p>
                    
                       
                      </div>
                  </div>
                  ))} 
                   <News
                        show={this.state.addModalsShowNews}
                        //if its true the product will be show if it's false not show
                        onHide={addModalsCloseNews}
                        />
                </div>
            </div>
          </section>
          <section id="contactSection" class="contentModule"> 
            <Contact/>
          </section>
       
          <div class="App">
            <Footer/>
          </div>
      
   </div>
    )
  }
  }
  export default index;
