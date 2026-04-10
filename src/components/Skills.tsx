import { useState } from "react";
import { skills } from "../data/portfolio";
import { CheckCircle2 } from "lucide-react";

interface Props {
  sectionRef?: React.RefObject<HTMLDivElement>;
}

export default function Skills({ sectionRef }: Props) {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    skills[0].category
  );

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 overflow-hidden"
    >
      <style>{`
        @keyframes slide-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scale-up {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        .section-header { animation: slide-in 0.6s ease; }
        .skill-card { animation: scale-up 0.4s ease forwards; opacity: 0; }
        .skill-item { animation: slide-in 0.3s ease forwards; opacity: 0; }
        .category-tab { transition: all 0.3s ease; }
        .category-tab.active {
          background: linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%);
          box-shadow: 0 0 20px rgba(59,130,246,0.3);
        }
      `}</style>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-600 rounded-full blur-3xl opacity-5" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="section-header text-4xl md:text-5xl font-black text-white mb-3">
            Skills & Expertise
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            A comprehensive overview of technologies and skills I've mastered throughout my journey as a developer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="space-y-2 mb-6">
              {skills.map((skill, i) => (
                <button
                  key={skill.category}
                  onClick={() => setSelectedCategory(skill.category)}
                  className={`category-tab w-full text-left px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === skill.category
                      ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {skill.category}
                </button>
              ))}
            </div>

            <div className="p-6 bg-gray-800/50 border border-gray-700 rounded-xl">
              <p className="text-gray-400 text-sm leading-relaxed">
                {selectedCategory === "Frontend"
                  ? "Building responsive, interactive user interfaces with modern JavaScript frameworks and CSS technologies."
                  : selectedCategory === "Backend"
                  ? "Developing robust server-side applications with scalable architectures and secure databases."
                  : selectedCategory === "Tools & Platforms"
                  ? "Leveraging modern development tools and cloud platforms for efficient development and deployment."
                  : "Collaborating effectively with teams, solving complex problems, and managing projects from conception to delivery."}
              </p>
            </div>
          </div>

          <div>
            <div className="space-y-3">
              {skills
                .find((s) => s.category === selectedCategory)
                ?.items.map((item, i) => (
                  <div
                    key={item}
                    className="skill-item flex items-center gap-3 p-3 bg-gray-800/50 hover:bg-gray-800 rounded-lg transition-all duration-200 border border-gray-700 hover:border-blue-500/50 group cursor-pointer"
                    style={{ animationDelay: `${i * 0.08}s` }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-white font-medium group-hover:text-blue-300 transition-colors">
                      {item}
                    </span>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-12 border-t border-gray-700">
          <h3 className="text-2xl font-black text-white mb-8">
            Proficiency Overview
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { label: "Frontend Development", percentage: 90 },
              { label: "Backend Development", percentage: 85 },
              { label: "Database Design", percentage: 80 },
              { label: "DevOps & Deployment", percentage: 75 },
            ].map((skill, i) => (
              <div
                key={skill.label}
                className="skill-card"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-white">
                    {skill.label}
                  </span>
                  <span className="text-blue-400 font-bold">
                    {skill.percentage}%
                  </span>
                </div>
                <div className="h-3 bg-gray-800 rounded-full overflow-hidden border border-gray-700">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: 0,
                      animation: `fillProgress ${1 + i * 0.2}s ease-out forwards`,
                    }}
                  />
                </div>
                <style>{`
                  @keyframes fillProgress {
                    to { width: ${skill.percentage}%; }
                  }
                `}</style>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
