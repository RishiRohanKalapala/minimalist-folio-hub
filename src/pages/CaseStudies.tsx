import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CaseStudies = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#050505] text-zinc-300 selection:bg-red-500 selection:text-white relative overflow-hidden">
            <div className="container mx-auto px-6 py-24 min-h-screen flex flex-col items-center justify-center">

                {/* Navigation */}
                <div className="absolute top-8 left-8">
                    <button
                        onClick={() => navigate('/')}
                        className="group flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-white transition-colors"
                    >
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        <span>Back</span>
                    </button>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-center text-center space-y-8"
                >
                    <div className="space-y-4">
                        <div className="flex items-center justify-center gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                            <span className="text-[10px] font-mono tracking-[0.3em] text-zinc-500 uppercase">
                                Work in Progress
                            </span>
                        </div>

                        <h1 className="text-6xl md:text-8xl font-serif text-white tracking-tighter">
                            Case <span className="text-red-500">Studies</span>
                        </h1>

                        <p className="text-lg md:text-xl text-zinc-500 font-light max-w-xl mx-auto leading-relaxed">
                            Detailed deep dives into selected projects. Coming soon.
                        </p>
                    </div>

                </motion.div>
            </div>
        </div>
    );
};

export default CaseStudies;
