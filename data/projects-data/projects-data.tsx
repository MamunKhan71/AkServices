
export interface projectsType {
    id: string;
    name: string;
    shortDescription: string;
    serviceType: string;
    image: string;
    rating: number;
    featured: boolean;
    date: string;
    price: number;
    fullDescription: string;
    reviews: {
        name: string;
        date: string;
        rating: number;
        comment: string;
    }[];
    services: string[];
}
export const projects: projectsType[] = [
    {
        id: "plumbing-service",
        name: "24/7 Plumbing Service",
        shortDescription:
            "Emergency plumbing services available 24/7 for all your plumbing needs including toilet chocking, water heater installation, and more.",
        serviceType: "Plumbing",
        image: "/portfolio/1/plumbing-services-ak-contractor-services-01.jpg",
        rating: 4.9,
        featured: true,
        date: "2023-12-01",
        price: 19.99,
        fullDescription:
            "Our 24/7 plumbing service offers immediate assistance for all your plumbing emergencies. We handle everything from toilet chocking to water heater installation, kitchen sink repairs, shower tap replacements, and more. Our team of experienced plumbers is available around the clock to ensure your plumbing issues are resolved promptly and efficiently.",
        reviews: [
            {
                name: "terriok_0605",
                date: "2 months ago",
                rating: 5,
                comment:
                    "Reasonable price, professional and speedy. Just a suggestion, maybe can do a simple cleaning once completed.",
            },
        ],
        services: [
            "Toilet chocking",
            "Water Heater Installation",
            "Kitchen Sink",
            "Shower tap",
            "Water Tap",
            "Toilet bowl installation",
        ],
    },
    {
        id: "glass-cabinet",
        name: "Glass Cabinet & Repair",
        shortDescription:
            "Professional glass cabinet installation, glass repair, glass hinges, toilet doors, and glass door services.",
        serviceType: "Glass Work",
        image: "/portfolio/3/glass-cabinet-ak-services-ltd-02.jpg",
        rating: 4.8,
        featured: false,
        date: "2022-06-01",
        price: 29.99,
        fullDescription:
            "Our glass services include professional installation and repair of glass cabinets, glass doors, toilet doors, and more. We use high-quality materials and employ skilled technicians to ensure durable and aesthetically pleasing results. Whether you need new glass installations or repairs to existing glass fixtures, our team has the expertise to deliver exceptional service.",
        reviews: [
            {
                name: "megachalizardxy",
                date: "6 months ago",
                rating: 5,
                comment: "Amazing handy man, assembled my wall cabinets & bookshelf",
            },
        ],
        services: ["Glass cabinet installation", "Glass repair", "Glass hinges", "Toilet doors", "Glass door"],
    },
    {
        id: "kitchen-renovation",
        name: "Kitchen Renovation",
        shortDescription:
            "Complete kitchen renovation services including cabinet installation, hacking, tiling, and sink installation.",
        serviceType: "Renovation",
        image: "/portfolio/kitchen-glass.jpg",
        rating: 4.9,
        featured: true,
        date: "2024-01-15",
        price: 299.99,
        fullDescription:
            "Transform your kitchen with our comprehensive renovation services. We handle everything from cabinet installation and hacking to tiling and sink installation. Our team works closely with you to design and implement a kitchen that meets your functional needs and aesthetic preferences. We use quality materials and employ skilled craftsmen to ensure a durable and beautiful result.",
        reviews: [
            {
                name: "johnsmith",
                date: "3 months ago",
                rating: 5,
                comment:
                    "Excellent work on my kitchen renovation. The team was professional and completed the project on time.",
            },
        ],
        services: [
            "Kitchen cabinet installation",
            "Hacking services",
            "Tiling",
            "Sink installation",
            "Kitchen tap installation",
        ],
    },
    {
        id: "toilet-renovation",
        name: "Toilet Renovation",
        shortDescription:
            "Complete toilet renovation including toilet bowl installation, shower tap replacement, and tiling.",
        serviceType: "Renovation",
        image: "/portfolio/6/toilet-door-glass-ak-services-ltd-03.jpg",
        rating: 4.7,
        featured: false,
        date: "2023-11-20",
        price: 199.99,
        fullDescription:
            "Our toilet renovation services cover everything from toilet bowl installation and shower tap replacement to tiling and overall design. We work with you to create a functional and aesthetically pleasing bathroom space. Our team of skilled professionals ensures that all installations are done correctly and to your satisfaction.",
        reviews: [
            {
                name: "sarahlee",
                date: "4 months ago",
                rating: 4,
                comment: "Very satisfied with the toilet renovation. The team was efficient and the result looks great.",
            },
        ],
        services: ["Toilet bowl installation", "Shower tap replacement", "Tiling", "Water tap installation"],
    },
    {
        id: "electrical-services",
        name: "Electrical Services",
        shortDescription: "Professional electrical services including light installation, wiring, and electrical repairs.",
        serviceType: "Electrical",
        image: "/portfolio/10/painting-services-ak-services-ltd-03.jpg",
        rating: 4.8,
        featured: false,
        date: "2023-09-05",
        price: 49.99,
        fullDescription:
            "Our electrical services cover a wide range of needs, from light installation and wiring to electrical repairs. Our licensed electricians ensure that all work is done safely and up to code. Whether you need new lighting fixtures installed or have electrical issues that need to be addressed, our team has the expertise to handle it.",
        reviews: [
            {
                name: "davidtan",
                date: "1 month ago",
                rating: 5,
                comment: "Excellent electrical work. The electrician was knowledgeable and efficient.",
            },
        ],
        services: ["Light installation", "Wiring", "Electrical repairs", "Electrical troubleshooting"],
    },
    {
        id: "carpentry-works",
        name: "Carpentry Works",
        shortDescription: "Custom carpentry services including cabinet making, shelving, and furniture assembly.",
        serviceType: "Carpentry",
        image: "/portfolio/plumbing-services-ak-contractor-services-02.jpg",
        rating: 4.9,
        featured: true,
        date: "2024-02-10",
        price: 149.99,
        fullDescription:
            "Our carpentry services include custom cabinet making, shelving, furniture assembly, and more. Our skilled carpenters work with quality materials to create durable and beautiful wooden fixtures for your home. Whether you need built-in cabinets, custom shelving, or help with furniture assembly, our team has the expertise to deliver exceptional results.",
        reviews: [
            {
                name: "lisamong",
                date: "2 months ago",
                rating: 5,
                comment: "Amazing carpentry work. The cabinets look beautiful and are very sturdy.",
            },
        ],
        services: ["Cabinet making", "Shelving", "Furniture assembly", "Custom woodwork"],
    },
    {
        id: "painting-services",
        name: "Professional Painting",
        shortDescription: "High-quality painting services for homes, offices, and commercial spaces.",
        serviceType: "Painting",
        image: "/portfolio/10/painting-services-ak-services-ltd-02.jpg",
        rating: 4.7,
        featured: false,
        date: "2023-08-15",
        price: 99.99,
        fullDescription:
            "Our professional painting services cover homes, offices, and commercial spaces. We use high-quality paints and employ skilled painters to ensure a flawless finish. Whether you need interior or exterior painting, our team has the expertise to deliver exceptional results that enhance the appearance and value of your property.",
        reviews: [
            {
                name: "michaelwong",
                date: "5 months ago",
                rating: 4,
                comment: "Good painting job. The team was professional and the finish looks great.",
            },
        ],
        services: ["Interior painting", "Exterior painting", "Wall painting", "Ceiling painting", "Door painting"],
    },
    {
        id: "handyman-services",
        name: "General Handyman",
        shortDescription: "General handyman services for various home repair and maintenance needs.",
        serviceType: "Handyman",
        image: "/portfolio/8/handyman-services-ak-services-ltd-01.jpg",
        rating: 4.8,
        featured: false,
        date: "2023-10-10",
        price: 39.99,
        fullDescription:
            "Our general handyman services cover a wide range of home repair and maintenance needs. From fixing leaky faucets to assembling furniture, our skilled handymen can handle various tasks around your home. We provide prompt and reliable service to ensure your home remains in good condition.",
        reviews: [
            {
                name: "jennylim",
                date: "3 months ago",
                rating: 5,
                comment: "Excellent handyman service. Fixed multiple issues in my home efficiently.",
            },
        ],
        services: ["Furniture assembly", "Minor repairs", "Fixture installation", "Door repair", "Window repair"],
    },
]