////////////////
// DEPENDENCIES
////////////////
// packages
import React, { Component } from 'react';
// data
// import fortunes from './data.js'
import nightFortunes from './data2.js'
// console.log(fortunes);
console.log(nightFortunes);

////////////////
// METHODS
////////////////

// run one time only lifecycle method...
// componentDidMount() {
//    this.fetchList()
// }

////////////////
// COMPONENT
////////////////
class App extends Component {
  constructor() {
    super()
    this.state = {
      fortunes: fortunes,
      nightFortunes: nightFortunes
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

////////////////
// EXPORT
////////////////
export default App;
