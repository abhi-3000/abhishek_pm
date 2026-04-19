import React from 'react';
import { FaReact, FaDatabase, FaJs, FaServer,FaUserFriends, FaClipboardCheck, FaRegLightbulb, FaRocket } from "react-icons/fa";
import {
  FaLightbulb,
  FaUsers,
  FaProjectDiagram,
  FaPlug,
  FaCogs,
  FaTools,FaMapMarkerAlt, FaCity, FaGlobe
} from "react-icons/fa";
import ca from "./assets/ca_ss.png";
import bw from "./assets/bw_logo.jpg";
import cvnt from "./assets/cvnt.webp";

export const personalData = {
  name: "Abhishek Mandal",
  title: "Product Manager & Technical Builder",
  intro: "Bridging the gap between engineering and user needs. With a strong foundation in full stack development and a passion for scalable systems, I build products that solve real problems.",
  about: "I am a passionate builder transitioning into Product Management. Currently in my final year at IIIT Ranchi pursuing Electronics and Communication Engineering, I have spent years mastering the Software Development. My technical background allows me to deeply understand engineering constraints, while my focus on user centric design ensures we build the right solutions. I thrive in taking ownership of a product from ideation to launch.",
  email: "abhishekmandalmnps@gmail.com",
  phone: "9508056814"
};

// export const skillsData = {
//   product: ["Product Roadmapping", "User Research", "Agile Methodologies", "A/B Testing", "Go To Market Strategy", "Data Analytics"],
//   technical: ["MongoDB", "Express.js", "React.js", "Node.js", "Next.js", "C++", "DSA", "Tailwind CSS"],
//   soft: ["Cross Functional Leadership", "Stakeholder Management", "Clear Communication", "Extreme Ownership"]
// };

export const skillsData = [
  {
    category: "Technical Foundation",
    skills: ["SQL/NoSQL", "TypeScript/JavaScript", "React.js/Next.js", "Node.js/Express.js", "RESTful APIs", "PostgreSQL/MongoDB", "AWS S3", "Git/GitHub", "Retool", "Postman", "DSA", "C++", "Tailwind CSS"]
  },
  {
    category: "Product Skills",
    skills: ["Product Thinking", "Product Roadmapping", "Writing PRDs", "Competitive Analysis", "A/B Testing", "Agile Methodologies", "Figma"]
  },
  {
    category: "Business & Strategy",
    skills: ["Business Models", "Market Sizing", "Unit Economics", "Financial Literacy", "Metrics & KPIs", "Go To Market Strategy", "Data Analytics"]
  },
  {
    category: "UX & Design Literacy",
    skills: ["UX Principles", "User Research", "User Interviews", "Usability Testing", "Mobile First Design", "Information Architecture", "Accessibility"]
  },
  {
    category: "Soft Skills",
    skills: ["Structured Communication", "Stakeholder Alignment", "Cross Functional Collaboration", "Extreme Ownership", "Active Listening", "Saying No With Reasoning", "Meeting Facilitation", "Giving & Receiving Feedback", "Conflict Resolution", "Executive Presentation"]
  },
  {
    category: "Tools",
    skills: ["Jira", "Excel / Google Sheets", "Notion"]
  }
];

