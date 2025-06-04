"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Github, Linkedin } from "lucide-react"; // Added Linkedin icon
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/shorten", label: "Shorten" },
    { href: "/contact", label: "Contact Us" },
  ];

  const closeMenu = () => setIsMenuOpen(false); // Function to close the menu

  return (
    <div
      className={cn(
        "fixed w-full top-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg dark:bg-gray-900/90"
          : "bg-gradient-to-r from-blue-900 via-blue-900 to-indigo-900"
      )}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Brand Name */}
          <Link
            href="/"
            className={cn(
              "text-2xl font-extrabold tracking-tight transition-colors duration-300 hover:opacity-90",
              isScrolled ? "text-blue-600 dark:text-white" : "text-white"
            )}
          >
            Snipli
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "font-medium transition-all duration-300 hover:opacity-75 relative group",
                    isScrolled
                      ? "text-gray-700 dark:text-gray-200"
                      : "text-white"
                  )}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
            <li className="flex items-center space-x-4">
              <Link
                href="/shorten"
                className={cn(
                  "px-5 py-2.5 rounded-full font-semibold transition-all duration-300",
                  "transform hover:scale-105 hover:shadow-lg",
                  isScrolled
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-white text-blue-600 hover:bg-gray-100"
                )}
              >
                Try Now
              </Link>
              <Link
                href="https://github.com/bytecrushr"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold",
                  "transition-all duration-300 transform hover:scale-105 hover:shadow-lg",
                  isScrolled
                    ? "bg-gray-900 text-white hover:bg-gray-800"
                    : "bg-gray-800 text-white hover:bg-gray-700"
                )}
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/piyush-sahu-science"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold",
                  "transition-all duration-300 transform hover:scale-105 hover:shadow-lg",
                  isScrolled
                    ? "bg-blue-700 text-white hover:bg-blue-800"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                )}
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className={cn(
              "md:hidden focus:outline-none transition-colors duration-300",
              "hover:opacity-80 p-2 rounded-lg",
              isScrolled ? "text-blue-600 dark:text-white" : "text-white"
            )}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden transition-all duration-300 ease-in-out",
            isMenuOpen
              ? "max-h-[400px] opacity-100 pointer-events-auto"
              : "max-h-0 opacity-0 pointer-events-none"
          )}
        >
          <div
            className={cn(
              "px-4 py-5 rounded-b-2xl mt-2 shadow-lg",
              isScrolled
                ? "bg-white dark:bg-gray-900"
                : "bg-blue-700 dark:bg-gray-800"
            )}
          >
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "block font-medium transition-all duration-300",
                      "hover:translate-x-2 hover:opacity-75",
                      isScrolled
                        ? "text-gray-700 dark:text-gray-200"
                        : "text-white"
                    )}
                    onClick={closeMenu} // Close the menu when a link is clicked
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="pt-4 space-y-3">
                <Link
                  href="/shorten"
                  className={cn(
                    "block text-center px-5 py-2.5 rounded-full font-semibold",
                    "transition-all duration-300 hover:shadow-lg",
                    isScrolled
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-white text-blue-600 hover:bg-gray-100"
                  )}
                  onClick={closeMenu} // Close the menu when a link is clicked
                >
                  Try Now
                </Link>
                <Link
                  href="https://github.com/bytecrushr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "flex items-center justify-center gap-2 px-5 py-2.5",
                    "rounded-full font-semibold transition-all duration-300",
                    "hover:shadow-lg",
                    isScrolled
                      ? "bg-gray-900 text-white hover:bg-gray-800"
                      : "bg-gray-800 text-white hover:bg-gray-700"
                  )}
                  onClick={closeMenu} // Close the menu when a link is clicked
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/piyush-sahu-science"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "flex items-center justify-center gap-2 px-5 py-2.5",
                    "rounded-full font-semibold transition-all duration-300",
                    "hover:shadow-lg",
                    isScrolled
                      ? "bg-blue-700 text-white hover:bg-blue-800"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  )}
                  onClick={closeMenu} // Close the menu when a link is clicked
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
