import { motion } from "framer-motion";
import { ArrowLeft, Users, Globe, Smartphone, Cloud, Zap, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";

export default function AbhayaDocs() {
  const [likeCount, setLikeCount] = useState(0);
  const [isLiking, setIsLiking] = useState(false);

  useEffect(() => {
    // Fetch initial like count
    const fetchLikeCount = async () => {
      const { data } = await supabase
        .from('project_likes')
        .select('likes_count')
        .eq('project_name', 'abhaya')
        .single();
      
      if (data) {
        setLikeCount(data.likes_count);
      }
    };

    fetchLikeCount();

    // Subscribe to real-time updates
    const channel = supabase
      .channel('schema-db-changes')
      .on(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public',
          table: 'project_likes',
          filter: 'project_name=eq.abhaya'
        },
        (payload) => {
          if (payload.new && typeof payload.new.likes_count === 'number') {
            setLikeCount(payload.new.likes_count);
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const handleContribute = async () => {
    if (isLiking) return;
    
    setIsLiking(true);
    try {
      const { error } = await supabase
        .from('project_likes')
        .update({ likes_count: likeCount + 1 })
        .eq('project_name', 'abhaya');
      
      if (error) {
        console.error('Error updating like count:', error);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLiking(false);
    }
  };
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-lg sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link 
                to="/" 
                className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors"
              >
                <ArrowLeft size={20} />
                Back to Portfolio
              </Link>
              <h1 className="text-xl font-semibold text-text-primary">Abhaya Documentation</h1>
            </div>
            <Button 
              onClick={handleContribute}
              disabled={isLiking}
              className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white"
            >
              <Heart size={16} className={isLiking ? "animate-pulse" : ""} />
              Contribute ({likeCount})
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Project Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center items-center gap-3 mb-4">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">
                Abhaya
              </h1>
            </div>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Women and Child Safety Platform for India
            </p>
          </div>

          {/* Key Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 rounded-lg border border-border bg-card">
              <Zap className="text-red-500 mb-3" size={24} />
              <h3 className="font-semibold text-text-primary mb-2">SOS Alerts</h3>
              <p className="text-sm text-text-secondary">One-tap emergency notifications to contacts, police, and volunteers</p>
            </div>
            <div className="p-6 rounded-lg border border-border bg-card">
              <Users className="text-pink-500 mb-3" size={24} />
              <h3 className="font-semibold text-text-primary mb-2">Community Support</h3>
              <p className="text-sm text-text-secondary">Verified volunteers and crowdsourced safety mapping</p>
            </div>
            <div className="p-6 rounded-lg border border-border bg-card">
              <Globe className="text-blue-500 mb-3" size={24} />
              <h3 className="font-semibold text-text-primary mb-2">Rural Coverage</h3>
              <p className="text-sm text-text-secondary">SMS fallback and offline-first functionality</p>
            </div>
          </div>

          {/* Documentation Content */}
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              
              {/* Introduction */}
              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">1. Introduction</h2>
                <p className="text-text-secondary leading-relaxed">
                  Abhaya is a women and child safety platform designed to create a comprehensive ecosystem for emergency support, real-time alerts, and preventive safety measures. It focuses on urban and rural India, where safety concerns remain a critical issue. The system integrates web and mobile applications, community-driven reporting, and the potential use of UAVs (Unmanned Aerial Vehicles) for surveillance and rapid response.
                </p>
              </section>

              {/* Problem Statement */}
              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">2. Problem Statement</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  Women and children in India face significant safety challenges, including harassment, abduction, and violence. The existing safety apps and systems have limitations:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-text-secondary">
                  <li>Low adoption due to lack of awareness</li>
                  <li>Poor rural infrastructure and low bandwidth</li>
                  <li>Fragmented systems with no integration between apps, community support, and law enforcement</li>
                  <li>Limited trust in government-driven apps</li>
                </ul>
                <p className="text-text-secondary leading-relaxed mt-4">
                  Abhaya aims to bridge these gaps by providing a holistic and reliable solution.
                </p>
              </section>

              {/* Research Findings */}
              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">3. Research Findings</h2>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-text-primary">3.1 Existing Systems</h3>
                  <ul className="list-disc pl-6 space-y-2 text-text-secondary">
                    <li><strong>112 India App</strong> – Central government emergency helpline app. Effective in some urban areas but lacks reach in rural regions.</li>
                    <li><strong>Raksha App</strong> – Ministry of Women and Child Development's SOS app. Suffered from low adoption due to poor user experience.</li>
                    <li><strong>MySafetipin</strong> – Crowdsourced safety map, effective in urban setups but limited rural outreach.</li>
                    <li><strong>Safetipin Lite</strong> – Focused on low-bandwidth environments, but not integrated with police.</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-text-primary mt-6">3.2 Research Papers</h3>
                  <ul className="list-disc pl-6 space-y-2 text-text-secondary">
                    <li><em>Women Safety in India: Issues and Solutions through ICT</em> – Emphasizes mobile/web platforms for safety.</li>
                    <li><em>Smart Safety Applications using IoT and Cloud Computing</em> – Explores IoT and UAV-based solutions for real-time intervention.</li>
                    <li><em>Challenges in Rural Digital Infrastructure</em> – Highlights connectivity gaps and their effect on safety apps.</li>
                    <li><em>Urban vs Rural Women Safety Systems</em> – Discusses differences in adoption and stresses the need for hybrid models.</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-text-primary mt-6">3.3 News Reports</h3>
                  <ul className="list-disc pl-6 space-y-2 text-text-secondary">
                    <li>Multiple Indian states have tested <strong>drones for law enforcement</strong>, especially during mass gatherings.</li>
                    <li>NGOs report that existing women safety apps are ineffective due to lack of police integration.</li>
                    <li>Growing demand for <strong>lightweight UAVs</strong> to enhance surveillance in semi-rural and rural zones.</li>
                  </ul>
                </div>
              </section>

              {/* Project Vision */}
              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">4. Project Vision</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  Abhaya seeks to become the most reliable, scalable, and accessible safety platform for women and children in India. By combining digital tools, community involvement, and UAV support, it provides:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-text-secondary">
                  <li>Rapid SOS alerts</li>
                  <li>Safe route navigation</li>
                  <li>Anonymous reporting</li>
                  <li>Community-driven safety verification</li>
                  <li>Advanced surveillance for high-risk areas</li>
                </ul>
              </section>

              {/* Features */}
              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">5. Features</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary mb-3">5.1 Core Features</h3>
                    
                    <div className="space-y-4">
                      <div className="p-4 rounded-lg border border-border bg-card">
                        <h4 className="font-semibold text-text-primary mb-2">1. SOS Alert System</h4>
                        <ul className="list-disc pl-6 space-y-1 text-text-secondary text-sm">
                          <li>One-tap emergency button</li>
                          <li>Notifies emergency contacts, local police, and nearby volunteers</li>
                          <li>Works via internet and SMS fallback</li>
                        </ul>
                      </div>

                      <div className="p-4 rounded-lg border border-border bg-card">
                        <h4 className="font-semibold text-text-primary mb-2">2. Safety Maps</h4>
                        <ul className="list-disc pl-6 space-y-1 text-text-secondary text-sm">
                          <li>Crowdsourced safe/unsafe zones</li>
                          <li>Heatmaps of high-risk areas</li>
                          <li>Community rating system</li>
                        </ul>
                      </div>

                      <div className="p-4 rounded-lg border border-border bg-card">
                        <h4 className="font-semibold text-text-primary mb-2">3. Incident Reporting</h4>
                        <ul className="list-disc pl-6 space-y-1 text-text-secondary text-sm">
                          <li>Direct or anonymous reporting</li>
                          <li>Multimedia uploads (text, audio, video)</li>
                          <li>Integrated with law enforcement</li>
                        </ul>
                      </div>

                      <div className="p-4 rounded-lg border border-border bg-card">
                        <h4 className="font-semibold text-text-primary mb-2">4. Community Volunteers</h4>
                        <ul className="list-disc pl-6 space-y-1 text-text-secondary text-sm">
                          <li>Verified citizens who assist during emergencies</li>
                          <li>Alerted during SOS triggers</li>
                        </ul>
                      </div>

                      <div className="p-4 rounded-lg border border-border bg-card">
                        <h4 className="font-semibold text-text-primary mb-2">5. Offline Mode</h4>
                        <ul className="list-disc pl-6 space-y-1 text-text-secondary text-sm">
                          <li>SMS-based SOS for rural regions</li>
                          <li>Location included in text</li>
                        </ul>
                      </div>

                      <div className="p-4 rounded-lg border border-border bg-card">
                        <h4 className="font-semibold text-text-primary mb-2">6. Multilingual Support</h4>
                        <ul className="list-disc pl-6 space-y-1 text-text-secondary text-sm">
                          <li>Covers English, Hindi, and regional languages</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-text-primary mb-3">5.2 Future Features</h3>
                    <ul className="list-disc pl-6 space-y-2 text-text-secondary">
                      <li>UAV deployment for live surveillance</li>
                      <li>AI-driven predictive safety alerts</li>
                      <li>Integration with wearable devices</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Technical Architecture */}
              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">6. Technical Architecture</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg border border-border bg-card">
                    <Smartphone className="text-primary mb-2" size={20} />
                    <h4 className="font-semibold text-text-primary mb-2">Frontend</h4>
                    <p className="text-sm text-text-secondary">Web (React/Next.js), Mobile (React Native/Flutter)</p>
                  </div>
                  <div className="p-4 rounded-lg border border-border bg-card">
                    <Cloud className="text-primary mb-2" size={20} />
                    <h4 className="font-semibold text-text-primary mb-2">Backend</h4>
                    <p className="text-sm text-text-secondary">Cloud-based APIs, MongoDB Atlas, Node.js</p>
                  </div>
                </div>
                <ul className="list-disc pl-6 space-y-2 text-text-secondary mt-4">
                  <li><strong>Data Security:</strong> AES-256 encryption, OAuth 2.0 authentication</li>
                  <li><strong>UAV Integration:</strong> Cloud-connected fleet, live feed, DGCA-compliant</li>
                  <li><strong>Offline Support:</strong> SMS gateway for low-bandwidth use</li>
                </ul>
              </section>

              {/* Roadmap */}
              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">10. Roadmap</h2>
                <div className="space-y-4">
                  <div className="p-4 rounded-lg border-l-4 border-l-green-500 bg-green-500/5">
                    <h4 className="font-semibold text-text-primary">Phase 1 (0–6 months)</h4>
                    <p className="text-text-secondary text-sm">Core app development (SOS, maps, reporting)</p>
                  </div>
                  <div className="p-4 rounded-lg border-l-4 border-l-yellow-500 bg-yellow-500/5">
                    <h4 className="font-semibold text-text-primary">Phase 2 (6–12 months)</h4>
                    <p className="text-text-secondary text-sm">Volunteer integration, multilingual support, law enforcement APIs</p>
                  </div>
                  <div className="p-4 rounded-lg border-l-4 border-l-blue-500 bg-blue-500/5">
                    <h4 className="font-semibold text-text-primary">Phase 3 (12–24 months)</h4>
                    <p className="text-text-secondary text-sm">UAV integration, AI-based alerts, wearable devices</p>
                  </div>
                </div>
              </section>

              {/* Success Metrics */}
              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">11. Success Metrics</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg border border-border bg-card">
                    <h4 className="font-semibold text-text-primary mb-2">Adoption</h4>
                    <p className="text-text-secondary text-sm">1M downloads in year 1</p>
                  </div>
                  <div className="p-4 rounded-lg border border-border bg-card">
                    <h4 className="font-semibold text-text-primary mb-2">Engagement</h4>
                    <p className="text-text-secondary text-sm">50K+ monthly active users</p>
                  </div>
                  <div className="p-4 rounded-lg border border-border bg-card">
                    <h4 className="font-semibold text-text-primary mb-2">Response Time</h4>
                    <p className="text-text-secondary text-sm">&lt;5 minutes for volunteer response</p>
                  </div>
                  <div className="p-4 rounded-lg border border-border bg-card">
                    <h4 className="font-semibold text-text-primary mb-2">Coverage</h4>
                    <p className="text-text-secondary text-sm">Active in 10 states within 2 years</p>
                  </div>
                </div>
              </section>

              {/* Conclusion */}
              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">13. Conclusion</h2>
                <p className="text-text-secondary leading-relaxed">
                  Abhaya represents a unique solution tailored for India's safety challenges. With its integrated ecosystem of SOS alerts, community participation, and UAV technology, it is positioned to provide both preventive and responsive safety measures. By addressing both urban and rural contexts, Abhaya can become a transformative platform for women and child safety across the nation.
                </p>
              </section>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}