import { motion } from "framer-motion";
import { ExternalLink, Star, Eye } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { memo } from "react";

function ProjectCard({ project, onSelect }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -8 }}
      className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover-glow cursor-pointer"
      onClick={() => onSelect(project)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onSelect(project)}
      aria-label={`View details for ${project.title}`}
    >
      <div className="relative overflow-hidden">
        <div className="h-48 sm:h-56 bg-[#111827] flex items-center justify-center overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-contain transition duration-700 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent" />

        {project.featured && (
          <div className="absolute top-4 left-4 flex items-center gap-1.5 rounded-full bg-yellow-500 px-3 py-1.5 text-xs font-semibold text-black">
            <Star size={14} />
            Featured
          </div>
        )}

        <div className="absolute top-4 right-4 rounded-full bg-blue-600/90 backdrop-blur px-3 py-1.5 text-xs font-semibold">
          {project.category}
        </div>

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur">
            <Eye size={18} />
            <span className="text-sm font-medium">View Details</span>
          </div>
        </div>
      </div>

      <div className="p-5 sm:p-7">
        <h3 className="text-lg sm:text-xl font-bold">{project.title}</h3>
        <p className="mt-3 leading-relaxed text-gray-400 text-sm sm:text-base line-clamp-2">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-blue-500/30 bg-blue-500/10 px-2.5 py-1 text-xs text-cyan-300"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="rounded-full px-2.5 py-1 text-xs text-gray-500">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        <div className="mt-6 flex gap-3" onClick={(e) => e.stopPropagation()}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2.5 text-sm transition hover:bg-white/10"
            aria-label={`GitHub repository for ${project.title}`}
          >
            <SiGithub size={16} />
            GitHub
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm transition hover:bg-blue-500"
            aria-label={`Live demo for ${project.title}`}
          >
            <ExternalLink size={16} />
            Demo
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default memo(ProjectCard);
