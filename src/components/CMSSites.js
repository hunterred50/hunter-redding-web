import React from 'react'

// Page for displaying links to sites I've developed through jobs that I've been a part of
export default function CMSSites() {
  return (
    <div className='main'>
      <a className='button' href='./'>&lt;- back to homepage</a>
      <div style={{display:'flex', flexFlow:'column', marginTop:'8px'}}>
        {/* MTUEC website */}
        <h2>Mental Toughness University - Kajabi product website</h2>
        <p style={{margin:'8px'}}>I developed this site using Kajabi as a way for Siebold Success Network to sell course/membership products to their customers. We were able to direct market to customers through this site while customers used the site to access products they purchased through the site.</p>
        <a href='https://www.mtuec.com/' className='button' target="_blank" rel="noopener noreferrer">Mental Toughness University site</a>
        {/* MT Blog Wordpress */}
        <h2 style={{marginTop:'8px'}}>Mental Toughness Blog - Wordpress site</h2>
        <p style={{margin:'8px'}}>Wordpress blog site for Siebold Success Network. I maintained this site and its plugins, updated links and newsletter system.</p>
        <a href='https://mentaltoughnessblog.com/' className='button' target="_blank" rel="noopener noreferrer">Mental Toughness Blog site</a>
      </div>
    </div>
  )
}
