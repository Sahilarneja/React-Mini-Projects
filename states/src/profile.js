import React from "react";

// Making class component
export default class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "peter",
      email: "peter@gmail.com",
      count:0
    };
  }

  updateState() {
    this.setState({
      name: 'Bruce', //update state
      count:this.state.count+1
    });
  }

  render() {
    console.warn("render");
    return (
      <div>
        <h1>Name: {this.state.name}</h1>
        <h1>Email: {this.state.email}</h1>
        <h1>Count: {this.state.count}</h1>
        <button onClick={() => { this.updateState() }}>UpdateName</button>
      </div>
    );
  }
}

