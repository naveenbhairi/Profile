import {
  ArrowLeft,
  ArrowRight,
  Download,
  ExternalLink,
  Mail,
  MapPin,
  Menu,
  Network,
  Phone,
  Sparkles,
  UserRound,
  X,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import profileImage from "./profile-photo.jpg";

const resumePath = "/Naveen_Bhairi_ReactJs_Resume.pdf";

type Profile = {
  name: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  summary: string;
  github: string;
  linkedin: string;
  website: string;
  skills: string[];
  highlights: string[];
  experience: Experience[];
  projects: Project[];
};

type Experience = {
  id: string;
  title: string;
  company: string;
  period: string;
  detail: string;
};

type Project = {
  id: string;
  name: string;
  stack: string;
  detail: string;
};

const storageKey = "profiledata:v1";

const initialProfile: Profile = {
  name: "Naveen Bhairi",
  role: "Frontend React.js Developer",
  location: "Hyderabad, India",
  email: "naveen.bhairi123@gmail.com",
  phone: "+91 9398421298",
  summary:
    "Frontend React.js Developer with hands-on experience building scalable enterprise web applications using React.js, Redux Toolkit, TypeScript, TanStack Query, Socket.IO, and modern dashboard libraries. Strong in reusable UI components, API integration, real-time data flows, authentication screens, responsive dashboards, and performance optimization.",
  
  github: "https://github.com/naveenbhairi",
  linkedin: "https://www.linkedin.com/in/naveen-bhairi-09b60b147/",
  website: "https://naveenbhairi.github.io/Profile",
  skills: [
    "JavaScript",
    "React.js",
    "TypeScript",
    "Redux Toolkit",
    "TanStack Query",
    "React Hook Form",
    "Zod",
    "React Router",
    "Socket.IO",
    "Axios",
    "Tailwind CSS",
    "Recharts",
    "React Window",
    "TradingView Charts",
    "Jest",
    "React Testing Library",
    "Node.js",
    "Express.js",
    "MongoDB",
    "GCP",
  ],
  highlights: [
    "Built live stock and crypto dashboards that handled 5K+ concurrent real-time events with selective WebSocket subscriptions and virtualized rendering.",
    "Improved frontend performance through code splitting, lazy loading, memoization, and bundle optimization, raising Lighthouse score from 54 to 91.",
    "Created reusable React and Tailwind component patterns that reduced duplicate code and improved delivery speed across enterprise modules.",
  ],
  experience: [
    {
      id: "exp-1",
      title: "React.js Frontend Developer",
      company: "Cognizant - AlgoForge Trading",
      period: "Jan 2024 - Mar 2026",
      detail:
        "Developed a trading platform with React.js, Redux Toolkit, TypeScript, TanStack Query, Socket.IO, TradingView Lightweight Charts, Recharts, and Axios. Built reusable UI components, live market dashboards, strategy marketplace filters, secure JWT and Google OAuth flows, 2FA screens, API service layers, error boundaries, toast notifications, and performance optimizations for high-volume real-time data.",
    },
    {
      id: "exp-2",
      title: "React.js Frontend Developer",
      company: "Cognizant - Healthcare Management System",
      period: "Jul 2022 - Dec 2023",
      detail:
        "Contributed to a hospital management platform with role-based access, protected routing, JWT sessions, WebSocket event handling, React Context state, conditional clinical dashboards, reusable custom hooks, React Hook Form with Zod validation, route-level code splitting, and skeleton loading states for patient and appointment workflows.",
    },
    {
      id: "exp-3",
      title: "Cybersecurity Analyst",
      company: "Cognizant - Google Web Store",
      period: "Oct 2021 - Jul 2022",
      detail:
        "Handled threat response across L1 triage and complex L0 escalations, investigated malicious browser extensions with Chrome DevTools and HTTP Toolkit, reverse-engineered obfuscated payloads, and supported SLA-driven incident workflows.",
    },
  ],
  projects: [
    {
      id: "project-3",
      name: "Profile Folio",
      stack: "React.js, TypeScript, Tailwind CSS, localStorage",
      detail:
        "Personal profile workspace for maintaining professional details, skills, links, highlights, experience, project summaries, shareable profile text, and downloadable contact data.",
    },
    {
      id: "project-4",
      name: "Expense Manager",
      stack: "React.js, JavaScript, API integration, responsive UI",
      detail:
        "Focused personal finance tool for recording expenses, organizing transaction data, and improving day-to-day expense visibility through a clean web interface.",
    },
  ],
};

const navItems = [
  { href: "#projects", icon: <ExternalLink size={17} />, label: "Projects" },
  { href: "#experience", icon: <Sparkles size={17} />, label: "Experience" },
  { href: "#skills", icon: <Network size={17} />, label: "Skills" },
  { href: "#contact", icon: <Mail size={17} />, label: "Contact" },
];

function App() {
  const [profile] = useState<Profile>(() => loadProfile());
  const [experiencePage, setExperiencePage] = useState(0);
  const [profileImageFailed, setProfileImageFailed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const stats = useMemo(
    () => [
      { value: "4+", label: "Years experience" },
      { value: `${profile.projects.length}+`, label: "Featured projects" },
      { value: `${profile.skills.length}+`, label: "Tools mastered" },
    ],
    [profile.projects.length, profile.skills.length],
  );

  const currentExperience =
    profile.experience[experiencePage] ?? profile.experience[0];
  const experiencePageCount = Math.max(1, profile.experience.length);

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(profile));
  }, [profile]);

  useEffect(() => {
    setExperiencePage((current) =>
      Math.min(current, Math.max(0, experiencePageCount - 1)),
    );
  }, [experiencePageCount]);

  const downloadResume = async () => {
    const response = await fetch(resumePath);
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Naveen_Bhairi_ReactJs_Resume.pdf";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <main className="relative min-h-screen pb-20 text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      {/* Modern Grid Background with Ambient Glow */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-slate-50">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-[-10%] -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-500 opacity-20 blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] -z-10 h-[400px] w-[400px] rounded-full bg-indigo-500 opacity-20 blur-[120px]"></div>
        <div className="absolute right-[-5%] top-[20%] -z-10 h-[250px] w-[250px] rounded-full bg-blue-400 opacity-20 blur-[100px]"></div>
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-4 py-8 sm:px-6 lg:px-8">
        <header className={`sticky top-4 z-50 mx-auto w-full max-w-5xl bg-white/80 px-4 py-3 shadow-sm shadow-slate-200/50 ring-1 ring-slate-200 backdrop-blur-md transition-all ${isMobileMenuOpen ? "rounded-3xl" : "rounded-full"}`}>
          <div className="flex items-center justify-between">
            <a href="#" className="group flex min-w-0 items-center gap-3">
              <div className="grid size-12 shrink-0 place-items-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-md transition-transform group-hover:scale-105">
                <UserRound size={24} strokeWidth={2.5} />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  {profile.name}
                </p>
                <h1 className="truncate text-lg font-extrabold text-slate-900">
                  Portfolio
                </h1>
              </div>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              className="p-2 text-slate-600 lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop Nav */}
            <div className="hidden lg:flex lg:items-center lg:gap-3">
              <nav className="flex items-center gap-1 rounded-full border border-slate-200 bg-white/50 p-1">
                {navItems.map((item) => (
                  <a
                    className="group inline-flex h-10 shrink-0 items-center gap-2 rounded-full px-4 text-sm font-medium text-slate-600 transition-all hover:bg-slate-900 hover:text-white"
                    href={item.href}
                    key={item.label}
                  >
                    <span className="text-slate-400 transition-colors group-hover:text-white/80">
                      {item.icon}
                    </span>
                    {item.label}
                  </a>
                ))}
              </nav>

              <button
                className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-slate-900 px-5 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-md"
                onClick={downloadResume}
                type="button"
              >
                <Download size={16} />
                <span>Resume</span>
              </button>
            </div>
          </div>

          {/* Mobile Nav Content */}
          {isMobileMenuOpen && (
            <div className="mt-4 flex flex-col gap-4 pb-2 lg:hidden">
              <nav className="flex flex-col gap-2 rounded-2xl border border-slate-200 bg-white/50 p-2">
                {navItems.map((item) => (
                  <a
                    className="group inline-flex h-11 items-center gap-3 rounded-xl px-4 text-sm font-medium text-slate-600 transition-all hover:bg-slate-900 hover:text-white"
                    href={item.href}
                    key={item.label}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="text-slate-400 transition-colors group-hover:text-white/80">
                      {item.icon}
                    </span>
                    {item.label}
                  </a>
                ))}
              </nav>
              <button
                className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-slate-800 hover:shadow-md"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  downloadResume();
                }}
                type="button"
              >
                <Download size={16} />
                <span>Download Resume</span>
              </button>
            </div>
          )}
        </header>

        <section className="pt-4 lg:pt-8" id="contact">
          <div className="px-1 py-2 sm:px-2 lg:py-3">
              <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-center">
                <div className="min-w-0">
                  
                  <EditableText
                    as="h2"
                    className="text-5xl font-extrabold tracking-tight text-slate-900 sm:text-7xl"
                    value={profile.name}
                  />
                  <EditableText
                    className="mt-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl"
                    value={profile.role}
                  />
                  <EditableText
                    className="mt-6 w-full max-w-2xl text-lg leading-relaxed text-slate-600"
                    value={profile.summary}
                  />

                  <div className="mt-8 flex flex-wrap gap-3">
                    <AnchorButton
                      href={profile.github}
                      icon={<BrandGithub size={17} />}
                      tone="quiet"
                    >
                      GitHub
                    </AnchorButton>
                    <AnchorButton
                      href={profile.linkedin}
                      icon={<BrandLinkedin size={17} />}
                      tone="quiet"
                    >
                      LinkedIn
                    </AnchorButton>
                  </div>

                  <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
                    {stats.map((stat) => (
                      <div
                        className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                        key={stat.label}
                      >
                        <p className="text-3xl font-extrabold text-slate-900">
                          {stat.value}
                        </p>
                        <p className="mt-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <ProfilePhoto
                  imageFailed={profileImageFailed}
                  name={profile.name}
                  onImageError={() => setProfileImageFailed(true)}
                />
              </div>

              <div className="mt-16 grid gap-4 sm:grid-cols-3">
                <InfoRow
                  icon={<MapPin size={18} />}
                  label="Location"
                  value={profile.location}
                />
                <InfoRow
                  icon={<Mail size={18} />}
                  label="Email"
                  value={profile.email}
                />
                <InfoRow
                  icon={<Phone size={18} />}
                  label="Phone"
                  value={profile.phone}
                />
              </div>
          </div>
        </section>

        <section className="grid gap-12 lg:grid-cols-[minmax(300px,0.9fr)_minmax(0,1.4fr)] lg:gap-16">
          <Panel
            title="Skills"
            id="skills"
          >
            <div className="flex max-w-4xl flex-wrap gap-3">
              {profile.skills.map((skill, index) => (
                <span
                  className="inline-flex items-center rounded-full bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10"
                  key={`${skill}-${index}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </Panel>

          <Panel
            title="Highlights"
          >
            <div className="grid gap-6 md:grid-cols-3">
              {profile.highlights.map((highlight, index) => (
                <div
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
                  key={`${highlight}-${index}`}
                >
                  <div className="mb-4 inline-flex size-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Sparkles size={18} />
                  </div>
                  <p className="text-sm leading-relaxed text-slate-600">{highlight}</p>
                </div>
              ))}
            </div>
          </Panel>
        </section>

        <Panel
          id="projects"
          title="Projects"
        >
          <div className="grid gap-6 md:grid-cols-2">
            {profile.projects.map((project) => (
              <article
                className="group flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50"
                key={project.id}
              >
                <div>
                  <EditableText
                    className="text-xl font-bold text-slate-900 transition-colors group-hover:text-blue-600"
                    value={project.name}
                  />
                  <EditableText
                    className="mt-2 text-sm font-medium text-blue-600"
                    value={project.stack}
                  />
                  <EditableText
                    className="mt-6 text-sm leading-relaxed text-slate-600"
                    value={project.detail}
                  />
                </div>
              </article>
            ))}
          </div>
        </Panel>

        <Panel
          id="experience"
          action={
            <div className="flex items-center gap-2">
              <IconButton
                label="Previous experience page"
                onClick={() =>
                  setExperiencePage((current) =>
                    current === 0 ? experiencePageCount - 1 : current - 1,
                  )
                }
              >
                <ArrowLeft size={18} />
              </IconButton>
              <IconButton
                label="Next experience page"
                onClick={() =>
                  setExperiencePage((current) =>
                    current === experiencePageCount - 1 ? 0 : current + 1,
                  )
                }
              >
                <ArrowRight size={18} />
              </IconButton>
            </div>
          }
          title="Experience"
        >
          {currentExperience ? (
            <div>
              <article className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all sm:p-10">
                <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                  <div>
                    <EditableText
                      className="text-2xl font-bold text-slate-900 sm:text-3xl"
                      value={currentExperience.title}
                    />
                    <EditableText
                      className="mt-2 text-lg font-medium text-blue-600"
                      value={currentExperience.company}
                    />
                  </div>
                  <div className="inline-flex items-center rounded-full bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-500 ring-1 ring-inset ring-slate-200">
                    {String(experiencePage + 1).padStart(2, "0")} /{" "}
                    {String(profile.experience.length).padStart(2, "0")}
                  </div>
                </div>
                <EditableText
                  className="text-base leading-relaxed text-slate-600"
                  value={currentExperience.detail}
                />
                <div className="mt-8">
                  <EditableText
                    className="inline-flex items-center rounded-full bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10"
                    value={currentExperience.period}
                  />
                </div>
              </article>

              <div className="mt-5 flex justify-center gap-2">
                {profile.experience.map((item, index) => (
                  <button
                    aria-label={`Show ${item.title}`}
                    className={`h-2 rounded-full transition-all ${
                      index === experiencePage
                        ? "w-8 bg-blue-600"
                        : "w-2 bg-slate-300 hover:bg-slate-400"
                    }`}
                    key={item.id}
                    onClick={() => setExperiencePage(index)}
                    type="button"
                  />
                ))}
              </div>
            </div>
          ) : null}
        </Panel>
      </div>
    </main>
  );
}

function loadProfile() {
  const saved = localStorage.getItem(storageKey);

  if (!saved) {
    return initialProfile;
  }

  try {
    return { ...initialProfile, ...JSON.parse(saved) } as Profile;
  } catch {
    return initialProfile;
  }
}

function ProfilePhoto({
  imageFailed,
  name,
  onImageError,
}: {
  imageFailed: boolean;
  name: string;
  onImageError: () => void;
}) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="mx-auto w-full max-w-sm lg:mx-0 lg:justify-self-end">
      <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl shadow-blue-900/10 ring-1 ring-slate-900/5">
        {!imageFailed ? (
          <img
            alt={name}
            className="h-full w-full object-cover"
            onError={onImageError}
            src={profileImage}
          />
        ) : (
          <div className="grid h-full place-items-center bg-gradient-to-br from-blue-100 via-slate-50 to-blue-50 text-6xl font-bold text-blue-700">
            {initials}
          </div>
        )}
      </div>
    </div>
  );
}

function AnchorButton({
  children,
  href,
  icon,
  tone = "solid",
}: {
  children: React.ReactNode;
  href: string;
  icon: React.ReactNode;
  tone?: "solid" | "quiet";
}) {
  const isExternal = href.startsWith("http");

  return (
    <a
      className={`inline-flex min-h-11 items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 ${
        tone === "solid"
          ? "bg-slate-900 text-white hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-900/20"
          : "bg-white text-slate-700 ring-1 ring-inset ring-slate-200 hover:bg-slate-50 hover:text-slate-900"
      }`}
      href={href}
      rel={isExternal ? "noreferrer" : undefined}
      target={isExternal ? "_blank" : undefined}
    >
      {icon}
      {children}
    </a>
  );
}

function IconButton({
  children,
  label,
  onClick,
}: {
  children: React.ReactNode;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      className="flex size-10 items-center justify-center rounded-full bg-white text-slate-500 ring-1 ring-inset ring-slate-200 transition-all hover:bg-slate-50 hover:text-slate-900 hover:shadow-sm"
      onClick={onClick}
      title={label}
      type="button"
    >
      {children}
    </button>
  );
}

function Panel({
  action,
  children,
  id,
  title,
}: {
  action?: React.ReactNode;
  children: React.ReactNode;
  id?: string;
  title: string;
}) {
  return (
    <section
      className="scroll-mt-28"
      id={id}
    >
      <div className="mb-7 flex min-h-10 flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            {title}
          </h2>
        </div>
        {action}
      </div>
      {children}
    </section>
  );
}

function EditableText({
  as = "p",
  className,
  value,
}: {
  as?: "h2" | "p";
  className: string;
  value: string;
}) {
  const Tag = as;
  return <Tag className={className}>{value}</Tag>;
}

function InfoRow({
  href,
  icon,
  label,
  value,
}: {
  href?: string;
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex min-h-24 items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:shadow-md">
      <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
          {label}
        </p>
        {href ? (
          <a
            className="mt-1 block break-words text-sm font-semibold leading-5 text-slate-900 hover:text-blue-600"
            href={href}
            rel="noreferrer"
            target="_blank"
          >
            {value}
          </a>
        ) : (
          <p className="mt-1 break-words text-sm font-semibold leading-5 text-slate-900">
            {value}
          </p>
        )}
      </div>
    </div>
  );
}

function BrandGithub({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function BrandLinkedin({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default App;
