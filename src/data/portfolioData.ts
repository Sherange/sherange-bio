export interface Project {
  id: string;
  title: string;
  category: string;
  badge?: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  highlights: string[];
  metrics?: { label: string; value: string }[];
  accentColor: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  company: string;
  location: string;
  role: string;
  period: string;
  current?: boolean;
  product?: string;
  summary: string;
  bullets: string[];
  skills: string[];
}

export const PERSONAL_INFO = {
  name: "Sherange Lothika Fonseka",
  shortName: "Sherange Fonseka",
  initials: "SF",
  title: "Senior Software Engineer",
  specialization: "Frontend · React · React Native · Flutter",
  email: "sherangef@gmail.com",
  phone: "+94777299956",
  location: "Colombo, Sri Lanka (Available for US/Europe/Global Remote)",
  status: "Available for new opportunities",
  yearsExperience: "6+",
  heroEyebrow: "SOFTWARE ENGINEER · FRONTEND · MOBILE",
  heroHeadline: "Building digital experiences that feel fast, intuitive, and alive.",
  heroSubheadline:
    "I’m Sherange Fonseka — a software engineer focused on building modern web and cross-platform mobile applications with React, React Native, Flutter, and TypeScript.",
  aboutParagraphs: [
    "I’m a software engineer with experience building and maintaining production applications across web and mobile platforms. My work has focused heavily on React, React Native, Flutter, TypeScript, Firebase, GraphQL, and modern frontend architecture.",
    "Throughout my career, I’ve worked on products used by real customers, collaborated with distributed teams, contributed to architecture and technical decisions, and helped take applications from development through production releases.",
    "I enjoy solving complex problems, improving user experiences, and turning ideas into reliable software."
  ],
  links: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "mailto:sherangef@gmail.com",
    phone: "tel:+94777299956"
  }
};

export const TECH_STACK = [
  { name: "React", category: "Frontend & Web", level: "Primary", highlight: "Interactive SPAs, Hooks, Concurrent Rendering" },
  { name: "React Native", category: "Mobile & Cross-Platform", level: "Primary", highlight: "iOS & Android production apps, Native Bridges" },
  { name: "Flutter", category: "Mobile & Cross-Platform", level: "Primary", highlight: "Dart, Custom Renderers, Flavors, Cross-Platform" },
  { name: "TypeScript", category: "Frontend & Web", level: "Core", highlight: "Strict typing, Generics, Scalable Architectures" },
  { name: "JavaScript", category: "Frontend & Web", level: "Core", highlight: "ES6+, Async paradigms, Event loops" },
  { name: "Next.js", category: "Frontend & Web", level: "Specialist", highlight: "SSR, SSG, App Router, Hybrid Rendering" },
  { name: "Firebase", category: "Real-Time & Systems", level: "Specialist", highlight: "Firestore, Cloud Functions, Auth, Push Notifications" },
  { name: "GraphQL", category: "Real-Time & Systems", level: "Specialist", highlight: "Apollo Client, Schemas, Subscriptions, Cache" },
  { name: "Redux / Toolkit", category: "Frontend & Web", level: "Core", highlight: "Predictable state containers, RTK Query" },
  { name: "Expo", category: "Mobile & Cross-Platform", level: "Specialist", highlight: "EAS builds, OTA updates, Managed workflows" },
  { name: "Node.js", category: "Real-Time & Systems", level: "Backend", highlight: "REST endpoints, BFF architectures, Scripts" },
  { name: "SignalR / WebSockets", category: "Real-Time & Systems", level: "Specialist", highlight: "Sub-100ms IoT telemetry, Live streams" },
  { name: "Jest / Vitest", category: "Testing & Tooling", level: "Testing", highlight: "Unit testing, Component snapshotting" },
  { name: "Detox", category: "Testing & Tooling", level: "Testing", highlight: "End-to-end mobile automation on iOS & Android" },
  { name: "Git & GitHub", category: "Testing & Tooling", level: "Tooling", highlight: "Trunk-based development, GitHub Actions CI/CD" },
  { name: "Fastlane", category: "Testing & Tooling", level: "DevOps", highlight: "Automated test flights & store distribution" },
  { name: "Sentry & Amplitude", category: "Testing & Tooling", level: "Observability", highlight: "Error tracking, crash reports, behavioral analytics" },
  { name: "Tailwind CSS", category: "Frontend & Web", level: "Styling", highlight: "Utility-first modern responsive design systems" },
  { name: "Zustand & TanStack Query", category: "Frontend & Web", level: "Architecture", highlight: "Client and server-state caching" },
  { name: "React-Konva & Recharts", category: "Frontend & Web", level: "Data Viz", highlight: "Canvas spatial maps & real-time telemetry charts" }
];

