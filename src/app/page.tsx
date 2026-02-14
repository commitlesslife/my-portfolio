import Navbar from '@/components/Navbar';
import ProjectCard from '@/components/ProjectCard';
import { PROFILE, SKILLS, PROJECTS } from '@/data/portfolio';
import { Mail, Github, Linkedin, Terminal } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500/30">
      <Navbar />

      {/* HERO SECTION */}
      <section className="pt-32 pb-20 px-4 max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <p className="text-cyan-400 font-mono mb-4 text-sm tracking-wide">
            Hi, my name is
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-100 mb-6 tracking-tight">
            {PROFILE.name}.
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-400 mb-8">
            I like to BUILD.
          </h2>
          <p className="text-lg text-slate-400 max-w-xl leading-relaxed mb-10">
            {PROFILE.bio}
          </p>
          <div className="flex gap-4">
            <a href="#projects" className="px-6 py-3 border border-cyan-400 text-cyan-400 rounded hover:bg-cyan-400/10 transition font-mono text-sm">
              Check out my work
            </a>
            <a href={PROFILE.socials.github} target="_blank" className="flex items-center gap-2 px-6 py-3 text-slate-300 hover:text-white transition font-mono text-sm">
              <Github size={18} /> GitHub
            </a>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="py-20 px-4 max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-2xl font-bold text-slate-100">01. Technical Skills</span>
          <div className="h-[1px] bg-slate-800 flex-grow max-w-xs"></div>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          {SKILLS.map((skillGroup) => (
            <div key={skillGroup.category}>
              <h3 className="text-cyan-400 font-mono mb-4 border-b border-slate-800 pb-2">
                {skillGroup.category}
              </h3>
              <ul className="space-y-2">
                {skillGroup.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-slate-400 text-sm">
                    <span className="text-cyan-500">▹</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-20 px-4 max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-2xl font-bold text-slate-100">02. Selected Projects</span>
          <div className="h-[1px] bg-slate-800 flex-grow max-w-xs"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <ProjectCard 
              key={project.id}
              title={project.title}
              description={project.tagline}
              tech={project.tech}
              github={project.github}
            />
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 px-4">
  <div className="max-w-4xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
        Get In Touch
      </h2>
      <p className="text-slate-400 max-w-lg mx-auto">
        Whether you have a question about my projects, a job opportunity, or just want to say hi, my inbox is open!
      </p>
    </div>

    {/* Drop the component here */}
    <ContactForm />
    
  </div>
</section>

      {/* FOOTER */}
      <footer className="py-8 text-center text-slate-500 text-sm font-mono">
        <p>Designed & Built with Next.js & Tailwind</p>
      </footer>
    </main>
  );
}
