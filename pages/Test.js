
import React, {Component } from 'react';

import dynamic from 'next/dynamic'

const VideoScroll = dynamic(() => import("react-video-scroll").then((mod) => mod.VideoScroll), {
    ssr: false
  });

 

class Test extends Component {
    // onScroll = (props) => {
    //     const { currentFrame } = props
    //     this.setState({ frame: Math.floor(currentFrame)})
    //   }
     
    //     onLoad = ({ wrapper, playbackRate, el }) => {
    //       console.log(wrapper);
    //       console.log(playbackRate);
    //       console.log(el);
    //       document.getElementById("one").style.marginTop = `calc(${Math.floor(document.getElementById('v0').duration) * playbackRate + 'px'})`
    //     }

       componentDidMount () {
            const script = document.createElement("script");
        
            script.src = "../myscript.js"
            script.async = true;
        
            document.body.appendChild(script);
        }

    render(){

        

    return (
    
 
        // <VideoScroll
        //     onLoad={this.onLoad}
        //     onScroll={this.onScroll}
        //     playbackRate={300}
        //     id="one"
        //     style={{ position: 'sticky' }}
        //     >
        //         <video
        //         id="v0"
        //         type="video/mp4" src="../aqualife3.mp4"
        //         tabIndex="0"
        //         autobuffer="autobuffer"
        //         preload="preload"
        //         style={{ width: '100%', objectFit: 'cover', transitionduration: '3s',
        //         position: 'fixed',
        //         top: 0,
        //         height: '100%' }}
        //         playsInline
        //         />
        //  </VideoScroll> 

         <div>
        <div id="set-height"></div>
        <p id="time"></p>
        <video id="v0" autobuffer="autobuffer" preload="preload">
            <source type="video/webm; codecs=&quot;vp8, vorbis&quot;" src="../aqualife3.mp4">

            </source>
    
        </video>
        </div>

 )
}
}
export default Test;