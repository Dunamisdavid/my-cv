import React, { Component } from 'react'

class Experience extends Component {
  render() {
    return (
      <div className='exp-col'>
          <h1 className='til'>Experience</h1>
          <hr/>
          <div className='exp1 exp'>
                <h1>Graphic Designer</h1>
                <p>Solution to our generation (STOG), Ibadan, Oyo State / Jan 2021  - Sept 2021 </p>
                <ul>
                    <li>Developed numerous programs(logos,brochures, 
                        newsletters, infographoic presentations, and advertisements) 
                        for the organization.</li>
                    <li>Managed up to 5 projects or tasks at a given time while
                        under pressure to meet weekly deadlines.</li>
                    <li>Collaborated on a project to create layouts and images for 
                        written online content.</li>
                </ul>
          </div>

          <div className='exp1 exp'>
                <h1>Wordpress Developer</h1>
                <p>Sprinble, Lagos State / Sep 2018 - Jan 2020</p>
                <ul>
                    <li>Build website using WordPress.</li>
                    <li>Provide technical support to clients.</li>
                    <li>Write coding using HTML and CSS.</li>
                    <li>Introduced new plug-in-and extensions to make the
                        website more usable and interactive.</li>
                    <li>Design new features for existing websites.</li>
                    <li>Act as the company expect in creating PPC and Google
                        Ad-words campaigns to be integrated with new website
                        builds.</li>
                    <li>Customize themes to meet clients’ requirements.</li>
                    <li>Manage a user guide to help clients understand site
                        features and management of website to increase visitor
                        satisfaction.</li>
                    <li>Work on a new mobile development project to expand the 
                        company into mobile website development services.</li>
                </ul>
          </div>
      </div>
    )
  }
}


export default Experience;