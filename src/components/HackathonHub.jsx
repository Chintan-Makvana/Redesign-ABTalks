import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  Clock, 
  Users, 
  Send, 
  ExternalLink, 
  Video, 
  Sparkles, 
  Award, 
  MessageSquare, 
  CheckCircle2, 
  Plus, 
  Code, 
  Radio, 
  FileText,
  AlertCircle,
  TrendingUp,
  Share2
} from 'lucide-react';

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" {...props}>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

export default function HackathonHub({ projects, setProjects, onAwardXP }) {
  // Timer State for 48 Hours
  const [timeLeft, setTimeLeft] = useState({ hours: 32, minutes: 44, seconds: 12 });
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [showTeamModal, setShowTeamModal] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  // Form State
  const [form, setForm] = useState({
    title: '',
    tagline: '',
    github: '',
    demo: '',
    video: '',
    aiTools: 'Claude 3.7 Sonnet, Antigravity AI, Cursor',
    teamName: 'Team Neural Craft'
  });

  // Team state
  const [teamMembers, setTeamMembers] = useState([
    { name: 'Ananya Sharma', role: 'Fullstack & AI Lead', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80' },
    { name: 'Rohan Mehta', role: 'RAG & Vector DBs', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80' }
  ]);

  const [inviteEmail, setInviteEmail] = useState('');

  // Countdown timer interval
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmitProject = (e) => {
    e.preventDefault();
    if (!form.title || !form.github) return;

    const newProj = {
      id: Date.now(),
      title: form.title,
      tagline: form.tagline || 'AI-Powered hackathon solution built during ABTalks Vibe Code 48H.',
      author: 'Team Neural Craft',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
      track: 'Vibe Code Hackathon',
      github: form.github,
      demo: form.demo || 'https://vibe-demo.abtalks.in',
      upvotes: 1,
      aiTools: form.aiTools.split(','),
      verifiedProof: true,
      timeAgo: 'Just now'
    };

    setProjects([newProj, ...projects]);
    setHasSubmitted(true);
    setShowSubmitModal(false);
    onAwardXP(500, 'Submitted Hackathon Project');
  };

  const handleAddMember = () => {
    if (!inviteEmail || teamMembers.length >= 3) return;
    setTeamMembers([...teamMembers, { name: inviteEmail.split('@')[0], role: 'Contributor', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80' }]);
    setInviteEmail('');
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      
      {/* Hero Banner with Countdown & Live Status */}
      <div className="relative overflow-hidden rounded-3xl border border-violet-500/30 bg-gradient-to-br from-violet-950/90 via-[#0d1326] to-[#090d16] p-6 sm:p-10 shadow-2xl">
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/3 -mb-12 w-80 h-80 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Flagship ABTalks AI Hackathon</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-display">
              Vibe Code Hackathon <span className="text-gradient-violet font-extrabold">48H</span>
            </h1>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-xl">
              Build and ship anything using Generative AI, RAG, or Autonomous Agents in 48 hours. Compete solo or in teams of up to 3 for cash prizes & fast-track recruiter referrals.
            </p>

            {/* Stage Progress Stepper */}
            <div className="pt-2 grid grid-cols-4 gap-2 text-center text-xs">
              <div className="p-2 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-semibold">
                1. Registrations
              </div>
              <div className="p-2 rounded-xl bg-violet-600 text-white font-bold ring-2 ring-violet-400 shadow-lg shadow-violet-500/30 animate-pulse">
                2. Hacking Live 🔥
              </div>
              <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-gray-400">
                3. Submissions
              </div>
              <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-gray-400">
                4. Live Demos
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <button
                onClick={() => setShowSubmitModal(true)}
                className="px-6 py-3 rounded-2xl bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white font-bold text-sm shadow-xl shadow-violet-500/30 hover:scale-[1.02] transition-all flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                {hasSubmitted ? 'Update Submitted Project' : 'Submit Hackathon Project'}
              </button>

              <button
                onClick={() => setShowTeamModal(true)}
                className="px-5 py-3 rounded-2xl bg-white/5 border border-white/15 hover:bg-white/10 text-white font-semibold text-sm transition-all flex items-center gap-2"
              >
                <Users className="w-4 h-4 text-violet-400" />
                Manage Team ({teamMembers.length}/3)
              </button>
            </div>
          </div>

          {/* Countdown Clock Display */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
            <div className="glass-panel border-white/15 rounded-3xl p-6 w-full max-w-sm text-center space-y-4 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-full blur-xl"></div>
              
              <div className="flex items-center justify-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <Clock className="w-4 h-4" />
                <span>Hacking Time Remaining</span>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-3">
                  <span className="block text-3xl font-extrabold text-white font-mono">{String(timeLeft.hours).padStart(2, '0')}</span>
                  <span className="text-[10px] text-gray-400 uppercase font-semibold">Hours</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-3">
                  <span className="block text-3xl font-extrabold text-violet-400 font-mono">{String(timeLeft.minutes).padStart(2, '0')}</span>
                  <span className="text-[10px] text-gray-400 uppercase font-semibold">Mins</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-3">
                  <span className="block text-3xl font-extrabold text-cyan-400 font-mono">{String(timeLeft.seconds).padStart(2, '0')}</span>
                  <span className="text-[10px] text-gray-400 uppercase font-semibold">Secs</span>
                </div>
              </div>

              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-gray-300">
                <span>Total Prize Pool: <strong className="text-amber-400 font-bold">$10,000</strong></span>
                <span className="text-emerald-400 font-medium">Judges: Anil Bajpai + Guests</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid: Live Announcements & Team Status */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Live Announcements & Mentors */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Radio className="w-5 h-5 text-rose-500 animate-pulse" />
              Live Hackathon Stream & Updates
            </h2>
            <span className="text-xs text-violet-400 cursor-pointer hover:underline flex items-center gap-1">
              Join Discord Channel <ExternalLink className="w-3 h-3" />
            </span>
          </div>

          <div className="space-y-4">
            <div className="glass-panel border-white/10 rounded-2xl p-4 flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-violet-500/20 text-violet-400 border border-violet-500/30">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-sm text-white">Anil Bajpai (Host)</span>
                  <span className="px-2 py-0.5 rounded text-[10px] bg-violet-500/20 text-violet-300 font-semibold">ANNOUNCEMENT</span>
                  <span className="text-[11px] text-gray-400">30 mins ago</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  "Friendly reminder: Your submission MUST include a working GitHub repository and a 2-minute Loom video pitch demonstrating the AI components (RAG / Agent workflow / API calls). Good luck builders!"
                </p>
              </div>
            </div>

            <div className="glass-panel border-white/10 rounded-2xl p-4 flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                <Users className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-sm text-white">Mentor Office Hours Live</span>
                  <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/20 text-emerald-300 font-semibold">HELP DESK</span>
                  <span className="text-[11px] text-gray-400">1h ago</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  Stuck with Anthropic Claude API rate limits or Vector embeddings? AI Mentors are active in Voice Channel #hack-help for 1-on-1 debugging.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Your Team Card */}
        <div className="glass-panel border-white/10 rounded-3xl p-6 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <h3 className="font-bold text-white text-base flex items-center gap-2">
              <Users className="w-4 h-4 text-violet-400" />
              Your Hackathon Team
            </h3>
            <span className="text-xs text-violet-300 bg-violet-500/20 px-2 py-0.5 rounded-full font-medium">
              {teamMembers.length}/3 Members
            </span>
          </div>

          <div className="space-y-3">
            {teamMembers.map((m, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 rounded-2xl bg-white/5 border border-white/5">
                <div className="flex items-center gap-3">
                  <img src={m.avatar} alt={m.name} className="w-9 h-9 rounded-full object-cover ring-2 ring-violet-500/30" />
                  <div>
                    <span className="block text-xs font-bold text-white">{m.name}</span>
                    <span className="text-[10px] text-gray-400">{m.role}</span>
                  </div>
                </div>
                {idx === 0 && <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-semibold">Leader</span>}
              </div>
            ))}
          </div>

          {teamMembers.length < 3 && (
            <button
              onClick={() => setShowTeamModal(true)}
              className="w-full py-2.5 rounded-xl border border-dashed border-violet-500/40 text-violet-300 hover:bg-violet-500/10 text-xs font-semibold transition-all flex items-center justify-center gap-1.5"
            >
              <Plus className="w-4 h-4" />
              Invite Teammate (1 Slot Left)
            </button>
          )}
        </div>
      </div>

      {/* Submissions Showcase Feed */}
      <div className="space-y-4 pt-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-white">Live Submissions Stream</h2>
            <p className="text-xs text-gray-400">Explore projects shipped by fellow builders during this hackathon</p>
          </div>
          <span className="text-xs text-gray-400">{projects.length} Projects Shipped</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj) => (
            <div key={proj.id} className="glass-panel glass-panel-hover rounded-3xl p-5 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-violet-500/20 text-violet-300 border border-violet-500/30">
                    {proj.track}
                  </span>
                  <span className="text-[10px] text-gray-400">{proj.timeAgo}</span>
                </div>

                <div>
                  <h3 className="font-bold text-white text-lg group-hover:text-violet-400 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-gray-300 mt-1 line-clamp-2 leading-relaxed">
                    {proj.tagline}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {proj.aiTools?.map((tool, tIdx) => (
                    <span key={tIdx} className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 text-cyan-300 border border-white/10 font-mono">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img src={proj.avatar} alt={proj.author} className="w-6 h-6 rounded-full object-cover" />
                  <span className="text-xs text-gray-300 font-medium truncate max-w-[100px]">{proj.author}</span>
                </div>

                <div className="flex items-center gap-2">
                  {proj.github && (
                    <a href={proj.github} target="_blank" rel="noreferrer" className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white">
                      <GithubIcon />
                    </a>
                  )}
                  {proj.demo && (
                    <a href={proj.demo} target="_blank" rel="noreferrer" className="p-1.5 rounded-lg bg-violet-500/20 hover:bg-violet-500/40 text-violet-300">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Submission Studio Modal */}
      {showSubmitModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
          <div className="glass-panel border-white/15 rounded-3xl max-w-xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Send className="w-5 h-5 text-violet-400" />
                  Hackathon Project Submission
                </h3>
                <p className="text-xs text-gray-400">Publish your hackathon project to the ABTalks public showcase</p>
              </div>
              <button 
                onClick={() => setShowSubmitModal(false)}
                className="text-gray-400 hover:text-white text-lg font-bold"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmitProject} className="space-y-4 text-xs">
              <div>
                <label className="block text-gray-300 font-semibold mb-1">Project Title *</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Antigravity RAG Agent Hub"
                  value={form.title}
                  onChange={e => setForm({...form, title: e.target.value})}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-violet-500"
                />
              </div>

              <div>
                <label className="block text-gray-300 font-semibold mb-1">Short Tagline (One-liner) *</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Autonomous AI workflow agent for developer task execution."
                  value={form.tagline}
                  onChange={e => setForm({...form, tagline: e.target.value})}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-violet-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 font-semibold mb-1">GitHub Repository URL *</label>
                  <input 
                    type="url" 
                    required
                    placeholder="https://github.com/user/repo"
                    value={form.github}
                    onChange={e => setForm({...form, github: e.target.value})}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-violet-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 font-semibold mb-1">Live Demo / Deployed Link</label>
                  <input 
                    type="url" 
                    placeholder="https://my-app.vercel.app"
                    value={form.demo}
                    onChange={e => setForm({...form, demo: e.target.value})}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-violet-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 font-semibold mb-1">Loom / YouTube Pitch Video URL</label>
                <input 
                  type="url" 
                  placeholder="https://loom.com/share/..."
                  value={form.video}
                  onChange={e => setForm({...form, video: e.target.value})}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-violet-500"
                />
              </div>

              <div>
                <label className="block text-gray-300 font-semibold mb-1">AI Tools / Stack Used</label>
                <input 
                  type="text" 
                  placeholder="Claude 3.7, Antigravity, Cursor, Pinecone, Next.js"
                  value={form.aiTools}
                  onChange={e => setForm({...form, aiTools: e.target.value})}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-violet-500"
                />
              </div>

              <div className="p-3 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-300 flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-400 shrink-0" />
                <span>Submitting awards <strong>+500 XP</strong> & grants a <strong>Verified Hackathon Badge</strong> on your profile!</span>
              </div>

              <div className="pt-4 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowSubmitModal(false)}
                  className="px-4 py-2 rounded-xl bg-white/5 text-gray-300 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold hover:brightness-110 shadow-lg shadow-violet-500/30"
                >
                  Ship & Publish Project
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Team Management Modal */}
      {showTeamModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
          <div className="glass-panel border-white/15 rounded-3xl max-w-md w-full p-6 space-y-6 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <Users className="w-5 h-5 text-violet-400" />
                Manage Hackathon Team
              </h3>
              <button onClick={() => setShowTeamModal(false)} className="text-gray-400 hover:text-white">✕</button>
            </div>

            <div className="space-y-3 text-xs">
              <label className="block text-gray-300 font-semibold">Current Members ({teamMembers.length}/3)</label>
              {teamMembers.map((m, i) => (
                <div key={i} className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-2">
                    <img src={m.avatar} alt={m.name} className="w-7 h-7 rounded-full object-cover" />
                    <div>
                      <span className="block font-bold text-white">{m.name}</span>
                      <span className="text-[10px] text-gray-400">{m.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {teamMembers.length < 3 && (
              <div className="space-y-2 text-xs">
                <label className="block text-gray-300 font-semibold">Invite Member by Email</label>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="teammate@college.edu"
                    value={inviteEmail}
                    onChange={e => setInviteEmail(e.target.value)}
                    className="flex-1 px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none"
                  />
                  <button
                    onClick={handleAddMember}
                    className="px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-bold"
                  >
                    Add
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
