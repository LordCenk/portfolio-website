export type Certificate = {
  title: string;
  issuer: string;
  date: string;
  image: string;
  verifyUrl?: string;
};

// TODO: two of these titles were unreadable at the resolution the images were
// sent at (Google/Coursera course name, and the Nov–Dec 2023 100-hour
// "Certificate of Achievement" issuer) — confirm exact wording, and drop the
// real certificate image files into public/images/certificates/.
export const certificates: Certificate[] = [
  {
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte (via Forage)",
    date: "June 2025",
    image: "/images/certificates/deloitte-data-analytics.svg",
  },
  {
    title: "Google – Coursera Certificate", // TODO: confirm exact course name
    issuer: "Google / Coursera",
    date: "2023",
    image: "/images/certificates/google-coursera.svg",
  },
  {
    title: "Certificate of Achievement", // TODO: confirm training/bootcamp name and issuer
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
    image: "/images/certificates/nptel-nlp.svg",
    verifyUrl: "https://nptel.ac.in",
  },
];
