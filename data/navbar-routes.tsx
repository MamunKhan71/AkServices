import { BarChart3, Code2, CreditCard, Globe, LayoutGrid, LifeBuoy, PenTool, Settings, Shield, Smartphone, Sparkles, Users } from "lucide-react";

export const navbarRoutes = [
    {
        "label": "Home",
        "href": "/"
    },
    {
        "label": "Services",
        submenu: [
            {
                group: "Glass Studio Service",
                items: [
                    {
                        label: "Frosted Glass Door with Fix Panel",
                        description: "Frosted Glass Door with Fix Panel",
                        href: "https://oneexcelsg.com/frosted-glass-door-with-fix-panel/",
                        icon: <Globe className="h-5 w-5 text-primary" />,
                    },
                    {
                        label: "Shop Front Glass Door",
                        description: "Shop Front Glass Door",
                        href: "https://oneexcelsg.com/shop-front-glass-door/",
                        icon: <Smartphone className="h-5 w-5 text-primary" />,
                    },
                    {
                        label: "Glass Pattison Shopping mall and Any Office",
                        description: "Glass Pattison Shopping mall and Any Office",
                        href: "https://oneexcelsg.com/glass-pattison-shopping-mall-and-any-office/",
                        icon: <Code2 className="h-5 w-5 text-primary" />,
                    },
                    {
                        label: "Kitchen Color Back Flash Glass",
                        description: "Kitchen Color Back Flash Glass",
                        href: "https://oneexcelsg.com/kitchen-color-back-flash-glass/",
                        icon: <LayoutGrid className="h-5 w-5 text-primary" />,
                    },
                    {
                        label: "Custom Glass work Design & Installation",
                        description: "Custom Glass work Design & Installation",
                        href: "https://oneexcelsg.com/custom-glass-work-design-installation/",
                        icon: <PenTool className="h-5 w-5 text-primary" />,
                    },
                ],
            },
            {
                group: "Glass Studio Service 2",
                items: [
                    {
                        label: "Soft Closing Sliding Glass Door",
                        description: "Soft Closing Sliding Glass Door",
                        href: "https://oneexcelsg.com/soft-closing-sliding-glass-door/",
                        icon: <Sparkles className="h-5 w-5 text-primary" />,
                    },
                    {
                        label: "Slidin, Swing, Shower Skin Door Installation",
                        description: "Slidin, Swing, Shower Skin Door Installation",
                        href: "https://oneexcelsg.com/slidin-swing-shower-skin-door-installation/",
                        icon: <BarChart3 className="h-5 w-5 text-primary" />,
                    },
                    {
                        label: "Staircase Railing Glass",
                        description: "Staircase Railing Glass",
                        href: "https://oneexcelsg.com/staircase-railing-glass/",
                        icon: <CreditCard className="h-5 w-5 text-primary" />,
                    },
                    {
                        label: "Toilet Shower Screen",
                        description: "Toilet Shower Screen",
                        href: "https://oneexcelsg.com/toilet-shower-screen/",
                        icon: <Users className="h-5 w-5 text-primary" />,
                    },
                    {
                        label: "Tempered Glass Work",
                        description: "Tempered Glass Work",
                        href: "https://oneexcelsg.com/tempered-glass-work/",
                        icon: <Settings className="h-5 w-5 text-primary" />,
                    },
                ],
            },
            {
                group: "Canopy Glass Service",
                items: [
                    {
                        label: "Canopy Glass Roofing",
                        description: "Canopy Glass Roofing",
                        href: "https://oneexcelsg.com/canopy-glass-roofing/",
                        icon: <Shield className="h-5 w-5 text-primary" />,
                    },
                    {
                        label: "Canopy Polycarbonate Roofing",
                        description: "Canopy Polycarbonate Roofing",
                        href: "https://oneexcelsg.com/canopy-polycarbonate-roofing/",
                        icon: <LifeBuoy className="h-5 w-5 text-primary" />,
                    },
                    {
                        label: "Composite Panel Roofing",
                        description: "Composite Panel Roofing",
                        href: "https://oneexcelsg.com/composite-panel-roofing/",
                        icon: <Globe className="h-5 w-5 text-primary" />,
                    },
                    {
                        label: "Canopy Metal Work",
                        description: "Canopy Metal Work",
                        href: "https://oneexcelsg.com/canopy-metal-work/",
                        icon: <Smartphone className="h-5 w-5 text-primary" />,
                    },
                ],
            },
            {
                group: "Plumbing Service",
                items: [
                    {
                        label: "Installing Heater Switch",
                        description: "Installing Heater Switch",
                        href: "https://oneexcelsg.com/installing-heater-switch/",
                        icon: <Code2 className="h-5 w-5 text-primary" />,
                    },
                    {
                        label: "Installing Water Heater",
                        description: "Installing Water Heater",
                        href: "https://oneexcelsg.com/installing-water-heater/",
                        icon: <LayoutGrid className="h-5 w-5 text-primary" />,
                    },
                    {
                        label: "Installing Shower Set",
                        description: "Installing Shower Set",
                        href: "https://oneexcelsg.com/installing-shower-set/",
                        icon: <PenTool className="h-5 w-5 text-primary" />,
                    },
                    {
                        label: "Installing Water Tap",
                        description: "Installing Water Tap",
                        href: "https://oneexcelsg.com/installing-water-tap/",
                        icon: <Sparkles className="h-5 w-5 text-primary" />,
                    },
                ],
            },
        ],
    },
    {
        "label": "Portfolio",
        "href": "/our-portfolio"
    },
    {
        "label": "About",
        "href": "/about-us"
    },
    {
        "label": "Contact",
        "href": "/contact-us"
    }
]
