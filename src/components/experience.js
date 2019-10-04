import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Experience extends Component {
  render() {
    return(
      <Grid>
        <Cell col={8}>
          <h3>{this.props.jobCompany}</h3>
          <h4 style={{marginTop:'0px'}}>{this.props.jobName}</h4>
          <p>{this.props.startYear} - {this.props.endYear}</p>
          {<p>{
            <ul>
              {
                this.props.jobDescription.map(item => <li>{item}</li>)
                } 
            </ul>
          }</p>}
          {/* <Text>
              <ul style={{ padding: 5 }}>
                {
                  product.description.split('\\n')
                    .map(item => <li>{item}</li>)
                }
              </ul>
            </Text> */}
        </Cell>
      </Grid>
    )
  }
}

export default Experience;
