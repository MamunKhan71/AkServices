
import React from 'react'
import LinkedinLogo from './icon/linkedin-logo'
import FacebookLogo from './icon/facebook-logo'
import InstagramLogo from './icon/insta-logo'
import XLogo from './icon/x-logo'

const SocialContainer = () => {
    return (
        <div className='flex gap-[22px] items-center'>
            <LinkedinLogo />
            <FacebookLogo />
            <InstagramLogo />
            <XLogo />
        </div>
    )
}

export default SocialContainer