import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Palette, Rocket, Users, Star, CheckCircle2, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Agency = () => {
    const navigate = useNavigate();

    const services = [
        {
            icon: <Code2 className="w-6 h-6" />,
            title: "Full-Stack Development",
            description: "End-to-end web applications built with modern technologies. React, Next.js, Node.js, and cloud infrastructure.",
            features: ["Custom Web Apps", "API Development", "Database Design", "Cloud Deployment"]
        },
        {
            icon: <Palette className="w-6 h-6" />,
            title: "UI/UX Design",
            description: "Beautiful, intuitive interfaces that convert. Design systems, prototypes, and pixel-perfect implementation.",
            features: ["Landing Pages", "Design Systems", "Responsive Design", "Brand Identity"]
        },
        {
            icon: <Rocket className="w-6 h-6" />,
            title: "AI Integration",
            description: "Intelligent solutions that automate and optimize. LLM integration, custom models, and data pipelines.",
            features: ["Chatbots & Assistants", "Content Generation", "Data Analytics", "Automation"]
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "Consulting",
            description: "Strategic guidance for your digital transformation. Architecture reviews, tech stack selection, and scaling.",
            features: ["Tech Strategy", "Code Reviews", "Performance Audits", "Team Training"]
        }
    ];

    const portfolio = [
        {
            title: "HSGA Telangana",
            category: "Education Platform",
            description: "Official landing page and Student Management System serving 10,000+ students with real-time dashboards.",
            tags: ["React", "Node.js", "PostgreSQL", "AWS"],
            status: "Live"
        },
        {
            title: "NSS CMRIT",
            category: "Management System",
            description: "Scalable management ecosystem built on enterprise cloud infrastructure for large-scale student data.",
            tags: ["Cloud", "Education", "Enterprise"],
            status: "Live"
        },
        {
            title: "Siya Jewels",
            category: "E-Commerce",
            description: "High-conversion online store powered by custom e-commerce engine optimized for speed and conversions.",
            tags: ["E-Commerce", "Payments", "SEO"],
            status: "Live"
        },
        {
            title: "Dhasha Media",
            category: "Digital Agency",
            description: "Comprehensive digital platform built on modular brand core system for agency operations.",
            tags: ["Marketing", "CMS", "Analytics"],
            status: "Live"
        },
        {
            title: "Forge Digital",
            category: "Tech Solutions",
            description: "Enterprise solutions using distributed microservices architecture for high availability.",
            tags: ["Microservices", "DevOps", "Scaling"],
            status: "In Progress"
        },
        {
            title: "Stories at Scale",
            category: "Media Platform",
            description: "Content distribution platform with auto-scale capabilities for unpredictable traffic spikes.",
            tags: ["CDN", "Scaling", "Media"],
            status: "In Progress"
        }
    ];

    const testimonials = [
        {
            quote: "Rishi delivered exactly what we needed—a system that handles thousands of students seamlessly. The attention to detail was exceptional.",
            author: "HSGA Telangana",
            role: "Education Institution"
        },
        {
            quote: "Professional, fast, and reliable. Our e-commerce platform has seen a significant boost in conversions since launch.",
            author: "Siya Jewels",
            role: "E-Commerce Client"
        },
        {
            quote: "The technical expertise combined with understanding of our business needs made this partnership invaluable.",
            author: "Dhasha Media",
            role: "Marketing Agency"
        }
    ];

    const process = [
        { step: "01", title: "Discovery", desc: "Understanding your goals, users, and technical requirements." },
        { step: "02", title: "Strategy", desc: "Defining architecture, tech stack, and project roadmap." },
        { step: "03", title: "Development", desc: "Agile sprints with regular demos and feedback loops." },
        { step: "04", title: "Launch", desc: "Deployment, monitoring, and continuous optimization." }
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
                        <span className="text-[#FF4D4D]">Agency</span>
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
                            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                            <span className="text-[10px] font-mono tracking-[0.2em] text-zinc-400 uppercase">
                                Available for Projects
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-serif text-white tracking-tighter leading-none">
                            Building Digital <span className="text-[#FF4D4D]">Excellence</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-zinc-500 max-w-2xl leading-tight font-light">
                            I partner with businesses to create <span className="text-white">production-ready</span> web applications, 
                            <span className="text-white"> AI-powered solutions</span>, and scalable digital infrastructure.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <a
                                href="mailto:rishirohan@example.com"
                                className="group flex items-center gap-2 px-6 py-3 bg-[#FF4D4D] text-white rounded-xl font-medium hover:bg-[#FF4D4D]/90 transition-colors"
                            >
                                Start a Project
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <button
                                onClick={() => navigate('/case-studies')}
                                className="flex items-center gap-2 px-6 py-3 border border-zinc-800 text-zinc-300 rounded-xl font-medium hover:border-zinc-600 hover:text-white transition-colors"
                            >
                                View Case Studies
                            </button>
                        </div>
                    </div>
                </motion.header>

                {/* Services */}
                <section className="mb-20 pt-8 border-t border-zinc-900">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                        <div className="md:col-span-3">
                            <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-600">
                                <span>Services</span>
                            </div>
                        </div>
                        <div className="md:col-span-9">
                            <div className="grid md:grid-cols-2 gap-6">
                                {services.map((service, i) => (
                                    <motion.div
                                        key={service.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: i * 0.1 }}
                                        className="p-6 bg-zinc-900/30 border border-zinc-800/50 rounded-2xl hover:border-zinc-700 transition-colors group"
                                    >
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="text-[#FF4D4D] group-hover:scale-110 transition-transform">{service.icon}</span>
                                            <h3 className="text-lg font-medium text-white">{service.title}</h3>
                                        </div>
                                        <p className="text-sm text-zinc-500 mb-4 leading-relaxed">{service.description}</p>
                                        <ul className="space-y-2">
                                            {service.features.map((feature, j) => (
                                                <li key={j} className="flex items-center gap-2 text-sm text-zinc-400">
                                                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FF4D4D]" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Portfolio */}
                <section className="mb-20 pt-8 border-t border-zinc-900">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                        <div className="md:col-span-3">
                            <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-600">
                                <span>Client Work</span>
                            </div>
                        </div>
                        <div className="md:col-span-9">
                            <div className="grid md:grid-cols-2 gap-4">
                                {portfolio.map((project, i) => (
                                    <motion.div
                                        key={project.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: i * 0.05 }}
                                        className="group p-6 bg-zinc-900/40 border border-zinc-800/50 rounded-xl hover:border-[#FF4D4D]/40 transition-all"
                                    >
                                        <div className="flex justify-between items-start mb-3">
                                            <div>
                                                <span className="text-[10px] font-mono text-[#FF4D4D] uppercase tracking-widest">{project.category}</span>
                                                <h3 className="text-xl font-medium text-white mt-1">{project.title}</h3>
                                            </div>
                                            <span className={`text-[9px] font-mono uppercase tracking-widest px-2 py-1 rounded-full ${
                                                project.status === "Live" 
                                                    ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" 
                                                    : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                                            }`}>
                                                {project.status}
                                            </span>
                                        </div>
                                        <p className="text-sm text-zinc-500 mb-4 leading-relaxed">{project.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag) => (
                                                <span key={tag} className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest bg-zinc-900/80 px-2 py-1 rounded border border-zinc-800/50">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Process */}
                <section className="mb-20 pt-8 border-t border-zinc-900">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                        <div className="md:col-span-3">
                            <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-600">
                                <span>Process</span>
                            </div>
                        </div>
                        <div className="md:col-span-9">
                            <div className="grid md:grid-cols-4 gap-6">
                                {process.map((item, i) => (
                                    <motion.div
                                        key={item.step}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: i * 0.1 }}
                                        className="space-y-3"
                                    >
                                        <span className="text-3xl font-serif text-[#FF4D4D]">{item.step}</span>
                                        <h3 className="text-lg font-medium text-white">{item.title}</h3>
                                        <p className="text-sm text-zinc-500 leading-relaxed">{item.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                <section className="mb-20 pt-8 border-t border-zinc-900">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                        <div className="md:col-span-3">
                            <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-600">
                                <span>Testimonials</span>
                            </div>
                        </div>
                        <div className="md:col-span-9">
                            <div className="grid md:grid-cols-3 gap-6">
                                {testimonials.map((testimonial, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: i * 0.1 }}
                                        className="p-6 bg-zinc-900/20 border border-zinc-800/50 rounded-xl"
                                    >
                                        <div className="flex gap-1 mb-4">
                                            {[...Array(5)].map((_, j) => (
                                                <Star key={j} className="w-3.5 h-3.5 fill-[#FF4D4D] text-[#FF4D4D]" />
                                            ))}
                                        </div>
                                        <p className="text-sm text-zinc-400 italic leading-relaxed mb-4">"{testimonial.quote}"</p>
                                        <div>
                                            <p className="text-sm font-medium text-white">{testimonial.author}</p>
                                            <p className="text-xs text-zinc-600">{testimonial.role}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="mb-20 pt-8 border-t border-zinc-900">
                    <div className="p-8 md:p-12 bg-gradient-to-br from-zinc-900/50 to-zinc-900/10 border border-zinc-800 rounded-2xl text-center">
                        <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
                            Ready to Build Something <span className="text-[#FF4D4D]">Amazing</span>?
                        </h2>
                        <p className="text-lg text-zinc-500 mb-8 max-w-xl mx-auto">
                            Let's discuss your project and create a solution that drives real results.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a
                                href="mailto:rishirohan@example.com"
                                className="group flex items-center gap-2 px-8 py-4 bg-[#FF4D4D] text-white rounded-xl font-medium hover:bg-[#FF4D4D]/90 transition-colors"
                            >
                                Get in Touch
                                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                className="flex items-center gap-2 px-8 py-4 border border-zinc-700 text-zinc-300 rounded-xl font-medium hover:border-zinc-500 hover:text-white transition-colors"
                            >
                                Connect on LinkedIn
                            </a>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="pt-8 pb-8 border-t border-zinc-900 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                        © 2026 Rishi Rohan Kalapala
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

export default Agency;
