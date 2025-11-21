export const portfolioData = {
    personal: {
        name: "NARENDRA",
        greeting: "👋 Hello, I'm",
        subtitle: "Civil Engineering Student @ IIT (BHU) | Full Stack Developer | Competitive Programmer",
        email: "narendrajat1506@gmail.com",
        phone: "+91 8619442726",
        location: "Barmer, Rajasthan 344031"
    },

    academic: [
        {
            degree: "B.Tech in Civil Engineering",
            institution: "IIT (BHU), Varanasi",
            score: "8.08",
            scoreLabel: "CGPA",
            year: "2026"
        },
        {
            degree: "CBSE (XII)",
            institution: "JNV Pachpadra Barmer",
            score: "92.2%",
            scoreLabel: "Percentage",
            year: "2020"
        },
        {
            degree: "CBSE (X)",
            institution: "JNV Pachpadra Barmer",
            score: "88.2%",
            scoreLabel: "Percentage",
            year: "2018"
        }
    ],

    skills: {
        programmingLanguages: {
            icon: "💻",
            title: "Programming Languages",
            skills: ["C/C++", "Python", "JavaScript"]
        },
        frameworks: {
            icon: "🛠️",
            title: "Frameworks & Technologies",
            skills: ["React", "Next.js", "Django", "Node.js", "MongoDB", "Tailwind", "MySQL", "Git"]
        },
        interests: {
            icon: "🎯",
            title: "Areas of Interest",
            skills: ["Data Structures & Algorithms", "Competitive Programming", "Web Development"]
        }
    },

    experience: [
        {
            role: "Backend Development Intern",
            company: "Centernet Pvt. Ltd.",
            date: "May'25 – Jul'25",
            description: [
                "Implemented JWT-based authentication and role-based authorization, securing over 1500+ user accounts efficiently.",
                "Reduced API response time by 15% through database query optimization and schema refactoring.",
                "Integrated Stripe, Twilio, and Firebase to enable payments, real-time communication and data synchronization."
            ],
            technologies: ["Node.js", "Express.js", "MongoDB", "JWT", "Stripe", "Firebase", "Twilio"]
        },
        {
            role: "Technical Intern",
            company: "Laboratoire Hubert Curien, Saint-Étienne",
            date: "May'24 – Jul'24",
            description: [
                "Implemented a demo of Constrained Web of Things for data-constrained and low-bandwidth environments.",
                "Built a robust pipeline that serialized data into CBOR, reducing data size by 20% and processing time by 100ms.",
                "Serialized data using knowledge graphs, linked lists, CBOR library, and Libcoap, to optimize communication.",
                "Resolved 20+ bugs in a 1000+ line codebase, reducing data latency and improving pipeline efficiency."
            ],
            technologies: ["Computer Networking", "Advanced Data Structure", "Modular Programming", "Libcoap"]
        },
        {
            role: "Marketing Co-ordinator",
            company: "Kashiyatra'23",
            date: "Nov'22 - Jan'23",
            description: [
                "Served as Marketing Coordinator, gained hands-on experience in marketing strategies and campaign execution.",
                "Part of a 10-member team, guided by seniors, managing outreach to over 900+ students.",
                "Contributed to the successful promotion and execution of the festival, attended by 10,000+ participants."
            ],
            technologies: []
        }
    ],

    projects: [
        {
            icon: "💬",
            title: "Gapshap",
            tagline: "A real-time chat application",
            date: "Jul'25 – Sept'25",
            description: [
                "Developed a real-time chat platform, enabling seamless chat providing enhanced user experience.",
                "Implemented secure message caching enabling data protection through Redis and pub/sub architecture.",
                "Implemented secure authentication using Google provider, and JWT for authorization."
            ],
            technologies: ["Next.js", "TypeScript", "Redis", "Pusher", "Next-Auth", "TailwindCSS"]
        },
        {
            icon: "💧",
            title: "Web Based Hydrological Computational System",
            tagline: "Full-stack hydrology calculation platform",
            date: "Mar'25 - May'25",
            description: [
                "Built a full-stack hydrology app with Python/Django/JS, automating calculations that helps 150+ students annually.",
                "Developed a Django RESTful API for data ingestion, server-side processing, and database persistence.",
                "Implemented a dynamic frontend with JavaScript to consume JSON and render client-side data visualizations."
            ],
            technologies: ["Python", "Django", "JavaScript", "REST API"]
        }
    ],

    publications: [
        {
            badge: "🎓 Research Publication",
            title: "Leveraging Virtual Sensors for Enhanced Ground Truthing in Chlorophyll-A Predictions with Spaceborne Data",
            conference: "AGU 2024"
        }
    ],

    achievements: [
        {
            icon: "🏆",
            title: "LeetCode Weekly 463",
            rank: "Global Rank 1,756",
            details: ""
        },
        {
            icon: "⭐",
            title: "CodeChef Starter 196",
            rank: "Global Rank 654",
            details: "Division 4"
        },
        {
            icon: "🎯",
            title: "Codeforces Round 1043",
            rank: "Global Rank 1,097",
            details: "Division 3"
        },
        {
            icon: "💪",
            title: "Codeforces",
            rank: "Specialist Handle",
            details: ""
        }
    ],

    extraCurricular: {
        badge: "🤝 Community Service",
        title: "JEE-2023 Mentorship Initiative",
        description: "As a part of the ABPUA's initiative, I actively contributed to its mission of democratizing guidance for JEE-2023 aspirants by <strong style=\"color: var(--color-primary-light);\">mentoring 100+ underprivileged students</strong> during the counselling process. I highlighted the facilities, academic environment, and culture at IIT-BHU to support informed decision-making, helping students make the best choice for their future."
    }
};
