import { motion, AnimatePresence } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { ArrowUpRight, MapPin, Code2, PenTool } from "lucide-react";
import { LeetCodeStats } from "@/components/LeetCodeStats";
import { useNavigate, Link } from "react-router-dom";
import { Preloader } from "@/components/Preloader";
import { useState, useEffect } from "react";

// Updated tech stack to match your image exactly
const techStack = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", invert: true },
  { name: "NestJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg" },
  { name: "Tailwindcss", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Typescript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", invert: true },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Postgres", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Prisma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg", invert: true },
  { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" },
  { name: "Neon DB", icon: "https://neon.tech/favicon/favicon.svg" },
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg", invert: true },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", invert: true },
  { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
  { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
];

const Index = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("personal");

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");
    if (!hasVisited) setIsLoading(true);
  }, []);

  const handlePreloaderComplete = () => {
    sessionStorage.setItem("hasVisited", "true");
    setIsLoading(false);
  };

  return (
    <>
      <AnimatePresence>
        {isLoading && <Preloader onComplete={handlePreloaderComplete} />}
      </AnimatePresence>

      {!isLoading && (
        <div className="min-h-screen bg-[#050505] text-zinc-300 selection:bg-white selection:text-black">
          <main className="max-w-[1100px] mx-auto px-6 py-12 md:py-20">

            <motion.header
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12 mt-8"
            >
              <div className="flex flex-col gap-5"> {/* Tightened gap */}

                {/* Greeting & Status Line */}
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-mono tracking-[0.2em] text-zinc-400 uppercase">
                    Hi there
                  </span>
                  <span className="w-1 h-px bg-zinc-800" /> {/* Minimal divider */}
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <span className="text-[10px] font-mono tracking-[0.2em] text-zinc-500 uppercase">
                      Available now
                    </span>
                  </div>
                </div>

                {/* Typography - Name & Red Highlights */}
                <div className="space-y-4 md:space-y-2">
                  <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif text-white tracking-tighter leading-[1.1] md:leading-none">
                    Rishi Rohan Kalapala
                  </h1>
                  <p className="text-lg md:text-2xl text-zinc-500 max-w-2xl leading-relaxed md:leading-tight font-light">
                    I am a <span className="text-[#FF4D4D] font-medium">Full Stack Developer</span> building <span className="text-[#FF4D4D] font-medium">AI-native</span> apps and <span className="text-[#FF4D4D] font-medium">scalable systems</span>.
                  </p>
                </div>

                {/* Metadata & CTA - Inline and Tighter */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-y-4 gap-x-10 pt-6 md:pt-4 border-t border-zinc-900">
                  <button
                    onClick={() => navigate('/case-studies')}
                    className="group flex items-center gap-1.5 text-sm font-medium text-white transition-colors hover:text-[#FF4D4D]"
                  >
                    Case Studies
                    <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2.5 px-4 py-2 bg-zinc-900/60 border border-zinc-800 rounded-full hover:border-zinc-700 transition-colors">
                      <MapPin size={14} strokeWidth={2} className="text-[#FF4D4D]" />
                      <span className="text-xs font-medium text-zinc-300 tracking-wide">Hyderabad, India</span>
                    </div>
                    <div className="flex items-center gap-2.5 px-4 py-2 bg-zinc-900/60 border border-zinc-800 rounded-full hover:border-zinc-700 transition-colors">
                      <Code2 size={14} strokeWidth={2} className="text-[#FF4D4D]" />
                      <span className="text-xs font-medium text-zinc-300 tracking-wide">B.Tech AI & ML <span className="text-zinc-500">• 2026</span></span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.header>
            <section className="mb-20">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">

                {/* Side Heading */}
                <div className="md:col-span-3">
                  <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-600">
                    <span>I Build Using</span>
                  </div>
                </div>

                {/* Pills Container */}
                <div className="md:col-span-9">
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {techStack.map((tech) => (
                      <motion.div
                        key={tech.name}
                        whileHover={{ y: -2, borderColor: "rgba(255,255,255,0.7)" }}
                        className="flex items-center gap-2.5 px-3.5 py-2 bg-zinc-900/40 border border-dotted border-white/20 rounded-xl transition-all cursor-default group"
                      >
                        {/* Brand Logo in original color */}
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          className={`w-5 h-5 object-contain ${tech.invert ? 'invert' : ''}`}
                        />
                        {/* Name - Sharp Sans-serif */}
                        <span className="text-[14px] md:text-[15px] font-medium text-zinc-100 tracking-tight leading-none">
                          {tech.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
            {/* Current Focus - Headless CMS Project */}
            <section className="mb-16 pt-8 border-t border-zinc-900">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">

                {/* Label */}
                <div className="md:col-span-3">
                  <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-600">
                    <span>Current Focus <span className="text-[#FF4D4D]">2026</span></span>
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-9 space-y-6 md:space-y-5">
                  <div className="space-y-3 md:space-y-2">
                    <h3 className="text-3xl md:text-5xl font-serif text-white tracking-tight leading-none">
                      Headless <span className="text-[#FF4D4D]">CMS</span>
                    </h3>
                    <p className="text-base md:text-xl text-zinc-500 max-w-2xl leading-relaxed md:leading-snug font-light">
                      I am developing a <span className="text-[#FF4D4D]">multi-tenant platform</span> for modern content delivery. This involves architecting central asset management with <span className="text-[#FF4D4D]">AI-assisted generation</span>, <span className="text-[#FF4D4D]">RBAC security</span>, and scalable <span className="text-[#FF4D4D]">GraphQL APIs</span>.
                    </p>
                  </div>

                  {/* Tags - Minimal Text Style */}
                  <div className="flex flex-wrap gap-x-4 gap-y-2 pt-1">
                    {['NestJS', 'Next.js', 'PostgreSQL', 'OpenAI', 'Redis'].map(tag => (
                      <span key={tag} className="text-[10px] font-mono text-zinc-800 uppercase tracking-[0.15em] font-bold">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </section>

            {/* Current Client Work - New Section */}
            <section className="mb-20 pt-8 border-t border-zinc-900">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">

                {/* Side Heading */}
                <div className="md:col-span-3">
                  <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-600">
                    <span>Current Client <span className="text-[#FF4D4D]">2026</span></span>
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-9">
                  <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-zinc-900/50 to-zinc-900/10 border border-zinc-800 relative overflow-hidden group hover:border-zinc-700 transition-colors">
                    <div className="absolute top-0 right-0 p-6 md:p-8 opacity-20 group-hover:opacity-40 transition-opacity">
                      <ArrowUpRight size={24} className="text-[#FF4D4D] md:w-10 md:h-10" />
                    </div>

                    <div className="space-y-6 relative z-10">
                      <div className="space-y-3 md:space-y-2">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF4D4D] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF4D4D]"></span>
                          </div>
                          <span className="text-[10px] font-mono uppercase tracking-widest text-[#FF4D4D]">In Active Development</span>
                        </div>
                        <h3 className="text-3xl md:text-5xl font-serif text-white tracking-tight leading-none">
                          HSGA <span className="text-[#FF4D4D]">Telangana</span>
                        </h3>
                        <p className="text-base md:text-lg text-zinc-400 max-w-xl leading-relaxed font-light">
                          I am developing the <span className="text-white">official landing page</span> and a comprehensive <span className="text-white">Student Management System</span>. It is scaled to serve <span className="text-white">10,000+ student dashboards</span> with optimized performance.
                        </p>
                      </div>

                      {/* Tags - Pills */}
                      <div className="flex flex-wrap gap-2">
                        {['React', 'Node.js', 'PostgreSQL', 'AWS'].map(tag => (
                          <span key={tag} className="text-[10px] font-mono text-zinc-300 uppercase tracking-widest px-3 py-1.5 rounded-full border border-zinc-700 bg-zinc-900/50">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Selected Works - Minimal Redesign with Toggle */}
            <section className="mb-16 px-1">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 border-b border-zinc-900 pb-5 gap-6">
                <div className="space-y-1">
                  <h2 className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-600">
                    Selected Works
                  </h2>
                  <span className="text-xl md:text-2xl font-serif text-white tracking-tight">Archive 24 — 25</span>
                </div>

                {/* Minimal Category Toggle */}
                <div className="flex gap-8 overflow-x-auto no-scrollbar">
                  {["personal", "client"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`text-[10px] font-mono uppercase tracking-[0.2em] transition-all relative pb-2 whitespace-nowrap ${activeTab === tab ? "text-[#FF4D4D]" : "text-zinc-600 hover:text-zinc-400"
                        }`}
                    >
                      {tab} projects
                      {activeTab === tab && (
                        <motion.div
                          layoutId="activeTabUnderline"
                          className="absolute bottom-0 left-0 right-0 h-px bg-red-500"
                        />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Project List */}
              <div className="flex flex-col">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Mapping the data based on state */}
                    {/* Mapping the data based on state */}
                    {activeTab === "personal" ? (
                      <div className="flex flex-col">
                        {[
                          {
                            title: "Farmora",
                            desc: "A <span class='text-[#FF4D4D]'>Full-stack Agro Marketplace</span> designed for real-world impact. Features a comprehensive catalog, seller workflows, and robust <span class='text-[#FF4D4D]'>order management</span> logic.",
                            tags: ["Full Stack", "Marketplace", "System Design"],
                            link: "https://farmoraport.vercel.app",
                            year: "2025"
                          },
                          {
                            title: "DripMsg",
                            desc: "A <span class='text-[#FF4D4D]'>Real-time Messaging</span> system built on <span class='text-[#FF4D4D]'>Socket.IO</span>. Demonstrates usage of event-driven architecture.",
                            tags: ["Socket.IO", "Real-time", "Backend"],
                            link: "https://ckr-web.vercel.app",
                            year: "2024"
                          }
                        ].map((project, idx) => (
                          <a
                            key={idx}
                            href={project.link}
                            target="_blank"
                            className="group grid grid-cols-1 md:grid-cols-12 items-start py-8 border-b border-zinc-900 transition-all relative"
                          >
                            <div className="md:col-span-8 flex flex-col gap-2">
                              <h3 className="text-3xl md:text-4xl font-serif text-white group-hover:text-[#FF4D4D] transition-colors duration-500 tracking-tighter">
                                {project.title}
                              </h3>
                              <p
                                className="text-base text-zinc-500 font-light max-w-xl leading-snug"
                                dangerouslySetInnerHTML={{ __html: project.desc }}
                              />
                            </div>
                            <div className="md:col-span-4 flex flex-col md:items-end gap-5 mt-6 md:mt-0">
                              <div className="flex flex-wrap md:justify-end gap-4">
                                {project.tags.map((tag) => (
                                  <span key={tag} className="text-[10px] font-mono text-zinc-800 uppercase tracking-widest">
                                    #{tag}
                                  </span>
                                ))}
                              </div>
                              <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0 duration-500">
                                <ArrowUpRight size={24} className="text-[#FF4D4D]" />
                              </div>
                            </div>
                          </a>
                        ))}
                        <div className="pt-4 flex justify-center md:justify-start">
                          <Link
                            to="/projects"
                            className="group flex items-center gap-2 px-6 py-3 bg-zinc-900/50 border border-zinc-800 rounded-xl text-sm font-mono uppercase tracking-widest text-zinc-400 hover:text-white hover:border-zinc-600 transition-all"
                          >
                            View All Projects
                            <ArrowUpRight size={16} className="text-zinc-600 group-hover:text-[#FF4D4D] transition-colors" />
                          </Link>
                        </div>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          {
                            title: "NSS CMRIT",
                            desc: "A scalable <span class='text-[#FF4D4D]'>Management Ecosystem</span> built on <span class='text-[#FF4D4D]'>Enterprise Cloud</span> infrastructure dealing with large scale student data.",
                            tags: ["Education", "Cloud", "DEPL-01"],
                            link: "#"
                          },
                          {
                            title: "Forge Digital",
                            desc: "Developing <span class='text-[#FF4D4D]'>Enterprise Solutions</span> using a distributed <span class='text-[#FF4D4D]'>Microservices</span> architecture for high availability.",
                            tags: ["Technology", "Microservices", "DEPL-02"],
                            link: "#"
                          },
                          {
                            title: "Siya Jewels",
                            desc: "A <span class='text-[#FF4D4D]'>High-Conversion Store</span> powered by a custom <span class='text-[#FF4D4D]'>E-Com Core</span> engine optimized for speed.",
                            tags: ["E-Commerce", "Core", "DEPL-03"],
                            link: "#"
                          },
                          {
                            title: "Stories at Scale",
                            desc: "Content <span class='text-[#FF4D4D]'>Distribution Platform</span> featuring <span class='text-[#FF4D4D]'>Auto-Scale</span> capabilities for unpredictable traffic spikes.",
                            tags: ["Media", "Scaling", "DEPL-04"],
                            link: "#"
                          },
                          {
                            title: "HSGA CMRIT",
                            desc: "An integrated <span class='text-[#FF4D4D]'>Academic Portal</span> driven by a robust <span class='text-[#FF4D4D]'>Portal Engine</span> for seamless administration.",
                            tags: ["Education", "Portal", "DEPL-05"],
                            link: "https://hsga.cmrit.ac.in/"
                          },
                          {
                            title: "Dhasha Media",
                            desc: "A comprehensive <span class='text-[#FF4D4D]'>Digital Platform</span> built on a modular <span class='text-[#FF4D4D]'>Brand Core</span> system for agency operations.",
                            tags: ["Marketing", "System", "DEPL-06"],
                            link: "#"
                          }
                        ].map((project, idx) => (
                          <a
                            key={idx}
                            href={project.link}
                            target="_blank"
                            className="group flex flex-col justify-between p-6 bg-zinc-900/40 border border-zinc-800/50 hover:border-[#FF4D4D]/40 hover:bg-zinc-900/60 transition-all duration-500 rounded-xl min-h-[180px] relative overflow-hidden"
                          >
                            <div className="absolute inset-0 bg-gradient-to-br from-[#FF4D4D]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="space-y-4 relative z-10">
                              <div className="flex justify-between items-start">
                                <h3 className="text-xl font-medium text-zinc-100 group-hover:text-white transition-colors tracking-tight">
                                  {project.title}
                                </h3>
                                <div className="p-2 rounded-full bg-zinc-800/50 group-hover:bg-[#FF4D4D]/10 transition-colors">
                                  <ArrowUpRight size={14} className="text-zinc-500 group-hover:text-[#FF4D4D] transition-colors" />
                                </div>
                              </div>
                              <p
                                className="text-sm text-zinc-500 font-light leading-relaxed line-clamp-2 group-hover:text-zinc-400 transition-colors"
                                dangerouslySetInnerHTML={{ __html: project.desc }}
                              />
                            </div>

                            <div className="flex flex-wrap gap-2 pt-6 relative z-10">
                              {project.tags.map((tag) => (
                                <span key={tag} className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest bg-zinc-900/80 px-2 py-1 rounded border border-zinc-800/50 group-hover:border-[#FF4D4D]/20 group-hover:text-zinc-400 transition-colors">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </a>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </section>


            {/* LeetCode Analysis - Component handles its own layout */}
            <LeetCodeStats username="22r01a7335" />

            {/* Footer Section: Writing/Journal - Ultra Minimal */}
            <section className="mt-12 pt-6 border-t border-zinc-900">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">

                {/* Label Column - Reduced contrast to keep focus on titles */}
                <div className="md:col-span-3">
                  <h2 className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-700">
                    Journal
                  </h2>
                </div>

                {/* Articles Column - Tightened spacing (space-y-8) */}
                <div className="md:col-span-9 space-y-8">

                  {/* Article 1: Roadmap */}
                  <a href="#" className="group block space-y-2">
                    <div className="flex justify-between items-start gap-4">
                      <h3 className="text-xl md:text-3xl font-serif text-white group-hover:text-red-500 transition-colors duration-300 leading-tight tracking-tight">
                        Web & App Development Roadmap
                      </h3>
                      <ArrowUpRight size={18} className="text-zinc-800 group-hover:text-red-500 transition-all duration-300 flex-shrink-0 mt-1 md:mt-0" />
                    </div>
                    <p className="text-sm md:text-base text-zinc-500 font-light max-w-xl leading-relaxed">
                      A <span className="text-red-500">comprehensive guide</span> to engineering software with the <span className="text-red-500">P3D Formula</span>.
                    </p>
                    <div className="flex items-center gap-2.5 pt-0.5">
                      <span className="text-[9px] font-mono text-zinc-800 uppercase tracking-[0.2em]">Guide</span>
                      <span className="w-1 h-px bg-zinc-900" />
                      <span className="text-[9px] font-mono text-zinc-800 uppercase tracking-[0.2em]">Upcoming</span>
                    </div>
                  </a>

                  {/* Article 2: Startup Journey */}
                  <a href="#" className="group block space-y-2">
                    <div className="flex justify-between items-start gap-4">
                      <h3 className="text-xl md:text-3xl font-serif text-white group-hover:text-red-500 transition-colors duration-300 leading-tight tracking-tight">
                        From Chaos to Clarity
                      </h3>
                      <ArrowUpRight size={18} className="text-zinc-800 group-hover:text-red-500 transition-all duration-300 flex-shrink-0 mt-1 md:mt-0" />
                    </div>
                    <p className="text-sm md:text-base text-zinc-500 font-light max-w-xl leading-relaxed">
                      The <span className="text-red-500">naming journey</span> of my <span className="text-red-500">startup</span>. Distilling vision into identity.
                    </p>
                    <div className="flex items-center gap-2.5 pt-0.5">
                      <span className="text-[9px] font-mono text-zinc-800 uppercase tracking-[0.2em]">Brand</span>
                      <span className="w-1 h-px bg-zinc-900" />
                      <span className="text-[9px] font-mono text-zinc-800 uppercase tracking-[0.2em]">2024</span>
                    </div>
                  </a>

                  {/* Article 3: Vibe Coding */}
                  <a href="https://www.linkedin.com/pulse/traditional-coding-vs-vibe-rishi-rohan-kalapala-mga8f/" target="_blank" className="group block space-y-2">
                    <div className="flex justify-between items-start gap-4">
                      <h3 className="text-xl md:text-3xl font-serif text-white group-hover:text-red-500 transition-colors duration-300 leading-tight tracking-tight">
                        Traditional vs Vibe Coding
                      </h3>
                      <ArrowUpRight size={18} className="text-zinc-800 group-hover:text-red-500 transition-all duration-300 flex-shrink-0 mt-1 md:mt-0" />
                    </div>
                    <p className="text-sm md:text-base text-zinc-500 font-light max-w-xl leading-relaxed">
                      Reflections on <span className="text-red-500">AI-assisted development</span> and the shift toward intuition.
                    </p>
                    <div className="flex items-center gap-2.5 pt-0.5">
                      <span className="text-[9px] font-mono text-zinc-800 uppercase tracking-[0.2em]">Article</span>
                      <span className="w-1 h-px bg-zinc-900" />
                      <span className="text-[9px] font-mono text-zinc-800 uppercase tracking-[0.2em]">Feb 2024</span>
                    </div>
                  </a>

                </div>
              </div>
            </section>
            {/* Copyright Footer */}
            <footer className="mt-24 pt-8 pb-8 border-t border-zinc-900 flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                © 2026 Rishi Rohan Kalapala. All Rights Reserved.
              </p>
              <p className="text-[10px] font-mono text-zinc-700 uppercase tracking-widest">
                Version <span className="text-[#FF4D4D]">Harbor</span>
              </p>
            </footer>
          </main>

          <Navigation />
        </div>
      )}
    </>
  );
};

const ProjectRow = ({ title, desc, tags, link }: any) => (
  <a
    href={link || "#"}
    target="_blank"
    className="group flex flex-col md:flex-row md:items-center justify-between p-8 bg-[#050505] hover:bg-zinc-900/40 transition-all border-b border-zinc-800/50 last:border-0"
  >
    <div className="mb-4 md:mb-0">
      <h3 className="text-xl font-medium text-zinc-100 mb-1 flex items-center gap-2">
        {title}
        {link && <ArrowUpRight size={14} className="text-zinc-700 group-hover:text-zinc-400 transition-colors" />}
      </h3>
      <p className="text-zinc-500 text-sm">{desc}</p>
    </div>
    <div className="flex gap-2">
      {tags.map((tag: string) => (
        <span key={tag} className="text-[10px] font-mono text-zinc-600 uppercase tracking-tighter border border-zinc-800 px-2 py-1 rounded">
          {tag}
        </span>
      ))}
    </div>
  </a>
);

export default Index;
