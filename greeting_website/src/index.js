import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let curDate = new Date();
curDate = curDate.getHours();
let greeting = '';

let greetingStyle = {
  color: '' // Placeholder for the color value
};

if (curDate >= 1 && curDate < 12) {
  greeting = 'Good Morning';
  greetingStyle.color = 'blue'; // Set color to blue for Good Morning
} else if (curDate >= 12 && curDate < 19) {
  greeting = 'Good Afternoon';
  greetingStyle.color = 'green'; // Set color to green for Good Afternoon
} else {
  greeting = 'Good Night';
  greetingStyle.color = 'purple'; // Set color to purple for Good Night
}

ReactDOM.render(
  <>
    <h1 style={greetingStyle}>Hello sir, {greeting}</h1>
  </>,
  document.getElementById('root')
);
