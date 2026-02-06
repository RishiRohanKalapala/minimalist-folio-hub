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
                            <p className="text-lg text-zinc-400 leading-relaxed font-light mt-4">
                                Built with a <span className="text-[#FF4D4D]">microservices architecture</span>, the platform separates concerns 
                                into dedicated services for data ingestion, model inference, real-time streaming, and API management. This 
                                ensures <span className="text-[#FF4D4D]">horizontal scalability</span> and fault isolation across the entire system.
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

                            <p className="text-lg text-zinc-400 leading-relaxed font-light">
                                Furthermore, existing solutions often fail to provide <span className="text-[#FF4D4D]">contextual intelligence</span>—they 
                                show what happened but not why or what to do next. Business users are left navigating complex dashboards without 
                                actionable recommendations, leading to <span className="text-[#FF4D4D]">decision paralysis</span> and missed revenue opportunities.
                            </p>
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
                                    To address these challenges, we architected an <span className="text-[#FF4D4D]">AI-first solution</span> that 
                                    embeds machine learning at every layer of the analytics stack. Rather than bolting AI onto existing tools, 
                                    we built intelligence into the platform's DNA from day one.
                                </p>
                                <p className="text-lg text-zinc-400 leading-relaxed font-light">
                                    The core inference engine is built on <span className="text-[#FF4D4D]">Python</span> with <span className="text-[#FF4D4D]">FastAPI</span> 
                                    serving as the high-performance API layer. We utilize <span className="text-[#FF4D4D]">TensorFlow</span> for 
                                    production-grade model serving and <span className="text-[#FF4D4D]">PyTorch</span> for rapid experimentation 
                                    and research. All services are containerized with <span className="text-[#FF4D4D]">Docker</span> and orchestrated 
                                    via <span className="text-[#FF4D4D]">Kubernetes</span> for elastic scaling.
                                </p>
                            </div>

                            <div className="space-y-8">
                                <p className="text-zinc-400 font-light leading-relaxed">
                                    <strong className="text-white font-medium block mb-2">AI-Powered Analytics Core</strong>
                                    The platform enables <span className="text-[#FF4D4D]">natural language querying</span>—users simply ask questions 
                                    in plain English and receive instant insights. Our <span className="text-[#FF4D4D]">predictive modeling engine</span> 
                                    analyzes historical patterns to forecast trends, while <span className="text-[#FF4D4D]">anomaly detection</span> 
                                    algorithms automatically surface outliers and potential issues before they escalate.
                                </p>

                                <p className="text-zinc-400 font-light leading-relaxed">
                                    <strong className="text-white font-medium block mb-2">Modern Architecture & Security</strong>
                                    The <span className="text-[#FF4D4D]">microservices design</span> ensures each component can scale independently 
                                    based on demand. We implemented <span className="text-[#FF4D4D]">event-driven systems</span> using Redis Streams 
                                    and WebSockets for real-time data flow. Security follows a <span className="text-[#FF4D4D]">zero-trust architecture</span> 
                                    with end-to-end encryption, SOC2 compliance, and comprehensive audit logging.
                                </p>

                                <p className="text-zinc-400 font-light leading-relaxed">
                                    <strong className="text-white font-medium block mb-2">Cloud-Native Infrastructure</strong>
                                    Built for the cloud from the ground up, the platform features <span className="text-[#FF4D4D]">auto-scaling infrastructure</span> 
                                    that handles traffic spikes automatically. <span className="text-[#FF4D4D]">Multi-region deployment</span> ensures 
                                    low latency globally, while our disaster recovery systems guarantee <span className="text-[#FF4D4D]">99.99% uptime SLA</span>.
                                </p>

                                <p className="text-zinc-400 font-light leading-relaxed">
                                    <strong className="text-white font-medium block mb-2">LLM & Vector Integration</strong>
                                    We integrated <span className="text-[#FF4D4D]">Large Language Models</span> for conversational analytics 
                                    and automated report generation. <span className="text-[#FF4D4D]">Vector embeddings</span> power semantic 
                                    search across documents and data, while <span className="text-[#FF4D4D]">RAG pipelines</span> combine 
                                    retrieval with generation for context-aware responses. Custom <span className="text-[#FF4D4D]">fine-tuned models</span> 
                                    are trained on domain-specific data for maximum accuracy.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 pt-4">
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
                                    The system architecture follows a <span className="text-[#FF4D4D]">layered microservices pattern</span> with 
                                    clear separation of concerns. Data flows through ingestion, processing, inference, and presentation layers, 
                                    each independently scalable and fault-tolerant.
                                </p>

                                <div className="grid md:grid-cols-3 gap-6 pt-4">
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2 text-white/90">
                                            <Cpu className="w-4 h-4 text-[#FF4D4D]" />
                                            <span className="font-mono text-xs uppercase tracking-wider">ML Core</span>
                                        </div>
                                        <p className="text-sm text-zinc-500 font-light leading-relaxed">
                                            <span className="text-[#FF4D4D]">TensorFlow Serving</span> and <span className="text-[#FF4D4D]">TorchServe</span> 
                                            handle model inference with automatic batching, GPU optimization, and model versioning for A/B testing.
                                        </p>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2 text-white/90">
                                            <Database className="w-4 h-4 text-[#FF4D4D]" />
                                            <span className="font-mono text-xs uppercase tracking-wider">Data Layer</span>
                                        </div>
                                        <p className="text-sm text-zinc-500 font-light leading-relaxed">
                                            <span className="text-[#FF4D4D]">PostgreSQL</span> for structured data, <span className="text-[#FF4D4D]">Redis</span> 
                                            for caching and real-time streams, and vector databases for embedding storage and similarity search.
                                        </p>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2 text-white/90">
                                            <Cloud className="w-4 h-4 text-[#FF4D4D]" />
                                            <span className="font-mono text-xs uppercase tracking-wider">Orchestration</span>
                                        </div>
                                        <p className="text-sm text-zinc-500 font-light leading-relaxed">
                                            <span className="text-[#FF4D4D]">Kubernetes</span> manages container orchestration with Helm charts, 
                                            while CI/CD pipelines automate testing, model validation, and deployment.
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
                                        title: "70% Faster Insights",
                                        desc: "Natural language querying eliminated the need for SQL expertise, reducing time-to-insight from hours to seconds."
                                    },
                                    {
                                        title: "Predictive Accuracy",
                                        desc: "ML models achieved 94% accuracy in forecasting key business metrics, enabling proactive decision-making."
                                    },
                                    {
                                        title: "Real-Time Processing",
                                        desc: "Stream processing handles 2M+ events per day with sub-100ms latency for instant anomaly detection."
                                    },
                                    {
                                        title: "Democratized Access",
                                        desc: "Non-technical users now generate 60% of all analytics queries, previously bottlenecked on data teams."
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

                {/* Future Enhancements */}
                <section className="mb-20 pt-8 border-t border-zinc-900">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                        <div className="md:col-span-3">
                            <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-600">
                                <span>Roadmap</span>
                            </div>
                        </div>
                        <div className="md:col-span-9">
                            <div className="flex flex-wrap gap-3">
                                {[
                                    "Multi-modal AI (images, audio)",
                                    "Autonomous report generation",
                                    "Custom model training UI",
                                    "Federated learning support",
                                    "Real-time collaboration",
                                    "Mobile analytics app"
                                ].map((item, i) => (
                                    <span key={i} className="px-4 py-2 bg-zinc-900/40 border border-zinc-800 rounded-full text-sm text-zinc-400 hover:border-[#FF4D4D]/50 transition-colors">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="mt-24 pt-8 pb-8 border-t border-zinc-900 flex justify-between items-center">
                    <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                        Case Study 2026
                    </p>
                    <div className="flex items-center gap-6">
                        <button
                            onClick={() => navigate('/case-studies')}
                            className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest hover:text-[#FF4D4D] transition-colors"
                        >
                            2024 Study
                        </button>
                        <button
                            onClick={() => navigate('/')}
                            className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest hover:text-white transition-colors"
                        >
                            Back to Home
                        </button>
                    </div>
                </footer>

            </main>
        </div>
    );
};

export default CaseStudies2026;
