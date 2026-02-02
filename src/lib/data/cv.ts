import type { TimelineItem } from "$lib/components/Timeline.svelte";

export interface CVData {
    name: string;
    title: string;
    location: string;
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    profile: string;
    techStack: string[];
    languages: { name: string; level: string }[];
    experience: TimelineItem[];
    education: {
        period: string;
        title: string;
        institution: string;
        note?: string;
    }[];
    academy: { period: string; title: string; institution: string }[];
}

export const cvData: CVData = {
    name: "Tóth Márk Zoltán",
    title: "Senior Fullstack Developer",
    location: "Budapest, Hungary",
    email: "hello@tothmark.hu",
    phone: "+36 70 434 0472",
    linkedin: "tothmarkzoltan",
    github: "zollee60",
    profile:
        "As a fullstack developer I am capable of implementing fullstack web applications, however on the UI side I tend to help myself with already existing component & CSS libraries. In other words, I am more lenient to the backend side.",
    techStack: [
        "JavaScript",
        "TypeScript",
        "Node.js",
        "Bun",
        "Express",
        "Fastify",
        "React",
        "Next.js",
        "Sequelize",
        "Drizzle",
        "PostgreSQL",
        "MongoDB",
        "MySQL",
        "Docker",
        "GitLab CI/CD",
        "GitHub Actions",
        "Kubernetes",
        "Helm",
    ],
    languages: [
        { name: "Hungarian", level: "Native" },
        { name: "English", level: "C1" },
    ],
    experience: [
        {
            startDate: "2024 APR",
            endDate: "Present",
            title: "Senior Software Developer",
            company: "GE Healthcare",
            description: "Working on medical imaging software solutions.",
            bullets: [
                "Designing & developing features & bugfixes for a client-side SDK responsible for loading and grouping DICOM images",
                "Designing & implementing a server-side application providing a REST API based on the SDK for consumers",
                "Maintaining Helm chart for Kubernetes deployments",
                "Implementing custom streaming solutions & researching HTTP2 applications",
                "Performance profiling to ensure first frame loads under 1 second",
            ],
        },
        {
            startDate: "2021 JUN",
            endDate: "2024 FEB",
            title: "Fullstack Developer / Team Lead",
            company: "Xund Solutions",
            description:
                "Led development of medical device certified REST APIs.",
            bullets: [
                "Designing & developing features for different microservices, including a CLASS-2 medical device certified REST API",
                "Implementing FHIR/HL7 standards compliant REST API",
                "Designing & implementing features for internal admin dashboards with Ant Design, React & Next.js",
                "Leading scrum ceremonies, releases and documentation",
            ],
        },
        {
            startDate: "2020 SEP",
            endDate: "2021 JUN",
            title: "Teacher of Web Development",
            company: "BGSZC Száz Ferenc Commercial Technical School",
            description:
                "Held web development courses covering: JavaScript, MVC & RESTful architecture, Node.js & Express, React & Redux.",
            bullets: [],
        },
        {
            startDate: "2019 SEP",
            endDate: "2021 JUN",
            title: "Teacher of IT",
            company: "BMSZC Petrik Lajos Bilingual Technical School",
            description:
                "Teaching foundational IT concepts, programming basics, and technical English to bilingual students.",
            bullets: [],
        },
        {
            startDate: "2017 SEP",
            endDate: "2019 AUG",
            title: "Programming Tutor",
            company: "Logiscool Ujbuda - Icreative Kft.",
            description:
                "Mentoring young students in programming fundamentals and logic.",
            bullets: [],
        },
    ],
    education: [
        {
            period: "2015 - 2021",
            title: "Ma. Teacher of IT & English",
            institution: "ELTE",
            note: "Unfinished",
        },
        {
            period: "2010 - 2014",
            title: "School Leaving Exam",
            institution: "Berze Nagy János High School",
        },
    ],
    academy: [
        {
            period: "2019 - 2020",
            title: "Application of Monte Carlo Methods",
            institution: "EFOP Scholarship",
        },
    ],
};
