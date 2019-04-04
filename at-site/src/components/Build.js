import React from "react";
import "../App.css";
import { Typography } from "@material-ui/core";

function Build(props) {
  return (
    <div className="Build" id="Build">
      <h2>{props.name}</h2>
      <Typography variant="body1" color="inherit" style={{ fontSize: 14 }}>
        <p>
          Developed an Android companion application in order to receive the information from the Raspberry Pi
          sensors that are running in our main program. The sensor inputs along with the date are saved in a Firebase
          database on Cloud. After a new input is added to the database our companion app pushes a notification to the user’s phone telling him the new state.
          In order to connect the app to the Firebase database we performed the following steps:
      </p>
        <ul>
          <li>Registered our app filling in the package name, the app nickname and the debugging signing certificate SHA-1;</li>
          <li>Added the google-services.json to our project;</li>
          <li>Added the plugins in the gradle file.</li>
        </ul>
      </Typography>
    </div>
  );
}

export default Build;
