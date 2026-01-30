import { motion } from "framer-motion";
import { ArrowUpRight, Cpu, Brain, Rocket, Shield, Zap, Code, Database, Cloud, Sparkles, LineChart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CaseStudies2026 = () => {
    const navigate = useNavigate();

    const techStack = [
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", invert: true },
        { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
        { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
        { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
        { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
    ];

    const coreFeatures = [
        {
            icon: <Brain className="w-5 h-5" />,
            title: "AI-Powered Analytics",
            items: ["Real-time data processing", "Predictive modeling", "Anomaly detection", "Custom ML pipelines"]
        },
        {
            icon: <Code className="w-5 h-5" />,
            title: "Modern Architecture",
            items: ["Microservices design", "Event-driven systems", "GraphQL & REST APIs", "Real-time WebSockets"]
        },
        {
            icon: <Shield className="w-5 h-5" />,
            title: "Enterprise Security",
            items: ["Zero-trust architecture", "End-to-end encryption", "SOC2 compliance", "Audit logging"]
        },
        {
            icon: <Cloud className="w-5 h-5" />,
            title: "Cloud Native",
            items: ["Auto-scaling infrastructure", "Multi-region deployment", "99.99% uptime SLA", "Disaster recovery"]
        },
        {
            icon: <Zap className="w-5 h-5" />,
            title: "Performance",
            items: ["Sub-100ms response times", "Edge caching", "Optimized queries", "Lazy loading"]
        },
        {
            icon: <Sparkles className="w-5 h-5" />,
            title: "AI Integration",
            items: ["LLM integration", "Vector embeddings", "RAG pipelines", "Fine-tuned models"]
        }
    ];

    const metrics = [
        { label: "Active Users", value: "50K+", icon: <LineChart className="w-4 h-4" /> },
        { label: "API Calls/Day", value: "2M+", icon: <Zap className="w-4 h-4" /> },
        { label: "Uptime", value: "99.99%", icon: <Shield className="w-4 h-4" /> },
        { label: "Response Time", value: "<100ms", icon: <Rocket className="w-4 h-4" /> },
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
                        <button
                            onClick={() => navigate('/case-studies')}
                            className="text-zinc-500 hover:text-white transition-colors"
                        >
                            Case Studies
                        </button>
                        <span className="text-zinc-700">/</span>
                        <span className="text-[#FF4D4D]">2026</span>
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
                                2026
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-serif text-white tracking-tighter leading-none">
                            AI-Native <span className="text-[#FF4D4D]">Analytics</span> Platform
                        </h1>
                        <p className="text-xl md:text-2xl text-zinc-500 max-w-2xl leading-tight font-light">
                            A next-generation <span className="text-white">intelligent analytics platform</span> powered by machine learning for real-time insights.
                        </p>
                    </div>
                </motion.header>

                {/* Metrics */}
                <section className="mb-20">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {metrics.map((metric, i) => (
                            <motion.div
                                key={metric.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="p-6 bg-zinc-900/40 border border-zinc-800 rounded-2xl hover:border-zinc-700 transition-colors"
                            >
                                <div className="flex items-center gap-2 text-[#FF4D4D] mb-2">
                                    {metric.icon}
                                    <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">{metric.label}</span>
                                </div>
                                <p className="text-3xl md:text-4xl font-serif text-white">{metric.value}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Tech Stack */}
                <section className="mb-20">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                        <div className="md:col-span-3">
                            <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-600">
                                <span>Tech Stack</span>
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
                                    <a href="#" className="text-zinc-300 hover:text-[#FF4D4D] transition-colors hover:underline decoration-zinc-800 underline-offset-4">
                                        Coming Soon
                                    </a>
                                </div>
                                <div className="flex items-center gap-6">
                                    <span className="text-zinc-500 uppercase tracking-widest text-[10px] w-16">Demo</span>
                                    <a href="#" className="text-zinc-300 hover:text-[#FF4D4D] transition-colors hover:underline decoration-zinc-800 underline-offset-4">
                                        Coming Soon
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
                                This project is an <span className="text-[#FF4D4D]">AI-Native Analytics Platform</span> designed to provide 
                                real-time insights through advanced machine learning models. It combines modern web technologies with 
                                cutting-edge AI capabilities to deliver actionable intelligence at scale.
                            </p>
                            <p className="text-lg text-zinc-400 leading-relaxed font-light mt-4">
                                The platform leverages <span className="text-[#FF4D4D]">Large Language Models</span> for natural language 
                                querying, <span className="text-[#FF4D4D]">vector embeddings</span> for semantic search, and 
                                <span className="text-[#FF4D4D]"> predictive ML models</span> for forecasting and anomaly detection.
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
                            <p className="text-lg text-zinc-400 leading-relaxed font-light mb-8">
                                Traditional analytics platforms struggle with <span className="text-[#FF4D4D]">real-time processing</span>, 
                                lack intelligent insights, and require technical expertise to extract meaningful data. Organizations need 
                                a solution that democratizes data access while maintaining enterprise-grade security.
                            </p>

                            <div className="space-y-6">
                                <h3 className="text-xl font-serif text-white">Key Pain Points</h3>
                                <ul className="grid md:grid-cols-2 gap-4">
                                    {[
                                        { title: "Data Silos", desc: "Information scattered across multiple systems without unified access." },
                                        { title: "Manual Analysis", desc: "Time-consuming manual data processing and report generation." },
                                        { title: "Delayed Insights", desc: "Batch processing leads to stale data and missed opportunities." },
                                        { title: "Technical Barriers", desc: "Complex query languages limit access to non-technical users." }
                                    ].map((item, i) => (
                                        <li key={i} className="flex flex-col gap-1 text-zinc-500 font-light">
                                            <div className="flex items-center gap-3">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D4D] shrink-0" />
                                                <span className="text-zinc-300 font-medium">{item.title}</span>
                                            </div>
                                            <p className="text-sm pl-4.5">{item.desc}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Solution & Features */}
                <section className="mb-20 pt-8 border-t border-zinc-900">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                        <div className="md:col-span-3">
                            <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-600">
                                <span>Features</span>
                            </div>
                        </div>
                        <div className="md:col-span-9">
                            <div className="grid md:grid-cols-2 gap-6">
                                {coreFeatures.map((feature, i) => (
                                    <motion.div
                                        key={feature.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: i * 0.1 }}
                                        className="p-6 bg-zinc-900/30 border border-zinc-800/50 rounded-2xl hover:border-zinc-700 transition-colors"
                                    >
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="text-[#FF4D4D]">{feature.icon}</span>
                                            <h3 className="text-lg font-medium text-white">{feature.title}</h3>
                                        </div>
                                        <ul className="space-y-2">
                                            {feature.items.map((item, j) => (
                                                <li key={j} className="flex items-center gap-2 text-sm text-zinc-400">
                                                    <span className="w-1 h-1 rounded-full bg-zinc-600" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Back to Home */}
                <section className="pt-8 border-t border-zinc-900">
                    <div className="flex justify-between items-center">
                        <button
                            onClick={() => navigate('/')}
                            className="flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition-colors"
                        >
                            ← Back to Home
                        </button>
                        <button
                            onClick={() => navigate('/case-studies')}
                            className="flex items-center gap-2 text-sm text-zinc-500 hover:text-[#FF4D4D] transition-colors group"
                        >
                            View 2024 Case Study
                            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </button>
                    </div>
                </section>

            </main>
        </div>
    );
};

export default CaseStudies2026;
