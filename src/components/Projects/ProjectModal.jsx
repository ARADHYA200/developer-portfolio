import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Star } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { useEffect } from "react";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEsc);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={onClose}
          aria-hidden="true"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10 bg-[#0a0f1e] shadow-2xl"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>

          <div className="w-full bg-[#111827] flex items-center justify-center">
            <img
              src={project.image}
              alt={project.title}
              className="w-full max-h-[500px] object-contain"
            />
          </div>

          <div className="p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              {project.featured && (
                <span className="flex items-center gap-1 rounded-full bg-yellow-500/20 text-yellow-400 px-3 py-1 text-xs font-semibold">
                  <Star size={14} />
                  Featured
                </span>
              )}
              <span className="rounded-full bg-blue-600/20 text-blue-400 px-3 py-1 text-xs font-semibold">
                {project.category}
              </span>
            </div>

            <h2 id="project-modal-title" className="text-2xl sm:text-3xl font-bold">
              {project.title}
            </h2>

            <p className="mt-4 text-gray-400 leading-relaxed">{project.description}</p>

            <div className="mt-6">
              <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-3">
                Key Features
              </h3>
              <ul className="space-y-2">
                {project.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-gray-400 text-sm sm:text-base">
                    <span className="text-cyan-400 shrink-0">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-3">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1.5 text-sm text-cyan-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center gap-2"
              >
                <SiGithub size={18} />
                View on GitHub
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2"
              >
                <ExternalLink size={18} />
                Live Demo
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
