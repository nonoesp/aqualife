import React from 'react';

import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// import '../video.css';
import '../myscript.js';

 class Test extends Component {

render(){
      return(
        <div onload="init()">
        <div id="responsiveVideo">
          <div id="wrapperVideo">
            <video id="v0" tabindex="0" autobuffer preload>
              <source type="video/mp4" src="aqualife.mp4"></source>
            </video>
          </div>
        </div>
      <div id="set-height"> </div>
      <div id="time"> </div>
      <div id="scroll"> </div>
      <input type="bottomButton" onClick="javascript:jumpScroll()" value="REPLAY"/>
</div>
      );
}
  }
  export default Test;
