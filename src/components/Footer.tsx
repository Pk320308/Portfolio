import { Github, Linkedin, Mail, ExternalLink, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gray-950 border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <style>{`
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .footer-content { animation: slide-up 0.6s ease forwards; opacity: 0; }
        .footer-link {
          transition: all 0.3s ease;
        }
        .footer-link:hover {
          transform: translateY(-2px);
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        <div className="footer-content grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
             
              <span className="font-bold text-white">Portfolio</span>
            </div>
            <p className="text-gray-400 text-sm">
              Building beautiful web experiences with modern technologies.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Navigation</h4>
            <ul className="space-y-2">
              {["Home", "Projects", "Skills", "Experience", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="footer-link text-gray-400 hover:text-blue-400 text-sm transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              {["GitHub", "LinkedIn", "Resume", "Blog"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="footer-link text-gray-400 hover:text-blue-400 text-sm transition-colors flex items-center gap-1"
                  >
                    {item}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Connect</h4>
            <div className="flex gap-3">
              <a
                href="https://github.com/Pk320308"
                className="footer-link p-2 bg-gray-900 hover:bg-gray-800 border border-gray-800 hover:border-blue-500 text-gray-400 hover:text-blue-400 rounded-lg transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                 href="https://www.linkedin.com/in/priyanshu-kumar-83a963306"
  target="_blank"
  rel="noopener noreferrer"
                className="footer-link p-2 bg-gray-900 hover:bg-gray-800 border border-gray-800 hover:border-blue-500 text-gray-400 hover:text-blue-400 rounded-lg transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:pk320308@gmail.com"
                className="footer-link p-2 bg-gray-900 hover:bg-gray-800 border border-gray-800 hover:border-blue-500 text-gray-400 hover:text-blue-400 rounded-lg transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-content border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4" style={{ animationDelay: "0.1s" }}>
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2024 Your Name. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
