import React, { Component } from "react";

class Buttons extends Component{
  
  render(){
    return(
      <div className="buttonsWrap">
        <button className="endButton button" onClick={this.props.previous}> &#60; Previous </button>
        <div>
          <button className="blueButton button size2">Edit</button>
          <button className="blueButton button size1">Delete</button>
          <button className="blueButton button size2">New</button>
        </div>
        <button className="endButton button" onClick={this.props.next}> Next &#62; </button>
      </div>
    )
  }
}

export default Buttons;