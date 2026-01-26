import { motion, AnimatePresence } from "framer-motion";
import FloatingDockDemo from "@/components/floating-dock-demo";
import { ArrowUpRight, MapPin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LeetCodeStats } from "@/components/LeetCodeStats";
import { useNavigate } from "react-router-dom";
import { Preloader } from "@/components/Preloader";
import { useState, useEffect } from "react";

// Tech stack with official logos
const techStack = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", invert: true },
  { name: "Tailwindcss", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Typescript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", invert: true },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Postgres", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Prisma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg", invert: true },
  { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" },
  { name: "Neon DB", icon: "https://neon.tech/favicon/favicon.svg" },
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg", invert: true },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", invert: true },
  { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
  { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
];

const Index = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Only show preloader on first visit
    const hasVisited = sessionStorage.getItem("hasVisited");
    if (!hasVisited) {
      setIsLoading(true);
    }
  }, []);

  const handlePreloaderComplete = () => {
    sessionStorage.setItem("hasVisited", "true");
    setIsLoading(false);
  };

  return (
    <>
      <AnimatePresence>
        {isLoading && <Preloader onComplete={handlePreloaderComplete} />}
      </AnimatePresence>
      {!isLoading && (
        <div className="min-h-screen bg-background text-foreground">
          <div className="max-w-4xl mx-auto px-6 md:px-8 py-16 md:py-24">
            
            {/* Header */}
            <motion.header 
              className="mb-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div>
                  <h1 className="text-3xl md:text-4xl font-medium text-text-primary mb-3 tracking-tight">
                    Rishi Rohan Kalapala
                  </h1>
                  <p className="text-text-secondary text-lg mb-4">
                    Full Stack Web Developer | AI & CMS Systems Engineer
                  </p>
                  <div className="flex items-center gap-4 text-sm text-text-muted mb-6">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      <span>Hyderabad, India</span>
                    </div>
                    <span className="text-border">•</span>
                    <span>B.Tech AI (Final Year)</span>
                  </div>
                  <Button 
                    onClick={() => navigate('/contact')}
                    variant="outline"
                    size="sm"
                    className="gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    Get in Touch
                  </Button>
                </div>
              </div>
            </motion.header>

            {/* About */}
            <motion.section 
              className="mb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-medium text-text-muted uppercase tracking-wider mb-6">About</h2>
              <p className="text-text-secondary leading-relaxed text-lg max-w-3xl">
                A results-driven Full Stack Developer and AI undergraduate with strong experience in building modern web platforms, CMS systems, AI-driven applications, and scalable frontend architectures. Adept at designing production-ready systems using Next.js, React, TypeScript, MongoDB, Prisma, and Tailwind CSS.
              </p>
            </motion.section>

            {/* Skills */}
            <motion.section 
              className="mb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-wrap items-center justify-center gap-3">
                <span className="text-text-muted italic text-lg mr-2">I build using</span>
                {techStack.map((tech) => (
                  <span 
                    key={tech.name} 
                    className="inline-flex items-center gap-2 px-4 py-2 bg-muted border border-border rounded-full text-sm text-text-secondary hover:border-text-muted transition-colors"
                  >
                    <img 
                      src={tech.icon} 
                      alt={tech.name} 
                      className={`w-4 h-4 object-contain ${tech.invert ? 'invert' : ''}`}
                    />
                    {tech.name}
                  </span>
                ))}
              </div>
            </motion.section>

            {/* Ongoing Project */}
            <motion.section 
              className="mb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-medium text-text-muted uppercase tracking-wider mb-8">Currently Building</h2>
              <div className="p-6 rounded-lg border border-border bg-card">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-xl text-text-primary font-medium">GEAR up</h3>
                  <span className="px-2 py-1 bg-green-500/10 text-green-500 text-xs rounded-full">
                    In Progress
                  </span>
                </div>
                <p className="text-text-secondary leading-relaxed mb-4">
                  An innovative project focused on empowering students and professionals with cutting-edge tools and resources.
                </p>
                <div className="flex gap-3 flex-wrap text-sm text-text-muted">
                  <span>React</span>
                  <span>•</span>
                  <span>TypeScript</span>
                  <span>•</span>
                  <span>AI Integration</span>
                  <span>•</span>
                  <span>Cloud Platform</span>
                </div>
              </div>
            </motion.section>

            {/* Projects */}
            <motion.section 
              className="mb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-medium text-text-muted uppercase tracking-wider mb-8">Selected Projects</h2>
              <div className="space-y-6">
                <ProjectCard 
                  title="CKR-Datapoint"
                  description="A premier educational platform designed to help students plan, learn, and achieve their academic and professional goals."
                  link="https://www.ckrdatapoint.in/"
                  tags={['React', 'Next.js', 'Educational Platform']}
                />
                <ProjectCard 
                  title="Abhaya"
                  description="A comprehensive safety platform addressing harassment and unsafe public spaces, providing immediate help for women and children."
                  tags={['React Native', 'Real-time GPS', 'Emergency Services', 'AI Detection']}
                />
                <ProjectCard 
                  title="SafeSpeak"
                  description="Anonymous submissions with end-to-end encryption, stored on IPFS to prevent tracing."
                  link="https://github.com/RishiRohanKalapala-cloud/Safespeak"
                  tags={['React', 'MongoDB', 'Node.js', 'IPFS']}
                />
                <ProjectCard 
                  title="Authentication System"
                  description="Secure authentication and key agreement protocol using anonymous identities for peer-to-peer cloud communication."
                  link="https://github.com/RishiRohanKalapala-cloud/Authentication-and-Key-Agreement-Based-on-Anonymous-Identity-for-Peer-to-Peer-Cloud"
                  tags={['React', 'Supabase', 'ECC', 'SRP']}
                />
                <ProjectCard 
                  title="Knots"
                  description="A fullstack blog platform designed with modern UI elements for a better user experience."
                  link="https://knots-psi.vercel.app/"
                  tags={['React', 'OAuth', 'Shadcn UI', 'MongoDB']}
                />
                <ProjectCard 
                  title="HealthTalk"
                  description="A web-based AI platform that provides personalized medical advice based on user-reported symptoms."
                  link="https://medica-eta.vercel.app/"
                  tags={['React', 'Node.js', 'MongoDB', 'Express']}
                />
                <ProjectCard 
                  title="DripMsg"
                  description="A real-time chat application built with modern web technologies."
                  link="https://github.com/RishiRohanKalapala-cloud/DripMsg"
                  tags={['Next.js', 'Socket.IO', 'TypeScript']}
                />
                <ProjectCard 
                  title="Namerly"
                  description="Find unique, catchy, and fun startup names instantly with AI-powered suggestions."
                  link="https://github.com/RishiRohanKalapala-cloud/Namerly"
                  tags={['Next.js', 'TypeScript', 'AI']}
                />
              </div>
            </motion.section>

            {/* Clients */}
            <motion.section 
              className="mb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-medium text-text-muted uppercase tracking-wider mb-8">Clients & Collaborations</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <ClientCard 
                  name="Siya Jewellery"
                  description="E-commerce platform development"
                  link="https://siyacollections.shop/"
                />
                <ClientCard 
                  name="Stories at Scale"
                  description="Personal branding for founders"
                  link="https://www.storiesatscale.in/"
                />
                <ClientCard 
                  name="NSS CMRIT"
                  description="Volunteer management system"
                  link="https://nsscmritvolunteers.vercel.app/auth"
                />
                <ClientCard 
                  name="Grow & Learn Academy"
                  description="Learning management systems"
                />
              </div>
              <div className="mt-8 grid grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-medium text-text-primary">6+</div>
                  <div className="text-xs text-text-muted">Active Clients</div>
                </div>
                <div>
                  <div className="text-2xl font-medium text-text-primary">10+</div>
                  <div className="text-xs text-text-muted">Projects</div>
                </div>
                <div>
                  <div className="text-2xl font-medium text-text-primary">3</div>
                  <div className="text-xs text-text-muted">Industries</div>
                </div>
                <div>
                  <div className="text-2xl font-medium text-text-primary">2+</div>
                  <div className="text-xs text-text-muted">Years</div>
                </div>
              </div>
            </motion.section>

            {/* Writings */}
            <motion.section 
              className="mb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-medium text-text-muted uppercase tracking-wider mb-8">Writing</h2>
              <div className="space-y-4">
                <a 
                  href="https://www.linkedin.com/pulse/traditional-coding-vs-vibe-rishi-rohan-kalapala-mga8f/" 
                  className="group flex justify-between items-center py-4 border-b border-border hover:border-text-muted transition-colors"
                >
                  <div>
                    <h3 className="text-text-primary font-medium group-hover:text-primary transition-colors">
                      Traditional Coding v/s Vibe Coding
                    </h3>
                    <p className="text-sm text-text-muted mt-1">Exploring coding methodologies</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-text-muted group-hover:text-primary transition-colors" />
                </a>
                <a 
                  href="https://miro.com/app/board/uXjVIhVqoaE=/" 
                  className="group flex justify-between items-center py-4 border-b border-border hover:border-text-muted transition-colors"
                >
                  <div>
                    <h3 className="text-text-primary font-medium group-hover:text-primary transition-colors">
                      Web & App Development Roadmap
                    </h3>
                    <p className="text-sm text-text-muted mt-1">Comprehensive guide using P3D Formula</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-text-muted group-hover:text-primary transition-colors" />
                </a>
              </div>
            </motion.section>

            {/* LeetCode */}
            <motion.section 
              className="mb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-medium text-text-muted uppercase tracking-wider mb-8">Competitive Programming</h2>
              <div className="max-w-md">
                <LeetCodeStats username="22r01a7335" />
              </div>
            </motion.section>

          </div>

          <FloatingDockDemo />
        </div>
      )}
    </>
  );
};

