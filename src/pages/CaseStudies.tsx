import { motion } from "framer-motion";
import { ArrowLeft, Database, Server, Shield, Zap, Users, Globe, Code, Layers, GitBranch, Lock, BarChart3 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CaseStudies = () => {
  const navigate = useNavigate();

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const techStack = [
    { layer: "Frontend", tech: "React, Next.js, Tailwind" },
    { layer: "Backend", tech: "Node.js, Express/NestJS" },
    { layer: "Database", tech: "PostgreSQL / MongoDB" },
    { layer: "ORM", tech: "Prisma" },
    { layer: "Cache", tech: "Redis" },
    { layer: "Auth", tech: "JWT" },
    { layer: "Hosting", tech: "Vercel / AWS" },
  ];

  const coreFeatures = [
    {
      icon: <Layers className="w-5 h-5" />,
      title: "Content Management",
      items: ["Dynamic content types", "Rich-text editor & media library", "Draft, publish, version history", "Scheduled publishing"]
    },
    {
      icon: <Code className="w-5 h-5" />,
      title: "API-First Architecture",
      items: ["REST / GraphQL endpoints", "JSON-based structured content", "Secure API tokens", "Rate limiting & validation"]
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Multi-Client Support",
      items: ["Separate workspaces per client", "Custom branding per client", "Domain-based CMS access", "Client-specific isolation"]
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Role-Based Access (RBAC)",
      items: ["Super Admin", "Client Admin", "Editors & Contributors", "View-only roles"]
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Performance",
      items: ["Redis caching", "CDN media delivery", "Lazy loading & pagination", "Optimized queries"]
    },
    {
      icon: <GitBranch className="w-5 h-5" />,
      title: "Developer Tools",
      items: ["Webhooks for updates", "SDK integration support", "API documentation", "Import/export tools"]
    }
  ];

  const useCases = [
    "Corporate websites",
    "SaaS marketing platforms",
    "Blogs & news portals",
    "E-commerce content hubs",
    "Mobile app backends",
    "Agency-managed sites"
  ];

  const futureEnhancements = [
    "AI-assisted content generation",
    "Visual page builder",
    "GraphQL subscriptions",
    "Multi-language support",
    "Plugin marketplace",
    "Workflow automation"
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-red-500 selection:text-white">
      {/* Navigation */}
      <div className="fixed top-8 left-8 z-50">
        <button
          onClick={() => navigate('/')}
          className="group flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back</span>
        </button>
      </div>

      <div className="container mx-auto px-6 py-24 max-w-5xl">
        {/* Hero Section */}
        <motion.header
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-mono tracking-widest uppercase bg-red-500/10 text-red-500 rounded-full border border-red-500/20">
            Case Study
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight mb-6">
            Headless <span className="text-red-500">CMS</span> Platform
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A scalable, API-driven content management system for multi-client content delivery
          </p>
        </motion.header>

        {/* Overview */}
        <motion.section className="mb-20" {...fadeInUp}>
          <h2 className="text-2xl font-light mb-6 flex items-center gap-3">
            <span className="w-8 h-px bg-red-500" />
            Overview
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            This project is a Headless Content Management System designed to provide a scalable, API-driven, 
            and multi-tenant content platform. It separates content management (backend) from content presentation 
            (frontend), enabling flexible delivery across websites, mobile apps, dashboards, and third-party integrations.
          </p>
        </motion.section>

        {/* Problem Statement */}
        <motion.section className="mb-20" {...fadeInUp}>
          <h2 className="text-2xl font-light mb-6 flex items-center gap-3">
            <span className="w-8 h-px bg-red-500" />
            Problem Statement
          </h2>
          <div className="bg-card border border-border rounded-xl p-8">
            <p className="text-muted-foreground mb-6">Traditional CMS platforms face critical limitations:</p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                Tightly coupled with frontend rendering
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                Lack flexibility for omnichannel delivery
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                Difficult to scale for multiple clients
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                Limited customization and automation
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                Become performance bottlenecks at scale
              </li>
            </ul>
            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-foreground font-medium">
                Goal: Build a modern, headless CMS that is API-first, scalable, customizable, and client-ready.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Solution Summary */}
        <motion.section className="mb-20" {...fadeInUp}>
          <h2 className="text-2xl font-light mb-6 flex items-center gap-3">
            <span className="w-8 h-px bg-red-500" />
            Solution
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg mb-8">
            We developed a Headless CMS that allows content creators to manage content centrally while 
            developers consume content via REST/GraphQL APIs for any platform.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Decoupled Architecture", "Multi-tenant System", "Role-based Security", "Fast Delivery"].map((item, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-4 text-center">
                <p className="text-sm text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Core Features */}
        <motion.section className="mb-20" {...fadeInUp}>
          <h2 className="text-2xl font-light mb-8 flex items-center gap-3">
            <span className="w-8 h-px bg-red-500" />
            Core Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreFeatures.map((feature, i) => (
              <motion.div
                key={i}
                className="bg-card border border-border rounded-xl p-6 hover:border-red-500/30 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500">
                    {feature.icon}
                  </div>
                  <h3 className="font-medium text-foreground">{feature.title}</h3>
                </div>
                <ul className="space-y-2">
                  {feature.items.map((item, j) => (
                    <li key={j} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* System Architecture */}
        <motion.section className="mb-20" {...fadeInUp}>
          <h2 className="text-2xl font-light mb-8 flex items-center gap-3">
            <span className="w-8 h-px bg-red-500" />
            System Architecture
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 mb-4">
                <Server className="w-6 h-6" />
              </div>
              <h3 className="font-medium text-foreground mb-3">Backend</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Node.js + Express / NestJS</li>
                <li>Prisma ORM</li>
                <li>PostgreSQL / MongoDB</li>
                <li>Redis for caching</li>
                <li>JWT authentication</li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500 mb-4">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="font-medium text-foreground mb-3">Frontend (Admin)</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>React / Next.js</li>
                <li>Tailwind CSS</li>
                <li>ShadCN UI</li>
                <li>Role-based dashboards</li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-500 mb-4">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="font-medium text-foreground mb-3">Infrastructure</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Dockerized deployment</li>
                <li>Cloud hosting (Vercel / AWS)</li>
                <li>CI/CD pipelines</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Data Flow */}
        <motion.section className="mb-20" {...fadeInUp}>
          <h2 className="text-2xl font-light mb-8 flex items-center gap-3">
            <span className="w-8 h-px bg-red-500" />
            Data Flow
          </h2>
          <div className="bg-card border border-border rounded-xl p-8">
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              {[
                "Admin creates content",
                "CMS stores in database",
                "Cache updates in Redis",
                "API exposes content",
                "Clients consume APIs",
                "Webhooks notify platforms"
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-red-500 text-white text-xs flex items-center justify-center font-medium">
                      {i + 1}
                    </span>
                    <span className="text-muted-foreground">{step}</span>
                  </div>
                  {i < 5 && <span className="text-muted-foreground/30 hidden md:block">→</span>}
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Security */}
        <motion.section className="mb-20" {...fadeInUp}>
          <h2 className="text-2xl font-light mb-8 flex items-center gap-3">
            <span className="w-8 h-px bg-red-500" />
            Security Implementation
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { icon: <Lock className="w-5 h-5" />, label: "JWT Auth" },
              { icon: <Shield className="w-5 h-5" />, label: "API Tokens" },
              { icon: <Zap className="w-5 h-5" />, label: "Rate Limiting" },
              { icon: <Database className="w-5 h-5" />, label: "Secure Secrets" },
              { icon: <BarChart3 className="w-5 h-5" />, label: "Audit Logs" },
            ].map((item, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-4 flex flex-col items-center gap-2 text-center">
                <div className="text-red-500">{item.icon}</div>
                <span className="text-sm text-muted-foreground">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Database Structure */}
        <motion.section className="mb-20" {...fadeInUp}>
          <h2 className="text-2xl font-light mb-8 flex items-center gap-3">
            <span className="w-8 h-px bg-red-500" />
            Database Entities
          </h2>
          <div className="flex flex-wrap gap-3">
            {["Users", "Roles & Permissions", "Clients (Tenants)", "Content Types", "Content Entries", "Media Assets", "API Keys", "Logs"].map((entity, i) => (
              <span key={i} className="px-4 py-2 bg-card border border-border rounded-lg text-sm text-muted-foreground">
                {entity}
              </span>
            ))}
          </div>
        </motion.section>

        {/* Differentiators */}
        <motion.section className="mb-20" {...fadeInUp}>
          <h2 className="text-2xl font-light mb-8 flex items-center gap-3">
            <span className="w-8 h-px bg-red-500" />
            Unique Differentiators
          </h2>
          <div className="bg-gradient-to-br from-red-500/10 to-transparent border border-red-500/20 rounded-xl p-8">
            <ul className="grid md:grid-cols-2 gap-4">
              {[
                "Built for multi-client CMS hosting",
                "Developer-first API architecture",
                "Scalable content modeling engine",
                "Plug-in system for extensibility",
                "Optimized for performance & SEO",
                "Portfolio-grade real-world usage"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground">
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* Use Cases */}
        <motion.section className="mb-20" {...fadeInUp}>
          <h2 className="text-2xl font-light mb-8 flex items-center gap-3">
            <span className="w-8 h-px bg-red-500" />
            Use Cases
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {useCases.map((useCase, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-4 text-center text-muted-foreground hover:text-foreground hover:border-red-500/30 transition-colors">
                {useCase}
              </div>
            ))}
          </div>
        </motion.section>

        {/* Challenges */}
        <motion.section className="mb-20" {...fadeInUp}>
          <h2 className="text-2xl font-light mb-8 flex items-center gap-3">
            <span className="w-8 h-px bg-red-500" />
            Challenges Faced
          </h2>
          <div className="space-y-4">
            {[
              "Designing flexible content schemas",
              "Ensuring tenant-level data isolation",
              "Optimizing API performance at scale",
              "Managing content versioning",
              "Building a scalable RBAC system"
            ].map((challenge, i) => (
              <div key={i} className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg">
                <span className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-sm font-medium text-muted-foreground">
                  {i + 1}
                </span>
                <p className="text-muted-foreground">{challenge}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Outcomes */}
        <motion.section className="mb-20" {...fadeInUp}>
          <h2 className="text-2xl font-light mb-8 flex items-center gap-3">
            <span className="w-8 h-px bg-red-500" />
            Outcomes & Impact
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Improved content delivery speed",
              "Reduced developer dependency for content updates",
              "Enabled multi-platform content reuse",
              "Increased system scalability & maintainability",
              "Portfolio-ready real-world SaaS architecture"
            ].map((outcome, i) => (
              <div key={i} className="flex items-start gap-3 text-muted-foreground">
                <span className="text-green-500 mt-1">✓</span>
                {outcome}
              </div>
            ))}
          </div>
        </motion.section>

        {/* Future Enhancements */}
        <motion.section className="mb-20" {...fadeInUp}>
          <h2 className="text-2xl font-light mb-8 flex items-center gap-3">
            <span className="w-8 h-px bg-red-500" />
            Future Enhancements
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {futureEnhancements.map((item, i) => (
              <div key={i} className="bg-card border border-border border-dashed rounded-lg p-4 text-center text-muted-foreground">
                {item}
              </div>
            ))}
          </div>
        </motion.section>

        {/* Tech Stack Table */}
        <motion.section className="mb-20" {...fadeInUp}>
          <h2 className="text-2xl font-light mb-8 flex items-center gap-3">
            <span className="w-8 h-px bg-red-500" />
            Tech Stack
          </h2>
          <div className="bg-card border border-border rounded-xl overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">Layer</th>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">Technology</th>
                </tr>
              </thead>
              <tbody>
                {techStack.map((row, i) => (
                  <tr key={i} className="border-b border-border last:border-0">
                    <td className="p-4 text-foreground font-medium">{row.layer}</td>
                    <td className="p-4 text-muted-foreground">{row.tech}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        {/* Summary */}
        <motion.section className="mb-20" {...fadeInUp}>
          <div className="bg-gradient-to-br from-card to-background border border-border rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-light mb-6 text-foreground">
              Portfolio Summary
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              <span className="text-foreground font-medium">Headless CMS Platform</span> — A scalable, API-driven content management 
              system supporting multi-client workspaces, RBAC security, Redis caching, Prisma ORM, and omnichannel content delivery. 
              Designed for modern web apps with performance optimization and extensible architecture.
            </p>
          </div>
        </motion.section>

        {/* Back to Home */}
        <motion.div className="text-center" {...fadeInUp}>
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            <ArrowLeft size={18} />
            Back to Portfolio
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default CaseStudies;
