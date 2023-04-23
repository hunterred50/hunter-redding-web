import React from 'react'

// Page for displaying links to sites I've developed through jobs that I've been a part of
export default function WorkSites() {
  return (
    <div className='main'>
      <a className='button' href='./'>&lt;- back to homepage</a>
      <div style={{display:'flex', flexFlow:'column', marginTop:'8px'}}>
        {/* How Money Works website */}
        <h2>How Money Works - Onboarding landing page</h2>
        <p style={{margin:'8px'}}>This is a page I developed for the How Money Works organization using React. I'm most satisfied with this site because of its responsive design and the cohesive and modern graphical design that was provided with the branding resources of the How Money Works book. The login page utilizes a simple local state verification, so returning users can access the faculty-only content with a simple passphrase.</p>
        <a href='https://hmw-org.vercel.app' className='button' target="_blank" rel="noopener noreferrer">How Money Works site</a>
        {/* Leadership Live Show site */}
        <h2 style={{marginTop:'8px'}}>Leadership Live Show - Finance Show site</h2>
        <p style={{margin:'8px'}}>I'm proud of this page for its click-to-scroll, collapsable navbar and overall responsive design.</p>
        <a href='https://leadership-live-show.vercel.app/' className='button' target="_blank" rel="noopener noreferrer">Leadership Live site</a>
        {/* Steve on TV site */}
        <h2 style={{marginTop:'8px'}}>Steve on TV - Speaker Personality media site</h2>
        <p style={{margin:'8px'}}>This is a site my most recent employer requested that I remake in the style of his old site, hence the older-looking style. I felt accomplished getting the looping scroll image to work in React and to bring a new responsive design to this old site's design.</p>
        <a href='https://steveontv.com' className='button' target="_blank" rel="noopener noreferrer">Steve on TV site</a>
      </div>
    </div>
  )
}
