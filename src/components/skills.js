import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';

class Skills extends Component {
  render() {
    return(
      <Grid>
        <Cell col={12}>
          <div style={{display: 'inline-block'}}>{this.props.skill}</div>
        </Cell>
      </Grid>
    )
  }
}

export default Skills;
