"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const navItems = [
  {
    path: "home",
    label: "Home",
  },
  {
    path: "about",
    label: "About",
  },
  {
    path: "education",
    label: "Education",
  },
  {
    path: "experience",
    label: "Experience",
  },
  {
    path: "skills",
    label: "Skills",
  },
  {
    path: "projects",
    label: "Projects",
  },
  {
    path: "contact-form",
    label: "Contact",
  },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => {
      document.querySelectorAll("section[id]").forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 64;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/10 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, 'home')}
            className="text-xl font-bold flex items-center gap-2 text-white"
          >
            <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center">
              <span className="text-black">ZI</span>
            </div>
          </a>

          <div className="hidden md:flex md:items-center md:space-x-4">
            {navItems.map((item) => (
              <a
                key={item.path}
                href={`#${item.path}`}
                onClick={(e) => handleNavClick(e, item.path)}
                className={`px-3 py-2 rounded-full text-sm transition-colors ${
                  activeSection === item.path
                    ? "bg-yellow-500/10 text-yellow-500"
                    : "hover:bg-white/5 text-white hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            ref={buttonRef}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-full hover:bg-white/5 transition-colors text-white"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      <div
        ref={menuRef}
        className={`md:hidden absolute top-16 left-0 right-0 transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="bg-black/80 backdrop-blur-xl border-b border-white/10 py-2 px-4 space-y-1">
          {navItems.map((item) => (
            <a
              key={item.path}
              href={`#${item.path}`}
              onClick={(e) => handleNavClick(e, item.path)}
              className={`block px-4 py-3 rounded-xl text-base md:text-sm transition-colors ${
                activeSection === item.path
                  ? "bg-yellow-500/10 text-yellow-500"
                  : "hover:bg-white/5 text-white hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}