import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const ProjectCards = ({ imageUrl, category, title }: { imageUrl: string, category: string, title: string }) => {
    return (
        <div className="space-y-3 w-full h-full">
            <Dialog>
                <DialogTrigger className="w-full">
                    <img src={imageUrl} className="h-[336.327px] object-cover rounded-none w-full" alt={title} />
                </DialogTrigger>
                <DialogContent className="p-8 w-full  max-w-[90%] sm:max-w-[60%] lg:max-w-[50%] bg-white rounded-none shadow-lg">
                    <DialogHeader>
                        <DialogTitle>{title}</DialogTitle>
                    </DialogHeader>
                    <img src={imageUrl} className="w-full h-[550px] object-cover rounded-none" alt={title} />
                </DialogContent>
            </Dialog>
            <div className="flex items-center gap-2 w-full">
                <span className="h-2 w-2 rounded-full bg-[#D9D9D9]"></span>
                <span className="text-xs">{category}</span>
            </div>
            <p className="text-xl md:leading-[32px] w-full">{title}</p>
        </div>
    );
};

export default ProjectCards;
