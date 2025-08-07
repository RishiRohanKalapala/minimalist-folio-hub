import { motion } from "framer-motion";
import FloatingDockDemo from "@/components/floating-dock-demo";
import { ArrowUpRight, MapPin, Calendar } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-8 py-20">
        
        {/* Header Section */}
        <motion.header 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div className="flex items-start gap-8">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-2xl font-bold shadow-lg">
                RR
              </div>
              <div className="flex flex-col justify-center">
                <h1 className="text-4xl md:text-5xl font-light text-text-primary mb-2 tracking-tight">
                  rishi rohan kalapala
                </h1>
                <p className="text-text-secondary font-medium mb-3">btech aiml final year student</p>
                <div className="flex items-center gap-4 text-sm text-text-muted">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    <span>hyderabad</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>21 years old</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className="text-text-secondary text-sm">studying at</p>
              <p className="text-text-primary font-medium">cmr institute of technology</p>
            </div>
          </div>
        </motion.header>

        {/* Introduction */}
        <motion.section 
          className="mb-32"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <h2 className="text-xl font-medium text-text-primary mb-6">introduction</h2>
              <div className="space-y-5 text-text-secondary leading-relaxed text-base">
                <p>
                  passionate creative developer with over 5 years of experience in designing and building 
                  digital experiences that combine aesthetics with functionality.
                </p>
                <p>
                  expertise spans across front-end development, ui/ux design, and creative coding. 
                  believes in crafting minimal yet impactful solutions that tell a story.
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-text-primary mb-4">currently</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-text-secondary">working on</p>
                  <p className="text-text-primary">design systems</p>
                </div>
                <div>
                  <p className="text-text-secondary">listening to</p>
                  <p className="text-text-primary">ambient techno</p>
                </div>
                <div>
                  <p className="text-text-secondary">reading</p>
                  <p className="text-text-primary">design psychology</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Experience & Skills */}
        <motion.section 
          className="mb-32"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-xl font-medium text-text-primary mb-6">experience</h2>
              <div className="space-y-6">
                <div className="border-l border-border pl-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-text-primary font-medium">senior developer</h3>
                    <span className="text-text-muted text-sm">2022 - now</span>
                  </div>
                  <p className="text-text-secondary text-sm">tech startup</p>
                </div>
                <div className="border-l border-border pl-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-text-primary font-medium">frontend developer</h3>
                    <span className="text-text-muted text-sm">2020 - 2022</span>
                  </div>
                  <p className="text-text-secondary text-sm">digital agency</p>
                </div>
                <div className="border-l border-border pl-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-text-primary font-medium">ui/ux designer</h3>
                    <span className="text-text-muted text-sm">2019 - 2020</span>
                  </div>
                  <p className="text-text-secondary text-sm">freelance</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-medium text-text-primary mb-6">expertise</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-text-primary font-medium mb-3">development</h3>
                  <div className="flex flex-wrap gap-2">
                    {['react', 'typescript', 'next.js', 'node.js', 'tailwind', 'framer motion'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-muted text-text-secondary text-xs rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-text-primary font-medium mb-3">design</h3>
                  <div className="flex flex-wrap gap-2">
                    {['figma', 'photoshop', 'after effects', 'principle', 'blender'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-muted text-text-secondary text-xs rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Featured Work */}
        <motion.section 
          className="mb-32"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl font-medium text-text-primary mb-8">selected work</h2>
          <div className="space-y-12">
            <div className="group">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg text-text-primary font-medium group-hover:text-primary transition-smooth">
                      designsystem.io
                    </h3>
                    <span className="px-2 py-1 bg-green-500/10 text-green-500 text-xs rounded-full">
                      in progress
                    </span>
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed max-w-2xl">
                    building a comprehensive design system and component library for react applications. 
                    currently in beta with 15+ components and growing community adoption.
                  </p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-text-muted group-hover:text-primary transition-smooth flex-shrink-0" />
              </div>
              <div className="flex gap-2 flex-wrap">
                {['react', 'typescript', 'storybook', 'figma'].map((tech) => (
                  <span key={tech} className="text-xs text-text-muted">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="group">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg text-text-primary font-medium group-hover:text-primary transition-smooth">
                      marketplace platform
                    </h3>
                    <span className="px-2 py-1 bg-blue-500/10 text-blue-500 text-xs rounded-full">
                      2024
                    </span>
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed max-w-2xl">
                    full-stack e-commerce solution with real-time inventory, personalized recommendations, 
                    and integrated payment processing serving 10k+ monthly users.
                  </p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-text-muted group-hover:text-primary transition-smooth flex-shrink-0" />
              </div>
              <div className="flex gap-2 flex-wrap">
                {['next.js', 'node.js', 'stripe', 'postgresql'].map((tech) => (
                  <span key={tech} className="text-xs text-text-muted">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="group">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg text-text-primary font-medium group-hover:text-primary transition-smooth">
                      creative agency
                    </h3>
                    <span className="px-2 py-1 bg-purple-500/10 text-purple-500 text-xs rounded-full">
                      award winning
                    </span>
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed max-w-2xl">
                    award-winning agency website featuring immersive webgl animations, 
                    custom scroll experiences, and headless cms integration.
                  </p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-text-muted group-hover:text-primary transition-smooth flex-shrink-0" />
              </div>
              <div className="flex gap-2 flex-wrap">
                {['three.js', 'gsap', 'webgl', 'contentful'].map((tech) => (
                  <span key={tech} className="text-xs text-text-muted">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Thoughts & Writings */}
        <motion.section 
          className="mb-32"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl font-medium text-text-primary mb-8">thoughts & writings</h2>
          <div className="space-y-8">
            <article className="group cursor-pointer">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-lg text-text-primary font-medium group-hover:text-primary transition-smooth mb-1">
                    the evolution of web animation
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    exploring how micro-interactions and immersive 3d experiences are reshaping 
                    user engagement in modern web applications.
                  </p>
                </div>
                <div className="text-right">
                  <time className="text-text-muted text-xs">dec 2024</time>
                  <ArrowUpRight className="w-4 h-4 text-text-muted group-hover:text-primary transition-smooth mt-1" />
                </div>
              </div>
            </article>
            
            <article className="group cursor-pointer">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-lg text-text-primary font-medium group-hover:text-primary transition-smooth mb-1">
                    building accessible design systems
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    a comprehensive guide to creating design systems that prioritize accessibility 
                    without compromising on visual appeal.
                  </p>
                </div>
                <div className="text-right">
                  <time className="text-text-muted text-xs">nov 2024</time>
                  <ArrowUpRight className="w-4 h-4 text-text-muted group-hover:text-primary transition-smooth mt-1" />
                </div>
              </div>
            </article>
          </div>
        </motion.section>

        {/* Collaborations */}
        <motion.section 
          className="mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl font-medium text-text-primary mb-6">collaborations</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <p className="text-text-secondary leading-relaxed">
              had the privilege of working with forward-thinking companies and creative teams 
              around the world, helping them craft digital experiences that matter.
            </p>
            <div className="space-y-2">
              <p className="text-sm text-text-secondary">selected clients include</p>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {['techcorp', 'startupx', 'creative collective', 'healthtech innovations', 'fintech labs', 'design studio'].map((client) => (
                  <span key={client} className="text-text-primary text-sm font-medium">
                    {client}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
      </div>

      {/* Floating Dock for Social Links */}
      <FloatingDockDemo />
    </div>
  );
};

export default Index;