export const FEATURED_PROJECT: Project = {
  id: "nightingale-platform",
  title: "Nightingale Platform",
  category: "Remote Care & Ambient IoT Health",
  badge: "FEATURED PROJECT",
  shortDescription:
    "A modern health and wellness platform focused on transforming ambient IoT sensors, wearable telemetry, and health data into meaningful real-time insights.",
  fullDescription:
    "Architected and developed high-performance responsive web and mobile interfaces for an ambient assisted-living system. Integrated real-time SignalR streams to process live IoT telemetry, room occupancy events, and critical emergency alerts. Implemented spatial floorplan visualization using React-Konva and complex telemetry dashboards with Recharts. Optimized message payload serialization to reduce alert delivery latency by 30%.",
  technologies: [
    "React",
    "TypeScript",
    "SignalR",
    "TanStack Query",
    "Zustand",
    "React-Konva",
    "Recharts",
    "Tailwind CSS",
    "Vitest",
    "IoT Telemetry"
  ],
  highlights: [
    "Health and wearable telemetry aggregation",
    "Sleep insights and biometric trend analysis",
    "Interactive spatial room occupancy canvas (React-Konva)",
    "Sub-100ms emergency alert routing via SignalR",
    "30% reduction in notification latency through binary payload tuning",
    "Offline-ready UI state management for volatile networks"
  ],
  metrics: [
    { label: "Notification Latency", value: "-30%" },
    { label: "Sensor Events / Sec", value: "10,000+" },
    { label: "Uptime Reliability", value: "99.98%" },
    { label: "Alert Delivery", value: "< 85ms" }
  ],
  accentColor: "#06B6D4",
  featured: true
};

