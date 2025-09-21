import { motion } from "framer-motion";
import FloatingDockDemo from "@/components/floating-dock-demo";
import { ArrowUpRight, MapPin, Calendar, Mail, FileText } from "lucide-react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import Ribbons from "@/components/ui/Ribbons";
import VortexDemo from "@/components/ui/vortex-demo";
import { Button } from "@/components/ui/button";
import { useNavigate, Link } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

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
                  src="https://www.fomostore.in/cdn/shop/products/Brothers-Innovation-Stickers-Anime-Gojo_Chibi-Image-1.jpg?v=1738334535" 
                  alt="rishi rohan kalapala"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h1 className="text-4xl md:text-5xl font-light text-text-primary mb-2 tracking-tight">
                  Rishi Rohan Kalapala
                </h1>
                <p className="text-text-secondary font-medium mb-3">Btech AIML Final Year Student</p>
                <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    <span>Hyderabad</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>21 years old</span>
                  </div>
                </div>
                <Button 
                  onClick={() => navigate('/contact')}
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2 w-fit"
                >
                  <Mail className="w-4 h-4" />
                  Contact Me
                </Button>
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
            <div className="relative p-1 rounded-lg bg-gradient-to-r from-primary to-primary/60 hover-scale">
              <a href="https://www.ckrdatapoint.in/" className="group block bg-background rounded-md p-6 transition-all duration-300 hover:shadow-xl">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg text-text-primary font-medium group-hover:text-primary transition-smooth">
                        CKR-Datapoint
                      </h3>
                      <span className="px-2 py-1 bg-amber-500/10 text-amber-500 text-xs rounded-full">
                        startup
                      </span>
                      <span className="px-2 py-1 bg-green-500/10 text-green-500 text-xs rounded-full animate-pulse">
                        Active
                      </span>
                    </div>
                    <p className="text-text-secondary text-sm leading-relaxed max-w-2xl">
                      A premier educational experience designed to help you plan, learn, and achieve your academic and professional goals.
                    </p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-text-muted group-hover:text-primary transition-smooth flex-shrink-0" />
                </div>
                <div className="flex gap-2 flex-wrap">
                  {['React', 'Next.js', 'Educational Platform', 'AI-powered'].map((tech) => (
                    <span key={tech} className="text-xs text-text-muted">
                      {tech}
                    </span>
                  ))}
                </div>
              </a>
            </div>
            <div className="mt-3">
              <p className="text-xs text-text-muted mb-2">Contributors</p>
              <div className="flex items-center gap-2">
                <AnimatedTooltip
                  items={[
                    {
                      id: 1,
                      name: "Rishi Rohan Kalapala",
                      designation: "Lead Developer",
                      image:
                        "https://avatars.githubusercontent.com/u/7940844?s=80&v=4",
                    },
                    {
                      id: 2,
                      name: "Abhi Vignesh K",
                      designation: "Web Sockets",
                      image:
                        "https://github.com/identicons/mwhite.png",
                    },
                    {
                      id: 3,
                      name: "Shubhang G",
                      designation: "UI Designer",
                      image:
                        "https://avatars.githubusercontent.com/u/627410?v=4&size=80",
                    },
                    {
                      id: 4,
                      name: "Naveen Nunna",
                      designation: "Graphic Designer",
                      image:
                        "https://avatars.githubusercontent.com/u/81637465?s=80&v=4",
                    },
                    {
                      id: 5,
                      name: "Dhanush Reddy",
                      designation: "Content Contributer",
                      image:
                        "https://avatars.githubusercontent.com/u/7940844?s=80&v=4",
                    },
                    {
                      id: 6,
                      name: "Varshith R",
                      designation: "Tester",
                      image:
                        "https://avatars.githubusercontent.com/u/108717211?s=80&v=4",
                    },
                    {
                      id: 7,
                      name: "Yuvraj A",
                      designation: "Tester",
                      image:
                        "https://avatars.githubusercontent.com/u/7940844?s=80&v=4",
                    },
                  ]}
                />
              </div>
              <div className="mt-4">
                <p className="text-xs text-text-muted mb-2">Partnerships</p>
                <div className="flex gap-3">
                  <span className="text-xs text-text-secondary">Projx</span>
                  <span className="text-xs text-text-secondary">StudentForge</span>
                </div>
              </div>
            </div>

            <div className="relative p-1 rounded-lg bg-gradient-to-r from-pink-500 to-red-500 hover-scale">
              <div className="group block bg-background rounded-md p-6 transition-all duration-300 hover:shadow-xl">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg text-text-primary font-medium group-hover:text-primary transition-smooth">
                        Abhaya
                      </h3>
                      <span className="px-2 py-1 bg-pink-500/10 text-pink-500 text-xs rounded-full">
                        Safety App
                      </span>
                      <span className="px-2 py-1 bg-red-500/10 text-red-500 text-xs rounded-full animate-pulse">
                        New
                      </span>
                    </div>
                    <p className="text-text-secondary text-sm leading-relaxed max-w-2xl">
                      A comprehensive safety platform addressing harassment, unsafe public spaces, and providing immediate help for women and children in India. Building unified solutions where existing systems fail.
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {['React Native', 'Real-time GPS', 'Emergency Services', 'Community Safety', 'AI Detection'].map((tech) => (
                    <span key={tech} className="text-xs text-text-muted">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-3">
              <p className="text-xs text-text-muted mb-2">Development Team</p>
              <div className="flex items-center gap-2">
                <AnimatedTooltip
                  items={[
                    {
                      id: 1,
                      name: "Rishi Rohan Kalapala",
                      designation: "Project Lead & Backend",
                      image: "https://avatars.githubusercontent.com/u/7940844?s=80&v=4",
                    },
                    {
                      id: 2,
                      name: "Safety Team",
                      designation: "Research & Design",
                      image: "https://github.com/identicons/safety.png",
                    },
                  ]}
                />
              </div>
              <div className="mt-4">
                <p className="text-xs text-text-muted mb-2">Impact Areas</p>
                <div className="flex gap-3 flex-wrap">
                  <span className="text-xs text-text-secondary">Women Safety</span>
                  <span className="text-xs text-text-secondary">Child Protection</span>
                  <span className="text-xs text-text-secondary">Community Support</span>
                  <span className="text-xs text-text-secondary">Emergency Response</span>
                </div>
              </div>
              <div className="mt-4">
                <Link 
                  to="/abhaya-docs" 
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-red-500 text-white text-sm font-medium rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  <FileText size={16} />
                  View Project Docs
                </Link>
              </div>
            </div>

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
                      name: "Rishi Rohan Kalapala",
                      designation: "Project Lead",
                      image:
                        "https://avatars.githubusercontent.com/u/7940844?s=80&v=4",
                    },
                    {
                      id: 2,
                      name: "Yashwanth Inampudi",
                      designation: "Project Member",
                      image:
                        "https://avatars.githubusercontent.com/u/411583?s=80&v=4",
                    },
                    {
                      id: 3,
                      name: "Naveen Nunna",
                      designation: "Databases",
                      image:
                        "https://avatars.githubusercontent.com/u/94617889?v=4",
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
                      name: "Rishi Rohan Kalapala",
                      designation: "Lead Developer",
                      image:
                        "https://avatars.githubusercontent.com/u/7940844?s=80&v=4",
                    },
                    {
                      id: 2,
                      name: "Abhi Vignesh K",
                      designation: "Web Sockets",
                      image:
                        "https://github.com/identicons/mwhite.png",
                    },
                    {
                      id: 3,
                      name: "Shubhang G",
                      designation: "UI Designer",
                      image:
                        "https://avatars.githubusercontent.com/u/627410?v=4&size=80",
                    },
                    {
                      id: 4,
                      name: "Naveen Nunna",
                      designation: "Graphic Designer",
                      image:
                        "https://avatars.githubusercontent.com/u/81637465?s=80&v=4",
                    },
                    {
                      id: 5,
                      name: "Dhanush Reddy",
                      designation: "Content Contributer",
                      image:
                        "https://avatars.githubusercontent.com/u/7940844?s=80&v=4",
                    },
                    {
                      id: 6,
                      name: "Varshith R",
                      designation: "Tester",
                      image:
                        "https://avatars.githubusercontent.com/u/108717211?s=80&v=4",
                    },
                    {
                      id: 7,
                      name: "Yuvraj A",
                      designation: "Tester",
                      image:
                        "https://avatars.githubusercontent.com/u/58804827?s=64&v=4",
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

            <a href="#" className="group block">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg text-text-primary font-medium group-hover:text-primary transition-smooth">
                      CSD AI Club web page
                    </h3>
                    <span className="px-2 py-1 bg-indigo-500/10 text-indigo-500 text-xs rounded-full">
                      Club Website
                    </span>
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed max-w-2xl">
                    A club showcase web page for the CSDAI club of CMRIT Hyderabad campus, featuring club activities, events, and member profiles.
                  </p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-text-muted group-hover:text-primary transition-smooth flex-shrink-0" />
              </div>
              <div className="flex gap-2 flex-wrap">
                {["React", "Tailwind CSS", "JavaScript"].map((tech) => (
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
          <h2 className="text-xl font-medium text-text-primary mb-8">Collaborations & Partnerships</h2>
          
          {/* Introduction */}
          <div className="mb-12 max-w-2xl">
            <p className="text-text-secondary leading-relaxed mb-6">
              Building meaningful partnerships with innovative organizations, startups, and creative teams worldwide. 
              Focused on creating impactful digital solutions and fostering collaborative growth.
            </p>
          </div>

          {/* Partner Categories */}
          <div className="space-y-12">
            {/* Current Partners */}
            <div>
              <h3 className="text-lg font-medium text-text-primary mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Active Partners
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="group p-6 rounded-lg border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg bg-card">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-medium text-text-primary group-hover:text-primary transition-smooth">TechCorp</h4>
                    <span className="text-xs text-green-500 bg-green-500/10 px-2 py-1 rounded-full">Active</span>
                  </div>
                  <p className="text-sm text-text-secondary mb-3">
                    Technology consulting and digital transformation solutions.
                  </p>
                  <div className="text-xs text-text-muted">Since 2024 • Ongoing</div>
                </div>

                <div className="group p-6 rounded-lg border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg bg-card">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-medium text-text-primary group-hover:text-primary transition-smooth">Siya Jewellery</h4>
                    <span className="text-xs text-blue-500 bg-blue-500/10 px-2 py-1 rounded-full">E-com</span>
                  </div>
                  <p className="text-sm text-text-secondary mb-3">
                    Custom e-commerce platform development and digital marketing solutions.
                  </p>
                  <div className="text-xs text-text-muted">Since 2024 • Ongoing</div>
                </div>

                <div className="group p-6 rounded-lg border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg bg-card">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-medium text-text-primary group-hover:text-primary transition-smooth">Grow & Learn Academy</h4>
                    <span className="text-xs text-purple-500 bg-purple-500/10 px-2 py-1 rounded-full">EdTech</span>
                  </div>
                  <p className="text-sm text-text-secondary mb-3">
                    Educational platform development and learning management systems.
                  </p>
                  <div className="text-xs text-text-muted">Since 2024 • Ongoing</div>
                </div>

                <div className="group p-6 rounded-lg border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg bg-card">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-medium text-text-primary group-hover:text-primary transition-smooth">NSS CMRIT</h4>
                    <span className="text-xs text-orange-500 bg-orange-500/10 px-2 py-1 rounded-full">Non-Profit</span>
                  </div>
                  <p className="text-sm text-text-secondary mb-3">
                    NSS Volunteer Management System development for CMRIT campus community service activities.
                  </p>
                  <div className="text-xs text-text-muted">Since 2025 • Present</div>
                </div>
              </div>
            </div>

            {/* Strategic Partnerships */}
            <div>
              <h3 className="text-lg font-medium text-text-primary mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Strategic Partnerships
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="group p-6 rounded-lg border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg bg-card">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-medium text-text-primary group-hover:text-primary transition-smooth">Projx</h4>
                    <span className="text-xs text-amber-500 bg-amber-500/10 px-2 py-1 rounded-full">Innovation</span>
                  </div>
                  <p className="text-sm text-text-secondary mb-3">
                    Collaborative innovation in project management and development workflows.
                  </p>
                  <div className="text-xs text-text-muted">Partnership • CKR-Datapoint</div>
                </div>

                <div className="group p-6 rounded-lg border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg bg-card">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-medium text-text-primary group-hover:text-primary transition-smooth">StudentForge</h4>
                    <span className="text-xs text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded-full">Education</span>
                  </div>
                  <p className="text-sm text-text-secondary mb-3">
                    Student-focused platform integration and educational resource sharing.
                  </p>
                  <div className="text-xs text-text-muted">Partnership • CKR-Datapoint</div>
                </div>
              </div>
            </div>

            {/* Collaboration Stats */}
            <div className="mt-12 p-6 rounded-lg bg-muted/20 border border-border">
              <h3 className="text-lg font-medium text-text-primary mb-6">Collaboration Impact</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">5+</div>
                  <div className="text-xs text-text-muted uppercase tracking-wide">Active Partners</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">10+</div>
                  <div className="text-xs text-text-muted uppercase tracking-wide">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">3</div>
                  <div className="text-xs text-text-muted uppercase tracking-wide">Industries</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">2+</div>
                  <div className="text-xs text-text-muted uppercase tracking-wide">Years Experience</div>
                </div>
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
