import React, { Component } from 'react';
import DirectusSDK from '@directus/sdk-js';
import '../global.js';
const directus = new DirectusSDK(global.URL);
import $ from 'jquery';
// import 'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js';
// import 'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.15.0/TweenMax.min.js';
import { gsap } from "gsap";

import { SplitChars, Timeline, Tween, Controls, PlayState } from 'react-gsap';

var wx;
var wy;

class About extends Component {

    constructor(props){
        super(props);
        this.state={abouts:{} ,abouts_items:[],  x: 0,
        y: 0}


        this.handleMouseMove = this.handleMouseMove.bind(this);

    }
    async componentDidMount(){
          var abouts = await  directus.items('abouts').read()
          var abouts_items = await  directus.items('abouts_items').read()
         
          this.setState({
            abouts:abouts.data[0],
            abouts_items:abouts_items.data
          })
        }
        //   console.log(abouts);


        handleMouseMove = event =>{
		
          var wx = $(window).width();
          var wy = $(window).height();
          
          var x = event.pageX ;
          var y = event.pageY ;
          
        


          var newx = x - wx/2;
          var newy = y - wy/2;
          
         
        
          
          $('#wrapper img').each(function(){
            var speed = $(this).attr('data-speed');
            if($(this).attr('data-revert')) speed *= -1;
            console.log((y));
            gsap.to($(this), 1, {x: (1 - newx*speed), y: (1 - newy*speed)});
            
          });
          
        }

        // handleMouseMove = e => {
        //   this.setState({
        //     x: e.clientX,
        //     y: e.clientY
        //   });
        // };
      
