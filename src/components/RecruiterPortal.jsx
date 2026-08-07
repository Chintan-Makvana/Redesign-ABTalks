import React, { useState } from 'react';
import { 
  Briefcase, 
  Search, 
  Flame, 
  Trophy, 
  CheckCircle2, 
  ExternalLink, 
  Mail, 
  Sparkles, 
  Award,
  ShieldCheck,
  Star,
  FileCode,
  Send
} from 'lucide-react';

export default function RecruiterPortal() {
  const [selectedRole, setSelectedRole] = useState('All');
  const [search, setSearch] = useState('');
  const [contactModalCandidate, setContactModalCandidate] = useState(null);
  const [sentMessage, setSentMessage] = useState(false);

  const candidates = [
    {
      id: 1,
      name: 'Ananya Sharma',
      role: 'Fullstack AI Engineer',
      college: 'IIT Kanpur',
      streak: 42,
      xp: 2850,
      hackathonRank: '1st Place',
      topProject: 'Antigravity RAG Agent Hub',
      skills: ['TypeScript', 'Next.js', 'Claude 3.7', 'Python', 'Vector DBs', 'MCP'],
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
      verified: true
    },
    {
      id: 2,
      name: 'Rohan Mehta',
      role: 'Backend & Data Engineer',
      college: 'BITS Pilani',
      streak: 38,
      xp: 2400,
      hackathonRank: 'Top 3',
      topProject: 'FastAPI Agent Orchestrator',
      skills: ['Python', 'FastAPI', 'Pinecone', 'Docker', 'RAG'],
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
      verified: true
    },
    {
      id: 3,
      name: 'Priya Verma',
      role: 'Frontend & Creative AI',
      college: 'DTU Delhi',
      streak: 60,
      xp: 3200,
      hackathonRank: 'Finalist',
      topProject: 'Interactive Canvas Generative UI',
      skills: ['React', 'Tailwind', 'Three.js', 'WebSockets', 'Prompt Eng'],
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80',
      verified: true
    },
    {
      id: 4,
      name: 'Devpal Singh',
      role: 'LLM & Systems Developer',
      college: 'IMS Noida',
      streak: 55,
      xp: 2980,
      hackathonRank: 'Winner',
      topProject: 'Autonomous Code Refactoring Agent',
      skills: ['C++', 'Python', 'LangChain', 'Ollama', 'CUDA'],
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
      verified: true
    }
  ];

  const handleSendInterview = (e) => {
    e.preventDefault();
    setSentMessage(true);
    setTimeout(() => {
      setSentMessage(false);
      setContactModalCandidate(null);
    }, 2000);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      
      {/* Recruiter Hero Header */}
      <div className="glass-panel border-emerald-500/30 rounded-3xl p-6 sm:p-8 space-y-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>ABTalks Hiring Network Partner Portal</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white font-display">
              Discover Talent with <span className="text-gradient-cyan">Verified Proof-of-Work</span>
            </h1>
            <p className="text-gray-300 text-xs sm:text-base max-w-2xl">
              Skip traditional resumes. Filter candidates who have proven consistency through 60-day coding streaks, shipped AI projects, and hackathon wins.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-5 py-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center">
              <span className="block text-2xl font-extrabold text-emerald-400 font-mono">100+</span>
              <span className="text-[10px] text-gray-400 uppercase font-bold">Hiring Partners</span>
            </div>
            <div className="px-5 py-3 rounded-2xl bg-violet-500/10 border border-violet-500/20 text-center">
              <span className="block text-2xl font-extrabold text-violet-400 font-mono">94%</span>
              <span className="text-[10px] text-gray-400 uppercase font-bold">Retention Rate</span>
            </div>
          </div>
        </div>
      </div>

      {/* Candidate List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {candidates.map(c => (
          <div key={c.id} className="glass-panel glass-panel-hover rounded-3xl p-6 space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <img src={c.avatar} alt={c.name} className="w-12 h-12 rounded-full object-cover ring-2 ring-emerald-500/50" />
                  <div>
                    <h3 className="font-bold text-white text-base flex items-center gap-1.5">
                      {c.name}
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 fill-emerald-400/20" />
                    </h3>
                    <span className="text-xs text-violet-300 font-semibold">{c.role}</span>
                    <span className="block text-[11px] text-gray-400">{c.college}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold">
                  <Flame className="w-3.5 h-3.5 fill-amber-400" />
                  <span>{c.streak} Day Streak</span>
                </div>
              </div>

              {/* Verified Achievements */}
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 space-y-1.5 text-xs">
                <div className="flex justify-between text-gray-300">
                  <span>Hackathon Achievement:</span>
                  <strong className="text-amber-400">{c.hackathonRank}</strong>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Featured Shipped Project:</span>
                  <strong className="text-white truncate max-w-[180px]">{c.topProject}</strong>
                </div>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-1.5">
                {c.skills.map((s, idx) => (
                  <span key={idx} className="px-2.5 py-0.5 rounded-lg bg-white/5 text-gray-300 border border-white/10 text-[10px] font-mono">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Recruiter Action */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-emerald-400 font-medium">Available for Hiring</span>
              <button
                onClick={() => setContactModalCandidate(c)}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:brightness-110 text-white font-bold text-xs shadow-lg shadow-emerald-500/25 flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5" /> Direct Interview Request
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Direct Contact Modal */}
      {contactModalCandidate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
          <div className="glass-panel border-white/15 rounded-3xl max-w-md w-full p-6 space-y-6 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div>
                <h3 className="font-bold text-white text-base">Send Hiring Request</h3>
                <p className="text-xs text-gray-400">To {contactModalCandidate.name} ({contactModalCandidate.role})</p>
              </div>
              <button onClick={() => setContactModalCandidate(null)} className="text-gray-400 hover:text-white font-bold">✕</button>
            </div>

            {sentMessage ? (
              <div className="p-6 text-center space-y-2">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
                <h4 className="font-bold text-white text-base">Interview Request Sent!</h4>
                <p className="text-xs text-gray-300">The candidate and ABTalks team have been notified via WhatsApp & Email.</p>
              </div>
            ) : (
              <form onSubmit={handleSendInterview} className="space-y-4 text-xs">
                <div>
                  <label className="block text-gray-300 font-semibold mb-1">Company / Hiring Partner Name</label>
                  <input 
                    type="text" 
                    required 
                    defaultValue="VibeTech AI Labs" 
                    className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 font-semibold mb-1">Role Title & Offer Details</label>
                  <input 
                    type="text" 
                    required 
                    defaultValue="Fullstack AI Engineer (Remote / Hybrid)" 
                    className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 font-semibold mb-1">Personal Note</label>
                  <textarea 
                    rows={3}
                    defaultValue="Hi! We were extremely impressed by your 60-day streak and your Antigravity RAG hackathon submission."
                    className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 text-xs"
                >
                  <Send className="w-4 h-4" /> Send Official Invite
                </button>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
