import { motion } from "framer-motion";

interface PortfolioSectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const PortfolioSection = ({ id, title, children, className = "" }: PortfolioSectionProps) => {
  return (
    <motion.section
      id={id}
      className={`min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-4xl mx-auto w-full">
        <motion.h2 
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-text-primary"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {children}
        </motion.div>
      </div>
    </motion.section>
  );
};