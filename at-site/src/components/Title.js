
import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'


export default class Title extends Component {
  render() {


    return (
      <div>
        <Typography variant='display1' align='left' gutterBottom >
          <p  my = {12} >          
            Android project name
          </p>
        </Typography>
      </div>
    )
  }
}
