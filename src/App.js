////////////////
// DEPENDENCIES
////////////////
// packages
import React, { Component } from 'react';
import Clouds from './components/animation';
import FormContainer from './components/form';
// data
import fortunes from './data.js'
import nightFortunes from './data2.js'
// console.log(fortunes);
// console.log(nightFortunes);

////////////////
// METHODS
////////////////



////////////////
// COMPONENT
////////////////
class App extends Component {
  // is this the proper way to set the state? Should it be an empty set of strings if I want a string from either array to be returned?
  constructor() {
    super()
    this.state = {
      fortune:'',
    }
    this.handleFortune = this.handleFortune.bind(this)
    this.clearFortune = this.clearFortune.bind(this)
  }

  // because we used this.state.userChoice in the chooseRandomFortune, we need to bind the "this" to the constructor.

  // componentDidMount() {
  //   this.chooseRandomFortune()
  // } // This was a test to see if the Random Fortune worked. Because it only renders one time and won't create a never ending loop.

  handleFortune(choice) {
   if(choice === 'moonlight') {
     // grab a random fortune from night
     // randomVal is calculating a random index number x the length of one array
     let randomVal = Math.floor(Math.random() * nightFortunes.fortunes.length)
     let randomFortune = nightFortunes.fortunes[randomVal]
     // update state
     this.setState({
       fortune: randomFortune
     })
     console.log('this is randomVal', randomVal, randomFortune)
   } else {
     // grab a random fortune from day
     let randomDayVal = Math.floor(Math.random() * fortunes.fortunes.length)
     let randomDayFortune = fortunes.fortunes[randomDayVal]
     this.setState({
       fortune: randomDayFortune
     })
   }
  }

  clearFortune() {
    this.setState({ fortune: ''})
  }


  render() {
    console.log(this.state);
    return (
      <div className="container">
        <div className="header">
        <header>
          <h1>Fortunes for the Un/Fortunate</h1>
          <h3>May the future smile upon you, Stranger...</h3>
        <Clouds />
        </header>
        </div>
        <div className="yourFortune">
          <FormContainer handleFortune={this.handleFortune}/>
          <div className="fortuneReturn">
           <h4>{ this.state.fortune.fortune }</h4>
          </div>
        </div>
        <div className="button">
          <button type="button" onClick={ this.clearFortune }>Clear this fortune for now.</button>
        </div>
      </div>
    )
  }
}

// this.state.fortune.fortune refers to the state in the super constructor of "fortune" + the "fortune" key in the fortunes array.

// <h4>{ fortunes.sample }</h4> // <-- This did not work. Tried putting it in the render under the <h3>. This didn't work because it's a Ruby method and doesn't work in JS. Oops.

// found code for animated clouds here: https://codepen.io/WebSonick/pen/vjmgu

////////////////
// EXPORT
////////////////
export default App;
