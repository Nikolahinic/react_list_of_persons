import React, { Component } from 'react';
import Person from './components/Person';


class App extends Component {
  state = {
    data: [
      { name: "Nikola", job: "MERN developer", gender: "male", id : 1},
      { name: "Zorana", job: "gamer", gender: "female", id : 2},
      { name: "Milos", job: "IT konsultant", gender: "male", id : 3}

    ]
  }
  render() {
    return (
      <div>
        <Person data={this.state.data} />
      </div>
    )
  }
}


export default App;