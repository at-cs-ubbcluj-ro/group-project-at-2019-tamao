import React from "react";
import "../App.css";
import Typography from '@material-ui/core/Typography'

function Overview(props) {
  return (
    <div className="Overview">
      <Typography variant="display1" align="left">
        <h2> {props.name} </h2>
      </Typography>
      <p>
        In our project we demonstrate how to use a water sensor and raindrop
        module to measure the water level
        <br />
      </p>
    </div>
  );
}

export default Overview;
