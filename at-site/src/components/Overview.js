import React from "react";
import "../App.css";
import Typography from "@material-ui/core/Typography";
import myVideo from "../Images/video.mp4";
import ReactPlayer from "react-player";
function Overview(props) {
  return (
    <div className="Overview" id={props.name}>
      <Typography variant="display1" align="left">
        <h2> {props.name} </h2>
      </Typography>
      <p>
        <Typography variant="body1" align="left">
          The aim of the project is to demonstrate how to use a water sensor and
          raindrop module to measure the water level. We take the input of a
          water sensor, which was placed in a container, such that we can detect
          water raising/lowering. We also have a raindrop module, which detects
          drops of water that fall on it and after a (programmable) number of
          drops adds an entry to the cloud database (Firebase). The companion
          phone application sends the user a notification when a new value
          entries the database.
        </Typography>

        <br />
      </p>
      {/* <video src={myVideo} muted width={512+"px"}></video> */}
      <ReactPlayer url={myVideo} playing={false} controls={true} volume={1} muted  />
    </div>
  );
}

export default Overview;
