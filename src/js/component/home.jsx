import React from "react";
import {Counter} from "./counter.jsx";
import {PropTypes} from "prop-types"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";

//create your first component
const Home = (props) => {
	return (
		<div className="d-flex justify-content-center">
			<div className="display px-2 fs-1 bg-dark text-light border border-light rounded"> <FontAwesomeIcon icon={faClock} /> </div>
			<div className="display-inline px-3 bg-dark text-light border border-dark rounded"> <Counter unit={Math.floor(props.seconds/10000)%10}/> </div>
			<div className="display-inline px-3 bg-dark text-light border border-dark rounded"> <Counter unit={Math.floor(props.seconds/10000)%10}/> </div>
			<div className="display-inline px-3 bg-dark text-light border border-dark rounded"> <Counter unit={Math.floor(props.seconds/1000)%10}/> </div>
			<div className="display-inline px-3 bg-dark text-light border border-dark rounded"> <Counter unit={Math.floor(props.seconds/100)%10}/> </div>
			<div className="display-inline px-3 bg-dark text-light border border-dark rounded"> <Counter unit={Math.floor(props.seconds/10)%10}/> </div>
			<div className="display-inline px-3 bg-dark text-light border border-dark rounded"> <Counter unit={Math.floor(props.seconds/1)%10}/> </div>		
		</div>
	);
};

Home.propTypes = {
	seconds: PropTypes.number,
}

export default Home;
