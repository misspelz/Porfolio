"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import myimg from "@/public/assets/mypic.jpeg";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative min-h-screen pt-20 md:pt-32 pb-20 overflow-hidden">
      {/* Subtle background gradient accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-transparent rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-orange-500/10 via-purple-500/10 to-transparent rounded-full blur-3xl -z-10" />

      <div className="w-10/12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Text Content */}
          <div
            className={`transition-all duration-1000 ${isLoaded
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-10"
              }`}
          >
            {/* Greeting */}
            <div className="mb-8 md:mb-10">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-white dark:via-slate-100 dark:to-white bg-clip-text text-transparent leading-tight">
                Hi, I&apos;m Pelz
              </h1>
            </div>

            {/* Description */}
            <div className="space-y-6 mb-12 md:mb-16">
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
                Every product I build starts with a question: What does the user need? With 3+ years of front-end engineering across industries, I&apos;ve learned that the best solutions come from understanding both user needs and business goals, and building scalable systems that do both.
              </p>
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
               You have the vision. I have the skills to execute it. Let&apos;s partner up and build something extraordinary.
              </p>
            </div>

            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              {/* Social Links */}
              <div className="flex items-center gap-4">
                <a
                  href="https://x.com/dev_pelz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-orange-500 hover:text-orange-500 dark:hover:border-orange-500 dark:hover:text-orange-500 transition-all duration-300 hover:scale-110"
                  aria-label="Twitter"
                >
                  <AiOutlineTwitter size={22} />
                </a>
                <a
                  href="https://www.linkedin.com/in/oluwapelumiadetoye/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-purple-500 hover:text-purple-500 dark:hover:border-purple-500 dark:hover:text-purple-500 transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn size={22} />
                </a>
              </div>

              {/* Email CTA Button */}
              <a
                href="mailto:adetoyeofficial@gmail.com"
                className="px-8 py-3.5 rounded-full font-semibold text-white bg-gradient-to-r from-orange-500 to-purple-600 hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 active:scale-95 whitespace-nowrap"
              >
                Get in touch
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div
            className={`transition-all duration-1000 delay-300 flex justify-center ${isLoaded
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-10"
              }`}
          >
            <div className="relative">
              {/* Animated background frame */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-purple-500/20 to-blue-500/20 rounded-3xl blur-2xl animate-pulse -z-10"></div>

              {/* Image container with border */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-orange-200 dark:border-slate-800 shadow-2xl">
                <Image
                  src={myimg}
                  alt="Pelz - Front End Engineer"
                  className="w-full h-auto rounded-3xl object-cover"
                  priority
                  quality={100}
                />
                {/* Overlay gradient for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent rounded-3xl" />
              </div>

              {/* Floating accent elements */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-orange-400 rounded-full opacity-20 blur-xl animate-float -z-20"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-600 rounded-full opacity-20 blur-xl animate-float animation-delay-2000 -z-20"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animation-delay-2000 {
          animation: float-delayed 6s ease-in-out infinite;
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default Hero;