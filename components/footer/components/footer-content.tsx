

const FooterContent = ({ title, links }: { title: string, links: string[] }) => {
    return (
        <div>
            <div className="space-y-2">
                <h1 className="text-white text-2xl font-medium md:leading-[27px]">{title}</h1>
                <div className="flex gap-1">
                    <hr className="w-14 border-[1px] rounded-full border-primary" />
                    <hr className="w-2 border-[1px] rounded-full border-primary" />
                    <hr className="w-2 border-[1px] rounded-full border-primary" />
                </div>
            </div>
            <div>
                <ul className="text-[#91A3B1] space-y-4 mt-6">
                    {links.map((link, index) => (
                        <li key={index} className="hover:text-white cursor-pointer">
                            {link}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default FooterContent;