export const experienceData = [
  {
  id: 1,
  company: "Betterway Ayurveda",
  logoUrl: bw,
  role: "SDE Intern",
  duration: "Jan 2025 - Present",
  location: "Gurugram, Haryana",
  description: [
    "Conducted user research with in-house practitioners, mapped EMR workflows, and authored a detailed PRD defining problem statements, solutions, and success metrics; led the implementation of a contextual recommendation engine on historical prescription data, reducing EMR entry time by ~80 seconds per session and improving practitioner throughput.",
    "Identified fragmentation across consultation, medicine, and procedure billing flows and led end-to-end product development of a unified packages-based billing system—defining requirements, designing data architecture and service-mapping logic, and iterating UI flows cross-functionally—reducing operational complexity by ~30–35%.",
    "Owned UI/UX design and frontend development across multiple components and pages for the internal EMR and service applications, designing in Figma and implementing end-to-end to eliminate product-engineering handoff gaps.",
    "Built real-time operational dashboards using Retool and SQL, reducing manual reporting efforts by ~40%, and designed an event-driven notification and escalation tracking system to improve cross-team coordination and resolution speed.",
    "Owned infrastructure cost tracking across AWS, WATI, Typesense, and Sarvam AI, and developed an MIS reporting framework to standardize monthly tech spend visibility for stakeholders and leadership."
  ],
  techStack: [
  { name: "Product Thinking", icon: <FaLightbulb />, color: "#f7e4e4ff", bg: "#330303ff" },
  { name: "User Research", icon: <FaUsers />, color: "#f7e4e4ff", bg: "#330303ff" },
  { name: "Workflow Design", icon: <FaProjectDiagram />, color: "#f7e4e4ff", bg: "#330303ff" },
  { name: "API Design", icon: <FaPlug />, color: "#f7e4e4ff", bg: "#330303ff" },
  { name: "System Design", icon: <FaCogs />, color: "#f7e4e4ff", bg: "#330303ff" },
  { name: "DB Schema", icon: <FaDatabase />, color: "#f7e4e4ff", bg: "#330303ff" },
  { name: "React", icon: <FaReact />, color: "#f7e4e4ff", bg: "#330303ff" },
  { name: "Node.js", icon: <FaServer />, color: "#f7e4e4ff", bg: "#330303ff" },
  { name: "PostgreSQL", icon: <FaDatabase />, color: "#f7e4e4ff", bg: "#330303ff" },
  { name: "Retool", icon: <FaTools />, color: "#f7e4e4ff", bg: "#330303ff" },
]
},
  {
  id: 2,
  company: "CVNT",
  logoUrl: cvnt,
  role: "Full Stack Developer Intern",
  duration: "Oct - Dec 2025",
  location: "Remote",
  description: [
    "Owned the end-to-end product execution for the CVNT ecommerce platform, leading critical third-party integrations including Razorpay for a frictionless payment pipeline and Combirds for localized OTP services, optimizing operational costs while delivering a seamless passwordless login experience.",
    "Blended engineering expertise with product strategy to resolve system bottlenecks by designing and implementing a custom check-create-retry mechanism that eliminated database race conditions during high-traffic concurrent signups, ensuring backend resilience and zero onboarding drop-offs.",
    "Drove core product design and user experience from scratch, crafting a premium interface and leveraging GSAP animations as functional UX elements to guide user attention during key conversion steps, significantly reducing friction across the shopping journey.",
    "Embedded a data-driven culture by integrating Google Tag Manager directly into the platform architecture, enabling business teams to independently track user behavior, analyze sales funnels, and identify friction points without engineering dependency.",
    "Transformed the standard pages into a retention tool by designing intelligent redirection flows that recaptured lost traffic and guided users back to product discovery paths.",
    "Acted as the bridge between business and engineering by defining clear product requirements and enforcing security measures like IP-based rate limiting, ensuring all shipped features were scalable, secure, and aligned with revenue and growth objectives."
  ],
  techStack: [
    { name: "Next.js", icon: <FaReact />, color: "#f7e4e4ff", bg: "#330303ff"},
    { name: "PostgreSQL", icon: <FaDatabase />, color: "#f7e4e4ff", bg: "#330303ff"},
    { name: "JavaScript", icon: <FaJs />, color: "#f7e4e4ff", bg: "#330303ff"},
    { name: "Node.js", icon: <FaServer />, color: "#f7e4e4ff", bg: "#330303ff"},
  ],
},
  
];

