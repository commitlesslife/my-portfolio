import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PROJECTS, Project } from '@/data/portfolio';
import { ArrowLeft, Github, ExternalLink, Code2, Cpu, Layers } from 'lucide-react';

// 1. This function tells Next.js which pages to pre-build (SSG)
// This makes your site blaze fast because it's not building pages on the fly.
export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    id: project.id,
  }));
}

// 2. The Page Component
export default function ProjectPage({ params }: { params: { id: string } }) {
  // Find the specific project data based on the URL ID
  const project = PROJECTS.find((p) => p.id === params.id);

  // If the ID doesn't exist in our data, show a 404
  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 selection:bg-cyan-500/30 pb-20">
      
      {/* HEADER / HERO SECTION */}
      <section className="bg-slate-900 border-b border-slate-800 pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/#projects" 
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-mono text-sm mb-8 transition-colors"
          >
            <ArrowLeft size={16} /> Back to Portfolio
          </Link>
          
          <h1 className="text-4xl md:text-6xl font-bold text-slate-100 mb-6 leading-tight">
            {project.title}
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
            {project.tagline}
          </p>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-8">
            <a href={project.github} target="_blank" className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition border border-slate-700">
              <Github size={18} /> Source Code
            </a>
            {project.live && (
              <a href={project.live} target="_blank" className="flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg transition font-medium shadow-lg shadow-cyan-900/20">
                <ExternalLink size={18} /> Live Demo
              </a>
            )}
          </div>
        </div>
      </section>

      {/* CONTENT GRID */}
      <div className="max-w-4xl mx-auto px-6 py-16 grid md:grid-cols-[2fr_1fr] gap-12">
        
        {/* LEFT COLUMN: The Story */}
        <div className="space-y-12">
          
          {/* The Challenge */}
          <section>
            <h2 className="flex items-center gap-3 text-2xl font-bold text-slate-100 mb-4">
              <Layers className="text-cyan-400" /> The Challenge
            </h2>
            <div className="prose prose-invert prose-slate max-w-none text-slate-400 leading-7">
              {project.challenge}
            </div>
          </section>

          {/* The Solution */}
          <section>
            <h2 className="flex items-center gap-3 text-2xl font-bold text-slate-100 mb-4">
              <Code2 className="text-cyan-400" /> The Solution
            </h2>
            <div className="prose prose-invert prose-slate max-w-none text-slate-400 leading-7">
              {project.solution}
            </div>
          </section>

          {/* Key Features List */}
          <section>
             <h2 className="flex items-center gap-3 text-2xl font-bold text-slate-100 mb-4">
               <Cpu className="text-cyan-400" /> Key Features
             </h2>
             <ul className="space-y-3">
               {project.features.map((feature, i) => (
                 <li key={i} className="flex gap-3 text-slate-400">
                   <span className="text-cyan-500 mt-1">▹</span>
                   {feature}
                 </li>
               ))}
             </ul>
          </section>
        </div>

        {/* RIGHT COLUMN: The Specs */}
        <div className="space-y-8">
          
          {/* Tech Stack Card */}
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
            <h3 className="text-sm font-mono text-slate-500 uppercase tracking-wider mb-4">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="px-3 py-1 bg-cyan-950/30 text-cyan-300 text-sm border border-cyan-900/50 rounded-full">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Project Stats (Optional Placeholder) */}
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
            <h3 className="text-sm font-mono text-slate-500 uppercase tracking-wider mb-4">Project Type</h3>
            <p className="text-slate-300">Full Stack / Academic</p>
          </div>

        </div>
      </div>
    </main>
  );
}
