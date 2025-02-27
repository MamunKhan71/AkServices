import React from 'react'
import SocialContainer from './social-container'
import DummyLogo from './icon/dummyLogo'

const FooterFirst = () => {
    return (
        <div className='space-y-11'>
            <div className='space-y-3'>
                {/* <img className='w-[133.873px]' src="/logo.png" alt="acote-logo" /> */}
                <DummyLogo />
                <p className='text-base text-white max-w-80'>Welcome to our business powerhouse, where we seamlessly integrate BPO services, innovative Design Solutions, result-driven Digital Marketing strategies, and transformative IT Solutions to fuel your success.</p>
            </div>
            <div>
                <SocialContainer />
            </div>
        </div>
    )
}

export default FooterFirst