export const caseStudyProjects = {
  'nk-consultancy': {
    title: "NK Consultancy",
    shortAbout: "Streamlining client and data management for a regional CA firm with a secure, full-stack solution.",
    heroImage: ca, 
    liveLink: "https://nk-zeta-fawn.vercel.app/",
    
    vision: "I started this project because I noticed a major problem in how Chartered Accountants and financial experts operate in India. There is a real monopoly where experts often charge high fees based on a percentage of a client’s tax returns or total savings. This makes professional help feel like an expensive burden. My vision is to disrupt this by offering a transparent, digital first platform with uniform charges. I wanted to move away from high percentage fees and move toward a fair, flat fee model that respects the user’s hard earned money. This project is about moving professional services into a digital mode to provide maximum convenience in this digital era.",
    
    marketResearch: {
      text: "The Indian market for tax and compliance is undergoing a massive digital shift. While big players exist, they often lack a personal connection. My research shows a huge gap in Tier 2 and Tier 3 cities where trust is still tied to physical presence.",
      table: {
        headers: ["Market Category", "Estimated Value (India 2026)", "Description"],
        rows: [
          ["Total Market (TAM)", "$150 Billion", "Overall India Fintech and professional services space"],
          ["Serviceable Market (SAM)", "$600 Million", "Small and medium enterprises needing digital compliance"],
          ["Obtainable Market (SOM)", "Regional SME Base", "Individual taxpayers and businesses in my home city"]
        ]
      },
      competition: "Current players like ClearTax and Vakilsearch are efficient but can feel like faceless machines. My strategy is a hybrid model. By combining a premium digital interface with a physical office touchpoint, we build the digital trust that purely online platforms struggle to achieve."
    },

    userPersonas: [
      { title: "The Small Business Owner (The Hustler)", desc: "They run local shops or startups and find tax laws confusing. They want a service that is fast, affordable, and doesn't require five office visits." },
      { title: "The Traditional Professional (The Trusted Client)", desc: "These are long term clients who value trust. They are moving toward digital tools to save time but need a simple UI that doesn't overwhelm them." }
    ],

    devJourney: "My journey in building this website was focused on one thing is Efficiency. The more the website does, the less we have to charge the client. I used the full-stack to create a platform that is fast and secure. I architected the backend as a RESTful API using Node.js and Express to serve as the single source of truth. I chose MongoDB for the database because its flexible structure is perfect for the varied nature of consultancy services. The goal was to build a centralized ecosystem that handles everything from initial discovery to final document delivery.",

    techSolution: "The core of our product is the Dynamic Form Engine. Instead of hard coding a page for every service, I designed a system where the backend sends a JSON blueprint. The frontend then automatically builds the correct forms and file uploaders on the fly. This makes our platform incredibly flexible because we can launch a new service like Startup Registration in minutes without any downtime or new code deployments. This efficiency is exactly how we keep our costs 50 percent lower than competitors.",

    uiUx: [
      { title: "Frictionless UX", desc: "I made sure every action, from uploading a document to making a payment, takes as few clicks as possible." },
      { title: "Mobile First Logic", desc: "The site is perfectly responsive because most users check their status on their phones while on the go." },
      { title: "Dual Dashboards", desc: "I created separate environments. The client sees a simple view for convenience, while the admin has a high density Mission Control for productivity." }
    ],

    userJourney: [
      { id: 1, title: "Discovery", description: "The user finds us through a local bank referral or a banner at a Pragya Kendra.", icon: <FaRegLightbulb /> },
      { id: 2, title: "Onboarding", description: "They see our transparent flat fee pricing which immediately builds trust.", icon: <FaUserFriends /> },
      { id: 3, title: "Service Selection", description: "The Dynamic Form Engine asks only for necessary documents.", icon: <FaClipboardCheck /> },
      { id: 4, title: "Real Time Tracking", description: "Instead of calling the office, the user checks their dashboard to see the real time status.", icon: <FaRocket /> },
      { id: 5, title: "Closure", description: "They pay the fee and download their verified receipts and filed documents instantly.", icon: <FaClipboardCheck /> }
    ],

    offlineMarketing: {
      text: "While the platform is digital, the trust is built in the physical world. Last season, I led a massive offline campaign to prove our model.",
      points: [
        { title: "Direct Marketing", desc: "I managed the distribution of banners and pamphlets in key city areas." },
        { title: "Strategic Partnerships", desc: "I collaborated with local offices and government Pragya Kendras to reach people who need document help." },
        { title: "Banking Tie ups", desc: "I partnered with local bank managers and their assistants. They are often asked for CA recommendations. By offering better transparency and lower costs, they provided a steady stream of clients." }
      ],
      conclusion: "Through these efforts, I singlehandedly managed to cater to 158 new clients in just one season."
    },

    pricingModel: "I have actually implemented a model that cuts down costs to 40 to 50 percent of the current market trends. Traditionally, experts charge percentages which can be very high. By automating the administrative work through our website, we remove the need for a large staff to manage paperwork. We offer a flat, uniform fee depending on the service. This transparency has been very successful in the local area because it removes the fear of hidden costs or high commissions.",

    competitiveMatrix: {
      headers: ["Feature", "Local CAs", "Big Tech Portals", "NK Consultancy"],
      rows: [
        ["Pricing", "High Percentage", "Medium Fees", "Flat 50% Discount"],
        ["Trust Factor", "High Physical", "Low Faceless", "High Hybrid Model"],
        ["Speed", "Slow Manual", "Fast Automated", "Fast Automated"],
        ["Transparency", "Low", "Medium", "High Dashboard"]
      ]
    },

    impact: [
      { title: "Client Onboarding", value: "52" },
      { title: "Revenue Success", value: "30%" },
      { title: "Admin Reduction", value: "70%" }
    ],

    riskAssessment: [
      { title: "Data Privacy", desc: "We use encrypted cloud storage and secure JWT authentication with Clerk to protect sensitive financial data." },
      { title: "Regulatory Changes", desc: "Our Dynamic Engine handles tax law changes easily because we can update form fields in minutes without changing code." },
      { title: "Market Trust", desc: "We solve the fear of digital payments by keeping our physical office as a Trust Point where clients can meet us in person." }
    ],

    successMetrics: [
      { title: "Customer Acquisition Cost (CAC)", desc: "Kept very low by using bank tie ups and government centers." },
      { title: "Conversion Rate", desc: "Measuring how many visitors start a service through our transparent pricing." },
      { title: "Turnaround Time (TAT)", desc: "Our goal is to keep the time from document upload to final filing under 48 hours." },
      { title: "User Retention", desc: "Tracking how many clients return for the next tax season based on their digital experience." }
    ],

    futureScope: [
      { id: 1, title: "Phase 1 (The Local Hub)", description: "I am setting up a physical office in my home town with my father and an assistant. This establishes the physical touchpoint and trust.", icon: <FaMapMarkerAlt /> },
      { id: 2, title: "Phase 2 (City Capture)", description: "I will maximize the market share in the city by providing a level of digital convenience no other local CA can match.", icon: <FaCity /> },
      { id: 3, title: "Phase 3 (Expansion)", description: "Once we have a proven revenue stream, I will expand the model to other cities. I plan to gain more industry knowledge first to ensure that when we scale, we maintain our 50 percent cost advantage and high service quality.", icon: <FaGlobe /> }
    ]
  }
};

