
module.exports = function (componentName) {
  return (

  `  
import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = Stylesheet.create({
  red: {
    backgroundColor: 'red'
  }
})

class ` + componentName + ` extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    
    return (
      <div className={css(styles.red)}>
        <h1>` + componentName + `</h1>
      </div>
    )
  }
}

export default ` + componentName + `;`
  )
}
