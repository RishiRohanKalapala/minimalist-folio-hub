
import { motion } from "framer-motion";
import { ArrowLeft, Database, Server, Shield, Zap, Users, Globe, Code, Layers, GitBranch, Lock, BarChart3, ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CaseStudies = () => {
    const navigate = useNavigate();

    const techStack = [
        { layer: "Frontend", tech: "React, Next.js, Tailwind" },
        { layer: "Backend", tech: "Node.js, Express/NestJS" },
        { layer: "Database", tech: "PostgreSQL / MongoDB" },
        { layer: "ORM", tech: "Prisma" },
        { layer: "Cache", tech: "Redis" },
        { layer: "Auth", tech: "JWT" },
        { layer: "Hosting", tech: "Vercel / AWS" },
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
                    <button
                        onClick={() => navigate('/')}
                        className="group flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-white transition-colors"
                    >
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        <span>Back to Archive</span>
                    </button>
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
                                This project is a <span className="text-white">Headless Content Management System</span> designed to provide a scalable, API-driven,
                                and multi-tenant content platform. It separates content management (backend) from content presentation
                                (frontend), enabling flexible delivery across websites, mobile apps, dashboards, and third-party integrations.
                            </p>
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
                            <p className="text-lg text-zinc-400 leading-relaxed font-light">
                                Traditional CMS platforms often suffer from being <span className="text-white">tightly coupled</span> with frontend rendering, lacking flexibility for omnichannel delivery, and becoming performance bottlenecks at scale.
                            </p>

                            <div className="grid md:grid-cols-2 gap-4">
                                <ul className="space-y-3">
                                    {[
                                        "Tightly coupled frontend",
                                        "Lack of omnichannel flexibility",
                                        "Scaling difficulties for multiple clients",
                                        "Limited automation"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-zinc-500 font-light">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D4D] shrinking-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <div className="p-6 bg-zinc-900/30 rounded-xl border border-zinc-800/50">
                                    <p className="text-zinc-300 font-light italic">
                                        "Goal: Build a modern, headless CMS that is API-first, scalable, customizable, and client-ready."
                                    </p>
                                </div>
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
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {coreFeatures.map((feature, i) => (
                                    <div
                                        key={i}
                                        className="bg-zinc-900/40 border border-zinc-800/50 p-6 hover:bg-zinc-900/60 hover:border-[#FF4D4D]/30 transition-all duration-300 group"
                                    >
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="text-zinc-500 group-hover:text-[#FF4D4D] transition-colors">
                                                {feature.icon}
                                            </div>
                                            <h3 className="font-medium text-zinc-200">{feature.title}</h3>
                                        </div>
                                        <ul className="space-y-2">
                                            {feature.items.map((item, j) => (
                                                <li key={j} className="text-sm text-zinc-500 flex items-center gap-2">
                                                    <span className="w-1 h-1 rounded-full bg-zinc-700" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
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
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-2 text-white">
                                        <Server className="w-4 h-4 text-[#FF4D4D]" />
                                        <span className="font-mono text-sm uppercase tracking-wider">Backend</span>
                                    </div>
                                    <ul className="space-y-2 text-sm text-zinc-500 font-light">
                                        <li>Node.js + NestJS</li>
                                        <li>Prisma ORM</li>
                                        <li>PostgreSQL / MongoDB</li>
                                        <li>Redis Caching</li>
                                    </ul>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-2 text-white">
                                        <Globe className="w-4 h-4 text-[#FF4D4D]" />
                                        <span className="font-mono text-sm uppercase tracking-wider">Frontend</span>
                                    </div>
                                    <ul className="space-y-2 text-sm text-zinc-500 font-light">
                                        <li>React / Next.js</li>
                                        <li>Tailwind CSS</li>
                                        <li>ShadCN UI</li>
                                        <li>Role-based dashboards</li>
                                    </ul>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-2 text-white">
                                        <Database className="w-4 h-4 text-[#FF4D4D]" />
                                        <span className="font-mono text-sm uppercase tracking-wider">Infra</span>
                                    </div>
                                    <ul className="space-y-2 text-sm text-zinc-500 font-light">
                                        <li>Dockerized deployment</li>
                                        <li>Cloud hosting (Vercel/AWS)</li>
                                        <li>CI/CD pipelines</li>
                                    </ul>
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
                                    "Improved content delivery speed",
                                    "Reduced developer dependency via Admin UI",
                                    "Enabled multi-platform content reuse",
                                    "Portfolio-ready scalable architecture"
                                ].map((outcome, i) => (
                                    <div key={i} className="flex items-start gap-4 p-4 border border-zinc-800/50 bg-zinc-900/20">
                                        <span className="text-[#FF4D4D] font-mono text-sm">0{i + 1}</span>
                                        <span className="text-zinc-400 font-light text-sm">{outcome}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Tech Stack - Text Based */}
                <section className="mb-20 pt-8 border-t border-zinc-900">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                        <div className="md:col-span-3">
                            <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-600">
                                <span>Tech Stack</span>
                            </div>
                        </div>
                        <div className="md:col-span-9">
                            <div className="flex flex-wrap gap-2">
                                {["React", "NestJS", "PostgreSQL", "Redis", "Docker", "AWS", "TypeScript", "Tailwind"].map((tech) => (
                                    <span key={tech} className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest px-3 py-1.5 border border-zinc-800 hover:border-[#FF4D4D]/50 hover:text-white transition-colors cursor-default">
                                        {tech}
                                    </span>
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
