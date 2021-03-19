

import React from 'react';

class Total extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      let total = this.props.total.toFixed();
      return (
        <div>
          <h3 className="row" >
            <span className="col-6">total price:</span>
            <span className="col-6 text-right">${total}</span>
          </h3>
        </div>
      );
    }
  }
  export default Total;