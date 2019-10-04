import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://i.ibb.co/0cHWGNg/bitmoji.png"
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Software Engineer</h1>

            <hr/>

          <p>Java | JavaScript | Vue.js | HTML/CSS | NodeJS | Express | MongoDB</p>
          <p>Email: anthonycheng12@gmail.com</p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/anthonycheng12/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/anthonycheng12" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
