import React from "react";
import {Counter} from "./counter.jsx";
import {PropTypes} from "prop-types"; 

//create your first component
const Home = (props) => {
	return (
		<div className="row">
			<div className="col-2"> <Counter unit={Math.floor(props.seconds/10000)%10}/> </div>
			<div className="col-2"> <Counter unit={Math.floor(props.seconds/10000)%10}/> </div>
			<div className="col-2"> <Counter unit={Math.floor(props.seconds/1000)%10}/> </div>
			<div className="col-2"> <Counter unit={Math.floor(props.seconds/100)%10}/> </div>
			<div className="col-2"> <Counter unit={Math.floor(props.seconds/10)%10}/> </div>
			<div className="col-2"> <Counter unit={Math.floor(props.seconds/1)%10}/> </div>		
		</div>
	);
};

Home.propTypes = {
	seconds: PropTypes.number,
}

export default Home;
