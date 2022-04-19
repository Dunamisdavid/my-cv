import React, { Component } from 'react'
import Profile from './Profile';
import Education from './Education';
import Core from './Core';
import Career from './Career';
import Experience from './Experience';
import './Home.css'

class Home extends Component {
  render() {
    return (
      <div className='container'>
            
            <div className="col1 ">
                <h6> Faleye Oloruntobi David</h6>
                <hr/>
                <Profile/>
                <hr/>
                <Education/>
                <hr/>
                <Core/>
            </div>
            <div className="col2 col">
                 <Career/>
                <Experience/> 
            </div>
      </div>
    )
  }
}

export default Home;
