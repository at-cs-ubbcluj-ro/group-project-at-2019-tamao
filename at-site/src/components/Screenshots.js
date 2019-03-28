import React from "react";
import '../App.css';
import breadboardPhoto from "../Images/RaspberryPhoto1.jpeg";
import rainModulePhoto from "../Images/RaindropModulePhoto.jpeg";

function Screenshots(props) {
    return (
        <div className = "Screenshots">
            <h2> {props.name} </h2>
            
            <div class="photos">
                <img src={breadboardPhoto} alt=""/>
                <img src={rainModulePhoto} alt=""/>
            </div>
        </div>
    );
}

export default Screenshots;
