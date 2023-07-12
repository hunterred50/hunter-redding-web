import React from 'react'
import iphonedesign from '../images/graphicexamples/iphonedesign.jpeg'

import showflier1 from '../images/graphicexamples/showposter.jpeg'
import showflier2 from '../images/graphicexamples/show1poster.jpeg'
import showflier3 from '../images/graphicexamples/show2poster.jpeg'
import showflier4 from '../images/graphicexamples/show3poster.jpeg'
import southdiesagain from '../images/graphicexamples/southdiesagain.jpeg'

import lostdogssticker from '../images/graphicexamples/lostdogssticker.jpeg'
import lostdogspatch from '../images/graphicexamples/lostdogspatch.jpeg'
import productexamples from '../images/graphicexamples/productexamples.jpeg'

import shiba from '../images/graphicexamples/shibaillustration.jpeg'
import halloween from '../images/graphicexamples/halloweenillustration.jpeg'
import highwayillustration from '../images/graphicexamples/highwayillustration.jpeg'
import cowdog from '../images/graphicexamples/cowdogillustration.jpeg'
import foster1 from '../images/graphicexamples/foster1illustration.jpeg'
import foster from '../images/graphicexamples/fosterillustration.jpeg'
import sww from '../images/graphicexamples/swwillustration.jpeg'
import tranquil from '../images/graphicexamples/tranquilillustration.jpeg'

const imgstyle = {width:'100%', margin: '10px 0', boxShadow: '0 0 10px #aa335b'}

// Page for displaying links to sites I've developed through jobs that I've been a part of
export default function GraphicIllustration() {
  return (
    <div className='main'>
      <a className='button' href='./'>&lt;- back to homepage</a>
      <div style={{display:'flex', flexFlow:'column', marginTop:'8px'}}>
        <h1>Graphic Design/Illustration examples</h1>
        <p style={{margin: '5px 0 20px 0'}}>Here are examples of my graphic design & illustration work. All of this work is mine including product photography.</p>
        {/* iPhone app home design */}
        <h2>iPhone App Home redesign</h2>
        <img style={imgstyle} alt='iphone' src={iphonedesign}/>
        {/* Illustration */}
        <h2>Illustration</h2>
        <img style={imgstyle} alt='shiba' src={shiba}/>
        <img style={imgstyle} alt='halloween' src={halloween}/>
        <img style={imgstyle} alt='highway' src={highwayillustration}/>
        <img style={imgstyle} alt='cowdog' src={cowdog}/>
        <img style={imgstyle} alt='foster1' src={foster1}/>
        <img style={imgstyle} alt='foster' src={foster}/>
        <img style={imgstyle} alt='tranquil' src={tranquil}/>
        <img style={imgstyle} alt='sww' src={sww}/>
        {/* Product design */}
        <h2>Product design</h2>
        <img style={imgstyle} alt='lostdogssticker' src={lostdogssticker}/>
        <img style={imgstyle} alt='lostdogspatch' src={lostdogspatch}/>
        <img style={imgstyle} alt='productexamples' src={productexamples}/>
        {/* Poster/Flier design */}
        <h2>Poster/Flier design</h2>
        <img style={imgstyle} alt='show-flier4' src={showflier4}/>
        <img style={imgstyle} alt='show-flier3' src={showflier3}/>
        <img style={imgstyle} alt='southdiesagaintourflier' src={southdiesagain}/>
        <img style={imgstyle} alt='show-flier2' src={showflier2}/>
        <img style={imgstyle} alt='show-flier1' src={showflier1}/>
      </div>
    </div>
  )
}
