// src/data/portfolio.ts

export const portfolioData = {
  personal: {
    name: "Md Jakir Hossain", // REPLACE WITH YOUR REAL NAME
    role: "Junior Full-Stack Engineer",
    location: "Bangladesh (Remote Ready)",
    bio: "Engineering reliability into complex systems. Specializing in high-performance web architecture and fintech integrations.",
    availability: "Available for Senior/Staff Roles",
  },
  nexovate: {
    role: "Lead Architect",
    company: "NexovateLabs",
    description:
      "Architected enterprise ERP solutions and SaaS platforms. Led a distributed team to build 'TourBuddy' (automated KYC) and 'DigiWallet' (ACID-compliant fintech).",
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
    "Git & GitHub Workflow",
  ],
  projects: [
    {
      id: 1,
      title: "TravelBuddy",
      category: "Social Media",
      image: "/images/travelBuddy.png",

      // Short description for the Grid Card (keep it < 100 chars)
      shortDescription:
        "A secure, community-driven travel platform connecting travelers with verified local hosts",

      // Long description for the Modal (can be paragraphs)
      longDescription:
        "TourBuddy is a modern Single Page Application (SPA) designed to solve the trust deficit in community travel. It enables Travelers to find unique trips, Hosts to manage expeditions, and Moderators to ensure platform safety through rigorous identity checks. Built with Next.js, Tailwind CSS, and Supabase, it features real-time chat, booking management, and AI-driven recommendations.",

      tech: [
        "Next.js",
        "TypeScript",
        "Tailwind",
        "Prisma",
        "PostgreSQL",
        "Nodejs",
        "Express",
        "Shadcn UI",
        "Zod",
        "JWT",
        "Bcrypt",
        "Postman",
      ],

      // Links
      frontendRepo: "https://github.com/jakir-md/tourbuddy-client",
      backendRepo: "https://github.com/jakir-md/tourbuddy-server",
      live: "https://tourbuddy-client-ppt5.vercel.app/",
      video: "https://www.youtube.com/embed/uWueCJ5tf2w",
    },
    {
      id: 2,
      title: "DigiWallet",
      category: "Digital Wallet System",
      image: "/images/digiwallet.png",

      // Short description for the Grid Card (keep it < 100 chars)
      shortDescription:
        "A digital wallet service that facilitates transactions in our day-to-day life.",

      // Long description for the Modal (can be paragraphs)
      longDescription:
        "A secure, role-based, and user-friendly frontend application for a Digital Wallet System — inspired by popular platforms like bKash and Nagad. This project enables Users, Agents, and Admins to perform financial operations, manage wallets, and monitor transactions through an intuitive dashboard interface.",

      tech: [
        "React",
        "React Router",
        "Redux",
        "RTK Query",
        "TypeScript",
        "Shadcn UI",
        "Tailwind",
        "Nodejs",
        "Express",
        "MongoDB",
        "Mongoose",
        "JWT",
      ],

      frontendRepo: "https://github.com/jakir-md/ph2-assignment6",
      backendRepo: "https://github.com/jakir-md/ph2-assignment5",
      live: "https://digiwallet-front.vercel.app/",
      video: "https://www.youtube.com/embed/uWueCJ5tf2w",
    },
  ],
};
