"use client";

import React, { useState, useEffect } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  const [showNav, setShowNav] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
          ? "backdrop-blur-md bg-neutral-900/70 border-b border-neutral-500"
          : ""
        }`}
    >
      {/* Overlay when nav is open */}
      {showNav && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30"
          onClick={() => setShowNav(false)}
        />
      )}

      <div className="w-10/12 max-w-[1200px] mx-auto flex items-center justify-between py-4 relative z-40">
        {/* Logo */}
        <div className="sm:text-3xl text-xl font-bold">
          <Link href="/">Pelumi Adetoye</Link>
        </div>

        {/* Hamburger / Close menu for mobile */}
        <div
          className="sm:hidden cursor-pointer z-50"
          onClick={() => setShowNav(!showNav)}
        >
          {showNav ? <IoMdClose size={28} /> : <HiOutlineMenuAlt3 size={28} />}
        </div>

        {/* Desktop navigation */}
        <ul className="hidden sm:flex space-x-10 items-center">
          <li>
            <Link
              href="https://docs.google.com/document/d/1TVnneJ644nh1vFj8ur7iVpl3BWBXEcnvbw3yTUjihfk/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#f7a025] transition-colors text-lg"
            >
              Resume
            </Link>
          </li>
          <li>
            <Link
              href="#skills"
              className="hover:text-[#f7a025] transition-colors text-lg"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              href="#projects"
              className="hover:text-[#f7a025] transition-colors text-lg"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="https://wa.link/0wqvvf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#f7a025] transition-colors text-lg"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile navigation */}
        <nav
          className={`sm:hidden absolute left-0 w-full bg-neutral-900 transition-all duration-300 ease-in-out z-40 ${showNav
              ? "top-16 opacity-100"
              : "top-0 opacity-0 pointer-events-none"
            }`}
        >
          <ul className="flex flex-col items-center space-y-4 py-6">
            <li
              className={`transition-transform duration-300 ${showNav ? "translate-x-0" : "-translate-x-32"
                }`}
            >
              <Link
                href="https://docs.google.com/document/d/1jA2l3StIbzDNkNtgKBWB3VkozDbN-rHHaqb_xQyYzts/edit?tab=t.0"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 hover:bg-[#f7a025] rounded"
                onClick={() => setShowNav(false)}
              >
                Resume
              </Link>
            </li>
            <li
              className={`transition-transform duration-300 delay-100 ${showNav ? "translate-x-0" : "-translate-x-40"
                }`}
            >
              <Link
                href="#skills"
                className="px-4 py-2 hover:bg-[#f7a025] rounded"
                onClick={() => setShowNav(false)}
              >
                Skills
              </Link>
            </li>
            <li
              className={`transition-transform duration-300 delay-100 ${showNav ? "translate-x-0" : "-translate-x-40"
                }`}
            >
              <Link
                href="#projects"
                className="px-4 py-2 hover:bg-[#f7a025] rounded"
                onClick={() => setShowNav(false)}
              >
                Projects
              </Link>
            </li>
            <li
              className={`transition-transform duration-300 delay-200 ${showNav ? "translate-x-0" : "-translate-x-48"
                }`}
            >
              <Link
                href="https://wa.link/0wqvvf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 hover:bg-[#f7a025] rounded"
                onClick={() => setShowNav(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
