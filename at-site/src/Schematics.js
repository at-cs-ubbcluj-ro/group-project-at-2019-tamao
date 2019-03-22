import React from "react";
import './App.css';
import photo from "./Images/SchematicImage.png";



function Schematics(props) {
    return (
        <div className="Schematics">
            <h2> {props.name} </h2>
            <img src={photo} alt="SchematicPhoto"/>
        </div>
    );
}

export default Schematics;