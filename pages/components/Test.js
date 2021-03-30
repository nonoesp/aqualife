import React, { Component } from 'react';

var windowheight = 0;
var vid;

class Test extends Component {

  constructor(props){

    super(props);
  
    }

    componentDidMount(){
      vid = document.getElementById('v0')
      this.setState({
        vid:document.getElementById('v0')
      },() => {
        vid.pause();
        window.addEventListener('scroll', this.onscroll);
      })

      windowheight = window.screen.height - 20;
    }



  onscroll() {
          
            vid.currentTime = window.pageYOffset / 200;
         
            };

   

render(){
return(
    <div >
            <div id="responsiveVideo">
              <div id="wrapperVideo">
                <video id="v0"  tabindex="0" autobuffer preload>
               
                  <source type="video/mp4" src="/aqualife.mp4"></source>
                </video>
              </div>
            </div>
          <div id="set-height"> </div>
          <div id="time"> </div>
          <div id="scroll"> </div>

          <div class= "slideDownAnimation"> 
    
              {/* <animated.div 
                keyframes={[
                  'transform: rotateX(0) rotateY(0) rotateZ(0)',
                  'transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg)',
                ]}
              style={props}>
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 248 512"><g id="down-arrow" transform="translate(-132)"><g id="Group_165" data-name="Group 165"><path id="Path_152" data-name="Path 152" d="M374.108,373.328a20,20,0,0,0-28.284.067L276,443.557V20a20,20,0,0,0-40,0V443.558l-69.824-70.164a20,20,0,0,0-28.352,28.218l104,104.5c.006.007.013.012.019.018a20.017,20.017,0,0,0,28.314,0c.006-.007.013-.012.019-.018l104-104.5A20,20,0,0,0,374.108,373.328Z" fill="#dc3545"/></g></g>
            </svg>
              </animated.div> */}
              <a href="#about" class='icon-scroll'>  </a>
              </div>
          
    </div>
)
    }
  }
  export default Test;
