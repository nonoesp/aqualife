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
          
    </div>
)
    }
  }
  export default Test;
