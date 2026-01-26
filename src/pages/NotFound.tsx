import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, Home } from "lucide-react";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-300 flex items-center justify-center px-6 selection:bg-red-500 selection:text-white">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full flex flex-col items-center text-center gap-8"
      >
        {/* Status Tag */}
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
          <span className="text-[10px] font-mono tracking-[0.3em] text-zinc-500 uppercase">
            Error Code: 404
          </span>
        </div>

        {/* Big Serif Heading */}
        <div className="space-y-2">
          <h1 className="text-8xl md:text-9xl font-serif text-white tracking-tighter leading-none">
            Lost
          </h1>
          <p className="text-lg md:text-xl text-zinc-500 font-light leading-tight">
            The page you are looking for has <span className="text-red-500">ceased to exist</span> or never was.
          </p>
        </div>

        {/* Path Metadata */}
        <div className="py-4 px-6 border border-dashed border-zinc-900 rounded-xl">
          <span className="text-[11px] font-mono text-zinc-700 tracking-widest uppercase">
            Path: {location.pathname}
          </span>
        </div>

        {/* Navigation Link */}
        <div className="pt-8 border-t border-zinc-900 w-full flex justify-center">
          <button
            onClick={() => navigate("/")}
            className="group flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-red-500"
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            <span>Return to safe harbor</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;