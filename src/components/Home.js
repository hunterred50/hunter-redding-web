import React from 'react'
// import profileImg from '../images/profileImg.png'
import {ReactComponent as CalendarLogo} from '../images/calendar.svg'
import SocialIcons from './SocialIcons'

export default function Home() {
  return (
    <div className='main'>
      {/* profile icon */}
      {/* <div style={{display:'flex',justifyContent:'center',width:'100%'}}><img style={{width:'170px'}} alt='profile picture' src={profileImg}/></div> */}

      {/* header title */}
      <div style={{marginTop:'5px'}}>
        <h1>Hunter Redding</h1><h3>(they/them)</h3>

        {/* social icon buttons */}
        <SocialIcons/>

        {/* description */}
        <p style={{marginTop:'7px', fontSize:'15px'}}>
          A passionate Front End Developer with experience in graphic design who’s been developing digital media content for over 10 years. I’m looking for another company to grow my skill set and challenge me so I can continue to build a portfolio I’m proud of.
        </p>
      </div>

      {/* link list */}
      <div style={{display:'flex', flexFlow:'column', marginTop:'-4px'}}>
        <a href='./work-sites' className='button'>Job-Related sites</a>
        <a href='./personal-sites' className='button'>Personal sites</a>        
      </div>

      <a href='https://calendly.com/hunterredding/' target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}}><div className='calendly'><CalendarLogo className='calendlySVG'/>Schedule a call on my Calendly!</div></a>

      {/* <hr style={{borderTop:'4px solid #c0577a', width:'100%', margin:'20px 0'}}/> */}
    </div>
  )
}