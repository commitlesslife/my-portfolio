import { Github, ExternalLink } from 'lucide-react';

interface ProjectProps {
  title: string;
  description: string;
  tech: string[];
  github: string;
}

export default function ProjectCard({ title, description, tech, github }: ProjectProps) {
  return (
    <div className="group relative bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-cyan-500/50 transition duration-300">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition">
          {title}
        </h3>
        <a href={github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white">
          <Github size={20} />
        </a>
      </div>
      
      <p className="text-slate-400 mb-6 text-sm leading-relaxed">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {tech.map((t) => (
          <span key={t} className="text-xs font-mono text-cyan-300 bg-cyan-950/30 px-2 py-1 rounded">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
