import React from 'react'
import {ReactComponent as GithubLogo} from '../images/github.svg'
import {ReactComponent as LinkedInLogo} from '../images/linkedin.svg'
import {ReactComponent as EmailLogo} from '../images/email.svg'

export default function SocialIcons() {
  return (
    <div style={{display:'flex', flexFlow:'row wrap', justifyContent:'flex-start', marginTop:'9px'}}>
        <a href='https://github.com/hunterred50' target="_blank" rel="noopener noreferrer"><div className='social-icons' style={{marginLeft:'0px'}}><GithubLogo className='svg-social-icon'/></div></a>
        <a href='https://www.linkedin.com/in/hunter-redding/' target="_blank" rel="noopener noreferrer"><div className='social-icons'><LinkedInLogo className='svg-social-icon'/></div></a>
        <a href='mailto:hunterred50@gmail.com' target="_blank" rel="noopener noreferrer"><div className='social-icons' style={{fontSize:'26px'}}><EmailLogo className='svg-social-icon' style={{width:'24px',height:'24px',marginTop:'3.3px'}}/></div></a>
    </div>
  )
}