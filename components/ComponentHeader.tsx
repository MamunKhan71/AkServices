
const ComponentHeader = ({ title, subtitle }: { title: string, subtitle: string }) => {
    return (
        <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{title}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
                {subtitle}
            </p>
        </div>
    )
}

export default ComponentHeader