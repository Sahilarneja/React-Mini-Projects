import React from 'react';
import ReactDOM from 'react-dom';

const fname = "Sahil";
const lname = "Arneja";
const curDT = new Date().toLocaleDateString();
const curT = new Date().toLocaleTimeString();

ReactDOM.render(
  <React.Fragment>
    <h1>Hello, My Name is {fname} {lname}</h1>
    <p>Today's date is: {curDT}</p>
    <p>Current time is: {curT}</p>
  </React.Fragment>,
  document.getElementById("root")
);
