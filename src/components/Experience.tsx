import { experience } from "../data/portfolio";

interface Props {
  sectionRef?: React.RefObject<HTMLDivElement>;
}

export default function Experience({ sectionRef }: Props) {
  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-950 overflow-hidden"
    >
      <style>{`
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes scale-up {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes timeline-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(59,130,246,0.7); }
          50% { box-shadow: 0 0 0 10px rgba(59,130,246,0); }
        }
        .section-title { animation: slide-in-left 0.6s ease; }
        .timeline-card { animation: scale-up 0.4s ease forwards; opacity: 0; }
        .timeline-dot { animation: timeline-pulse 2s infinite; }
        .experience-item {
          position: relative;
        }
        .experience-item::before {
          content: '';
          position: absolute;
          left: 20px;
          top: 60px;
          width: 2px;
          height: calc(100% - 40px);
          background: linear-gradient(to bottom, rgba(59,130,246,0.5), transparent);
        }
        .experience-item:last-child::before {
          display: none;
        }
      `}</style>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-5" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="mb-12">
          <h2 className="section-title text-4xl md:text-5xl font-black text-white mb-3">
            Professional Experience
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            My journey as a developer and the valuable experiences that shaped my skills and career path.
          </p>
        </div>

        <div className="space-y-8">
          {experience.map((exp, i) => (
            <div
              key={exp.id}
              className="timeline-card experience-item"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="absolute left-0 top-0 w-10 h-10 bg-gray-950 rounded-full flex items-center justify-center border-2 border-blue-500 timeline-dot z-10">
                <span className="w-2 h-2 bg-blue-500 rounded-full" />
              </div>

              <div className="ml-20 p-6 bg-gray-900/50 border border-gray-800 hover:border-blue-500/50 rounded-xl transition-all duration-300 hover:bg-gray-900/80 group">
                <div className="flex items-start justify-between mb-4 flex-col md:flex-row gap-3">
                  <div>
                    <h3 className="text-white font-bold text-xl group-hover:text-blue-400 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-blue-400 font-semibold">{exp.company}</p>
                  </div>
                  <span className="text-gray-500 text-sm font-mono whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-2 mb-4">
                  {exp.description.map((desc, j) => (
                    <li
                      key={j}
                      className="text-gray-300 flex items-start gap-3"
                      style={{ animationDelay: `${i * 0.15 + j * 0.08}s` }}
                    >
                      <span className="text-blue-400 mt-1 font-bold">»</span>
                      {desc}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2 py-1 bg-blue-500/15 text-blue-300 rounded-full border border-blue-500/30 hover:bg-blue-500/25 transition-colors cursor-pointer"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-12 border-t border-gray-800">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { label: "Projects Completed", value: "4+" },
              
              { label: "Technologies Mastered", value: "6+" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="timeline-card text-center p-6 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-blue-500/50 transition-all duration-300"
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                <div className="text-3xl font-black text-blue-400 mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-400 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
