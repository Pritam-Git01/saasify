"use client";


import { 
  Rocket, 
  Shield, 
  Zap, 
  Globe, 
  Code, 
  BarChart3,
  Lock,
  Headphones
} from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Rocket,
    title: "Lightning Fast",
    description: "Deploy your websites in seconds with our optimized infrastructure and global CDN network."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with SSL certificates, DDoS protection, and regular security audits."
  },
  {
    icon: Zap,
    title: "Auto Scaling",
    description: "Automatically handle traffic spikes without any configuration or downtime."
  },
  {
    icon: Globe,
    title: "Global Network",
    description: "300+ edge locations worldwide ensure your site loads fast everywhere."
  },
  {
    icon: Code,
    title: "Git Integration",
    description: "Connect your GitHub, GitLab, or Bitbucket repo for seamless deployment workflow."
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Monitor performance, traffic, and user engagement with detailed analytics dashboard."
  },
  {
    icon: Lock,
    title: "Secure by Default",
    description: "Automatic HTTPS, environment variables encryption, and secure build processes."
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Get help anytime with our dedicated support team and comprehensive documentation."
  }
];

export const FeaturesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(headerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Feature cards animation
      gsap.fromTo(gridRef.current?.children || [],
        { opacity: 0, y: 30, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // CTA animation
      gsap.fromTo(ctaRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="features" className="py-20 bg-muted/30">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div ref={headerRef} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Everything you need to{" "}
              <span className="gradient-text">scale fast</span>
            </h2>
            <p className="text-xl text-neutral-600  max-w-3xl mx-auto">
              From deployment to monitoring, we've got you covered with enterprise-grade features
              that help you focus on building great products.
            </p>
          </div>

          {/* Features Grid */}
          <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="feature-card group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-neutral-600  text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div ref={ctaRef} className="text-center mt-16">
            <div className="glass-card max-w-2xl mx-auto p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to get started?
              </h3>
              <p className="text-neutral-600  mb-6">
                Join thousands of developers who trust us with their deployments.
              </p>
              <button className="btn-hero-primary">
                Start deploying now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};