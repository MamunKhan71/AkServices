import React from 'react'
import '../../components/css/scroll.css'
const HeroText = () => {

    return (
        <div className='absolute z-20 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full h-full'>
            <div className="relative w-full h-full overflow-hidden before:absolute before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-[1] before:transform">
                <div className="container mx-auto h-full w-full flex items-center justify-center flex-col relative z-50">
                    {/* Title */}
                    <div className="mt-5 max-w-4xl text-4xl md:text-5xl lg:text-6xl text-center mx-auto space-y-4">
                        <h1 className="block font-bold text-white  leading-[32px] md:leading-[48px] tracking-wider">
                            Elevate Your Space with
                        </h1>
                        <p className="text-white font-bold">
                            Ak Contractor Services
                        </p>
                    </div>
                    {/* End Title */}
                    <div className="mt-5 max-w-3xl text-center mx-auto">
                        <p className="text-lg text-white">
                            Transform your interiors with our expert design and renovation services. We bring creativity and precision to every project, ensuring a perfect blend of aesthetics and functionality.
                        </p>
                    </div>
                    {/* Buttons */}
                    <div className="mt-8 gap-3 flex justify-center">
                        <a
                            className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:from-violet-600 focus:to-blue-600 py-3 px-4"
                            href="#contact"
                        >
                            Get a Free Consultation
                            <svg
                                className="shrink-0 size-4"
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="m9 18 6-6-6-6" />
                            </svg>
                        </a>
                    </div>
                    {/* End Buttons */}
                    <div className='absolute bottom-0 w-full h-full'>
                        <div className="scrolldown" style={{ "--color": "skyblue" } as React.CSSProperties}>
                            <div className="chevrons">
                                <div className="chevrondown"></div>
                                <div className="chevrondown"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroText