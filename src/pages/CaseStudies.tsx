
import { motion } from "framer-motion";
import { ArrowLeft, Database, Server, Shield, Zap, Users, Globe, Code, Layers, GitBranch, Lock, BarChart3, ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CaseStudies = () => {
    const navigate = useNavigate();

    const techStack = [
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", invert: true },
        { name: "Tailwindcss", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "Typescript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "NestJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg" },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Postgres", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
        { name: "Prisma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg", invert: true },
        { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg", invert: true },
    ];

    const coreFeatures = [
        {
            icon: <Layers className="w-5 h-5" />,
            title: "Content Management",
            items: ["Dynamic content types", "Rich-text editor & media library", "Draft, publish, version history", "Scheduled publishing"]
        },
        {
            icon: <Code className="w-5 h-5" />,
            title: "API-First Architecture",
            items: ["REST / GraphQL endpoints", "JSON-based structured content", "Secure API tokens", "Rate limiting & validation"]
        },
        {
            icon: <Users className="w-5 h-5" />,
            title: "Multi-Client Support",
            items: ["Separate workspaces per client", "Custom branding per client", "Domain-based CMS access", "Client-specific isolation"]
        },
        {
            icon: <Shield className="w-5 h-5" />,
            title: "Role-Based Access (RBAC)",
            items: ["Super Admin", "Client Admin", "Editors & Contributors", "View-only roles"]
        },
        {
            icon: <Zap className="w-5 h-5" />,
            title: "Performance",
            items: ["Redis caching", "CDN media delivery", "Lazy loading & pagination", "Optimized queries"]
        },
        {
            icon: <GitBranch className="w-5 h-5" />,
            title: "Developer Tools",
            items: ["Webhooks for updates", "SDK integration support", "API documentation", "Import/export tools"]
        }
    ];

    const useCases = [
        "Corporate websites",
        "SaaS marketing platforms",
        "Blogs & news portals",
        "E-commerce content hubs",
        "Mobile app backends",
        "Agency-managed sites"
    ];

    const futureEnhancements = [
        "AI-assisted content generation",
        "Visual page builder",
        "GraphQL subscriptions",
        "Multi-language support",
        "Plugin marketplace",
        "Workflow automation"
    ];

    return (
        <div className="min-h-screen bg-[#050505] text-zinc-300 selection:bg-white selection:text-black">
            <main className="max-w-[1100px] mx-auto px-6 py-12 md:py-20">

                {/* Navigation */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <div className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.2em]">
                        <button
                            onClick={() => navigate('/')}
                            className="text-zinc-500 hover:text-white transition-colors"
                        >
                            Home
                        </button>
                        <span className="text-zinc-700">/</span>
                        <span className="text-[#FF4D4D]">Case Studies</span>
                    </div>
                </motion.div>

                {/* Hero Section */}
                <motion.header
                    className="mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-3">
                            <span className="text-[10px] font-mono tracking-[0.2em] text-zinc-400 uppercase">
                                Case Study
                            </span>
                            <span className="w-1 h-px bg-zinc-800" />
                            <span className="text-[10px] font-mono tracking-[0.2em] text-[#FF4D4D] uppercase">
                                2024
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-serif text-white tracking-tighter leading-none">
                            Headless <span className="text-[#FF4D4D]">CMS</span> Platform
                        </h1>
                        <p className="text-xl md:text-2xl text-zinc-500 max-w-2xl leading-tight font-light">
                            A scalable, <span className="text-white">API-driven content management system</span> for multi-client content delivery.
                        </p>
                    </div>
                </motion.header>

                {/* Tech Stack - Logos */}
                <section className="mb-20">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                        <div className="md:col-span-3">
                            <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-600">
                                <span>Built With</span>
                            </div>
                        </div>
                        <div className="md:col-span-9">
                            <div className="flex flex-wrap gap-2 md:gap-3">
                                {techStack.map((tech) => (
                                    <motion.div
                                        key={tech.name}
                                        whileHover={{ y: -2, borderColor: "rgba(255,255,255,0.7)" }}
                                        className="flex items-center gap-2.5 px-3.5 py-2 bg-zinc-900/40 border border-dotted border-white/20 rounded-xl transition-all cursor-default group"
                                    >
                                        <img
                                            src={tech.icon}
                                            alt={tech.name}
                                            className={`w-5 h-5 object-contain ${tech.invert ? 'invert' : ''}`}
                                        />
                                        <span className="text-[14px] md:text-[15px] font-medium text-zinc-100 tracking-tight leading-none">
                                            {tech.name}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Project Links */}
                <section className="mb-20 pt-8 border-t border-zinc-900">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                        <div className="md:col-span-3">
                            <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-600">
                                <span>Resources</span>
                            </div>
                        </div>
                        <div className="md:col-span-9">
                            <div className="flex flex-col gap-3 font-mono text-sm">
                                <div className="flex items-center gap-6">
                                    <span className="text-zinc-500 uppercase tracking-widest text-[10px] w-16">Source</span>
                                    <a href="https://github.com/kalapalarishirohan/CMS" className="text-zinc-300 hover:text-[#FF4D4D] transition-colors hover:underline decoration-zinc-800 underline-offset-4">
                                        https://github.com/kalapalarishirohan/CMS
                                    </a>
                                </div>
                                <div className="flex items-center gap-6">
                                    <span className="text-zinc-500 uppercase tracking-widest text-[10px] w-16">Demo</span>
                                    <a href="#" className="text-zinc-300 hover:text-[#FF4D4D] transition-colors hover:underline decoration-zinc-800 underline-offset-4">
                                        Not Available
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Overview */}
                <section className="mb-20 pt-8 border-t border-zinc-900">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                        <div className="md:col-span-3">
                            <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-600">
                                <span>Overview</span>
                            </div>
                        </div>
                        <div className="md:col-span-9">
                            <p className="text-lg text-zinc-400 leading-relaxed font-light">
                                This project is a <span className="text-[#FF4D4D]">Headless Content Management System</span> designed to provide a scalable, API-driven,
                                and multi-tenant content platform. It separates content management (backend) from content presentation
                                (frontend), enabling flexible delivery across websites, mobile apps, dashboards, and third-party integrations.
                            </p>
                            <div className="mt-8">
                                <img
                                    src="https://i.ibb.co/zWVd9rtQ/Chat-GPT-Image-Jan-27-2026-03-51-14-PM.png"
                                    alt="Overview"
                                    className="w-full rounded-xl border border-zinc-800/50 opacity-90"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Problem Statement */}
                <section className="mb-20 pt-8 border-t border-zinc-900">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                        <div className="md:col-span-3">
                            <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-600">
                                <span>The Challenge</span>
                            </div>
                        </div>
                        <div className="md:col-span-9 space-y-8">
                            <p className="text-lg text-zinc-400 leading-relaxed font-light mb-8">
                                Traditional CMS platforms often suffer from being <span className="text-[#FF4D4D]">tightly coupled</span> with frontend rendering, lacking flexibility for omnichannel delivery, and becoming performance bottlenecks at scale. Managing content across multiple platforms (Web, Mobile, IoT) becomes a logistical nightmare without a centralized, API-first approach.
                            </p>

                            <div className="mb-8">
                                <div className="space-y-6">
                                    <h3 className="text-xl font-serif text-white">Key Pain Points</h3>
                                    <ul className="grid md:grid-cols-2 gap-4">
                                        {[
                                            { title: "Tightly Coupled Frontend", desc: "Monolithic architectures limit frontend framework choices and deployment speed." },
                                            { title: "Omnichannel Rigidity", desc: "Difficulty in reusing content across web, mobile, and other digital touchpoints." },
                                            { title: "Scaling Issues", desc: "Performance degradation when serving heavy media assets to a global audience." },
                                            { title: "Manual Workflows", desc: "Lack of automation in content publishing and version control." }
                                        ].map((item, i) => (
                                            <li key={i} className="flex flex-col gap-1 text-zinc-500 font-light">
                                                <div className="flex items-center gap-3">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D4D] shrinking-0" />
                                                    <span className="text-zinc-300 font-medium">{item.title}</span>
                                                </div>
                                                <p className="text-sm pl-4.5">{item.desc}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div>
                                <img
                                    src="https://i.ibb.co/xqmdPYh6/Chat-GPT-Image-Jan-27-2026-03-56-06-PM.png"
                                    alt="Challenges Visualization"
                                    className="w-full rounded-xl border border-zinc-800/50 opacity-90"
                                />
                            </div>
                        </div>
                    </div>
                </section>


                {/* Solution & Features */}
                <section className="mb-20 pt-8 border-t border-zinc-900">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                        <div className="md:col-span-3">
                            <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-600">
                                <span>Solution & Features</span>
                            </div>
                        </div>
                        <div className="md:col-span-9 space-y-8">
                            <div className="space-y-6 mb-8">
                                <p className="text-lg text-zinc-400 leading-relaxed font-light">
                                    To address these challenges, we architected a <span className="text-[#FF4D4D]">API-first solution</span> that completely decouples the backend content repository from the frontend presentation layer. This "Headless" approach allows for greater scalability, flexibility, and security.
                                </p>
                                <p className="text-lg text-zinc-400 leading-relaxed font-light">
                                    The Core of the system is built on <span className="text-[#FF4D4D]">NestJS</span>, providing a robust and modular backend structure. We utilized <span className="text-[#FF4D4D]">PostgreSQL</span> for structured data storage and <span className="text-[#FF4D4D]">Redis</span> for high-performance caching. The entire platform is containerized using <span className="text-[#FF4D4D]">Docker</span> to ensure consistent environments across development and production.
                                </p>
                            </div>

                            <div className="space-y-8">
                                <p className="text-zinc-400 font-light leading-relaxed">
                                    <strong className="text-white font-medium block mb-2">Content Management & Architecture</strong>
                                    The platform enables <span className="text-[#FF4D4D]">dynamic content types</span> and includes a full-featured <span className="text-[#FF4D4D]">rich-text editor</span> with an integrated media library. Users can manage content lifecycles with draft/publish states, version history, and scheduled publishing capabilities.
                                    The <span className="text-[#FF4D4D]">API-First Architecture</span> exposes both REST and GraphQL endpoints, delivering JSON-based structured content to any frontend. Security and stability are ensured through secure API tokens, strict validation, and automated rate limiting.
                                </p>

                                <p className="text-zinc-400 font-light leading-relaxed">
                                    <strong className="text-white font-medium block mb-2">Multi-Tenancy & Security</strong>
                                    <span className="text-[#FF4D4D]">Multi-Client Support</span> is built-in, offering separate workspaces and client-specific isolation. Each tenant enjoys custom branding abilities and dedicated domain-based access to their CMS environment.
                                    We implemented granular <span className="text-[#FF4D4D]">Role-Based Access (RBAC)</span>, defining distinct permissions for Super Admins, Client Admins, Editors, Contributors, and View-only users to maintain secure operational workflows.
                                </p>

                                <p className="text-zinc-400 font-light leading-relaxed">
                                    <strong className="text-white font-medium block mb-2">Performance & Developer Experience</strong>
                                    To ensure high performance, the system leverages <span className="text-[#FF4D4D]">Redis caching</span> and global <span className="text-[#FF4D4D]">CDN media delivery</span>. We optimized database queries and implemented lazy loading with pagination to handle large datasets efficiently.
                                    For developers, the platform provides comprehensive tools including <span className="text-[#FF4D4D]">webhooks</span> for real-time updates, SDK integration support, detailed API documentation, and robust import/export utilities.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* System Architecture */}
                <section className="mb-20 pt-8 border-t border-zinc-900">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                        <div className="md:col-span-3">
                            <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-600">
                                <span>Architecture</span>
                            </div>
                        </div>
                        <div className="md:col-span-9 space-y-8">
                            <div className="space-y-8">
                                <p className="text-lg text-zinc-400 leading-relaxed font-light">
                                    The entire system runs on a <span className="text-[#FF4D4D]">cloud-native infrastructure</span> designed for high availability and fault tolerance. We utilize a microservices pattern where distinct bounded contexts (User Management, Content API, Asset Processing) are containerized and orchestrated independently.
                                </p>

                                <div>
                                    <img
                                        src="https://i.ibb.co/RTfQ0TFb/Chat-GPT-Image-Jan-27-2026-04-20-13-PM.png"
                                        alt="Architecture Diagram"
                                        className="w-full rounded-xl border border-zinc-800/50 opacity-90"
                                    />
                                </div>

                                <div className="grid md:grid-cols-3 gap-6 pt-4">
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2 text-white/90">
                                            <Server className="w-4 h-4 text-[#FF4D4D]" />
                                            <span className="font-mono text-xs uppercase tracking-wider">Backend Core</span>
                                        </div>
                                        <p className="text-sm text-zinc-500 font-light leading-relaxed">
                                            <span className="text-[#FF4D4D]">NestJS</span> microservices communicating via Redis Pub/Sub, with Prisma handling complex relational data in PostgreSQL.
                                        </p>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2 text-white/90">
                                            <Globe className="w-4 h-4 text-[#FF4D4D]" />
                                            <span className="font-mono text-xs uppercase tracking-wider">Frontend Layer</span>
                                        </div>
                                        <p className="text-sm text-zinc-500 font-light leading-relaxed">
                                            <span className="text-[#FF4D4D]">Next.js</span> Edge Runtime for global content delivery, consuming GraphQL APIs with strict typing and caching policies.
                                        </p>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2 text-white/90">
                                            <Database className="w-4 h-4 text-[#FF4D4D]" />
                                            <span className="font-mono text-xs uppercase tracking-wider">DevOps & Infra</span>
                                        </div>
                                        <p className="text-sm text-zinc-500 font-light leading-relaxed">
                                            Automated CI/CD pipelines deploying to <span className="text-[#FF4D4D]">Vercel/AWS</span>, with comprehensive monitoring and Dockerized local dev environments.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Outcomes */}
                <section className="mb-20 pt-8 border-t border-zinc-900">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                        <div className="md:col-span-3">
                            <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-600">
                                <span>Impact</span>
                            </div>
                        </div>
                        <div className="md:col-span-9">
                            <div className="grid md:grid-cols-2 gap-4">
                                {[
                                    {
                                        title: "40% Faster Content Delivery",
                                        desc: "Optimized API response times and global CDN caching reduced content load times significantly."
                                    },
                                    {
                                        title: "Zero Developer Dependency",
                                        desc: "Marketing teams can now launch landing pages and update content without touching a single line of code."
                                    },
                                    {
                                        title: "Omnichannel Scalability",
                                        desc: "Seamlessly serving content to Web, Mobile, and IoT devices from a single centralized repository."
                                    },
                                    {
                                        title: "Enterprise-Grade Security",
                                        desc: "Role-based access control and secure API tokens handled sensitive data compliance requirements."
                                    }
                                ].map((outcome, i) => (
                                    <div key={i} className="flex flex-col gap-2 p-6 border border-zinc-800/50 bg-zinc-900/20 rounded-xl hover:border-zinc-700 transition-colors">
                                        <div className="flex items-center gap-3">
                                            <span className="text-[#FF4D4D] font-mono text-sm">0{i + 1}</span>
                                            <h4 className="text-zinc-200 font-medium">{outcome.title}</h4>
                                        </div>
                                        <p className="text-zinc-400 font-light text-sm leading-relaxed pl-8">
                                            {outcome.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>



                <footer className="mt-24 pt-8 pb-8 border-t border-zinc-900 flex justify-between items-center">
                    <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                        Case Study 2024
                    </p>
                    <button
                        onClick={() => navigate('/')}
                        className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest hover:text-white transition-colors"
                    >
                        Back to Home
                    </button>
                </footer>

            </main>
        </div>
    );
};

export default CaseStudies;
