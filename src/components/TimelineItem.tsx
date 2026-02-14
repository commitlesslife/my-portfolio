import { Calendar, Building2 } from 'lucide-react';

interface TimelineProps {
  year: string;
  title: string;
  organization: string;
  description: string;
  tags: string[];
  isLast?: boolean; // To hide the connecting line for the last item
}

export default function TimelineItem({ year, title, organization, description, tags, isLast }: TimelineProps) {
  return (
    <div className="flex gap-4 md:gap-8 group">
      
      {/* 1. THE DATE COLUMN (Left) */}
      <div className="flex flex-col items-center">
        <div className="w-12 text-sm font-mono text-cyan-400 text-right pt-1 hidden md:block">
          {year}
        </div>
        {/* The Dot */}
        <div className="w-3 h-3 bg-cyan-500 rounded-full mt-2 relative z-10 group-hover:scale-125 transition-transform shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
        {/* The Line */}
        {!isLast && (
          <div className="w-0.5 bg-slate-800 flex-grow my-2 group-hover:bg-slate-700 transition-colors"></div>
        )}
      </div>

      {/* 2. THE CONTENT CARD (Right) */}
      <div className="pb-12 flex-1">
        {/* Mobile Date (Visible only on small screens) */}
        <span className="md:hidden text-xs font-mono text-cyan-400 mb-1 block">
          {year}
        </span>
        
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:border-cyan-500/30 transition-colors shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
            <h3 className="text-xl font-bold text-slate-100">{title}</h3>
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <Building2 size={14} />
              {organization}
            </div>
          </div>
          
          <p className="text-slate-400 leading-relaxed mb-4 text-sm md:text-base">
            {description}
          </p>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="text-xs font-medium px-2 py-1 bg-slate-800 text-slate-300 rounded border border-slate-700/50">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
