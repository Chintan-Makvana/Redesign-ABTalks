import React, { useState } from 'react';
import { 
  Trophy, 
  ThumbsUp, 
  ExternalLink, 
  Search, 
  Filter, 
  Sparkles, 
  Award, 
  CheckCircle2, 
  UserCheck, 
  Flame, 
  Video,
  Share2,
  Code
} from 'lucide-react';

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" {...props}>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

export default function LeaderboardShowcase({ projects, setProjects }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

  const tracks = ['All', 'Vibe Code Hackathon', '60-Day Coding Challenge', '31-Day AI Cohort', 'Claude Track'];

  const handleUpvote = (id, e) => {
    e.stopPropagation();
    setProjects(prev => prev.map(p => p.id === id ? { ...p, upvotes: p.upvotes + 1 } : p));
  };

  const filteredProjects = projects.filter(p => {
    const matchesFilter = activeFilter === 'All' || p.track === activeFilter;
    const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          p.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          p.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      
      {/* Header Banner */}
      <div className="glass-panel border-white/10 rounded-3xl p-6 sm:p-8 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
              <Trophy className="w-3.5 h-3.5 text-amber-400" />
              <span>Public Proof-of-Work Gallery</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white mt-2 font-display">
              Leaderboard & Project Showcase
            </h1>
            <p className="text-gray-300 text-xs sm:text-base mt-1 max-w-2xl">
              Explore real-world projects built by college students & engineers across India. Upvote your favorite builds and see recruiter-verified portfolios.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-5 py-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-center">
              <span className="block text-2xl font-extrabold text-cyan-400 font-mono">540+</span>
              <span className="text-[10px] text-gray-400 uppercase font-bold">Shipped Builds</span>
            </div>
            <div className="px-5 py-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-center">
              <span className="block text-2xl font-extrabold text-amber-400 font-mono">100+</span>
              <span className="text-[10px] text-gray-400 uppercase font-bold">Recruiter Reviews</span>
            </div>
          </div>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
          
          {/* Track Filters */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
            {tracks.map(t => (
              <button
                key={t}
                onClick={() => setActiveFilter(t)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  activeFilter === t
                    ? 'bg-violet-600 text-white shadow-lg shadow-violet-500/30'
                    : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
            <input 
              type="text"
              placeholder="Search project or builder..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-violet-500"
            />
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((proj, index) => (
          <div 
            key={proj.id}
            onClick={() => setSelectedProject(proj)}
            className="glass-panel glass-panel-hover rounded-3xl p-6 space-y-4 flex flex-col justify-between cursor-pointer group relative overflow-hidden"
          >
            {/* Rank Tag for Top 3 */}
            {index < 3 && activeFilter === 'All' && !searchTerm && (
              <div className="absolute top-0 right-0 px-3 py-1 bg-gradient-to-l from-amber-500 to-amber-600 text-black font-extrabold text-[11px] rounded-bl-xl shadow-md">
                RANK #{index + 1}
              </div>
            )}

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-violet-500/20 text-violet-300 border border-violet-500/30">
                  {proj.track}
                </span>
                {proj.verifiedProof && (
                  <span className="flex items-center gap-1 text-[10px] text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/30">
                    <CheckCircle2 className="w-3 h-3" /> Verified Build
                  </span>
                )}
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

            {/* Author Footer & Upvote */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <img src={proj.avatar} alt={proj.author} className="w-8 h-8 rounded-full object-cover ring-2 ring-violet-500/30" />
                <div>
                  <span className="block text-xs font-bold text-white truncate max-w-[110px]">{proj.author}</span>
                  <span className="text-[10px] text-gray-400">Builder</span>
                </div>
              </div>

              <button
                onClick={(e) => handleUpvote(proj.id, e)}
                className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-violet-500/20 text-gray-300 hover:text-violet-300 border border-white/10 hover:border-violet-500/40 text-xs font-bold transition-all flex items-center gap-1.5"
              >
                <ThumbsUp className="w-3.5 h-3.5 text-amber-400" />
                <span>{proj.upvotes}</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Selected Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
          <div className="glass-panel border-white/15 rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-violet-500/20 text-violet-300 border border-violet-500/30">
                  {selectedProject.track}
                </span>
                <h2 className="text-2xl font-bold text-white mt-1">
                  {selectedProject.title}
                </h2>
              </div>
              <button onClick={() => setSelectedProject(null)} className="text-gray-400 hover:text-white font-bold text-lg">✕</button>
            </div>

            <div className="space-y-4">
              <p className="text-sm text-gray-300 leading-relaxed">
                {selectedProject.tagline}
              </p>

              {/* Author info & Verified Proof */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={selectedProject.avatar} alt={selectedProject.author} className="w-10 h-10 rounded-full object-cover ring-2 ring-violet-500/40" />
                  <div>
                    <span className="block font-bold text-white text-sm">{selectedProject.author}</span>
                    <span className="text-xs text-emerald-400 font-medium">✔ ABTalks Verified Builder</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button 
                    onClick={(e) => handleUpvote(selectedProject.id, e)}
                    className="px-4 py-2 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30 font-bold text-xs flex items-center gap-1.5"
                  >
                    <ThumbsUp className="w-4 h-4 text-amber-400" />
                    Upvote ({selectedProject.upvotes})
                  </button>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">AI Stack & Tools</span>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.aiTools?.map((t, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* External Links */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-3">
                {selectedProject.github && (
                  <a 
                    href={selectedProject.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex-1 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-xs border border-white/10 flex items-center justify-center gap-2"
                  >
                    <GithubIcon /> View GitHub Source Code
                  </a>
                )}
                {selectedProject.demo && (
                  <a 
                    href={selectedProject.demo} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:brightness-110 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-violet-500/25"
                  >
                    <ExternalLink className="w-4 h-4" /> Open Live Application Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
