import { cn } from "@/lib/utils"

const ComponentHeader = ({ title, subtitle, className }: { title: string, subtitle: string, className?: string }) => {
    return (
        <div className={cn(`text-center mb-16 max-w-2xl mx-auto`, className)}>
            <h2 className="text-4xl font-bold mb-4">{title}</h2>
            <p className="text-gray-600 ">
                {subtitle}
            </p>
        </div>
    )
}

export default ComponentHeader