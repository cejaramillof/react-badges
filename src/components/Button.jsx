import React, { Component } from "react";

class Button extends Component {
  state = {
    count: 0
  };

  handleClick = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>Manzanas: {count}</h1>
        <button onClick={this.handleClick} type="button">
          Agregar
        </button>
      </div>
    );
  }
}
const ButtonStateLess = props => {
  const { text } = props; // destructuring
  return (
    <div>
      <button type="button">{props.text}</button>
      <button type="button">{text}</button>
    </div>
  );
};
export default Button;
