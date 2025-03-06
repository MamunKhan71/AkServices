import { cn } from "@/lib/utils"

const ServicesTitle = ({ title, className }: { title: string, className?: string }) => {
    return (
        <h2 className={cn(`text-2xl font-bold`, className)}>{title}</h2>
    )
}

export default ServicesTitle