export const projectsData = [
  {
    id: 1,
    title: "NK Consultancy",
    description: "A comprehensive CA consultancy platform streamlining client management and service delivery.",
    problem: "Manual tracking of GST and ITR filings was creating bottlenecks for the consultancy firm.",
    solution: "Developed role based dashboards for clients and admins to automate document collection and tracking.",
    impact: "Reduced administrative overhead and improved client transparency through real time tracking.",
    tech: ["MERN", "Market Research", "GTM Strategy","Product thinking","Market Research", "Feature Prioritization"],
    liveLink: "https://nk-zeta-fawn.vercel.app/", 
    detailsLink: "/project/nk-consultancy", 
    accent: "#8b1c06ff",
    isCaseStudy:true,
  },
  {
    id: 2,
    title: "Tapin",
    description: "A dedicated micro ticketing platform tailored for intimate local events.",
    problem: "Existing platforms were too complex and expensive for hosting small scale localized events.",
    solution: "Created a lightweight mobile first ticketing flow with easy event creation.",
    impact: "Empowered local creators to host and monetize events with minimal friction.",
    tech: ["UX principles", "Mobile-first design patterns","Product Thinking","Feature Prioritization","MERN"],
    liveLink: "https://tap-in-kappa.vercel.app/",
    detailsLink: "/project/tapin",
    accent: "#8b1c06ff" 
  },
{
    id: 3,
    title: "Apex Hire",
    description: "AI-powered recruitment platform that automates candidate screening and technical evaluations using serverless architecture.",
    problem: "Manual hiring is slow, inconsistent, and hard to scale.",
    solution: "AI platform for automated resume parsing and objective candidate evaluations.",
    impact: "Accelerated screening speed by 70% with standardized, data-driven results.",
    tech: ["Next.ts", "Vercel", "Gemini API", "User interview techniques", "Usability testing basics", "Information architecture", "Accessibility basics"],
    liveLink: "https://apex-hire-8pej0evvr-abhishek-mandals-projects-e004a46c.vercel.app/",
    detailsLink: "/project/apex-hire",
    accent: "#8b1c06ff"
},
  {
    id: 4,
    title: "Attendo",
    description: "Custom attendance management system designed for college administrators and students.",
    problem: "Professors spent excessive time manually updating and calculating student attendance records.",
    solution: "Built a bulk student upload feature and an intuitive tracking interface.",
    impact: "Saved hours of administrative work weekly and provided students with instant visibility into their metrics.",
    tech: ["PERN","Product thinking", "Product Roadmap"],
    liveLink: "https://attendo-chi.vercel.app/",
    detailsLink: "/project/attendo",
    accent: "#8b1c06ff" 
  },
];

export const educationData = [
  {
    id: 1,
    degree: "B.Tech in Electronics and Communication Engineering",
    institution: "Indian Institute of Information Technology (IIIT), Ranchi",
    duration: "Expected May-2026",
  },
  {
    id: 2,
    institution: "DAV Public School, Jamshedpur", 
    degree: "Class XII (CBSE)",
    duration: "Completed: 2021",
  },
  {
    id: 3,
    institution: "Motilal Nehru Public School, Jamshedpur", 
    degree: "Class X (ICSE)",
    duration: "Completed: 2019", 
  }
];