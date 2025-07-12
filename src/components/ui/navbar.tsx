"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun } from "lucide-react";
import Image from "next/image";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle('dark', newTheme);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <h3 className="gradient-text">SaaSify</h3>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('features')}
              className="text-neutral-600 cursor-pointer hover:text-foreground transition-colors duration-200"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-neutral-600 cursor-pointer hover:text-foreground transition-colors duration-200"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-neutral-600 cursor-pointer hover:text-foreground transition-colors duration-200"
            >
              Contact
            </button>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="hover:bg-neutral-100"
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button variant="ghost" className="text-neutral-600 hover:text-foreground">
              Login
            </Button>
            <Button className="btn-hero-primary">
              Book a call
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-neutral-200 animate-slide-up">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('features')}
                className="text-left text-neutral-600 hover:text-foreground transition-colors duration-200"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="text-left text-neutral-600 hover:text-foreground transition-colors duration-200"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left text-neutral-600 hover:text-foreground transition-colors duration-200"
              >
                Contact
              </button>
              <div className="flex items-center justify-between pt-4 border-t border-neutral-200">
                <Button variant="ghost" className="text-neutral-600 hover:text-foreground">
                  Login
                </Button>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={toggleTheme}
                    className="hover:bg-neutral-100"
                  >
                    {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                  </Button>
                  <Button className="btn-hero-primary">
                    Book a call
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};