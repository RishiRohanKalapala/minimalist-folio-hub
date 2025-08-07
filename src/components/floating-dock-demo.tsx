mport { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

// An array of social links with their corresponding icons and URLs
const socialLinks = [
  {
    name: "GitHub",
    icon: <Github className="w-5 h-5" />,
    href: "https://github.com/your-username", // Replace with your GitHub URL
  },
  {
    name: "LinkedIn",
    icon: <Linkedin className="w-5 h-5" />,
    href: "https://linkedin.com/in/your-profile", // Replace with your LinkedIn URL
  },
  {
    name: "Twitter",
    icon: <Twitter className="w-5 h-5" />,
    href: "https://twitter.com/your-handle", // Replace with your Twitter URL
  },
  {
    name: "Email",
    icon: <Mail className="w-5 h-5" />,
    href: "mailto:your-email@example.com", // Replace with your email
  },
];

const FloatingDockDemo = () => {
  return (
    // The main container for the dock, positioned at the bottom-center of the screen.
    // It uses motion for a subtle fade-in and slide-up animation.
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2"
    >
      <div className="flex items-center justify-center gap-4 px-4 py-2 bg-background/60 backdrop-blur-lg border border-border rounded-full shadow-lg">
        {socialLinks.map((link) => (
          // Each link is a motion element for individual hover animations
          <motion.a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
            className="p-2 text-text-muted hover:text-primary transition-colors"
            whileHover={{ y: -4, scale: 1.1 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            {link.icon}
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default FloatingDockDemo;
