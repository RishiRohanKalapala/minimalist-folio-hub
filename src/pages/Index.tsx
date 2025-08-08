import { motion } from "framer-motion";
import FloatingDockDemo from "@/components/floating-dock-demo";
import { ArrowUpRight, MapPin, Calendar } from "lucide-react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

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
              <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/7c1b4fc8-76dc-457e-8e74-733b9a243dca.png" 
                  alt="rishi rohan kalapala"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h1 className="text-4xl md:text-5xl font-light text-text-primary mb-2 tracking-tight">
                  Rishi Rohan Kalapala
                </h1>
                <p className="text-text-secondary font-medium mb-3">Btech AIML Final Year Student</p>
                <div className="flex items-center gap-4 text-sm text-text-muted">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    <span>Hyderabad</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>21 years old</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className="text-text-secondary text-sm">Studying at</p>
              <p className="text-text-primary font-medium">CMRIT, HYD</p>
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
              <h2 className="text-xl font-medium text-text-primary mb-6">Introduction</h2>
              <div className="space-y-5 text-text-secondary leading-relaxed text-base">
                <p>
                  Passionate computer science student specializing in artificial intelligence and machine learning 
                  at cmr institute of technology, exploring the intersection of technology and creativity.
                </p>
                <p>
                  focused on developing innovative solutions through deep learning, data science, and 
                  modern web technologies. always eager to learn and contribute to meaningful projects.
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-text-primary mb-4">Currently</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-text-secondary">Learning</p>
                  <p className="text-text-primary">Machine Learning</p>
                </div>
                <div>
                  <p className="text-text-secondary">Building</p>
                  <p className="text-text-primary">AI Projects</p>
                </div>
                <div>
                  <p className="text-text-secondary">Exploring</p>
                  <p className="text-text-primary">Deep Learning</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Skills & Technologies */}
        <motion.section 
          className="mb-32"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-xl font-medium text-text-primary mb-6">Skills & Technologies</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-text-primary font-medium mb-3">Artificial Intelligence</h3>
                  <div className="flex flex-wrap gap-2">
                    {['python', 'tensorflow', 'pytorch', 'scikit-learn', 'opencv', 'numpy'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-muted text-text-secondary text-xs rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-text-primary font-medium mb-3">Web Development</h3>
                  <div className="flex flex-wrap gap-2">
                    {['react', 'javascript', 'html/css', 'node.js', 'mongodb', 'git', 'github'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-muted text-text-secondary text-xs rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-text-primary font-medium mb-3">Data Science</h3>
                  <div className="flex flex-wrap gap-2">
                    {['pandas', 'matplotlib', 'jupyter', 'sql', 'tableau', 'excel'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-muted text-text-secondary text-xs rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-medium text-text-primary mb-6">Academic Focus</h2>
              <div className="space-y-6">
                <div className="border-l border-border pl-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-text-primary font-medium">Machine Learning</h3>
                    <span className="text-text-muted text-sm">current</span>
                  </div>
                  <p className="text-text-secondary text-sm">Supervised & Unsupervised Learning Algorithms</p>
                </div>
                <div className="border-l border-border pl-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-text-primary font-medium">Deep Learning</h3>
                    <span className="text-text-muted text-sm">Learner</span>
                  </div>
                  <p className="text-text-secondary text-sm">Neural Networks & Computer Vision</p>
                </div>
                <div className="border-l border-border pl-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-text-primary font-medium">Data Structures</h3>
                    <span className="text-text-muted text-sm">Learner</span>
                  </div>
                  <p className="text-text-secondary text-sm">Algorithms & Problem Solving</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ongoing projects */}
        <motion.section 
          className="mb-32"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl font-medium text-text-primary mb-8">Ongoing Projects</h2>
          <div className="space-y-12">
            <a href="https://github.com/RishiRohanKalapala-cloud/Authentication-and-Key-Agreement-Based-on-Anonymous-Identity-for-Peer-to-Peer-Cloud" className="group block">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg text-text-primary font-medium group-hover:text-primary transition-smooth">
                     Authentication and Key Agreement Based on Anonymous Identity for Peer-to-Peer Cloud
                    </h3>
                    <span className="px-2 py-1 bg-green-500/10 text-green-500 text-xs rounded-full">
                      progress
                    </span>
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed max-w-2xl">
                    Secure authentication and key agreement protocol using anonymous identities for peer-to-peer cloud communication.
                  </p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-text-muted group-hover:text-primary transition-smooth flex-shrink-0" />
              </div>
              <div className="flex gap-2 flex-wrap">
                {['React', 'Supabase', 'API/Real-time', 'JS libraries (ECC, SRP)'].map((tech) => (
                  <span key={tech} className="text-xs text-text-muted">
                    {tech}
                  </span>
                ))}
              </div>
            </a>
            <div className="mt-3">
              <p className="text-xs text-text-muted mb-2">Contributors</p>
              <div className="flex items-center gap-2">
                <AnimatedTooltip
                  items={[
                    {
                      id: 1,
                      name: "John Doe",
                      designation: "Software Engineer",
                      image:
                        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
                    },
                    {
                      id: 2,
                      name: "Robert Johnson",
                      designation: "Product Manager",
                      image:
                        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
                    },
                    {
                      id: 3,
                      name: "Jane Smith",
                      designation: "Data Scientist",
                      image:
                        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
                    },
                  ]}
                />
              </div>
            </div>
            
            <a href="https://github.com/RishiRohanKalapala-cloud/Safespeak" className="group block">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg text-text-primary font-medium group-hover:text-primary transition-smooth">
                      SafeSpeak
                    </h3>
                    <span className="px-2 py-1 bg-blue-500/10 text-blue-500 text-xs rounded-full">
                      Web App
                    </span>
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed max-w-2xl">
                   A web platform allowing anonymous submissions with end-to-end encryption, stored on a decentralized network (IPFS) to prevent tracing. Organizations can respond publicly without accessing submitter identities.
                  </p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-text-muted group-hover:text-primary transition-smooth flex-shrink-0" />
              </div>
              <div className="flex gap-2 flex-wrap">
                {['React', 'MongoDB', 'Node.js', 'Reactbits UI'].map((tech) => (
                  <span key={tech} className="text-xs text-text-muted">
                    {tech}
                  </span>
                ))}
              </div>
            </a>
          </div>
        </motion.section>

        {/* completed projects */}
        <motion.section 
          className="mb-32"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl font-medium text-text-primary mb-8">Completed Projects</h2>
          <div className="space-y-12">
            <a href="https://knots-psi.vercel.app/" className="group block">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg text-text-primary font-medium group-hover:text-primary transition-smooth">
                     Knots
                    </h3>
                    <span className="px-2 py-1 bg-purple-500/10 text-purple-500 text-xs rounded-full">
                      Completed
                    </span>
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed max-w-2xl">
                     A Fullstack Blog Platform designed with modern UI elements for a better user experience. 
                  </p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-text-muted group-hover:text-primary transition-smooth flex-shrink-0" />
              </div>
              <div className="flex gap-2 flex-wrap">
                {['React', 'OAuth', 'Shadcn UI', 'MongoDB','Aceternity UI'].map((tech) => (
                  <span key={tech} className="text-xs text-text-muted">
                    {tech}
                  </span>
                ))}
              </div>
            </a>
            
            <a href="https://medica-eta.vercel.app/" className="group block">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg text-text-primary font-medium group-hover:text-primary transition-smooth">
                      HealthTalk
                    </h3>
                    <span className="px-2 py-1 bg-orange-500/10 text-orange-500 text-xs rounded-full">
                      Web App
                    </span>
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed max-w-2xl">
                    A web-based AI platform that provides personalized medical advice based on user-reported symptoms.
                  </p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-text-muted group-hover:text-primary transition-smooth flex-shrink-0" />
              </div>
              <div className="flex gap-2 flex-wrap">
                {['react', 'node.js', 'mongodb', 'express'].map((tech) => (
                  <span key={tech} className="text-xs text-text-muted">
                    {tech}
                  </span>
                ))}
              </div>
            </a>

            <a href="https://ckrdataportal.vercel.app/" className="group block">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg text-text-primary font-medium group-hover:text-primary transition-smooth">
                      Center for Knowledge & Resources
                    </h3>
                    <span className="px-2 py-1 bg-teal-500/10 text-teal-500 text-xs rounded-full">
                      AI Project
                    </span>
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed max-w-2xl">
                    CKR (Center for Knowledge & Resources) is a dynamic digital platform dedicated to empowering students, engineers, and tech enthusiasts by offering a centralized space for continuous learning, project-based development, and career growth.
                  </p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-text-muted group-hover:text-primary transition-smooth flex-shrink-0" />
              </div>
              <div className="flex gap-2 flex-wrap">
                {['React', 'Next.js', 'Web Scraping','Socket.io','Prism IDE'].map((tech) => (
                  <span key={tech} className="text-xs text-text-muted">
                    {tech}
                  </span>
                ))}
              </div>
            </a>
            <div className="mt-3">
              <p className="text-xs text-text-muted mb-2">Contributors</p>
              <div className="flex items-center gap-2">
                <AnimatedTooltip
                  items={[
                    {
                      id: 1,
                      name: "John Doe",
                      designation: "Software Engineer",
                      image:
                        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
                    },
                    {
                      id: 2,
                      name: "Robert Johnson",
                      designation: "Product Manager",
                      image:
                        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
                    },
                    {
                      id: 3,
                      name: "Jane Smith",
                      designation: "Data Scientist",
                      image:
                        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
                    },
                    {
                      id: 4,
                      name: "Emily Davis",
                      designation: "UX Designer",
                      image:
                        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
                    },
                    {
                      id: 5,
                      name: "Tyler Durden",
                      designation: "Soap Developer",
                      image:
                        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
                    },
                    {
                      id: 6,
                      name: "Dora",
                      designation: "The Explorer",
                      image:
                        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
                    },
                    {
                      id: 7,
                      name: "Alex Brown",
                      designation: "Full‑stack Engineer",
                      image:
                        "https://images.unsplash.com/photo-1502767089025-6572583495b4?q=80&w=800&auto=format&fit=crop",
                    },
                  ]}
                />
              </div>
            </div>

            <a href="https://github.com/RishiRohanKalapala-cloud/DripMsg" className="group block">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg text-text-primary font-medium group-hover:text-primary transition-smooth">
                      DripMsg
                    </h3>
                    <span className="px-2 py-1 bg-emerald-500/10 text-emerald-500 text-xs rounded-full">
                      Completed
                    </span>
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed max-w-2xl">
                    A real-time chat application built with Next.js, Socket.IO, and TypeScript.
                  </p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-text-muted group-hover:text-primary transition-smooth flex-shrink-0" />
              </div>
              <div className="flex gap-2 flex-wrap">
                {["Next.js", "Socket.IO", "TypeScript"].map((tech) => (
                  <span key={tech} className="text-xs text-text-muted">
                    {tech}
                  </span>
                ))}
              </div>
            </a>

            <a href="https://github.com/RishiRohanKalapala-cloud/Namerly" className="group block">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg text-text-primary font-medium group-hover:text-primary transition-smooth">
                      Namerly
                    </h3>
                    <span className="px-2 py-1 bg-sky-500/10 text-sky-500 text-xs rounded-full">
                      Completed
                    </span>
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed max-w-2xl">
                    Find unique, catchy, and fun startup names instantly. Enter your keywords, and let Namerly craft playful, brand-ready names to spark your next big idea!
                  </p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-text-muted group-hover:text-primary transition-smooth flex-shrink-0" />
              </div>
              <div className="flex gap-2 flex-wrap">
                {["Next.js", "TypeScript"].map((tech) => (
                  <span key={tech} className="text-xs text-text-muted">
                    {tech}
                  </span>
                ))}
              </div>
            </a>
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
          <h2 className="text-xl font-medium text-text-primary mb-8">Thoughts & Writings</h2>
          <div className="space-y-8">
            <a href="https://www.linkedin.com/pulse/traditional-coding-vs-vibe-rishi-rohan-kalapala-mga8f/" className="group block cursor-pointer">
              <article>
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-lg text-text-primary font-medium group-hover:text-primary transition-smooth mb-1">
                      Traditional Coding v/s Vibe Coding
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      Exploring the fundamental differences between traditional coding approaches and the innovative "Vibe Coding" methodology
                    </p>
                  </div>
                  <div className="text-right">
                    <time className="text-text-muted text-xs">AUG 2025</time>
                    <ArrowUpRight className="w-4 h-4 text-text-muted group-hover:text-primary transition-smooth mt-1" />
                  </div>
                </div>
              </article>
            </a>
            
            <a href="https://miro.com/app/board/uXjVIhVqoaE=/" className="group block cursor-pointer">
              <article>
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-lg text-text-primary font-medium group-hover:text-primary transition-smooth mb-1">
                    Comprehensive Web & App Development Roadmap
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      a comprehensive guide to creating design systems that prioritize accessibility 
                      without compromising on visual appeal using P3D Formula
                    </p>
                  </div>
                  <div className="text-right">
                    <time className="text-text-muted text-xs">JUN 2025</time>
                    <ArrowUpRight className="w-4 h-4 text-text-muted group-hover:text-primary transition-smooth mt-1" />
                  </div>
                </div>
              </article>
            </a>
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
                {['techcorp', 'Siya Jewellery', 'Grow & Learn Academy'].map((client) => (
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
