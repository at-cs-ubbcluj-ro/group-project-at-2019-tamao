import React from "react";
import './App.css';

function Overview(props) {
    return (
        <div className = "Overview">
            <h2> {props.name} </h2>
            <p>
                In our project we demonstrate how to use a water sensor and raindrop module to measure the water level
                <br/>
            </p>
        </div>
    );
}

export default Overview;