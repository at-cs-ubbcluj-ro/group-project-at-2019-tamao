import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";

export default class Title extends Component {
  handleClick = () => {
    window.location = "https://github.com/davidleiti/Android-Things-Group";
  }
  
  render() {
    return (
      //  className="TitleDiv"
      <span  className="TitleDiv">
        <Typography variant="display1" align="left" gutterBottom>
          <p my={12}>Water level surveillance <img height="32" width="32" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg" alt="Github" onClick={this.handleClick}/></p>
        </Typography>
        

      </span>
    );
  }
}
