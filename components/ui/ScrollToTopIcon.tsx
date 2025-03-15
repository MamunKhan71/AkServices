'use client'
const ScrollToTopIcon = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <button className='bg-green-500 rounded-full p-3 w-fit' onClick={() => scrollToTop()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
                <path d="M21.75 18.125L14.5 10.875L7.25 18.125" stroke="white" strokeWidth="2.41667" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </button>
    )
}

export default ScrollToTopIcon