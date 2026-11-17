// All content below is taken from your resume. Edit here — the whole site reads from this file.
const BASE = import.meta.env.BASE_URL // '/my_portfolio/' on GitHub Pages

export const profile = {
  name: 'Muhammad Suraquatu',
  firstName: 'Muhammad',
  lastName: 'Suraquatu',
  title: 'Full Stack Developer',
  specialties: ['.NET', 'Angular', 'Flutter', 'AI-Augmented Engineering'],
  tagline: 'I ship complete products across backend, web and mobile — with Claude AI built into everyday delivery.',
  location: 'Bengaluru, Karnataka',
  email: 'srq687@gmail.com',
  phone: '+91 96059 60054', // set to '' to hide it from the public site
  links: {
    linkedin: '', // TODO: paste your LinkedIn profile URL
    github: 'https://github.com/muhammedsuraqath',
    product: 'https://stimes.app',
  },
  resumeUrl: '', // e.g. '/Muhammad_Suraquatu_Resume.pdf' after copying the PDF into /public
  summary:
    'AI-augmented Full Stack Developer who ships complete products across backend, web and mobile. Currently building a four-role real estate platform in Flutter, .NET and Angular, alongside Stimes, a multi-tenant HR, payroll and operations SaaS spanning Web, Mobile, Kiosk and Employee Self-Service. Hands-on with microservices, PostgreSQL migrations, RabbitMQ messaging and self-healing test automation, with Claude AI built into everyday delivery.',
  photos: {
    // 8 real photo frames, front → side → back → side → front, for the 360° hero
    spin: [1, 2, 3, 4, 5, 6, 7, 8].map((k) => BASE + `images/spin/spin-${k}.webp`),
    portrait: BASE + 'images/portrait-front.webp',
    gallery: [BASE + 'images/portrait-front.webp', BASE + 'images/spin/spin-2.webp', BASE + 'images/portrait-alt.webp'],
  },
}

export const stats = [
  { value: '4', label: 'Role-based Flutter apps: Tenant, Owner, Vendor, Agent' },
  { value: '10×', label: 'Development output with Claude AI workflows' },
  { value: '90%', label: 'Lower communication-validation latency at LG' },
  { value: '35%', label: 'Backend runtime exceptions mitigated on webOS' },
  { value: '100+', label: 'Critical defects diagnosed before platform release' },
]

export const skillGroups = [
  { name: 'Backend', items: ['.NET 10', 'ASP.NET Core', 'Web API', 'EF Core', '.NET Aspire', 'MVC', 'Razor', 'Node.js', 'Java'] },
  { name: 'Web Frontend', items: ['Angular 17+', 'TypeScript', 'React.js', 'JavaScript', 'HTML5', 'CSS3', 'Flowbite'] },
  { name: 'Mobile', items: ['Flutter', 'Dart', 'Android', 'iOS'] },
  { name: 'Data & Messaging', items: ['PostgreSQL', 'SQL Server', 'MySQL', 'MongoDB', 'RabbitMQ'] },
  { name: 'Architecture', items: ['Microservices', 'Event-Driven', 'Multi-Tenant SaaS', 'REST APIs', 'Omnichannel'] },
  { name: 'AI & Testing', items: ['Google Flow', 'Claude AI', 'Prompt Engineering', 'AI Assistants', 'Playwright', 'Jira'] },
]

// Labels shown on the rotating 3D skill globe (highlighted ones glow)
export const globeSkills = [
  { name: 'Google Flow', hl: true },
  { name: '.NET 10', hl: true },
  { name: 'Angular', hl: true },
  { name: 'Flutter', hl: true },
  { name: 'PostgreSQL', hl: true },
  { name: 'Claude AI', hl: true },
  { name: 'ASP.NET Core' },
  { name: 'Web API' },
  { name: 'EF Core' },
  { name: '.NET Aspire' },
  { name: 'MVC' },
  { name: 'Razor' },
  { name: 'Node.js' },
  { name: 'Java' },
  { name: 'TypeScript' },
  { name: 'React' },
  { name: 'JavaScript' },
  { name: 'HTML5' },
  { name: 'CSS3' },
  { name: 'Flowbite' },
  { name: 'Dart' },
  { name: 'Android' },
  { name: 'iOS' },
  { name: 'SQL Server' },
  { name: 'MySQL' },
  { name: 'MongoDB' },
  { name: 'RabbitMQ' },
  { name: 'Microservices' },
  { name: 'Event-Driven' },
  { name: 'Multi-Tenant SaaS' },
  { name: 'REST APIs' },
  { name: 'Prompt Eng.' },
  { name: 'Playwright' },
  { name: 'Jira' },
]

