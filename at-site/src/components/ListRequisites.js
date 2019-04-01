import React from "react";
import "../App.css";

function ListRequisites() {
  return (
    <ul>
      <li>
        <p>Raspberry Pi 3 Model B</p>
      </li>
      <li>
        <p>OS: Raspbian Stretch</p>
      </li>
      <li>
        <p>Android Studio 3.1</p>
      </li>
      <li>
        <p>Firebase project with Database</p>
      </li>
      <li>
        <p>Following components</p>
        <ul>
          <li>
            <p>Raindrop module</p>
          </li>
          <li>
            <p>Water level sensor</p>
          </li>
          <li>
            <p>Breadboard</p>
          </li>
          <li>
            <p>Resistor 470 Ohm</p>
          </li>
          <li>
            <p>Jumper cables</p>
          </li>
          <li>
            <p>1x LED</p>
          </li>
        </ul>
      </li>
    </ul>
  );
}

export default ListRequisites;
