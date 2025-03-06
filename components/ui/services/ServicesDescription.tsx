import { cn } from "@/lib/utils"

const ServicesDescription = ({ description, className }: { description: string, className?: string }) => {
    return (
        <p className={cn(`mt-4 text-zinc-600`, className)}>{description}</p>
    )
}

export default ServicesDescription