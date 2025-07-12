"use client";

import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for personal projects and learning",
    features: [
      "3 projects",
      "100GB bandwidth",
      "Basic analytics",
      "Community support",
      "SSL certificates"
    ],
    popular: false,
    cta: "Get started free"
  },
  {
    name: "Pro",
    price: "$19",
    period: "per month",
    description: "Ideal for professionals and growing teams",
    features: [
      "Unlimited projects",
      "1TB bandwidth",
      "Advanced analytics",
      "Priority support",
      "Custom domains",
      "Team collaboration",
      "Environment variables",
      "Build logs"
    ],
    popular: true,
    cta: "Start Pro trial"
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "contact us",
    description: "For large teams with advanced requirements",
    features: [
      "Everything in Pro",
      "Unlimited bandwidth",
      "SSO integration",
      "Dedicated support",
      "Custom integrations",
      "SLA guarantee",
      "Advanced security",
      "Audit logs"
    ],
    popular: false,
    cta: "Contact sales"
  }
];

export const PricingSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

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

      // Pricing cards animation
      gsap.fromTo(cardsRef.current?.children || [],
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          stagger: 0.2,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // FAQ animation
      gsap.fromTo(faqRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: faqRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={sectionRef} id="pricing" className="py-20 bg-muted/30">
      <div className="container">
        <div className="mx-auto">
          {/* Section Header */}
          <div ref={headerRef} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Simple, <span className="gradient-text">transparent</span> pricing
            </h2>
            <p className="text-xl text-neutral-600  max-w-3xl mx-auto">
              Choose the plan that fits your needs. Upgrade or downgrade at any time.
              No hidden fees, no surprises.
            </p>
          </div>

          {/* Pricing Cards */}
          <div ref={cardsRef} className="grid lg:grid-cols-3 md:grid-cols-2 items-center justify-center gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <div 
                key={plan.name}
                className={`
                  relative feature-card
                  ${plan.popular ? 'ring-2 ring-primary ring-opacity-50 scale-105' : ''}
                `}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-current" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-foreground">
                      {plan.price}
                    </span>
                    <span className="text-neutral-500  ml-1">
                      /{plan.period}
                    </span>
                  </div>
                  <p className="text-neutral-600 ">
                    {plan.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-neutral-700 ">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button 
                  className={`
                    w-full font-semibold py-3
                    ${plan.popular ? 'btn-hero-primary' : 'btn-hero-secondary'}
                  `}
                  onClick={plan.name === 'Enterprise' ? scrollToContact : undefined}
                >
                  {plan.cta}
                </Button>
              </div>
            ))}
          </div>

          {/* FAQ Link */}
          <div ref={faqRef} className="text-center mt-12">
            <p className="text-neutral-600 ">
              Have questions about our pricing?{" "}
              <button 
                onClick={scrollToContact}
                className="text-primary hover:underline font-medium"
              >
                Contact us
              </button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};