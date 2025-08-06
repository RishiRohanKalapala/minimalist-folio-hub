import { motion } from "framer-motion";
import FloatingDockDemo from "@/components/floating-dock-demo";
import { ArrowUpRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-2xl mx-auto px-6 py-16">
        
        {/* Profile Section */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-6 mb-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-2xl font-bold">
              JD
            </div>
            <div>
              <h1 className="text-3xl font-bold text-text-primary mb-1">johndoe</h1>
              <p className="text-text-secondary">@johndoe</p>
              <p className="text-text-secondary text-sm">25 • full stack engineer</p>
            </div>
          </div>
        </motion.div>

        {/* About Section */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-lg font-medium text-text-primary mb-6">about</h2>
          <div className="space-y-4 text-text-secondary leading-relaxed">
            <p>
              passionate creative developer with over 5 years of experience in designing and building 
              digital experiences that combine aesthetics with functionality.
            </p>
            <p>
              expertise spans across front-end development, ui/ux design, and creative coding. 
              believes in crafting minimal yet impactful solutions that tell a story.
            </p>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-lg font-medium text-text-primary mb-6">skills</h2>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-text-primary font-medium mb-3">technical</h3>
              <ul className="space-y-1 text-text-secondary text-sm">
                <li>react & next.js</li>
                <li>typescript & javascript</li>
                <li>node.js & express</li>
                <li>tailwind css & framer motion</li>
                <li>three.js & webgl</li>
                <li>mongodb & postgresql</li>
              </ul>
            </div>
            <div>
              <h3 className="text-text-primary font-medium mb-3">design</h3>
              <ul className="space-y-1 text-text-secondary text-sm">
                <li>ui/ux design</li>
                <li>figma & adobe creative suite</li>
                <li>design systems</li>
                <li>prototyping</li>
                <li>brand identity</li>
                <li>typography</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Ongoing Projects Section */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-lg font-medium text-text-primary mb-6">ongoing projects</h2>
          <div className="space-y-8">
            <div className="group cursor-pointer">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-text-primary font-medium group-hover:text-primary transition-smooth">
                  designsystem
                </h3>
                <ArrowUpRight className="w-4 h-4 text-text-muted group-hover:text-primary transition-smooth" />
              </div>
              <p className="text-text-secondary text-sm leading-relaxed">
                building a comprehensive design system and component library for react applications. 
                currently in beta with 15+ components and growing community adoption.
              </p>
            </div>
            
            <div className="group cursor-pointer">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-text-primary font-medium group-hover:text-primary transition-smooth">
                  aiplatform
                </h3>
                <ArrowUpRight className="w-4 h-4 text-text-muted group-hover:text-primary transition-smooth" />
              </div>
              <p className="text-text-secondary text-sm leading-relaxed">
                developing an intelligent content management platform that uses machine learning 
                to optimize content performance and user engagement.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-lg font-medium text-text-primary mb-6">projects</h2>
          <div className="space-y-8">
            <div className="group cursor-pointer">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-text-primary font-medium group-hover:text-primary transition-smooth">
                  ecommerce
                </h3>
                <ArrowUpRight className="w-4 h-4 text-text-muted group-hover:text-primary transition-smooth" />
              </div>
              <p className="text-text-secondary text-sm leading-relaxed">
                a full-stack e-commerce solution built with react, node.js, and stripe integration. 
                features include real-time inventory management and personalized recommendations.
              </p>
            </div>
            
            <div className="group cursor-pointer">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-text-primary font-medium group-hover:text-primary transition-smooth">
                  agency
                </h3>
                <ArrowUpRight className="w-4 h-4 text-text-muted group-hover:text-primary transition-smooth" />
              </div>
              <p className="text-text-secondary text-sm leading-relaxed">
                award-winning agency website featuring immersive animations, custom webgl effects, 
                and a headless cms for content management.
              </p>
            </div>
            
            <div className="group cursor-pointer">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-text-primary font-medium group-hover:text-primary transition-smooth">
                  fitness
                </h3>
                <ArrowUpRight className="w-4 h-4 text-text-muted group-hover:text-primary transition-smooth" />
              </div>
              <p className="text-text-secondary text-sm leading-relaxed">
                react native application with ai-powered workout recommendations, social features, 
                and integration with wearable devices.
              </p>
            </div>
            
            <div className="group cursor-pointer">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-text-primary font-medium group-hover:text-primary transition-smooth">
                  studio
                </h3>
                <ArrowUpRight className="w-4 h-4 text-text-muted group-hover:text-primary transition-smooth" />
              </div>
              <p className="text-text-secondary text-sm leading-relaxed">
                a minimal web development studio focused on building clean, fast, and modern websites 
                using contemporary tools and best practices.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Blog Section */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-lg font-medium text-text-primary mb-6">blog</h2>
          <div className="space-y-8">
            <div className="group cursor-pointer">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-text-primary font-medium group-hover:text-primary transition-smooth">
                  web animation trends
                </h3>
                <ArrowUpRight className="w-4 h-4 text-text-muted group-hover:text-primary transition-smooth" />
              </div>
              <p className="text-text-secondary text-sm leading-relaxed">
                exploring the latest trends in web animation, from micro-interactions to immersive 
                3d experiences, and how they're reshaping user engagement.
              </p>
            </div>
            
            <div className="group cursor-pointer">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-text-primary font-medium group-hover:text-primary transition-smooth">
                  accessible design systems
                </h3>
                <ArrowUpRight className="w-4 h-4 text-text-muted group-hover:text-primary transition-smooth" />
              </div>
              <p className="text-text-secondary text-sm leading-relaxed">
                a comprehensive guide to creating design systems that prioritize accessibility 
                without compromising on visual appeal or functionality.
              </p>
            </div>
            
            <div className="group cursor-pointer">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-text-primary font-medium group-hover:text-primary transition-smooth">
                  react optimization
                </h3>
                <ArrowUpRight className="w-4 h-4 text-text-muted group-hover:text-primary transition-smooth" />
              </div>
              <p className="text-text-secondary text-sm leading-relaxed">
                deep dive into advanced react optimization strategies, from code splitting 
                to virtual scrolling, with real-world examples and performance metrics.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Clients Section */}
        <motion.section 
          className="mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-lg font-medium text-text-primary mb-6">clients</h2>
          <p className="text-text-secondary text-sm mb-8 leading-relaxed">
            had the privilege of working with amazing companies and startups around the world, 
            helping them build digital experiences that matter.
          </p>
          
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="text-text-primary font-medium">techcorp</div>
            <div className="text-text-primary font-medium">startupx</div>
            <div className="text-text-primary font-medium">creativestudio</div>
            <div className="text-text-primary font-medium">healthtech</div>
          </div>
        </motion.section>
      </div>

      {/* Floating Dock for Social Links */}
      <FloatingDockDemo />
    </div>
  );
};

export default Index;
