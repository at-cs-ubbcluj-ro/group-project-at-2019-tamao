import React, { Component } from 'react';
import './App.css';
import Overview from "./overview";
import Screenshots from "./Screenshots";
import Pre_requisites from "./Pre-requisites";
import Schematics from "./Schematics";
import License from "./License";
import Build from "./Build";

class App extends Component {
  render() {
    return (
        <div className = "MainContent">
            <Overview name="Overview"/>
            <hr/>
            <Screenshots name="Screenshots"/>
            <hr/>
            <Schematics name="Schematics"/>
            <hr/>
            <Pre_requisites name="Pre-requisites"/>
            <hr/>
            <Build name="Build"/>
            <hr/>
            <License />
            <hr/>
        </div>
    );
  }
}

export default App;
