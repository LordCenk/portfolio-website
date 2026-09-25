export type SkillCategory = {
  title: string;
  skills: string[];
};

// Compiled from LordCenk's public GitHub repos (PayCore, snipp-url,
// hyperlocal-fullstack, dsa-journey-java, and others).
// TODO: send your resume if you want this list reconciled against it.
export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["Java", "TypeScript", "JavaScript", "Python", "SQL", "HTML5", "CSS3"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Vite", "Tailwind CSS", "React Router"],
  },
  {
    title: "Backend",
    skills: ["Spring Boot", "Spring Security", "Node.js", "Express.js", "REST APIs", "JWT Auth"],
  },
  {
    title: "Databases & Messaging",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Apache Kafka", "Flyway"],
  },
  {
    title: "DevOps & Tools",
    skills: ["Docker", "Git & GitHub", "GitHub Actions (CI/CD)", "Maven", "Prometheus", "Grafana"],
  },
  {
    title: "Also Exploring",
    skills: ["Machine Learning", "Deep Learning", "Computer Vision (YOLO)"],
  },
];
