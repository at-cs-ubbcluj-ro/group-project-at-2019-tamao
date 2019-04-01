import React from "react";
import "../App.css";
import { Typography } from "@material-ui/core";

function Build(props) {
  return (
    <div className="Build" id="Build">
      <h2>{props.name}</h2>
      <Typography variant="body1" color="inherit" style={{ fontSize: 14 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Senectus et netus et
        malesuada fames ac turpis egestas. Quam elementum pulvinar etiam non
        quam. Tellus orci ac auctor augue mauris augue neque gravida. Fames ac
        turpis egestas maecenas pharetra convallis posuere. Ut placerat orci
        nulla pellentesque dignissim enim sit. Dictum at tempor commodo
        ullamcorper a. Sodales ut eu sem integer. Id porta nibh venenatis cras
        sed felis eget velit. Felis bibendum ut tristique et egestas quis.
        Tortor aliquam nulla facilisi cras. Est sit amet facilisis magna etiam.
        Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi
        tristique senectus. Cursus in hac habitasse platea dictumst quisque
        sagittis purus sit. Tempus egestas sed sed risus pretium quam. Sapien
        nec sagittis aliquam malesuada bibendum arcu vitae. Scelerisque purus
        semper eget duis. Enim nunc faucibus a pellentesque sit amet porttitor
        eget. Elementum facilisis leo vel fringilla est ullamcorper eget. Cursus
        risus at ultrices mi tempus. Hac habitasse platea dictumst quisque
        sagittis purus sit amet. Metus vulputate eu scelerisque felis imperdiet
        proin fermentum. Tellus rutrum tellus pellentesque eu tincidunt tortor
        aliquam nulla facilisi. Etiam tempor orci eu lobortis elementum nibh
        tellus molestie nunc. Tincidunt id aliquet risus feugiat in ante metus
        dictum at. Turpis in eu mi bibendum. Blandit volutpat maecenas volutpat
        blandit aliquam. Tincidunt tortor aliquam nulla facilisi cras. Integer
        vitae justo eget magna fermentum iaculis eu non diam. Quam id leo in
        vitae turpis. Potenti nullam ac tortor vitae purus faucibus ornare.
      </Typography>
    </div>
  );
}

export default Build;
