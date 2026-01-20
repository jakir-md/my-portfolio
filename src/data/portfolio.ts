// src/data/portfolio.ts

export const portfolioData = {
    personal: {
        name: "Md Jakir Hossain", // REPLACE WITH YOUR REAL NAME
        role: "Senior Full-Stack Engineer",
        location: "Bangladesh (Remote Ready)",
        bio: "Engineering reliability into complex systems. Specializing in high-performance web architecture and fintech integrations.",
        availability: "Available for Senior/Staff Roles",
    },
    nexovate: {
        role: "Lead Architect",
        company: "NexovateLabs",
        description: "Architected enterprise ERP solutions and SaaS platforms. Led a distributed team to build 'TourBuddy' (automated KYC) and 'DigiWallet' (ACID-compliant fintech).",
        url: "https://nexovatelabs.com",
    },
    skills: [
        "Next.js 16 (App Router)",
        "React 19",
        "Tailwind css",
        "Framer Motion",
        "Shadcn UI",
        "TypeScript",
        "PostgreSQL & Prisma",
        "MongoDB & Mongoose",
        "Git & GitHub Workflow"
    ],
    projects: [
        {
            title: "DigiWallet",
            category: "Fintech Architecture",
            tech: "Node.js, PostgreSQL, ACID",
            description: "Engineered a ledger system for atomic transactions, ensuring zero financial drift between User, Agent, and Admin roles.",
            stats: "100% Data Integrity",
        },
        {
            title: "TourBuddy",
            category: "SaaS Platform",
            tech: "Next.js, Payment Gateways",
            description: "Architected a real-time booking engine with automated KYC verification pipelines, reducing manual admin overhead by 40%.",
            stats: "40% Less Ops Overhead",
        },
        {
            title: "Micro-Ops Polling System",
            category: "Hackathon Win",
            tech: "Nginx, Job Queues",
            description: "Solved a critical Nginx timeout issue during the CUET Hackathon by engineering a custom Polling Agent & Job Queue system.",
            stats: "Top 10 Finalist",
        }
    ]
};