import React from 'react'

// Page for displaying links to sites I've developed for personal projects
export default function PersonalSites() {
  return (
    <div className='main'>
      <a className='button' href='./'>&lt;- back to homepage</a>
      <div style={{display:'flex', flexFlow:'column', marginTop:'8px'}}>
        {/* Blind Tiger website */}
        <h2 style={{marginTop:'8px'}}>Blind Tiger - Band Website</h2>
        <p style={{margin:'8px'}}>This is a webpage I developed in React for the metal band Blind Tiger.</p>
        <a href='https://blindtiger.rocks' className='button' target="_blank" rel="noopener noreferrer">Blind Tiger website</a>
        {/* hunty's doodles website */}
        <h2 style={{marginTop:'8px'}}>hunty's doodles - Artist Website</h2>
        <p style={{margin:'8px'}}>A website I created for my art using React. (Reused a lot of code to create this developer site)</p>
        <a href='https://huntysdoodles.com' className='button' target="_blank" rel="noopener noreferrer">hunty's doodles website</a>
        {/* old portfolio website */}
        <h2 style={{marginTop:'8px'}}>Hunter Redding - Old Portfolio Website</h2>
        <p style={{margin:'8px'}}>The old version of this site that I created a few years ago after graduating college. I include this site because I really enjoy the react library that I used for the GUI. I think it was a neat idea, though I decided to go with something more easily navigable for my updated site.</p>
        <a href='https://website-hunterred50.vercel.app' className='button' target="_blank" rel="noopener noreferrer">Hunter Redding old website</a>
      </div>
    </div>
  )
}
