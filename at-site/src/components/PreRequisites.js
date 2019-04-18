import React from "react";
import "../App.css";
import ListRequisites from "./ListRequisites";
import { Typography } from "@material-ui/core";

function PreRequisites(props) {
  return (
    <div className="PreRequisites" id={props.name}>
      <Typography variant="headline" color="inherit" style={{ fontSize: 14 }}>

      <h2>Pre-requisites</h2>
      </Typography>
      <Typography variant="body1" color="inherit" style={{ fontSize: 14 }}>
      <ListRequisites />
      </Typography>
    </div>
  );
}

export default PreRequisites;
