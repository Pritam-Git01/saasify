"use client";

import { Star, Quote } from "lucide-react";
import { useEffect, useRef, useState, useCallback } from "react";

// TypeScript interfaces for component props and data
interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}

interface TestimonialsSectionProps {
  testimonials?: Testimonial[];
  className?: string;
  animationDuration?: number;
  staggerDelay?: number;
}

// Default testimonials data
const defaultTestimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Sarah Chen",
    role: "Lead Developer at TechCorp",
    company: "TechCorp",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    content: "This platform completely transformed our deployment process. What used to take hours now takes seconds. The team loves how simple it is to use.",
    rating: 5
  },
  {
    id: "testimonial-2",
    name: "Marcus Rodriguez",
    role: "CTO at StartupXYZ",
    company: "StartupXYZ", 
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    content: "The reliability is outstanding. We've deployed hundreds of projects and never had a single issue. Customer support is also incredibly responsive.",
    rating: 5
  },
  {
    id: "testimonial-3",
    name: "Emily Watson",
    role: "Full Stack Engineer",
    company: "WebStudio",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    content: "I love the Git integration - just push to deploy. The analytics dashboard gives us insights we never had before. Highly recommend!",
    rating: 5
  }
];

// Trust indicators data
const trustIndicators = [
  { name: "GitHub", logo: "GitHub" },
  { name: "Vercel", logo: "Vercel" },
  { name: "Netlify", logo: "Netlify" },
  { name: "Railway", logo: "Railway" }
];

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  testimonials = defaultTestimonials,
  className = "",
  animationDuration = 0.8,
  staggerDelay = 0.15
}) => {
  // Refs for animation targets
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);

  // State for loading and error handling
  const [isLoading, setIsLoading] = useState(false); // Changed from true to false
  const [hasError, setHasError] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Ref callback for testimonial cards
  const setCardRef = useCallback((el: HTMLDivElement | null, index: number) => {
    if (el) {
      cardRefs.current[index] = el;
    }
  }, []);

  // Simple intersection observer for animations
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

  // Enhanced CSS animations with Tailwind
  const headerClasses = `text-center mb-16 transition-all duration-1000 ${
    isVisible || prefersReducedMotion ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
  }`;

  const gridClasses = `grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-300 ${
    isVisible || prefersReducedMotion ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
  }`;

  const trustClasses = `mt-16 text-center transition-all duration-1000 delay-500 ${
    isVisible || prefersReducedMotion ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
  }`;

  // Error boundary component
  if (hasError) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-red-500">Failed to load testimonials. Please try again later.</p>
        </div>
      </section>
    );
  }

  return (
    <section 
      ref={sectionRef} 
      className={`py-20 bg-gray-50 ${className}`}
      aria-label="Customer testimonials"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div 
          ref={headerRef} 
          className={headerClasses}
        >
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            id="testimonials-heading"
          >
            Loved by <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">developers</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See what our customers have to say about their experience with our platform.
          </p>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="text-center py-12" aria-live="polite">
            <div className="animate-pulse text-gray-600">Loading testimonials...</div>
          </div>
        )}

        {/* Testimonials Grid */}
        <div 
          ref={gridRef} 
          className={gridClasses}
          role="list"
          aria-labelledby="testimonials-heading"
        >
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              ref={(el) => setCardRef(el, index)}
              className={`bg-white p-6 rounded-xl shadow-lg border border-gray-200 group cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${
                isVisible || prefersReducedMotion ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              role="listitem"
              tabIndex={0}
              aria-label={`Testimonial from ${testimonial.name}, ${testimonial.role}`}
              style={{ 
                transitionDelay: `${index * 150}ms`
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.currentTarget.click();
                }
              }}
            >
              {/* Quote Icon */}
              <div className="mb-4" aria-hidden="true">
                <Quote className="w-8 h-8 text-blue-500/30" />
              </div>

              {/* Rating */}
              <div 
                className="flex space-x-1 mb-4"
                role="img"
                aria-label={`${testimonial.rating} out of 5 stars`}
              >
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    aria-hidden="true"
                  />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center space-x-3">
                <img
                  src={testimonial.avatar}
                  alt=""
                  className="w-12 h-12 rounded-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div>
                  <cite className="font-semibold text-gray-900 not-italic">
                    {testimonial.name}
                  </cite>
                  <div className="text-sm text-gray-500">
                    {testimonial.role}
                  </div>
                  <div className="text-xs text-gray-400">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div 
          ref={trustRef} 
          className={trustClasses}
        >
          <p className="text-gray-500 mb-8">
            Trusted by 10,000+ developers worldwide
          </p>
          <div 
            className="flex justify-center items-center space-x-8 opacity-60"
            role="list"
            aria-label="Trusted by these companies"
          >
            {trustIndicators.map((indicator) => (
              <div 
                key={indicator.name}
                className="text-2xl font-bold text-gray-400 hover:text-gray-600 transition-colors duration-300"
                role="listitem"
                aria-label={`Trusted by ${indicator.name}`}
              >
                {indicator.logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};