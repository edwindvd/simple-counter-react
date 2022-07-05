import React from "react";
import {PropTypes} from "prop-types"; 

export const Counter = (props) => {
return (
    <div className="Card">
    <div className="number">
        <h1>{props.unit}</h1>
    </div>
    </div>
);
};

Counter.propTypes = {
	unit: PropTypes.number,
}