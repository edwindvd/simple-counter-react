//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application

let secondCounter = 0;

setInterval(function () { 
    secondCounter = secondCounter + 1;
    console.log(secondCounter);
    ReactDOM.render(<Home seconds={secondCounter} />, document.querySelector("#app"));
}, 1000)

