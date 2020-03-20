import React, { Component } from "react";

class Stateful extends Component {
  // Have lifecycle, events and state
  constructor(props) {
    super(props);
    this.state = {
      hello: "Hola mundo Stateful"
    };
  }
  render() {
    return <h1>{this.state.hello}</h1>;
  }
}

export default Stateful;