// `products` = sub-projects inside one job; `points` = plain bullets.
// Each bullet is [boldLead, rest] — boldLead may be null.
export const experience = [
  {
    role: 'Full Stack Developer',
    company: 'ioNob Innovations LLP',
    period: 'Dec 2025 – Present',
    products: [
      {
        name: 'Real Estate Management Platform',
        stack: 'Flutter · .NET · Angular · PostgreSQL · RabbitMQ — a service within the Stimes enterprise suite',
        points: [
          ['Four role-based mobile apps', ' — Tenant, Owner, Vendor and Agent — built in Flutter from a shared codebase for Android and iOS.'],
          ['One .NET backend for every app:', ' ASP.NET Core microservices and REST APIs with role-based authorization per user type.'],
          ['Reused the proven Stimes service stack', ' — PostgreSQL, RabbitMQ messaging, .NET Aspire orchestration — for faster, consistent delivery.'],
          ['Angular web portal', ' bringing platform data and management together for the business.'],
          ['End-to-end ownership', ' across mobile, backend and web, using Claude AI to prototype, generate and refactor code.'],
        ],
      },
      {
        name: 'Stimes — HR, Payroll & Operations SaaS',
        url: 'https://stimes.app',
        stack: '.NET · Angular · Razor · PostgreSQL · RabbitMQ',
        points: [
          ['ERP modules', ' for CRM, Finance and HR on a distributed microservices architecture.'],
          ['Employee Management & ESS', ' features synchronized across self-service portals, Kiosks and Mobile.'],
          ['Secure business logic', ' in .NET with Razor and Angular interfaces over transactional PostgreSQL.'],
          ['Live MySQL → PostgreSQL migration', ', plus async messaging via RabbitMQ and .NET Aspire.'],
          ['Native AI assistant modules', ' for contextual data processing and user queries.'],
          ['Up to 10× output', ' with Claude AI prototyping and Playwright self-healing regression tests.'],
        ],
      },
    ],
  },
  {
    role: 'Test Engineer',
    company: 'LG Soft India',
    period: 'Jun 2024 – Dec 2025',
    points: [
      [null, 'Engineered manual and automated testing loops for webOS distributions, mitigating 35% of architectural backend runtime exceptions.'],
      [null, 'Reduced communication-validation latency by 90% across secondary-gateway infrastructure using low-level scripting with Tera Term and PuTTY.'],
      [null, 'Led final-stage stability validation for an unreleased television operating platform, diagnosing 100+ critical defects in Jira.'],
    ],
  },
  {
    role: 'Full Stack Developer (Freelance)',
    company: 'TalentConnect',
    period: 'Project-based',
    points: [
      [null, 'Built core services for RowRecruit, a specialized hiring platform, on the MERN stack.'],
      [null, 'Developed secure data routing through RESTful APIs and interactive dashboards for Admin and Corporate panels.'],
    ],
  },
  {
    role: 'Full-Stack Intern',
    company: 'HR Pro',
    period: 'Jan 2024 – May 2024',
    points: [
      [null, 'Built an enterprise HR management platform with an Angular frontend and high-volume ASP.NET Core API services.'],
    ],
  },
]

export const projects = [
  {
    title: 'Real Estate Management Platform',
    org: 'ioNob Innovations',
    desc: 'Four role-based Flutter apps (Tenant, Owner, Vendor, Agent) for Android and iOS on one .NET microservices backend, plus an Angular web portal.',
    tags: ['Flutter', '.NET', 'Angular', 'PostgreSQL', 'RabbitMQ'],
  },
  {
    title: 'Stimes',
    org: 'ioNob Innovations · Live product',
    url: 'https://stimes.app',
    desc: 'Modular, multi-tenant HR, payroll & operations SaaS spanning Web, Mobile, Kiosk and Employee Self-Service.',
    tags: ['.NET', 'Angular', 'Razor', 'PostgreSQL', 'Multi-Tenant'],
  },
  {
    title: 'Native ERP AI Assistant',
    org: 'Stimes',
    desc: 'AI assistant modules for contextual data processing and user query fulfillment inside the ERP.',
    tags: ['AI Assistants', 'Prompt Engineering'],
  },
  {
    title: 'MySQL → PostgreSQL Live Migration',
    org: 'Stimes',
    desc: 'Live migration to PostgreSQL with async, event-driven messaging over RabbitMQ and .NET Aspire orchestration.',
    tags: ['PostgreSQL', 'RabbitMQ', '.NET Aspire'],
  },
  {
    title: 'Self-Healing Test Automation',
    org: 'Stimes',
    desc: 'Playwright self-healing regression tests paired with Claude AI prototyping for up to 10× output.',
    tags: ['Playwright', 'Claude AI'],
  },
  {
    title: 'RowRecruit',
    org: 'TalentConnect · Freelance',
    desc: 'Specialized hiring platform with secure REST data routing and Admin / Corporate dashboards.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js'],
  },
]

// ── Google Flow showcase ──────────────────────────────────────────────
// Export your clips from Google Flow as MP4 and drop them into /public/videos.
// Update the title / prompt below to describe what YOU actually made.
export const flowClips = [
  { src: BASE + 'videos/flow-1.mp4', title: 'Your Flow clip #1', prompt: 'Paste the prompt you used in Google Flow here.' },
  { src: BASE + 'videos/flow-2.mp4', title: 'Your Flow clip #2', prompt: 'Describe the scene, camera move and style you directed.' },
  { src: BASE + 'videos/flow-3.mp4', title: 'Your Flow clip #3', prompt: 'Explain how you kept characters / scenes consistent.' },
]

export const education = [
  { degree: 'Master of Computer Applications (MCA)', school: 'New Horizon College of Engineering, VTU', year: '2024', score: 'CGPA 8.81' },
  { degree: 'B.Sc. Computer Science', school: 'Darul Huda Arts and Science College', year: '2021', score: 'CGPA 7.14' },
]

export const research =
  'Exploring Smart Contracts based on Web 3.0 Applications with respect to Vulnerability Detection Mechanisms'

export const certifications = [
  { name: 'System Usable Security', by: 'NPTEL' },
  { name: 'Journey to Cloud', by: 'IBM' },
  { name: 'Ethical Hacking', by: 'VTU' },
  { name: 'Database Management Systems', by: 'Infosys' },
]
