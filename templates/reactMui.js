
module.exports = function (componentName) {
  return (

  `  
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
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
    const { classes } = this.props;
    
    return (
      <div className={classes.red}>
        <h1>` + componentName + `</h1>
      </div>
    )
  }
}

export default withStyles(styles)(` + componentName + `);`
  )
}
