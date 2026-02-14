'use client'; // This directive is required for using useState

import { useState } from 'react';
import { Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

export default function ContactForm() {
  // State Management
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Talking to our Backend API
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Failed to send');

      setStatus('success');
      setFormData({ name: '', email: '', message: '' }); // Reset form
      
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl max-w-lg mx-auto shadow-2xl">
      
      {/* Success Message */}
      {status === 'success' ? (
        <div className="text-center py-10">
          <CheckCircle className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
          <p className="text-slate-400">Thanks for reaching out. I'll get back to you soon.</p>
          <button 
            onClick={() => setStatus('idle')}
            className="mt-6 text-cyan-400 hover:text-cyan-300 underline underline-offset-4"
          >
            Send another message
          </button>
        </div>
      ) : (
        /* The Form */
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Name</label>
            <input
              type="text"
              id="name"
              required
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-cyan-500 transition-colors"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email</label>
            <input
              type="email"
              id="email"
              required
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-cyan-500 transition-colors"
              placeholder="student@university.edu"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
            <textarea
              id="message"
              required
              rows={4}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
              placeholder="Let's build something securely..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>

          {status === 'error' && (
            <div className="flex items-center gap-2 text-red-400 bg-red-400/10 p-3 rounded-lg text-sm">
              <AlertCircle size={16} /> Something went wrong. Please try again.
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? (
              <>
                <Loader2 className="animate-spin" /> Sending...
              </>
            ) : (
              <>
                Send Message <Send size={18} />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
