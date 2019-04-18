import React from "react";
import "../App.css";
import photo from "../Images/SchematicImage.png";
import { Typography } from "@material-ui/core";

function Schematics(props) {
  return (
    <div className="Schematics" id={props.name}>
      <div className="SchematicsHeader">
        <Typography variant="headline" color="inherit" style={{ fontSize: 14 }}>
          <h2> {props.name} </h2>
        </Typography>
      </div>

      <div className="SchematicsImage">
        <img src={photo} alt="SchematicPhoto" />
      </div>
    </div>
  );
}

export default Schematics;