export const OTHER_PROJECTS: Project[] = [
  {
    id: "mobile-apps",
    title: "Mobile Applications",
    category: "Cross-Platform Engineering",
    shortDescription:
      "Cross-platform mobile applications built using React Native and Flutter, with a rigorous focus on 60fps performance, intuitive UI, native bridge integrations, and App Store releases.",
    fullDescription:
      "Production-grade mobile engineering spanning both Flutter and React Native ecosystems. Built for iOS and Android with custom native animations, token-based authentication, hardware sensor access, background location sync, and bulletproof CI/CD pipelines via Fastlane.",
    technologies: ["React Native", "Flutter", "TypeScript", "Dart", "Expo", "Fastlane", "Redux", "Riverpod"],
    highlights: [
      "Consistent 60 FPS animations on low-power devices",
      "Unified codebase delivering native look & feel on iOS and Android",
      "Automated App Store Connect & Google Play Console release workflows",
      "Hardware sensor telemetry & background task synchronization"
    ],
    accentColor: "#3B82F6"
  },
  {
    id: "offline-ai",
    title: "Offline AI & On-Device Inference",
    category: "Experimental AI & Edge Privacy",
    shortDescription:
      "An experimental mobile AI project exploring on-device AI inference and private health insights without transmitting sensitive raw biometric data to cloud servers.",
    fullDescription:
      "Investigated edge machine learning and local LLM execution on mobile chips. Built private processing pipelines where raw sensor and health data are classified locally using quantized on-device models, returning contextual lifestyle and wellness recommendations while maintaining zero-knowledge server footprints.",
    technologies: ["React Native", "TypeScript", "On-Device AI", "Local LLM Inference", "Edge ML", "HealthKit"],
    highlights: [
      "Zero sensitive raw biometric data sent over the network",
      "Ultra-low latency local inference directly on client hardware",
      "Contextual sleep & recovery summary generation",
      "Battery-efficient background scheduled analysis"
    ],
    accentColor: "#8B5CF6"
  },
  {
    id: "workforce-timesheet",
    title: "Timesheet / Workforce Platform",
    category: "Enterprise Mobile Solution",
    shortDescription:
      "A mobile workforce management application involving shifts, real-time punch entries, offline-first local SQLite persistence, sync reconciliation, and enterprise API integration.",
    fullDescription:
      "Engineered an offline-first enterprise mobile application designed for distributed field workers with erratic internet connectivity. Features atomic local queueing, optimistic UI updates, conflict resolution protocols, and bi-directional synchronization with centralized corporate backend systems.",
    technologies: ["Flutter", "Dart", "REST APIs", "Local DB Persistence", "Offline Sync", "Provider", "Flavors"],
    highlights: [
      "Seamless operation in full offline / airplane mode",
      "Zero data loss via atomic transaction journaling",
      "Multi-environment deployment using Flutter flavors",
      "Geofenced shift verification and automated overtime calculation"
    ],
    accentColor: "#10B981"
  },
  {
    id: "production-apollos",
    title: "Production React Native (Apollos)",
    category: "Multi-Tenant Scaled Ecosystem",
    shortDescription:
      "High-scale production applications within a multi-tenant ecosystem serving tens of thousands of active users across the United States.",
    fullDescription:
      "Delivered complex feature sets, performance optimizations, and rigorous architectural refactoring for US-based enterprise clients at Differential. Handled GraphQL query batching, Firebase push routing, deep linking, role-based access control, and continuous release cadences.",
    technologies: ["React Native", "Expo", "GraphQL", "Firebase", "TypeScript", "Linear", "Sentry"],
    highlights: [
      "Multi-tenant white-label architecture serving diverse organizations",
      "Reduced app cold start times by 24% through bundle optimization",
      "Robust CI/CD automated test verification with Detox and GitHub Actions",
      "Strict ESLint rules and reusable cross-platform design token systems"
    ],
    accentColor: "#F59E0B"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "tinkerer-borg",
    company: "Tinkerer Borg",
    location: "USA (Remote)",
    role: "Senior Software Engineer",
    product: "Nightingale Platform",
    period: "Sep 2025 – Present",
    current: true,
    summary:
      "Leading frontend and mobile architecture for an ambient assisted-living and remote care IoT health platform.",
    bullets: [
      "Architected and developed responsive web and mobile interfaces for real-time monitoring, activity tracking, and health insights.",
      "Built real-time application features using SignalR, processing live IoT telemetry, room occupancy events, and emergency alerts.",
      "Optimized real-time communication and payload serialization, reducing notification latency by 30% for critical alerts.",
      "Developed interactive dashboards and spatial visualizations using React, TypeScript, Recharts, and React-Konva for complex telemetry.",
      "Implemented client-side data fetching and server-state synchronization with TanStack React Query, Zustand, and Redux Toolkit.",
      "Designed offline-ready UI state management to maintain reliable application behavior during volatile network conditions.",
      "Established modern frontend tooling with Vite, Tailwind CSS, and automated testing via Vitest and React Testing Library.",
      "Integrated Claude and Cursor into the engineering workflow for rapid implementation, refactoring, and code review."
    ],
    skills: ["React", "TypeScript", "SignalR", "React-Konva", "Recharts", "TanStack Query", "Zustand", "Tailwind CSS", "Vitest"]
  },
  {
    id: "differential",
    company: "Differential",
    location: "USA (Remote)",
    role: "Senior Software Engineer",
    product: "Apollos",
    period: "Sep 2023 – Sep 2025",
    summary:
      "Engineered and supported production React Native applications for US-based clients within a multi-tenant ecosystem.",
    bullets: [
      "Delivered new features, resolved production bugs, and performed cross-platform performance optimizations for iOS and Android.",
      "Worked extensively with React Native, Expo, TypeScript, React, GraphQL, REST APIs, and Firebase.",
      "Improved code maintainability through strict ESLint configurations, rigorous GitHub code reviews, and reusable design components.",
      "Integrated complex third-party APIs, authentication protocols, push notifications, and user analytics.",
      "Collaborated daily in distributed agile teams with engineers, designers, and US stakeholders using Basecamp, Linear, and GitHub."
    ],
    skills: ["React Native", "Expo", "TypeScript", "GraphQL", "Firebase", "REST APIs", "Jest", "Linear"]
  },
  {
    id: "swivel-tech",
    company: "Swivel Tech",
    location: "Sri Lanka (Australian-based clients)",
    role: "Senior Software Engineer – Flutter & React Native",
    period: "Jan 2022 – Apr 2023",
    summary:
      "Developed cross-platform mobile applications for iOS and Android using Flutter/Dart and React Native.",
    bullets: [
      "Translated complex UI/UX designs, wireframes, and functional requirements into polished production apps.",
      "Built reusable component systems and shared code libraries across multiple client engagements.",
      "Implemented secure token-based authentication and multi-environment configuration using Flutter flavors.",
      "Managed application build signing, provisioning profiles, and release processes for Apple App Store and Google Play Store."
    ],
    skills: ["Flutter", "Dart", "React Native", "Token Auth", "Flutter Flavors", "App Store Connect", "Play Console"]
  },
  {
    id: "sml-branding",
    company: "SML Branding Technology Solutions",
    location: "Sri Lanka (Hong Kong-based)",
    role: "Software Engineer – Flutter",
    period: "Feb 2021 – Dec 2021",
    summary:
      "Engineered cross-platform mobile applications using Flutter and Dart for enterprise logistics and branding operations.",
    bullets: [
      "Developed responsive mobile interfaces meeting strict international enterprise UI specifications.",
      "Participated in agile ceremonies, sprint planning, and backlog grooming using JIRA and Confluence.",
      "Researched and integrated modern Flutter ecosystem libraries to enhance application stability and crash resistance.",
      "Orchestrated binary builds, key signing, and store submission to Google Play Store and Apple App Store."
    ],
    skills: ["Flutter", "Dart", "JIRA", "Confluence", "Mobile UI", "App Distribution"]
  },
  {
    id: "keeneye-solutions",
    company: "KeenEye Solutions",
    location: "Sri Lanka (France-based clients)",
    role: "Software Engineer – React Native",
    period: "Apr 2019 – Jan 2021",
    summary:
      "Developed and maintained cross-platform mobile applications using React Native for iOS and Android.",
    bullets: [
      "Coordinated day-to-day project planning, technical implementation, and sprint deliverables following Agile/Scrum best practices.",
      "Took on Scrum Master responsibilities, facilitating standups, removing engineering blockers, and supporting team velocity.",
      "Participated in sprint estimation, delivery tracking, code reviews, and Git branching strategies using JIRA and Bitbucket."
    ],
    skills: ["React Native", "JavaScript", "Scrum Master", "Agile", "JIRA", "Bitbucket", "Git"]
  }
];

