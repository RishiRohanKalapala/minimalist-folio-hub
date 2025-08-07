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
            <a href="/projects/authentication-key-agreement" className="group block">
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
            
            <a href="/projects/safespeak" className="group block">
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
          <h2 className="text-xl font-medium text-text-primary mb-8">completed projects</h2>
          <div className="space-y-12">
            <a href="/projects/weather-prediction" className="group block">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg text-text-primary font-medium group-hover:text-primary transition-smooth">
                     Knots
                    </h3>
                    <span className="px-2 py-1 bg-purple-500/10 text-purple-500 text-xs rounded-full">
                      completed
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
            
            <a href="/projects/student-management-system" className="group block">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg text-text-primary font-medium group-hover:text-primary transition-smooth">
                      student management system
                    </h3>
                    <span className="px-2 py-1 bg-orange-500/10 text-orange-500 text-xs rounded-full">
                      web app
                    </span>
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed max-w-2xl">
                    full-stack web application for managing student records, attendance tracking, 
                    and grade management with secure authentication and data visualization.
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

            <a href="/projects/face-recognition-system" className="group block">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg text-text-primary font-medium group-hover:text-primary transition-smooth">
                      face recognition system
                    </h3>
                    <span className="px-2 py-1 bg-teal-500/10 text-teal-500 text-xs rounded-full">
                      ai project
                    </span>
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed max-w-2xl">
                    real-time face detection and recognition system using computer vision 
                    and deep learning for attendance automation and security applications.
                  </p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-text-muted group-hover:text-primary transition-smooth flex-shrink-0" />
              </div>
              <div className="flex gap-2 flex-wrap">
                {['opencv', 'python', 'dlib', 'face_recognition'].map((tech) => (
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
          <h2 className="text-xl font-medium text-text-primary mb-8">thoughts & writings</h2>
          <div className="space-y-8">
            <a href="/blog/evolution-of-web-animation" className="group block cursor-pointer">
              <article>
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
            </a>
            
            <a href="/blog/building-accessible-design-systems" className="group block cursor-pointer">
              <article>
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
