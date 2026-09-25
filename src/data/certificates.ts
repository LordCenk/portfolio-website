export type Certificate = {
  title: string;
  issuer: string;
  date: string;
  image: string;
  verifyUrl?: string;
};

// TODO: 2 entries are still placeholder SVGs (Full Stack Web Developer
// training cert, and Snowflake Platform — Snowflake needs a screenshot,
// its achieve.snowflake.com verify link is blocked from this sandbox).
// Send them one at a time — a batch of images in one message doesn't reach
// this sandbox as files, only single-image messages do.
export const certificates: Certificate[] = [
  {
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte (via Forage)",
    date: "June 2025",
    image: "/images/certificates/deloitte-data-analytics.jpg",
  },
  {
    title: "Foundations of Cybersecurity",
    issuer: "Google / Coursera",
    date: "Feb 2024",
    image: "/images/certificates/google-coursera.jpg",
    verifyUrl: "https://coursera.org/verify/DFQ3HW8PY4FX",
  },
  {
    title: "Full Stack Web Developer", // best match from resume's certificate list — confirm this is the right one
    issuer: "Training Program",
    date: "Nov 22 – Dec 26, 2023 (100 hours)",
    image: "/images/certificates/training-achievement.svg",
  },
  {
    title: "Snowflake Platform",
    issuer: "Snowflake University",
    date: "",
    image: "/images/certificates/snowflake-platform.svg",
  },
  {
    title: "Natural Language Processing",
    issuer: "NPTEL / IIT Kharagpur",
    date: "Jan – Apr 2026",
    image: "/images/certificates/nptel-nlp.png",
    verifyUrl: "https://nptel.ac.in",
  },
  {
    title: "Data Structures and Algorithms in Python: DSA Course",
    issuer: "Udemy",
    date: "Dec 2025",
    image: "/images/certificates/udemy-dsa-python.jpg",
    verifyUrl: "https://ude.my/UC-1b45b29d-0214-4aed-8fc0-e19dc1402ac0",
  },
];
