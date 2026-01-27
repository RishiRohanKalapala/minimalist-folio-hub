import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const name = "Abhaya Shankar";

export const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    
    const typeInterval = setInterval(() => {
      if (currentIndex < name.length) {
        setDisplayedText(name.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setShowCursor(false);
          setTimeout(onComplete, 500);
        }, 800);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [onComplete]);

  // Cursor blink effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative">
        {/* Main text */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-foreground">
          {displayedText}
          <motion.span
            className="inline-block w-[3px] h-[1em] ml-1 bg-foreground align-middle"
            animate={{ opacity: showCursor ? 1 : 0 }}
            transition={{ duration: 0.1 }}
          />
        </h1>

        {/* Subtle underline */}
        <motion.div
          className="absolute -bottom-4 left-0 h-px bg-foreground/30"
          initial={{ width: 0 }}
          animate={{ width: `${(displayedText.length / name.length) * 100}%` }}
          transition={{ ease: "linear" }}
        />
      </div>
    </motion.div>
  );
};