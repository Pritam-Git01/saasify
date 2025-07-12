"use client";


import { Check, GitCommit, Zap, Globe } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const DeploymentsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const codeRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

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

      // Code block animation
      gsap.fromTo(codeRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: codeRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Features animation
      gsap.fromTo(featuresRef.current?.children || [],
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: featuresRef.current,
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
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div ref={headerRef} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Deployments made <span className="gradient-text">easy</span>
            </h2>
            <p className="text-xl text-neutral-600  max-w-2xl mx-auto">
              Deploy with ease, leave complexities to us.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Code Example */}
            <div ref={codeRef}>
              <div className="code-block">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-neutral-400 text-xs">terminal</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <span className="text-primary mr-2">$</span>
                    <span>git add .</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-primary mr-2">$</span>
                    <span>git commit -m "update"</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-primary mr-2">$</span>
                    <span>git push</span>
                  </div>
                  <div className="flex items-center mt-4 text-green-400">
                    <Check className="w-4 h-4 mr-2" />
                    <span>your site is live ✨</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Features List */}
            <div ref={featuresRef} className="space-y-8">
              <div className="feature-card">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      One click deploy
                    </h3>
                    <p className="text-neutral-600 ">
                      Deploy your app in seconds, with our one click deploy feature.
                    </p>
                  </div>
                </div>
              </div>

              <div className="feature-card">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <GitCommit className="w-6 h-6 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Intuitive workflow
                    </h3>
                    <p className="text-neutral-600 ">
                      With our intuitive workflow, you can easily manage your app without complex steps.
                    </p>
                  </div>
                </div>
              </div>

              <div className="feature-card">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Global edge network
                    </h3>
                    <p className="text-neutral-600 ">
                      With our edge network, we host your website across the globe for lightning-fast performance.
                    </p>
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