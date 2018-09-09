## Synopsis

A node module tool for creating and deleting react components.

## Installation

    npm install -g react-manager

## Usage
    /* Create a new react component with the name $ComponentName */  
    react-manager --new $ComponentName     
  
    /* Remove a component with the name $ComponentName */  
    react-manager --remove $ComponentName    


## Help

    react-manager --h

## Code Examples

### 1. Create a React Component and Sass file

**Command Line**

    react-manager --newSass $ComponentName

**Output**
Creates a folder inside it a .js and .scss file with the name $componentName 
    
    import React, { Component } from 'react'
    import './$componentName.css';
    
    class $ComponentName extends Component {
      constructor(props){
        super(props) 
        this.state = {      
        }
      }
  
      render(){

        return (
          <div className='$componentName'>
            <h1>$ComponentName</h1>
          </div>
        )
      }
    }
    
    export default $ComponentName;

### 2. Create a React MUI Component 

**Command Line**

    react-manager --newMui $ComponentName

**Output**
Creates a folder inside it a .js file with the name $componentName 
    
    import React, { Component } from 'react'
    import { withStyles } from '@material-ui/core/styles';
    
    const styles = theme => ({
      red: {
        backgroundColor: 'red'
      }
    })

    class $ComponentName extends Component {
      constructor(props){
        super(props) 
        this.state = {      
        }
      }
  
      render(){
        const { classes } = this.props;

        return (
          <div className={classes.red}>
            <h1>$ComponentName</h1>
          </div>
        )
      }
    }
    
    export default withStyles(styles)($ComponentName);

### 3. Create a React Aphrodite Component 

**Command Line**

    react-manager --newAphro $ComponentName

**Output**
Creates a folder inside it a .js file with the name $componentName 
    
    import React, { Component } from 'react'
    import { StyleSheet, css } from 'aphrodite';
    
    const styles = Stylesheet.create({
      red: {
        backgroundColor: 'red'
      }
    })

    class $ComponentName extends Component {
      constructor(props){
        super(props) 
        this.state = {      
        }
      }
  
      render(){

        return (
          <div className={css(styles.red)}>
            <h1>$ComponentName</h1>
          </div>
        )
      }
    }
    
    export default $ComponentName;
    

## Contributors

Contributions to this project are welcome and will be recognized here, feel free to create an issue with additional functionality to speed React development.

Open an issue or fork the repo here [react-manager on Github](https://github.com/Joesepherus/react-manager "react-manager on Github")


## License

ISC