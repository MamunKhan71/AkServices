import React from 'react'

const FooterInfoBar = () => {
    return (
        <div className='bg-[#041428] w-full border border-b-0 border-x-0 border-t-[#232751]'>
            <div className='container mx-auto py-5 text-white text-sm'>
                <div className='flex justify-between items-center w-full'>
                    <p>&copy; Copyright 2025 <span className='text-secondary font-medium'> | AK Construction Services LTD.</span></p>
                    <div className='flex gap-10 items-center'>
                        <span>Privacy policy</span>
                        <span>Terms and conditions</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterInfoBar