"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Only run mouse tracking after hydration
  useEffect(() => {
    setMounted(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!mounted) return;
      
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      document.documentElement.style.setProperty('--mouse-x', `${x * 100}%`);
      document.documentElement.style.setProperty('--mouse-y', `${y * 100}%`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mounted]);

  // Intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Animation classes
  const headlineClasses = `text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight transition-all duration-1000 ${
    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
  }`;

  const subtextClasses = `text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
  }`;

  const ctaClasses = `flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 transition-all duration-1000 delay-500 ${
    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
  }`;

  const imageClasses = `relative transition-all duration-1000 delay-700 ${
    isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
  }`;

  return (
    <>


      <section 
        ref={sectionRef} 
        className="relative pt-32 pb-20 min-h-screen overflow-hidden bg-background"
      >
        {/* Epic Background Animation */}
        <div className="epic-background">
          {/* Base neural network pattern */}
          <div className="neural-network"></div>
          
          {/* Morphing gradient overlay */}
          <div className="morphing-gradient"></div>
          
          {/* Plasma orbs */}
          <div className="plasma-orb-1"></div>
          <div className="plasma-orb-2"></div>
          
          {/* Geometric grid */}
          <div className="geometric-grid"></div>
          
          {/* Floating geometric shapes */}
          <div className="floating-shapes">
            <div className="shape"></div>
            <div className="shape"></div>
            <div className="shape"></div>
            <div className="shape"></div>
            <div className="shape"></div>
          </div>
          
          {/* Energy streams */}
          <div className="energy-streams">
            <div className="stream"></div>
            <div className="stream"></div>
            <div className="stream"></div>
          </div>
          
          {/* Particle field */}
          <div className="particle-field">
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
          </div>
          
          {/* Interactive cursor effect */}
          {mounted && <div className="interactive-cursor"></div>}
        </div>

        {/* Content */}
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Hero Headline */}
            <h1 ref={headlineRef} className={headlineClasses}>
              Deploy your website{" "}
              <span className="gradient-text">
                in seconds
              </span>,{" "}
              not hours.
            </h1>

            {/* Hero Subtext */}
            <p ref={subtextRef} className={subtextClasses}>
              With our state of the art, cutting edge, we are so back kinda
              hosting services, you can deploy your website in seconds.
            </p>

            {/* Hero CTAs */}
            <div ref={ctaRef} className={ctaClasses}>
              <Button 
                className="btn-hero-primary group px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 transform hover:shadow-lg"
                onClick={scrollToContact}
              >
                Create account
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button className="btn-hero-secondary group px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105">
                <Play className="mr-2 h-5 w-5" />
                Book a call
              </Button>
            </div>

            <div ref={imageRef} className={imageClasses}>
              <div className="absolute inset-0 bg-hero-gradient opacity-20 blur-3xl transform scale-110"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden">
                <img
                  src="/assets/dashboard-preview.jpg"
                  alt="Dashboard Preview"
                  className="w-full h-auto animate-float"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};