import { cn } from '@/lib/utils'
import Image from 'next/image'

const ServicesPreviewImage = ({ imageSrc, alt, className }: { imageSrc: string, alt: string, className?: string }) => {
    return (
        <div className="overflow-hidden rounded-none">
            <Image
                src={imageSrc}
                alt={alt}
                width={500}
                height={300}
                className={cn(`h-full w-full object-cover`, className)}
            />
        </div>
    )
}

export default ServicesPreviewImage