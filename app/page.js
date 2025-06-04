"use client";
import Image from "next/image";
import { GithubIcon } from "lucide-react";
import backgroundImage from "@/public/image.png";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-100 relative overflow-hidden mt-10">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-700 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.1))] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Left Section */}
          <div className="flex-1 flex flex-col justify-center space-y-8 max-w-2xl">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                The Best{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  URL Shortener
                </span>{" "}
                in the Market
              </h1>
              <p className="text-lg sm:text-xl leading-relaxed text-gray-300">
                We are the most straightforward URL shortener in the world. Most
                URL shorteners track you or require your personal details for
                login. We understand your needs, so we created this
                privacy-friendly URL shortener.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up">
              <a
                href="/shorten"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-gray-900 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Try Now
              </a>
              <a
                href="https://github.com/bytecrushr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-gray-100 bg-gray-800 border border-gray-700 rounded-lg shadow-sm hover:bg-gray-700 transform hover:-translate-y-0.5 transition-all duration-200 group"
              >
                <GithubIcon className="w-5 h-5 mr-2" />
                <span>GitHub</span>
              </a>
            </div>

            {/* Feature badges */}
            <div className="flex flex-wrap gap-3 animate-fade-in-up delay-200">
              {["Privacy First", "No Login Required", "Lightning Fast"].map(
                (feature) => (
                  <span
                    key={feature}
                    className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gray-800 border border-gray-700 text-gray-300 shadow-sm"
                  >
                    {feature}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Right Section */}
          <div className="flex-1 w-full max-w-xl animate-float">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl transform rotate-6 border-2 border-blue-900" />
              <Image
                src={backgroundImage}
                alt="URL Shortener Interface"
                width={600}
                height={480}
                className="relative rounded-2xl shadow-2xl border-2 border-blue-900"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
