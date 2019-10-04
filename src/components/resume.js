import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import anthony from '../photos/anthony.jpg';


class Resume extends Component {
  render() {
    return(
      <div className="resumebackground">
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src={anthony}
                alt="avatar"
                style={{height: '200px', borderRadius: '50%', width: '275px'}}
                className='resume-img'
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Anthony Cheng</h2>
            <h4>Software Development Engineer</h4>
            <p></p>
            <hr style={{borderTop: '3px solid #2e293a', width: '77%'}}/>
            <h5>Email</h5>
            <p>anthonycheng12@gmail.com</p>
            <a style={{color: 'yellow'}} href="https://github.com/anthonycheng12">Portfolio</a>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2015}
              endYear={2019}
              schoolName="New York University"
              schoolDescription="Bachelor of Arts in Computer Science | Minor in Web Programming and Applications"
               />
                <hr style={{borderTop: '3px solid #FFFFE0'}} />

              <h2>Experience</h2>

            <Experience
              startYear={"Dec 2019"}
              endYear={"Present"}
              jobCompany="Amazon"
              jobName="Software Development Engineer"
              jobDescription={[]}
              />

              <Experience
                startYear={"Jan 2019"}
                endYear={"July 2019"}
                jobCompany="Comcast"
                jobName="API Software Engineer Coop"
                jobDescription={
                  ["Launched a new project that leveraged Vue.js front end and Java API backend to create a search engine for Internal use",
                  "Fixed the autocomplete and search API’s so that they can be functional with the search engine", 
                  "Tested API’s locally using Postman, Maven, JavaScript Console",
                  "Participated in daily scrums, AGILE, bi-weekly sprint review and sprint planning", 
                  "Used Jira to manage stories and scope of projects", 
                  "Deployed internal search UI to AWS S3 Bucket, Cloudfront and Route 53"]}
                />
              <hr style={{borderTop: '3px solid #FFFFE0'}} />
              <h2>Skills</h2>
              <Skills
                  skill="Java"
                  />
              <Skills
                  skill="Vue.js"
                  />
              <Skills
                skill="Javascript"
                />
                <Skills
                  skill="HTML/CSS"
                  />
                  <Skills
                    skill="Node.js"
                    />
                    <Skills
                      skill="React.js"
                      />
                
                  

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
