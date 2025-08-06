import { motion } from "framer-motion";
import { PortfolioSection } from "@/components/portfolio-section";
import FloatingDockDemo from "@/components/floating-dock-demo";
import Galaxy from "@/components/Galaxy";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section with Galaxy Background */}
      <motion.section 
        className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Galaxy Background */}
        <div className="absolute inset-0 z-0">
          <Galaxy 
            mouseInteraction={true}
            mouseRepulsion={true}
            density={1.2}
            glowIntensity={0.6}
            saturation={0.3}
            hueShift={200}
            speed={0.8}
            twinkleIntensity={0.4}
            rotationSpeed={0.05}
            repulsionStrength={1.5}
            transparent={true}
          />
        </div>
        
        {/* Hero Content */}
        <div className="text-center max-w-4xl mx-auto relative z-10">
          <motion.h1 
            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 text-text-primary"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            John Doe
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-text-secondary mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Creative Developer & Designer
          </motion.p>
          <motion.div
            className="text-sm text-text-muted"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Move your cursor to explore the stars
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <PortfolioSection id="about" title="About">
        <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
          <p>
            I am a passionate creative developer with over 5 years of experience in designing and building 
            digital experiences that combine aesthetics with functionality.
          </p>
          <p>
            My expertise spans across front-end development, UI/UX design, and creative coding. I believe 
            in crafting minimal yet impactful solutions that tell a story and create meaningful connections.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies, contributing to open source 
            projects, or seeking inspiration in art and nature.
          </p>
        </div>
      </PortfolioSection>

      {/* Skills Section */}
      <PortfolioSection id="skills" title="Skills">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-text-primary">Technical</h3>
            <ul className="space-y-2 text-text-secondary">
              <li>React & Next.js</li>
              <li>TypeScript & JavaScript</li>
              <li>Node.js & Express</li>
              <li>Tailwind CSS & Framer Motion</li>
              <li>Three.js & WebGL</li>
              <li>MongoDB & PostgreSQL</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-text-primary">Design</h3>
            <ul className="space-y-2 text-text-secondary">
              <li>UI/UX Design</li>
              <li>Figma & Adobe Creative Suite</li>
              <li>Design Systems</li>
              <li>Prototyping</li>
              <li>Brand Identity</li>
              <li>Typography</li>
            </ul>
          </div>
        </div>
      </PortfolioSection>

      {/* Projects Section */}
      <PortfolioSection id="projects" title="Projects">
        <div className="space-y-12">
          <div className="border-l-2 border-border pl-6">
            <h3 className="text-2xl font-semibold mb-2 text-text-primary">E-Commerce Platform</h3>
            <p className="text-text-muted mb-3">2024</p>
            <p className="text-text-secondary leading-relaxed">
              A full-stack e-commerce solution built with React, Node.js, and Stripe integration. 
              Features include real-time inventory management, advanced search, and personalized recommendations.
            </p>
          </div>
          
          <div className="border-l-2 border-border pl-6">
            <h3 className="text-2xl font-semibold mb-2 text-text-primary">Creative Agency Website</h3>
            <p className="text-text-muted mb-3">2023</p>
            <p className="text-text-secondary leading-relaxed">
              Award-winning agency website featuring immersive animations, custom WebGL effects, 
              and a headless CMS for content management.
            </p>
          </div>
          
          <div className="border-l-2 border-border pl-6">
            <h3 className="text-2xl font-semibold mb-2 text-text-primary">Mobile Fitness App</h3>
            <p className="text-text-muted mb-3">2023</p>
            <p className="text-text-secondary leading-relaxed">
              React Native application with AI-powered workout recommendations, social features, 
              and integration with wearable devices.
            </p>
          </div>
        </div>
      </PortfolioSection>

      {/* Ongoing Projects Section */}
      <PortfolioSection id="ongoing" title="Ongoing Projects">
        <div className="space-y-8">
          <div className="bg-section-bg p-6 rounded-lg border border-border">
            <h3 className="text-xl font-semibold mb-3 text-text-primary">Open Source Design System</h3>
            <p className="text-text-secondary mb-3">
              Building a comprehensive design system and component library for React applications. 
              Currently in beta with 15+ components and growing community adoption.
            </p>
            <div className="text-sm text-text-muted">Status: In Development</div>
          </div>
          
          <div className="bg-section-bg p-6 rounded-lg border border-border">
            <h3 className="text-xl font-semibold mb-3 text-text-primary">AI-Powered Content Platform</h3>
            <p className="text-text-secondary mb-3">
              Developing an intelligent content management platform that uses machine learning 
              to optimize content performance and user engagement.
            </p>
            <div className="text-sm text-text-muted">Status: Research & Prototyping</div>
          </div>
        </div>
      </PortfolioSection>

      {/* Blog Section */}
      <PortfolioSection id="blog" title="Blog">
        <div className="space-y-8">
          <article className="border-b border-border pb-6">
            <h3 className="text-xl font-semibold mb-2 text-text-primary hover:text-primary transition-smooth cursor-pointer">
              The Future of Web Animation
            </h3>
            <p className="text-text-muted text-sm mb-3">December 15, 2024</p>
            <p className="text-text-secondary">
              Exploring the latest trends in web animation, from micro-interactions to immersive 
              3D experiences, and how they're reshaping user engagement...
            </p>
          </article>
          
          <article className="border-b border-border pb-6">
            <h3 className="text-xl font-semibold mb-2 text-text-primary hover:text-primary transition-smooth cursor-pointer">
              Building Accessible Design Systems
            </h3>
            <p className="text-text-muted text-sm mb-3">November 28, 2024</p>
            <p className="text-text-secondary">
              A comprehensive guide to creating design systems that prioritize accessibility 
              without compromising on visual appeal or functionality...
            </p>
          </article>
          
          <article className="border-b border-border pb-6">
            <h3 className="text-xl font-semibold mb-2 text-text-primary hover:text-primary transition-smooth cursor-pointer">
              React Performance Optimization Techniques
            </h3>
            <p className="text-text-muted text-sm mb-3">November 10, 2024</p>
            <p className="text-text-secondary">
              Deep dive into advanced React optimization strategies, from code splitting 
              to virtual scrolling, with real-world examples and performance metrics...
            </p>
          </article>
        </div>
      </PortfolioSection>

      {/* Clients Section */}
      <PortfolioSection id="clients" title="Clients">
        <div className="space-y-8">
          <p className="text-lg text-text-secondary mb-8">
            I've had the privilege of working with amazing companies and startups around the world.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-text-primary mb-2">TechCorp</div>
              <div className="text-sm text-text-muted">Fortune 500</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-text-primary mb-2">StartupX</div>
              <div className="text-sm text-text-muted">Series A</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-text-primary mb-2">CreativeStudio</div>
              <div className="text-sm text-text-muted">Design Agency</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-text-primary mb-2">HealthTech</div>
              <div className="text-sm text-text-muted">Healthcare</div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-text-secondary">
              Interested in working together? Let's create something amazing.
            </p>
          </div>
        </div>
      </PortfolioSection>

      {/* Floating Dock for Social Links */}
      <FloatingDockDemo />
    </div>
  );
};

export default Index;
