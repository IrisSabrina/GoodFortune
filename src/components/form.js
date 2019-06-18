///////////////
// DEPENDENCY
///////////////
import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
      this.state = {
        lightType: '' // How do I define that there are two types of light? Moonlight and Sunlight. Where do I create logic for an IF Moonlight pull from nightFortunes ARRAY - ELSE IF Sunlight pull from fortunes ARRAY? How do I even write that logic?
      }
  }

  ///////////////
  // HANDLERS
  ///////////////

  handleChange = (event) => {
    // console.log('inside handle change');
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.handleCreateFortune(this.state) // Do I need a createFortune in order to pull a fortune from one of the two arrays?
    this.clearForm()
  }

  clearForm = () => {
    this.setState({
      lightType: ''
    })
  }

  // fortunes.sample <-- Perhaps a method for getting a random item back from an array? Found here: https://www.rubyguides.com/2015/03/ruby-random/ But no context for usage was provided (that I understood). Or am I totally off and need to use a math.random method?

  ///////////////
  // RENDER
  ///////////////
  render() {
    return (
      <div className="form">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="moonlight or sunlight"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <button
            type="submit">
            Get your fortune!
          </button>
        </form>
      </div>
    )
  }
}

///////////////
// EXPORT
///////////////
export default Form;
