export type SkillCategory = {
  title: string;
  skills: string[];
};

// Primary source: resume (111_SHASHANK_AGRAWAL_RESUME.pdf).
// A few infra skills (Kafka, Flyway, Maven, Prometheus, Grafana) were added
// from public GitHub repos (PayCore, snipp-url) where the resume didn't list
// them but the code clearly demonstrates them.
export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["Java", "Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "Tailwind CSS", "HTML", "CSS", "Vite"],
  },
  {
    title: "Backend",
    skills: ["Spring Boot", "FastAPI", "Node.js", "Express.js", "REST APIs", "WebSockets"],
  },
  {
    title: "AI & Machine Learning",
    skills: ["Scikit-learn", "PyTorch", "OpenCV", "Pandas", "NumPy", "CrewAI", "Streamlit"],
  },
  {
    title: "Databases & Messaging",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Apache Kafka", "RabbitMQ"],
  },
  {
    title: "Security",
    skills: ["JWT (RS256)", "SPIFFE/SPIRE", "Open Policy Agent (OPA)", "bcrypt"],
  },
  {
    title: "DevOps & Cloud",
    skills: [
      "Docker",
      "Kubernetes",
      "Git & GitHub",
      "GitHub Actions",
      "Vercel",
      "AWS (EC2, S3, Lambda)",
      "Microsoft Azure",
    ],
  },
  {
    title: "Tools",
    skills: ["Gradle", "Maven", "Alembic", "Flyway", "Prometheus", "Grafana"],
  },
];
