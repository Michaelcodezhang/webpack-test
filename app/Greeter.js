import React, {Component} from 'react'
import config from './config.json'

class Greeter extends Component{
  render(){
    return(
      <div>
        <h1>Title</h1>
        {config.greetText}
      </div>
    )
  }
}

export default Greeter
