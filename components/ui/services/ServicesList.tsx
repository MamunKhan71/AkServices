import { ChevronRight } from "lucide-react";

type ServiceListProps = {
    title: string;
    services: string[];
};

const ServiceList: React.FC<ServiceListProps> = ({ title, services }) => {
    return (
        <div className="bg-white rounded-none shadow-lg overflow-hidden border border-zinc-100">
            <div className="bg-blue-600 px-4 py-3">
                <h2 className="text-lg font-bold text-white">{title}</h2>
            </div>
            <div className="divide-y divide-zinc-100">
                {services.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-2 px-4 py-3 hover:bg-blue-50 transition-colors cursor-pointer group"
                    >
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-600 group-hover:bg-blue-200">
                            <ChevronRight className="h-3.5 w-3.5" />
                        </div>
                        <span className="text-sm font-medium text-zinc-700 group-hover:text-blue-600">{item}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServiceList;
