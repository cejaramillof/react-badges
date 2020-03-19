import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import "./components/styles/Global.css";
import App from "./components/App";

// const element = document.createElement('h1'); // React
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');
// container.appendChild(element); // ReactDOM
// ReactDOM.render(__qué__, __dónde__);
const name = "Google";
// const element = <h1>Hello, {name || expressions || whatever true value } Badges!</h1>; // JSX
const element = React.createElement(
  "a",
  { href: "https://google.com" },
  `Link to ${name}`
);
// const element = React.createElement('__ElementType__', { __attributes/props__ }, '__Children__', '__Children__')
const container = document.getElementById("root");

ReactDOM.render(<App />, container);
// ReactDOM.render(element, container);
// Component is a class
// Element < > is a Object

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
