export type Certificate = {
  title: string;
  issuer: string;
  date: string;
  image: string;
  verifyUrl?: string;
};

// TODO: 4 of these 5 are still placeholder SVGs (NPTEL is now the real
// certificate). Send the rest one at a time — a batch of images in one
// message doesn't reach this sandbox as files, only single-image messages
// do — and they'll get dropped into public/images/certificates/.
export const certificates: Certificate[] = [
  {
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte (via Forage)",
    date: "June 2025",
    image: "/images/certificates/deloitte-data-analytics.svg",
  },
  {
    title: "Foundations of Cybersecurity", // confirmed via resume: "Coursera: Foundations of CyberSecurity"
    issuer: "Google / Coursera",
    date: "2023",
    image: "/images/certificates/google-coursera.svg",
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
];
