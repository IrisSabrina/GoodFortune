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

// run one time only lifecycle method...
// componentDidMount() {
//    this.fetchList()
// } <-- I think I only need this if I'm doing an API call.

////////////////
// COMPONENT
////////////////
class App extends Component {
  // is this the proper way to set the state? Should it be an empty set of strings if I want a string from either array to be returned?
  constructor() {
    super()
    this.state = {
      fortunes: '',
      nightFortunes: ''
    }
  }
  render() {
    return (
      <div className="fortune-container">
        <header>
          <h1>Good Fortune to You, Stranger...</h1>
          <h3>May the future smile upon you.</h3>
        </header>
      </div>
    )
  }
}

// <h4>{ fortunes.sample }</h4> // <-- This did not work. Tried putting it in the render under the <h3>.

////////////////
// EXPORT
////////////////
export default App;
