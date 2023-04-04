import React from 'react'

export default function PersonalSites() {
  return (
    <div className='main'>
      <a className='button' href='./'>&lt;- back to homepage</a>
      <div style={{display:'flex', flexFlow:'column', marginTop:'8px'}}>
        {/* Blind Tiger website */}
        <h2 style={{marginTop:'8px'}}>Blind Tiger - Band Website</h2>
        <p style={{margin:'8px'}}>This is a webpage I developed in React for the metal band Blind Tiger.</p>
        <a href='https://blindtiger.rocks' className='button' target="_blank" rel="noopener noreferrer">Blind Tiger website</a>
        <h2 style={{marginTop:'8px'}}>hunty's doodles - Artist Website</h2>
        <p style={{margin:'8px'}}>A website I created for my art using React. (Reused a lot of code to create this developer site)</p>
        <a href='https://huntysdoodles.com' className='button' target="_blank" rel="noopener noreferrer">hunty's doodles website</a>
      </div>
    </div>
  )
}
