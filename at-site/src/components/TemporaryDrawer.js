import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { IconButton, SwipeableDrawer } from '@material-ui/core';
import MenuIcon from "@material-ui/icons/Menu";
import { Link, animateScroll as scroll } from "react-scroll";

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

class TemporaryDrawer extends React.Component {
  constructor()
  {
    super();
    this.state = {
      top: false,
      left: false,
      bottom: false,
      right: false,
    };
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }
  

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          {['Overview', 'Screenshots', 'Schematics', 'PreRequisites', 'Build', 'License'].map((text, index) => (
            <Link
                activeClass="active"
                to={text}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
            <ListItem button key={text}>
              {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
              
              <ListItemText primary={text} />
              
            </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
      
      </div>
    );

    return (
      <div>
        <IconButton
                className={classes.menuButton}
                color="inherit"
                aria-label="Menu" 
                onClick={this.toggleDrawer('left', true)}
              >
                <MenuIcon />
        </IconButton>
        <SwipeableDrawer 
        open={this.state.left} 
        onClose={this.toggleDrawer('left', false)}
        onOpen={this.toggleDrawer('left', true)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </SwipeableDrawer>
      </div>
    );
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TemporaryDrawer);