    render() {
        return (
    
<div class="contentModule pt-5" onMouseMove={this.handleMouseMove}>  
{/* class="py-5" */}
    <div class="row"> 
        <div class="col-md-5 pr-5"> 
         <p class="title"> {this.state.abouts.title}</p>
         <p class="description"> {this.state.abouts.description}</p>
           <div class="aboutItems">
           <ul class="px-0">
           {this.state.abouts_items.map((abouts_items,index)=> (
               <div class="pt-5" key={'abouts_items-'+index}>
                   <li class="contentPosition">
                       <i>
                      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 212.145 224.261"><path d="M246.95,123.808l-4.544-2.182a44.255,44.255,0,0,0,2.928-15.881c0-.9-.028-1.8-.082-2.7a26.251,26.251,0,0,1,4.476-15.738,35.65,35.65,0,0,0-1.957-41.448A38.371,38.371,0,0,0,228.3,32.788c-.611-.176-1.265-.391-2-.657a3.937,3.937,0,0,0-4.884,1.784,3.159,3.159,0,0,0,2.031,4.29c.907.329,1.731.6,2.521.827a30.359,30.359,0,0,1,21.987,28.94,29.748,29.748,0,0,1-4.748,16.105,32.167,32.167,0,0,0-5.431,19.319c.048.779.072,1.57.072,2.349a38.607,38.607,0,0,1-1.033,8.857,6.668,6.668,0,0,0-4.5-1.687,6.4,6.4,0,0,0-5.463,2.846l-3.239,5.2-5.924,2.845a5.175,5.175,0,0,0,0,9.6l5.582,2.681a40.077,40.077,0,0,1-44.86,3.808V69.1c0-7.345-6.8-13.321-15.167-13.321H113a3.313,3.313,0,1,0,0,6.571H163.25c4.238,0,7.685,3.028,7.685,6.75v74.549c0,3.722-3.447,6.75-7.685,6.75H134.334V107.282c0-5.431-5.03-9.849-11.214-9.849h-1.765a12.565,12.565,0,0,0-3.732.563V93.773c0-5.431-5.03-9.849-11.214-9.849h-1.766a12.564,12.564,0,0,0-3.732.563V81.516c0-5.431-5.03-9.849-11.214-9.849H87.933c-5.55,0-10.168,3.56-11.056,8.215a12.546,12.546,0,0,0-3.889-.612H71.221c-6.183,0-11.214,4.418-11.214,9.849v22.846a12.567,12.567,0,0,0-3.732-.563H54.819V69.1c0-3.722,3.447-6.75,7.685-6.75H98.05a3.313,3.313,0,1,0,0-6.571H69.517a23.3,23.3,0,0,1,.753-4.929A37.23,37.23,0,0,1,92.256,26.2l2.438,1.171,3.24,5.2a6.669,6.669,0,0,0,10.928,0l3.24-5.2,5.923-2.846a6.35,6.35,0,0,0,.947-.562,44.426,44.426,0,0,0,23.816-8.526,44.627,44.627,0,0,1,62.633,9.306,37.734,37.734,0,0,0,4.1,4.736A3.98,3.98,0,0,0,212.3,30.57a4.037,4.037,0,0,0,2.5-.839,3.014,3.014,0,0,0,.288-4.64,31.009,31.009,0,0,1-3.364-3.889,52.771,52.771,0,0,0-73.776-10.776,36.155,36.155,0,0,1-17.375,6.791,5.871,5.871,0,0,0-2.546-2.292L112.1,12.078l-3.24-5.2a6.669,6.669,0,0,0-10.928,0l-3.24,5.2-5.923,2.845a5.408,5.408,0,0,0-3.24,4.8,4.876,4.876,0,0,0,.408,1.94A43.951,43.951,0,0,0,62.995,49.32a29.367,29.367,0,0,0-.964,6.469c-8.145.22-14.694,6.1-14.694,13.311v44.591a9.436,9.436,0,0,0-4.039,7.378c0,.035,0,.071,0,.106v18.634a44.539,44.539,0,0,0,3.665,17.661l2.811,6.548a23,23,0,0,0,7.97,9.651,5.08,5.08,0,0,1,2.266,4.149v9.956c-4.414.688-7.779,4.074-7.779,8.145v20.061c0,4.566,4.229,8.28,9.428,8.28H85a3.313,3.313,0,1,0,0-6.571H61.655a1.842,1.842,0,0,1-1.946-1.709V195.92a1.842,1.842,0,0,1,1.946-1.709H123.3a1.842,1.842,0,0,1,1.947,1.709v20.061a1.842,1.842,0,0,1-1.947,1.709H99.954a3.313,3.313,0,1,0,0,6.571H123.3c5.2,0,9.428-3.714,9.428-8.28V195.92c0-4.115-3.439-7.529-7.923-8.165a22.063,22.063,0,0,1,4.5-12.228,23.772,23.772,0,0,0,5.036-14.517v-4.04H163.25c6.964,0,12.843-4.145,14.616-9.773a48.4,48.4,0,0,0,49.28-5.328,6.493,6.493,0,0,0,5.175,2.433h0a6.4,6.4,0,0,0,5.464-2.846l3.239-5.2,5.924-2.846a5.175,5.175,0,0,0,0-9.6ZM102.3,10.029v0Zm-3.692,7.66a5.9,5.9,0,0,0,2.475-2.175l2.317-3.719,2.317,3.72a5.9,5.9,0,0,0,2.476,2.174l4.234,2.035-4.235,2.035a5.9,5.9,0,0,0-2.475,2.175L103.4,27.652l-2.317-3.72a5.9,5.9,0,0,0-2.476-2.174l-4.234-2.035ZM126.852,161.01a17.77,17.77,0,0,1-3.765,10.853,28.1,28.1,0,0,0-5.774,15.776H67.488v-9.821a11.356,11.356,0,0,0-5.065-9.274A16.313,16.313,0,0,1,56.77,161.7l-2.81-6.548a38.7,38.7,0,0,1-3.184-15.344V121.253a3.531,3.531,0,0,1,3.732-3.278h1.765a3.531,3.531,0,0,1,3.732,3.278v17.806a3.772,3.772,0,0,0,7.481,0V89.12a3.531,3.531,0,0,1,3.732-3.278h1.766a3.531,3.531,0,0,1,3.732,3.278v41.756a3.772,3.772,0,0,0,7.481,0V81.516a3.531,3.531,0,0,1,3.732-3.278H89.7a3.531,3.531,0,0,1,3.732,3.278v49.293a3.772,3.772,0,0,0,7.481,0V93.773a3.531,3.531,0,0,1,3.732-3.278h1.766a3.531,3.531,0,0,1,3.732,3.278v41.959a3.772,3.772,0,0,0,7.481,0V107.282A3.531,3.531,0,0,1,121.353,104h1.765a3.531,3.531,0,0,1,3.732,3.278V161.01Zm110.264-30.368a5.89,5.89,0,0,0-2.478,2.175l-2.317,3.72L230,132.816a5.888,5.888,0,0,0-2.475-2.174l-4.235-2.035,4.236-2.035A5.894,5.894,0,0,0,230,124.4l2.317-3.72,2.316,3.718a5.888,5.888,0,0,0,2.477,2.176l4.235,2.035Z" transform="translate(-43.296 0)" fill="#7db8c5"/></svg></i>
                             <h6 class="aboutTitabouts_itemsle" class="px-4" >{abouts_items.title} </h6>
                             </li> 
                            <div class="pt-3">  <span class="desc text-center ">{abouts_items.brief}</span> </div>
                             </div>
                    ))}
             </ul>
           </div>   
        </div> 

        <div class="col-md-5 containerEffect d-flex align-items-center offset-md-2">
          <div id="wrapper" >

     
              <img data-speed="0.05" data-revert="true" src='/images/image.png' alt="water" class="bottomLeft"  />
              <img data-speed="0.04" src='/images/image-3.png' alt="water" class="topRight" />
            
              <img data-speed="0.04"  src='/images/w2.png' alt="water" class="imageSize" />
              <img data-speed="0.03" src='/images/about-img.png' alt="water" class="centeredImage"/> 
           </div>
          </div>
      


         {/* <div onMouseMove={this.handleMouseMove}>
        {this.state.x || this.state.y
          ? "The mouse is at x: " + this.state.x + ", y: " + this.state.y
          : "Move the mouse over this box"}
      </div> */}
           </div>
           </div>

        );
    }
}
// ReactDOM.render(<About/>, document.getElementById("root"));

export default About;
