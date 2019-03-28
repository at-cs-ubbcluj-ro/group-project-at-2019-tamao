import React, { Component, Fragment } from "react";
import "./App.css";
import Overview from "./components/overview";
import Screenshots from "./components/Screenshots";
import Pre_requisites from "./components/Pre-requisites";
import Schematics from "./components/Schematics";
import License from "./components/License";
import Build from "./Build";
import Title from "./components/Title";
import { withStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import { orange } from "@material-ui/core/colors";
import { MuiThemeProvider } from "@material-ui/core";
import { theme } from "./common/GlobalTheme";
import theme2 from "./common/theme.json";
import theme3 from "./common/myTheme";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import navBarLogo from './Images/androidthings_logo.svg'
// import 'bootstrap/dist/css/bootstrap.min.css'


const styles = theme =>
  console.log(theme) || {
    root: {
      marginLeft: 'auto',
      marginRight: 'auto',
      padding: 20,
      maxWidth: 1700,
      align: "center",
      flexGrow: 1
    },
    form: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-evenly"
    },
    grow: {
      flexGrow: 1
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20
    },
    paper: {
      marginLeft: '5%',
      marginRight: '5%',
      padding: 20,
    },
    myContent:{

      display: 'flex',
      justifyContent: 'center',
    }
  };

///className={classes.root}
export default withStyles(styles)(
  class App extends Component {
    render() {
      const { classes } = this.props;

      return (
        <MuiThemeProvider theme={theme3}>
        <AppBar position="sticky">
              <Toolbar>
                <IconButton
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="Menu"
                >
                  <MenuIcon />
                </IconButton>
                <img id="logo" src={navBarLogo} alt="Logo" />
                
              </Toolbar>
            </AppBar>
          
          <div class="container-bg">
            <Paper className={classes.paper}>
              
              <div className="MainContent">
                <Title />
                <Overview name="Overview" />
                <hr />
                <Screenshots name="Screenshots" />
                <hr />
                <Schematics name="Schematics" />
                <hr />
                <Pre_requisites name="Pre-requisites" />
                <hr />
                <Build name="Build" />
                <hr />
                <License />
                <hr />
                
              </div>
            </Paper>
          </div>
        </MuiThemeProvider>
      );
    }
  }
);
