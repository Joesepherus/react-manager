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

### Create Components using 'comp'

**Command Line**

    react-manager --new $ComponentName

**Output**
Creates a folder inside it a .js and .scss file with the name $componentName 
    
    import React, { Component } from 'react'
    
    class $ComponentName extends Component {
      constructor(props){
        super(props) 
        this.state = {      
        }
      }
  
      render(){
        return (
          <div>
            <h1>$ComponentName</h1>
          </div>
        )
      }
    }
    
    export default $ComponentName
    

## Contributors

Contributions to this project are welcome and will be recognized here, feel free to create an issue with additional functionality to speed React development.

Open an issue or fork the repo here [react-manager on Github](https://github.com/Josepherus/react-manager "react-manager on Github")


## License

ISC