
module.exports = function (componentName) {
  return (

  `  
  import React, { Component } from 'react';
  import '` + componentName + `.scss';

  class ` + componentName + ` extends Component {
    constructor(props){
      super(props)
      this.state = {

      }
    }

    render(){
      return (
        <div className='` + componentName + `' >
          <h1>` + componentName + `</h1>
          </div>
        )
    }
  }

  export default ` + componentName
  )
}
