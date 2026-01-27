import { motion, AnimatePresence } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const AllProjects = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("all");

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const personalProjects = [
        {
            title: "Farmora",
            desc: "A <span class='text-[#FF4D4D]'>Full-stack Agro Marketplace</span> designed for real-world impact. Features a comprehensive catalog, seller workflows, and robust <span class='text-[#FF4D4D]'>order management</span> logic.",
            tags: ["Full Stack", "Marketplace", "System Design"],
            link: "https://farmoraport.vercel.app",
            year: "2025"
        },
        {
            title: "Loopify-AI",
            desc: "An <span class='text-[#FF4D4D]'>AI-driven SaaS</span> platform focused on automation and intelligent workflows. Demonstrates <span class='text-[#FF4D4D]'>product thinking</span> and modern AI integration.",
            tags: ["AI", "SaaS", "Automation"],
            link: "https://loopify-ai-tau.vercel.app/",
            year: "2025"
        },
        {
            title: "Knots",
            desc: "A <span class='text-[#FF4D4D]'>minimalist decentralized</span> infrastructure for blogging. Features multi-user auth, content management, and <span class='text-[#FF4D4D]'>markdown</span> support.",
            tags: ["Next.js", "MongoDB", "Auth"],
            link: "https://knots-psi.vercel.app/",
            year: "2025"
        },
        {
            title: "Safespeak",
            desc: "An <span class='text-[#FF4D4D]'>anonymous storage</span> solution using <span class='text-[#FF4D4D]'>IPFS</span> and <span class='text-[#FF4D4D]'>Node.js</span>. Focused on encryption and decentralized privacy.",
            tags: ["Web3", "Security", "IPFS"],
            link: "https://github.com/RishiRohanKalapala-cloud/Safespeak",
            year: "2025"
        },
        {
            title: "Healthtalk",
            desc: "An <span class='text-[#FF4D4D]'>AI + Healthcare</span> domain solution. A problem-driven application demonstrating applied <span class='text-[#FF4D4D]'>AI thinking</span> for high-impact results.",
            tags: ["AI", "Healthcare", "ML"],
            link: "https://medica-eta.vercel.app/",
            year: "2025"
        },
        {
            title: "AKAsP2P_Cloud",
            desc: "Advanced <span class='text-[#FF4D4D]'>P2P Cloud</span> infrastructure demonstrating knowledge of <span class='text-[#FF4D4D]'>cryptography</span> and custom network protocols.",
            tags: ["P2P", "Cryptography", "Systems"],
            link: "https://github.com/RishiRohanKalapala-cloud/AKAsP2P_Cloud",
            year: "2026"
        },
        {
            title: "DripMsg",
            desc: "A <span class='text-[#FF4D4D]'>Real-time Messaging</span> system built on <span class='text-[#FF4D4D]'>Socket.IO</span>. Demonstrates usage of event-driven architecture.",
            tags: ["Socket.IO", "Real-time", "Backend"],
            link: "https://ckr-web.vercel.app",
            year: "2024"
        },
        {
            title: "Mood_Tunes",
            desc: "An <span class='text-[#FF4D4D]'>AI Music Recommendation</span> engine combining clean UX with intelligent logic. A visual and <span class='text-[#FF4D4D]'>demo-friendly</span> product.",
            tags: ["AI", "UX", "Recommendation"],
            link: "https://github.com/RishiRohanKalapala-cloud/Mood_Tunes",
            year: "2024"
        },
        {
            title: "CKR-Datapoint",
            desc: "An <span class='text-[#FF4D4D]'>AI Music Recommendation</span> engine combining clean UX with intelligent logic. A visual and <span class='text-[#FF4D4D]'>demo-friendly</span> product.",
            tags: ["UI", "UX", "Recommendation", "AI", "Data", "Education", "DEPL-04"],
            link: "https://ckrdatacenter.vercel.app/",
            year: "2024"
        }
    ];

    const clientProjects = [
        {
            title: "HSGA CMRIT",
            desc: "An integrated <span class='text-[#FF4D4D]'>Academic Portal</span> driven by a robust <span class='text-[#FF4D4D]'>Portal Engine</span> for seamless administration.",
            tags: ["Education", "Portal", "DEPL-05"],
            link: "https://www.hsgacmrit.in/",
            year: "2025"
        },
        {
            title: "Dhasha Media",
            desc: "A comprehensive <span class='text-[#FF4D4D]'>Digital Platform</span> built on a modular <span class='text-[#FF4D4D]'>Brand Core</span> system for agency operations.",
            tags: ["Marketing", "System", "DEPL-06"],
            link: "#",
            year: "2025"
        },
        {
            title: "NSS CMRIT",
            desc: "A scalable <span class='text-[#FF4D4D]'>Management Ecosystem</span> built on <span class='text-[#FF4D4D]'>Enterprise Cloud</span> infrastructure dealing with large scale student data.",
            tags: ["Education", "Cloud", "DEPL-01"],
            link: "https://nsscmritvolunteers.vercel.app/auth",
            year: "2025"
        },
        {
            title: "Forge Digital",
            desc: "Developing <span class='text-[#FF4D4D]'>Enterprise Solutions</span> using a distributed <span class='text-[#FF4D4D]'>Microservices</span> architecture for high availability.",
            tags: ["Technology", "Microservices", "DEPL-02"],
            link: "https://www.forgedigitaltechnologies.com/",
            year: "2026"
        },
        {
            title: "Siya Jewels",
            desc: "A <span class='text-[#FF4D4D]'>High-Conversion Store</span> powered by a custom <span class='text-[#FF4D4D]'>E-Com Core</span> engine optimized for speed.",
            tags: ["E-Commerce", "Core", "DEPL-03"],
            link: "https://siyacollections.shop/",
            year: "2024"
        },
        {
            title: "Stories at Scale",
            desc: "Content <span class='text-[#FF4D4D]'>Distribution Platform</span> featuring <span class='text-[#FF4D4D]'>Auto-Scale</span> capabilities for unpredictable traffic spikes.",
            tags: ["Media", "Scaling", "DEPL-04"],
            link: "https://storiesatscale.in/",
            year: "2025"
        },
        {
            title: "HSGA Telangana",
            desc: "Content <span class='text-[#FF4D4D]'>Distribution Platform</span> featuring <span class='text-[#FF4D4D]'>Auto-Scale</span> capabilities for unpredictable traffic spikes.",
            tags: ["Media", "Scaling", "DEPL-05"],
            link: "https://hsgatelangana.com/",
            year: "2026"
        }
    ];

    const allProjects = [...personalProjects, ...clientProjects].sort((a, b) => Number(b.year) - Number(a.year));

    const getDisplayedProjects = () => {
        let projects = [];
        switch (activeTab) {
            case "personal": projects = personalProjects; break;
            case "client": projects = clientProjects; break;
            default: projects = allProjects; break;
        }

        // Group by year
        const grouped = projects.reduce((acc: any, project) => {
            const year = project.year;
            if (!acc[year]) acc[year] = [];
            acc[year].push(project);
            return acc;
        }, {});

        // Sort years descending
        return Object.keys(grouped).sort((a, b) => Number(b) - Number(a)).map(year => ({
            year,
            projects: grouped[year]
        }));
    };

    return (
        <div className="min-h-screen bg-[#050505] text-zinc-300 selection:bg-white selection:text-black">
            <main className="max-w-[1100px] mx-auto px-6 py-12 md:py-20">

                <motion.header
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    {/* Breadcrumb / Nav */}
                    <div className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.2em] mb-12">
                        <button
                            onClick={() => navigate('/')}
                            className="text-zinc-500 hover:text-white transition-colors"
                        >
                            Home
                        </button>
                        <span className="text-zinc-700">/</span>
                        <span className="text-[#FF4D4D]">All Projects</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-serif text-white tracking-tighter leading-none mb-6">
                        Selected <span className="text-[#FF4D4D]">Works</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-zinc-500 max-w-2xl leading-tight font-light">
                        A curated archive of <span className="text-white">personal experiments</span>, <span className="text-white">client developments</span>, and <span className="text-white">enterprise systems</span>.
                    </p>
                </motion.header>

                {/* Filters */}
                <section className="mb-12 border-b border-zinc-900 pb-2">
                    <div className="flex gap-8 overflow-x-auto no-scrollbar">
                        {["all", "personal", "client"].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`text-[10px] font-mono uppercase tracking-[0.2em] transition-all relative pb-4 whitespace-nowrap ${activeTab === tab ? "text-[#FF4D4D]" : "text-zinc-600 hover:text-zinc-400"
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
                </section>

                {/* Project Grid */}
                <section className="mb-20">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="flex flex-col gap-12">
                                {getDisplayedProjects().map((group: any) => (
                                    <div key={group.year}>
                                        <h2 className="text-4xl md:text-6xl font-serif text-[#FF4D4D] mb-8 pl-1 sticky top-0 bg-[#050505] py-4 z-10 w-full border-b border-zinc-900/50 backdrop-blur-sm tracking-tight">
                                            {group.year}
                                        </h2>
                                        <div className="flex flex-col">
                                            {group.projects.map((project: any, idx: number) => (
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
                                                            {project.tags.map((tag: any) => (
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
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </section>

                {/* Footer */}
                <footer className="mt-20 pt-8 border-t border-zinc-900 flex justify-between items-center">
                    <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                        © 2026 Archive
                    </p>
                    <button
                        onClick={() => navigate('/')}
                        className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest hover:text-white transition-colors"
                    >
                        Back to Home
                    </button>
                </footer>

            </main>

            <Navigation />
        </div>
    );
};

export default AllProjects;
