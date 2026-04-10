import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Mail, ExternalLink } from "lucide-react";

interface Props {
  scrollToSection: (id: string) => void;
}

export default function Navbar({ scrollToSection }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setIsOpen(false);
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Projects", id: "projects" },
    { label: "Skills", id: "skills" },
    { label: "Experience", id: "experience" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-950/95 backdrop-blur border-b border-gray-800"
          : "bg-transparent"
      }`}
    >
      <style>{`
        @keyframes nav-slide-down {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .nav-item { animation: nav-slide-down 0.4s ease forwards; opacity: 0; }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => handleNavClick("home")}
            className="group flex items-center gap-2 text-2xl font-black text-white hover:text-blue-400 transition-colors"
          >
           
            <span className="hidden sm:inline">Portfolio</span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, i) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="nav-item text-gray-300 hover:text-white font-medium transition-colors text-sm uppercase tracking-wider"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://github.com/Pk320308"
              className="p-2 hover:bg-gray-800 rounded-lg text-gray-400 hover:text-white transition-colors"
              title="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/priyanshu-kumar-83a963306?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="p-2 hover:bg-gray-800 rounded-lg text-gray-400 hover:text-white transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
             href="mailto:pk320308@gmail.com"
              className="p-2 hover:bg-gray-800 rounded-lg text-gray-400 hover:text-white transition-colors"
              title="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-950 border-t border-gray-800">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-900 rounded-lg transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-3 border-t border-gray-800 flex gap-3">
              <a
              href="https://github.com/Pk320308"
                className="flex-1 flex items-center justify-center gap-2 py-2 bg-gray-900 hover:bg-gray-800 rounded-lg text-gray-300 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
                <span className="text-sm">GitHub  </span>
              </a>
            <a
  href="https://www.linkedin.com/in/priyanshu-kumar-83a963306"
  target="_blank"
  rel="noopener noreferrer"
  className="flex-1 flex items-center justify-center gap-2 py-2 bg-gray-900 hover:bg-gray-800 rounded-lg text-gray-300 hover:text-white transition-colors"
  title="LinkedIn"
>
                <Linkedin className="w-4 h-4" />
                <span className="text-sm">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