export const HOW_I_WORK_STEPS = [
  {
    step: "01",
    title: "Understand",
    description: "Understand the product, users, requirements, and constraints before writing code.",
    details: "Deep-dive into business context, user workflows, edge cases, and network constraints. Architecture begins with asking the right questions."
  },
  {
    step: "02",
    title: "Build",
    description: "Create maintainable, scalable solutions using modern development practices.",
    details: "Strict TypeScript types, predictable state patterns, clean component boundaries, and atomic reusable UI primitives."
  },
  {
    step: "03",
    title: "Refine",
    description: "Improve performance, usability, reliability, and developer experience.",
    details: "Sub-100ms response targets, 60fps mobile frame rates, bundle shrinking, automated unit tests, and rigorous edge error handling."
  },
  {
    step: "04",
    title: "Ship",
    description: "Test, review, automate, and confidently release software to users.",
    details: "Automated CI/CD workflows, Fastlane store signing, staged rollouts, real-time Sentry alerting, and continuous telemetry monitoring."
  }
];

export const MINDSET_PILLARS = [
  { name: "Performance", desc: "60 FPS mobile, sub-100ms real-time pipelines, and lean bundle delivery." },
  { name: "Scalability", desc: "Multi-tenant architectures and decoupled modular state containers." },
  { name: "Clean Architecture", desc: "Clear separation of concerns, testable business logic, and strict contracts." },
  { name: "User Experience", desc: "Fluid animations, resilient offline handling, and instant feedback." },
  { name: "Maintainability", desc: "Self-documenting code, strict ESLint enforcement, and predictable state." },
  { name: "Developer Experience", desc: "Fast build tooling (Vite), type-safety, and seamless CI/CD automation." }
];

export const STATS = [
  { value: "6+", label: "Years of Software Engineering Experience", detail: "Web, iOS & Android" },
  { value: "React Native", label: "Core Specialization", detail: "Expo & Bare Native" },
  { value: "Flutter", label: "Cross-Platform Development", detail: "Dart & Custom Renderers" },
  { value: "Production", label: "Apps Shipped and Maintained", detail: "App Store & Google Play" }
];

export const EDUCATION = [
  {
    degree: "Bachelor of Science Honours in Computing",
    institution: "Wrexham University, UK",
    focus: "Software Engineering & Computer Science"
  },
  {
    degree: "Higher National Diploma in Computer Based Information Systems (HDCBIS)",
    institution: "National Institute of Business Management (NIBM), Sri Lanka",
    focus: "Enterprise Systems & Information Architecture"
  }
];

export const TERMINAL_COMMANDS: Record<string, string> = {
  whoami: "Sherange Lothika Fonseka",
  role: "Senior Software Engineer",
  focus: "Frontend + Mobile + Real-Time IoT + AI",
  currently: "Building things that matter at Tinkerer Borg (Nightingale Platform).",
  skills: "React, React Native, Flutter, TypeScript, SignalR, GraphQL, Firebase, Next.js",
  location: "Colombo, Sri Lanka · Working with US & International Distributed Teams",
  contact: "sherangef@gmail.com · +94777299956"
};
