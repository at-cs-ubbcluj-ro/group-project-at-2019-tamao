import React from "react";
import './App.css';
import List_requisites from "./List_requisites";

function Pre_requisites(props) {
    return (
        <div className="Pre-requisites">
            <h2>{props.name}</h2>
            <List_requisites />
        </div>
    );
}

export default Pre_requisites;