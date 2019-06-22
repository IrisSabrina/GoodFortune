///////////////
// DEPENDENCY
///////////////
import React, { Component } from 'react'

class FormContainer extends Component {
  // constructor(props) {
  //   super(props)
  //     this.state = {
  //       userChoice: '' // QUESTION: How do I define that there are two types of light? Moonlight and Sunlight. Where do I create logic for an IF Moonlight pull from nightFortunes ARRAY - ELSE IF Sunlight pull from fortunes ARRAY? How do I even write that logic? ANSWER: This logic was written into the handleChange method in the App.js
  //     }
  // }

  ///////////////
  // HANDLER
  ///////////////

  handleChange = (event) => {
    event.preventDefault()
    this.props.handleFortune(event.target.value)
  }


  ///////////////
  // RENDER
  ///////////////
  render() {
    return (
      <div className="lightSelection">
        <h3>Answer this simple question to reveal your fortune.<br/>
        Do you prefer to travel by sunlight or moonlight?</h3>
        <div className="selection">
          <select id="lightType" onChange={ this.handleChange }>
            <option>Select</option>
            <option value="daylight">Daylight</option>
            <option value="moonlight">Moonlight</option>
          </select>
        </div>
      </div>
    )
  }

}

///////////////
// EXPORT
///////////////
export default FormContainer;
