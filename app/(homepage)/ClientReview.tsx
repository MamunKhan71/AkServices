'use client';

import ComponentHeader from '@/components/ComponentHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { testimonialData } from '@/data/testimonial-data';
import Autoplay from 'embla-carousel-autoplay';
import { Calendar, Star } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const TestimonialCard = ({ testimonial }: { testimonial: any }) => (
    <div className="p-1 relative">
        <Card className="backdrop-blur-sm bg-transparent border transition-all duration-300 hover:border-primary hover:shadow-sm">
            <CardContent className="p-6 space-y-4">
                <div className="flex justify-between w-full items-center">
                    <div className="flex items-center gap-1 text-accent">
                        <span className="text-base font-semibold text-primary">{testimonial.rating}</span>
                        <Star size={16} fill="#FFC107" />
                    </div>
                    <div className="inline-flex gap-2 items-center text-muted-foreground text-sm">
                        <Calendar size={14} />
                        <p>{testimonial.date}</p>
                    </div>
                </div>
                <p className="text-sm text-foreground leading-relaxed line-clamp-3 group-hover:text-foreground text-justify text-gray-600 transition-colors duration-300">
                    {testimonial.quote}
                </p>
                <div className="flex items-center gap-5 border-t border-border pt-5">
                    <Image
                        className="rounded-full h-10 w-10 object-cover ring-2 ring-offset-2 ring-primary"
                        src={testimonial.image}
                        alt={`${testimonial.name} avatar`}
                        width={40}
                        height={40}
                    />
                    <div>
                        <h5 className="font-medium text-primary">{testimonial.name}</h5>
                        <span className="text-sm leading-4 text-gray-400">{testimonial.location}</span>
                    </div>
                </div>
            </CardContent>
        </Card>
        <div className="absolute inset-1 -z-10 opacity-5">
            <img src="plus.png" className="rounded-xl" alt="Background" />
        </div>
    </div>
);

export default function Testimonials() {

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialData.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="container mx-auto w-full space-y-6 relative mb-24">
            <ComponentHeader className='max-w-6xl' title='Client Testimonials' subtitle='We will work with you to develop individualised care plans, including management of chronic diseases. If we cannot assist, we can provide referrals or advice about the type of practitioner you require. We treat all enquiries sensitively and in the strictest confidence.'/>
            <div className="w-full">
                <Carousel
                    opts={{
                        align: 'start',
                        loop: true,
                    }}
                    plugins={[Autoplay({ delay: 3000 })]}
                    className="w-full"
                >
                    <CarouselContent>
                        {testimonialData.map((testimonial, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                <TestimonialCard testimonial={testimonial} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </div>
    );
}