// Project Card Component
const ProjectCard = ({ title, description, link, tags }: { title: string; description: string; link?: string; tags: string[] }) => {
  const content = (
    <div className="group py-6 border-b border-border hover:border-text-muted transition-colors">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-text-primary font-medium group-hover:text-primary transition-colors">{title}</h3>
        {link && <ArrowUpRight className="w-4 h-4 text-text-muted group-hover:text-primary transition-colors flex-shrink-0" />}
      </div>
      <p className="text-text-secondary text-sm leading-relaxed mb-3">{description}</p>
      <div className="flex gap-2 flex-wrap">
        {tags.map((tag) => (
          <span key={tag} className="text-xs text-text-muted">{tag}</span>
        ))}
      </div>
    </div>
  );

  if (link) {
    return <a href={link} target="_blank" rel="noopener noreferrer" className="block">{content}</a>;
  }
  return content;
};

// Client Card Component
const ClientCard = ({ name, description, link }: { name: string; description: string; link?: string }) => {
  const content = (
    <div className="group p-4 rounded-lg border border-border hover:border-text-muted transition-colors">
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-medium text-text-primary group-hover:text-primary transition-colors">{name}</h4>
        {link && <ArrowUpRight className="w-4 h-4 text-text-muted group-hover:text-primary transition-colors" />}
      </div>
      <p className="text-sm text-text-muted">{description}</p>
    </div>
  );

  if (link) {
    return <a href={link} target="_blank" rel="noopener noreferrer" className="block">{content}</a>;
  }
  return content;
};

export default Index;
