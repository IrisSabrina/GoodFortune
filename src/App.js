////////////////
// DEPENDENCIES
////////////////
// packages
import React, { Component } from 'react';
// data
import fortunes from './data.js'
import nightFortunes from './data2.js'
console.log(fortunes);
console.log(nightFortunes);

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
      userChoice: 'day'
    }
    this.chooseRandomFortune = this.chooseRandomFortune.bind(this)
  }

  // because we used this.state.userChoice in the chooseRandomFortune, we need to bind the "this" to the constructor.

  componentDidMount() {
    this.chooseRandomFortune()
  } // not sure why we did this. Does it just access the data files?

  chooseRandomFortune() {
   if(this.state.userChoice === 'moonlight') {
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
     // grab a random fortune from night
     let randomDayVal = Math.floor(Math.random() * fortunes.fortunes.length)
     let randomDayFortune = fortunes.fortunes[randomDayVal]
     this.setState({
       fortune: randomDayFortune
     })
   }
  }

  render() {
    return (
      <div className="fortune-container">
        <header>
          <h1>Good Fortune to You, Stranger...</h1>
          <h3>May the future smile upon you.</h3>
        </header>
         <h4>{ this.state.fortune.fortune }</h4>
      </div>
    )
  }
}

// this.state.fortune.fortune refers to the state in the super constructor of "fortune" + the "fortune" key in the fortunes array.

// <h4>{ fortunes.sample }</h4> // <-- This did not work. Tried putting it in the render under the <h3>. This didn't work because it's a Ruby method and doesn't work in JS.

////////////////
// EXPORT
////////////////
export default App;
