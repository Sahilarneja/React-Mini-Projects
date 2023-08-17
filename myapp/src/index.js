import React from "react"; //used for html modification(to use jsx)
import ReactDOM from "react-dom"; //used for modification in objects
//using jsx and comparing html 
const fname="Sahil";
const lname="Arneja";
console.log(`my name is ${fname}`)  //template literals

//const img1="https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg";
// ReactDOM.render('kya dikhana hai','kaha dikhana h','callback func');
ReactDOM.render(
  <React.Fragment>
  <h1 contentEditable="true">{`My name is ${fname} ${lname}`}</h1>    
 
  <p>my lucky number is {5+5}</p>
 
    <h1>Hello World!!</h1>
    <p>I study in The Northcap University</p>
    <h2>B-Tech</h2>
 
    <img src="https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jeg" alt="randomImages"/>
    {/* <img src={img1} alt="randomImages"/> */}
 
  
    <br/>
    <a href="https://www.google.com/">Google</a>


  </React.Fragment>,
  document.getElementById("root")
);

//to return an array of elements.
// ReactDOM.render([<h1>Hello</h1>,<p>hello</p>,<h2>Hello</h2>],document.getElementById("root"));
