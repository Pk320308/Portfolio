import { useState, useEffect } from "react";
import { ChevronDown, Github, Linkedin, Mail, ExternalLink } from "lucide-react";

interface Props {
  scrollToSection: (id: string) => void;
}

export default function Hero({ scrollToSection }: Props) {
  const [visible, setVisible] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  const roles = ["Full Stack Developer", "Problem Solver", "Tech Enthusiast"];

  useEffect(() => {
    setVisible(true);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen bg-gradient-to-b from-gray-950 via-gray-950 to-gray-900 flex items-center justify-center px-4 overflow-hidden pt-16"
    >
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 20px rgba(59,130,246,0.3); }
          50% { box-shadow: 0 0 40px rgba(59,130,246,0.6); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes typing {
          0% { opacity: 0; width: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { opacity: 0; width: 0; }
        }
        .float { animation: float 3s ease-in-out infinite; }
        .glow-pulse { animation: glow-pulse 3s ease-in-out infinite; }
        .slide-up-1 { animation: slide-up 0.6s ease forwards 0.2s; opacity: 0; }
        .slide-up-2 { animation: slide-up 0.6s ease forwards 0.4s; opacity: 0; }
        .slide-up-3 { animation: slide-up 0.6s ease forwards 0.6s; opacity: 0; }
        .slide-up-4 { animation: slide-up 0.6s ease forwards 0.8s; opacity: 0; }
        .fade-in-up { animation: slide-up 0.8s ease forwards 1s; opacity: 0; }
        .gradient-text {
          background: linear-gradient(135deg, #0ea5e9 0%, #06b6d4 50%, #0ea5e9 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient-shift 3s ease infinite;
        }
        .typing-text {
          min-height: 1.5em;
          font-weight: 600;
          color: #38bdf8;
        }
      `}</style>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600 rounded-full blur-3xl opacity-10 float" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-600 rounded-full blur-3xl opacity-10 float" style={{ animationDelay: "1s" }} />
        <div
          className="absolute inset-0 opacity-20"
          style={{
           backgroundImage:
  "radial-gradient(circle at 20% 50%, rgba(215, 149, 101, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(201, 106, 122, 0.15) 0%, transparent 50%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="slide-up-1 mb-4 inline-flex items-center gap-2 px-4 py-2 bg-blue-950/40 border border-blue-500/30 rounded-full backdrop-blur">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-sm text-blue-300 font-medium">Welcome to my portfolio</span>
        </div>

        <h1 className="slide-up-2 text-5xl sm:text-6xl md:text-7xl text-white mb-4 tracking-tight">
          Hi, I'm{" "}
          <span className="gradient-text">
            Priyanshu kumar
          </span>
        </h1>

        <div className="slide-up-3 mb-6 h-10">
          <div className="typing-text text-xl sm:text-2xl">
            {roles[textIndex]}
          </div>
        </div>

        <p className="slide-up-4 text-gray-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          CSE student building innovative solutions with modern tech stack. Passionate about creating seamless user experiences and solving real-world problems through code.
        </p>

        <div className="fade-in-up flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={() => scrollToSection("projects")}
            className="group px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all duration-200 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
          >
            View My Projects
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-4 border border-gray-700 hover:border-blue-500 text-white font-bold rounded-xl transition-all duration-200 hover:bg-gray-900/50 hover:scale-105 active:scale-95"
          >
            Get In Touch
          </button>
        </div>

        <div className="fade-in-up flex justify-center gap-4 mb-12">
          <a
            href="https://github.com/Pk320308"
            className="p-3 bg-gray-900 hover:bg-gray-800 border border-gray-800 hover:border-blue-500 text-gray-400 hover:text-blue-400 rounded-lg transition-all duration-200 hover:scale-110 active:scale-95 glow-pulse"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
           href="https://www.linkedin.com/in/priyanshu-kumar-83a963306"
  target="_blank"
  rel="noopener noreferrer"
            className="p-3 bg-gray-900 hover:bg-gray-800 border border-gray-800 hover:border-blue-500 text-gray-400 hover:text-blue-400 rounded-lg transition-all duration-200 hover:scale-110 active:scale-95"
            style={{ animationDelay: "0.3s" }}
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
             href="mailto:pk320308@gmail.com"
            className="p-3 bg-gray-900 hover:bg-gray-800 border border-gray-800 hover:border-blue-500 text-gray-400 hover:text-blue-400 rounded-lg transition-all duration-200 hover:scale-110 active:scale-95"
            style={{ animationDelay: "0.6s" }}
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        <button
          onClick={() => scrollToSection("projects")}
          className="fade-in-up animate-bounce text-gray-400 hover:text-white transition-colors"
        >
          <ChevronDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}
