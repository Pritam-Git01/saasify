"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageCircle, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

      // Form animation
      gsap.fromTo(formRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Info animation
      gsap.fromTo(infoRef.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: infoRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success("Thank you! We'll get back to you soon.");
      setFormData({ name: '', email: '', company: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section ref={sectionRef} id="contact" className="py-20 bg-background">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div ref={headerRef} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Get in <span className="gradient-text">touch</span>
            </h2>
            <p className="text-xl text-neutral-600  max-w-2xl mx-auto">
              Ready to transform your deployment process? Let's talk about how we can help
              your team ship faster.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div ref={formRef}>
              <div className="feature-card group">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Send us a message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      Company
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project and how we can help..."
                      className="w-full min-h-[120px]"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="btn-hero-primary w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send message'}
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div ref={infoRef}>
              <div className="space-y-8">
                {/* Contact Methods */}
                <div className="feature-card group">
                  <h3 className="text-2xl font-bold text-foreground mb-6">
                    Let's connect
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Email us</h4>
                        <p className="text-neutral-600 ">
                          hello@startup.com
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="w-6 h-6 text-green-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Live chat</h4>
                        <p className="text-neutral-600 ">
                          Available 24/7 for support
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-purple-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Schedule a call</h4>
                        <p className="text-neutral-600 ">
                          Book a 30-min demo call
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-orange-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Visit us</h4>
                        <p className="text-neutral-600 ">
                          San Francisco, CA<br />
                          New York, NY
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="glass-card p-6">
                  <h4 className="font-bold text-foreground mb-4">Why choose us?</h4>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">10K+</div>
                      <div className="text-sm text-neutral-600 ">Happy customers</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">99.9%</div>
                      <div className="text-sm text-neutral-600 ">Uptime SLA</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">&lt;30s</div>
                      <div className="text-sm text-neutral-600 ">Avg response</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">24/7</div>
                      <div className="text-sm text-neutral-600 ">Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};