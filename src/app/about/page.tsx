import Navbar from '@/components/Navbar';
import TimelineItem from '@/components/TimelineItem';
import { TIMELINE, PROFILE } from '@/data/portfolio';
import { User, BookOpen, Code, Heart } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200">
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 pt-32 pb-20">
        
        {/* SECTION 1: THE BIO */}
        <section className="mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-8">
            About Me
          </h1>
          
          <div className="grid md:grid-cols-[2fr_1fr] gap-12">
            {/* Text Content */}
            <div className="space-y-6 text-slate-400 leading-7">
              <p>
                Hello! I'm <span className="text-cyan-400 font-medium">{PROFILE.name}</span>. 
                My journey into tech started when I first modded GTA V scripts, realizing that code 
                could control worlds. Now, I'm a Computer Science undergraduate focused on 
                <strong className="text-slate-200"> building secure, scalable systems</strong>.
              </p>
              <p>
                I don't just write code; I solve problems. Whether it's optimizing a C++ algorithm 
                to run 10ms faster or designing a secure login system for a hackathon project, 
                I love the engineering challenges behind the software.
              </p>
              <p>
                When I'm not coding, you can find me solving calculus problems for fun (yes, really), 
                playing open-world RPGs, or exploring the latest in Linux security.
              </p>
            </div>

            {/* Quick Stats Box */}
            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 h-fit">
              <h3 className="text-slate-100 font-bold mb-4 flex items-center gap-2">
                <Heart className="text-cyan-400" size={18} /> Interests
              </h3>
              <ul className="space-y-3 text-sm text-slate-400">
                <li className="flex items-center gap-2">
                  <Code size={16} className="text-cyan-600" /> Low-level Programming
                </li>
                <li className="flex items-center gap-2">
                  <User size={16} className="text-cyan-600" /> Cybersecurity
                </li>
                <li className="flex items-center gap-2">
                  <BookOpen size={16} className="text-cyan-600" /> Linear Algebra
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 2: THE TIMELINE */}
        <section>
          <div className="flex items-center gap-4 mb-12">
            <span className="text-2xl font-bold text-slate-100">Education & Experience</span>
            <div className="h-[1px] bg-slate-800 flex-grow"></div>
          </div>

          <div className="max-w-3xl mx-auto">
            {TIMELINE.map((item, index) => (
              <TimelineItem 
                key={item.id}
                year={item.year}
                title={item.title}
                organization={item.organization}
                description={item.description}
                tags={item.tags}
                isLast={index === TIMELINE.length - 1} // Logic to hide line for last item
              />
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
