import React, { Component } from 'react'

class Education extends Component {
  render() {
    return (
      <div className='edu-cont con'>
        <h1 className='til'>Education</h1>
        <div className="edu">
            <h2 className='et'> Obafemi Awolowo University</h2>
            <h2 className='es'> Ile-ife, Osun State</h2>
            <h3 className='ed'> B.sc Eletronics and Electrical <br/> Engineering (Dec 2019)</h3>
        </div>

        <div className="edu">
            <h2 className='et'> Federal Polytechnic</h2>
            <h2 className='es'> Ede, Osun State</h2>
            <h3 className='ed'> OND Eletronics and Electrical <br/> Engineering (Aug 2019)</h3>
        </div>

        <div className="edu edu-3">
            <h2 className='et'> Fakunle Comprehensive High <br/> School</h2>
            <h2 className='es'> Osogbo, Osun State</h2>
            <h3 className='ed'> High School (Jul 2010)</h3>
            </div>
      </div>
    )
  }
}

export default Education;