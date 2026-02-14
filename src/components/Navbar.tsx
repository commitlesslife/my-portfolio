import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl text-slate-100 hover:text-cyan-400 transition">
          dev<span className="text-cyan-400">.student</span>
        </Link>
        
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
          <Link href="#about" className="hover:text-cyan-400 transition">About</Link>
          <Link href="#skills" className="hover:text-cyan-400 transition">Skills</Link>
          <Link href="#projects" className="hover:text-cyan-400 transition">Projects</Link>
          <Link href="#contact" className="hover:text-cyan-400 transition">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
