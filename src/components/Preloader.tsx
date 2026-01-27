import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const greetings = [
  "Hello",
  "नमस्ते",
  "Hola",
  "Bonjour",
  "Hallo",
  "Ciao",
  "こんにちは"
];

export const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (currentIndex < greetings.length - 1) {
      const timer = setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
      }, 400); // Faster transitions
      return () => clearTimeout(timer);
    } else {
      const exitTimer = setTimeout(() => {
        setIsExiting(true);
      }, 400);
      
      const completeTimer = setTimeout(() => {
        onComplete();
      }, 900);
      
      return () => {
        clearTimeout(exitTimer);
        clearTimeout(completeTimer);
      };
    }
  }, [currentIndex, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: isExiting ? 0 : 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Animated background lines */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-muted-foreground/20 to-transparent w-full"
            style={{ top: `${20 + i * 15}%` }}
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: "100%", opacity: [0, 1, 0] }}
            transition={{
              duration: 2,
              delay: i * 0.2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Main greeting text */}
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -30, filter: "blur(10px)" }}
            transition={{ 
              duration: 0.35, 
              ease: [0.22, 1, 0.36, 1]
            }}
            className="relative"
          >
            <span 
              className={`text-6xl md:text-8xl font-extralight tracking-tight ${
                currentIndex === 6 ? 'text-red-500' : 'text-foreground'
              }`}
            >
              {greetings[currentIndex]}
            </span>
            
            {/* Underline animation */}
            <motion.div
              className="absolute -bottom-2 left-0 h-px bg-foreground/30"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Progress indicator */}
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-1.5">
          {greetings.map((_, i) => (
            <motion.div
              key={i}
              className="h-1 rounded-full bg-muted-foreground/30"
              initial={{ width: 8 }}
              animate={{ 
                width: i === currentIndex ? 24 : 8,
                backgroundColor: i === currentIndex 
                  ? "hsl(var(--foreground))" 
                  : "hsl(var(--muted-foreground) / 0.3)"
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          ))}
        </div>
      </div>

      {/* Corner decorations */}
      <motion.div
        className="absolute top-8 left-8 w-12 h-12 border-l border-t border-muted-foreground/20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      />
      <motion.div
        className="absolute bottom-8 right-8 w-12 h-12 border-r border-b border-muted-foreground/20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      />
    </motion.div>
  );
};