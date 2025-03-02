/* eslint-disable @next/next/no-img-element */
'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import HeroText from './HeroText';

export default function HeroSlider() {
    return (
        <div className='w-full h-full absolute top-0 -z-20'>
            <Swiper
                spaceBetween={0}
                centeredSlides={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper h-screen w-full relative"
            >
                <SwiperSlide><img className='h-full w-full object-cover' src="/hero1.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-full w-full object-cover' src="/hero2.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-full w-full object-cover' src="/hero3.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-full w-full object-cover' src="/hero4.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-full w-full object-cover' src="/hero5.jpg" alt="" /></SwiperSlide>

            </Swiper>
            <div className='bg-black opacity-70 bg-blend-screen w-full h-full absolute top-0 z-10'>

            </div>
            <div className='container mx-auto w-full h-full'>
                <HeroText />
            </div>

        </div>
    );
}