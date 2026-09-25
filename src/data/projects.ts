export type Project = {
  title: string;
  description: string;
  highlights: string[];
  tech: string[];
  image: string;
  githubUrl: string;
  demoUrl?: string;
  demoLabel?: string;
};

export const projects: Project[] = [
  {
    title: "PayCore",
    description:
      "A payment processing backend built to survive the failures real payment systems hit: duplicate requests, processor timeouts, crashes mid-payment, and webhooks that arrive twice or out of order. It models the payment lifecycle as an explicit state machine backed by a double-entry ledger, so every payment and refund is auditable and reconciles cleanly against the processor.",
    highlights: [
      "Idempotency keys guarantee a duplicate request replays the original response instead of double-charging",
      "Exponential-backoff retries, an HMAC-verified inbound/outbound webhook system, and a transactional outbox relaying events to Kafka",
      "Row-level locks and Redis-backed distributed locks keep reconciliation and the outbox relay safe under concurrency, with Redis failing open to Postgres if it's ever unreachable",
      "Full observability: Prometheus metrics, Grafana dashboards, alert rules, and a live in-browser demo page exercised by an end-to-end test in CI",
    ],
    tech: ["Java 21", "Spring Boot 4", "PostgreSQL", "Kafka", "Redis", "Flyway", "Docker"],
    image: "/images/projects/paycore-demo-placeholder.svg",
    githubUrl: "https://github.com/LordCenk/PayCore",
  },
  {
    title: "Smart Hyperlocal Commerce Platform",
    description:
      "A full-stack MERN platform connecting local sellers with nearby buyers — browsing, cart, and order flows on the frontend backed by an authenticated Express/MongoDB API.",
    highlights: [
      "React + Vite client talking to a JWT-secured Express API",
      "MongoDB/Mongoose data layer with bcrypt password hashing",
      "See the full walkthrough in the linked demo explainer",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    image: "/images/projects/hyperlocal-cover-placeholder.svg",
    githubUrl: "https://github.com/LordCenk/hyperlocal-fullstack",
    demoUrl: "https://share.gemini.google/mXcIWbFIwvR8",
    demoLabel: "Demo Walkthrough",
  },
  {
    title: "Snipp URL",
    description:
      "A URL shortener with user accounts, per-link expiry, and click analytics — a Spring Boot REST API paired with a React + TypeScript frontend.",
    highlights: [
      "JWT-authenticated API with Flyway-managed PostgreSQL schema",
      "Click analytics: totals, per-day trends, device type, referrers",
      "Rate limiting and a Redis-backed cache in front of redirect lookups, with an in-memory fallback",
    ],
    tech: ["Spring Boot 4", "Java 21", "PostgreSQL", "React", "TypeScript", "Redis", "JWT"],
    image: "/images/projects/snippurl-links.png",
    githubUrl: "https://github.com/LordCenk/snipp-url",
  },
];
