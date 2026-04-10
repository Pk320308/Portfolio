import { useState } from "react";
import { projects } from "../data/portfolio";
import { X, Github, ExternalLink } from "lucide-react";

interface Props {
  sectionRef?: React.RefObject<HTMLDivElement>;
}

export default function Projects({ sectionRef }: Props) {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const allTags = Array.from(new Set(projects.flatMap((p) => p.tags)));
  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.tags.includes(filter));

  const featured = projects.filter((p) => p.featured);

  return (
    <section
      ref={sectionRef}
      id="projects"
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
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .section-title { animation: slide-in-left 0.6s ease; }
        .filter-tag { animation: scale-up 0.4s ease forwards; opacity: 0; }
        .project-card { animation: scale-up 0.4s ease forwards; opacity: 0; }
        .modal-overlay { animation: fade-in 0.3s ease; }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes modal-slide {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .modal-content { animation: modal-slide 0.3s ease; }
      `}</style>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-5" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="section-title text-4xl md:text-5xl font-black text-white mb-3">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            A selection of recent work showcasing my skills in full-stack development, UI/UX, and problem-solving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {featured.map((project, i) => (
            <button
              key={project.id}
              onClick={() => setSelectedProject(project.id)}
              className="project-card group h-full text-left"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="relative h-80 rounded-xl overflow-hidden bg-gray-900 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 group-hover:scale-[1.02]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <h3 className="text-white font-bold text-xl mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm line-clamp-2">
                      {project.shortDesc}
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <h3 className="text-white font-bold text-lg mb-2">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-xs px-2 py-1 bg-gray-800 text-gray-400 rounded-full">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="mb-8">
          <h3 className="text-white font-bold text-xl mb-4">Filter by Technology</h3>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setFilter("all")}
              className={`filter-tag px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                filter === "all"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-900 text-gray-400 hover:text-white hover:border-blue-500/50"
              } border border-gray-800 hover:border-blue-500/50`}
            >
              All
            </button>
            {allTags.slice(0, 6).map((tag, i) => (
              <button
                key={tag}
                onClick={() => setFilter(tag)}
                className={`filter-tag px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  filter === tag
                    ? "bg-blue-600 text-white"
                    : "bg-gray-900 text-gray-400 hover:text-white hover:border-blue-500/50"
                } border border-gray-800 hover:border-blue-500/50`}
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, i) => (
            <button
              key={project.id}
              onClick={() => setSelectedProject(project.id)}
              className="project-card group text-left"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="relative h-48 rounded-lg overflow-hidden bg-gray-900 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 mb-4 group-hover:scale-[1.02]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-white font-bold text-lg mb-2 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm line-clamp-2 mb-3">
                {project.shortDesc}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div
          className="modal-overlay fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 pt-20"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="modal-content max-w-2xl w-full max-h-[90vh] overflow-y-auto bg-gray-900 border border-gray-800 rounded-2xl p-6 md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="float-right p-1 hover:bg-gray-800 rounded-lg transition-colors text-gray-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>

            {(() => {
              const p = projects.find((p) => p.id === selectedProject);
              return p ? (
                <>
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-64 object-cover rounded-lg mb-6"
                  />
                  <h2 className="text-3xl font-black text-white mb-3">
                    {p.title}
                  </h2>
                  <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                    {p.description}
                  </p>

                  <div className="mb-6">
                    <h3 className="text-white font-bold text-lg mb-3">
                      Technologies
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={p.github}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105"
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </a>
                    {p.live && (
                      <a
                        href={p.live}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </>
              ) : null;
            })()}
          </div>
        </div>
      )}
    </section>
  );
}
