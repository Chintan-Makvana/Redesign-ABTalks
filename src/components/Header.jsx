import React, { useState } from 'react';
import { 
  Flame, 
  Trophy, 
  Bell, 
  Search, 
  Sparkles, 
  User, 
  ChevronDown, 
  Zap, 
  Briefcase, 
  Award,
  Globe,
  Radio
} from 'lucide-react';

export default function Header({ activeTab, setActiveTab, userXP, userStreak, userRank, userRole, setUserRole }) {
  const [showNotifications, setShowNotifications] = useState(false);

  const notifications = [
    { id: 1, title: '🔥 Daily Streak Active!', time: '2h ago', desc: 'Day 25 prompt is now live: Build an MCP Server with Custom Tools.' },
    { id: 2, title: '🚀 Vibe Code Hackathon Submission Open', time: '4h ago', desc: 'Only 32 hours remaining to submit your AI project pitch.' },
    { id: 3, title: '⚡ Recruiter View Alert', time: '1d ago', desc: '3 hiring partners viewed your verified proof-of-work portfolio.' }
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#090d16]/80 backdrop-blur-xl">
      {/* Top Banner for Live Hackathon */}
      <div className="bg-gradient-to-r from-violet-900/80 via-indigo-900/80 to-purple-900/80 border-b border-violet-500/20 px-4 py-1.5 text-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-semibold text-emerald-400 uppercase tracking-wider text-[11px]">LIVE EVENT</span>
            <span className="text-gray-300">|</span>
            <span className="text-white font-medium">Vibe Code Hackathon 48H</span>
            <span className="hidden md:inline text-violet-200">· $10,000 in Prizes & Hiring Fast-Track</span>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={() => setActiveTab('hackathon')}
              className="px-2.5 py-0.5 rounded-full bg-violet-500/20 hover:bg-violet-500/40 text-violet-300 border border-violet-500/30 text-[11px] font-medium transition-all flex items-center gap-1"
            >
              <Zap className="w-3 h-3 text-amber-400" />
              Go to Hackathon Arena
            </button>
            <div className="hidden sm:flex items-center gap-1 text-gray-400 text-[11px]">
              <Radio className="w-3 h-3 text-emerald-400" />
              <span>1,420 Builders Active</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* Logo & Brand */}
          <div className="flex items-center gap-6">
            <div 
              className="cursor-pointer flex items-center gap-2 group" 
              onClick={() => setActiveTab('streak')}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-600 via-indigo-600 to-cyan-400 p-[1.5px] shadow-lg shadow-violet-500/20">
                <div className="w-full h-full bg-[#0d121f] rounded-[10.5px] flex items-center justify-center font-bold text-xl tracking-tight">
                  <span className="text-violet-400 group-hover:scale-110 transition-transform">A</span>
                  <span className="text-white">B</span>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-lg tracking-tight text-white font-display">ABTalks</span>
                  <span className="px-1.5 py-0.2 rounded text-[10px] font-bold bg-violet-500/20 text-violet-300 border border-violet-500/30">HQ</span>
                </div>
                <span className="text-[10px] text-gray-400 tracking-wide font-medium">Build in Public Platform</span>
              </div>
            </div>

            {/* Mode Switcher: Builder vs Recruiter */}
            <div className="hidden lg:flex items-center p-1 bg-white/5 border border-white/10 rounded-lg text-xs">
              <button
                onClick={() => setUserRole('builder')}
                className={`px-3 py-1 rounded-md font-medium transition-all ${
                  userRole === 'builder' 
                    ? 'bg-violet-600 text-white shadow-sm' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Builder View
              </button>
              <button
                onClick={() => {
                  setUserRole('recruiter');
                  setActiveTab('recruiter');
                }}
                className={`px-3 py-1 rounded-md font-medium transition-all flex items-center gap-1.5 ${
                  userRole === 'recruiter' || activeTab === 'recruiter'
                    ? 'bg-emerald-600 text-white shadow-sm' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Briefcase className="w-3 h-3" />
                Recruiter Portal
              </button>
            </div>
          </div>

          {/* User Stats & Badges */}
          <div className="flex items-center gap-3">
            {/* Streak Counter */}
            <div 
              onClick={() => setActiveTab('streak')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 cursor-pointer hover:bg-amber-500/20 transition-all shadow-sm"
              title="Current Daily Streak"
            >
              <Flame className="w-4 h-4 text-amber-400 fill-amber-400 animate-pulse" />
              <span className="font-bold text-sm">{userStreak} Days</span>
            </div>

            {/* XP Level Badge */}
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-violet-500/10 border border-violet-500/30 text-violet-300">
              <Trophy className="w-4 h-4 text-violet-400" />
              <span className="font-bold text-sm">{userXP} XP</span>
              <span className="text-[10px] bg-violet-400/20 px-1.5 py-0.5 rounded text-violet-300 font-semibold">{userRank}</span>
            </div>

            {/* Notifications Toggle */}
            <div className="relative">
              <button 
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative p-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-all"
              >
                <Bell className="w-4 h-4" />
                <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-violet-500"></span>
              </button>

              {/* Notifications Dropdown */}
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 rounded-2xl glass-panel border border-white/15 p-4 shadow-2xl z-50 animate-in fade-in slide-in-from-top-2">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <span className="font-bold text-sm text-white">Notifications</span>
                    <span className="text-xs text-violet-400 cursor-pointer hover:underline">Mark all read</span>
                  </div>
                  <div className="mt-3 space-y-3 max-h-64 overflow-y-auto">
                    {notifications.map(n => (
                      <div key={n.id} className="p-2.5 rounded-xl bg-white/5 border border-white/5 hover:border-violet-500/30 transition-all">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-semibold text-white">{n.title}</span>
                          <span className="text-[10px] text-gray-400">{n.time}</span>
                        </div>
                        <p className="mt-1 text-xs text-gray-300">{n.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* User Profile Avatar */}
            <div className="flex items-center gap-2 pl-2 border-l border-white/10">
              <div className="relative cursor-pointer group">
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" 
                  alt="User Avatar" 
                  className="w-9 h-9 rounded-full object-cover ring-2 ring-violet-500/50 group-hover:ring-violet-400 transition-all"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-[#090d16]"></span>
              </div>
              <div className="hidden xl:flex flex-col text-left">
                <span className="text-xs font-bold text-white">Ananya Sharma</span>
                <span className="text-[10px] text-gray-400">IIT Kanpur · AI Cohort</span>
              </div>
            </div>

          </div>
        </div>

        {/* Sub-Navigation Tabs */}
        <div className="flex items-center gap-1 overflow-x-auto no-scrollbar py-2 border-t border-white/5">
          <button
            onClick={() => setActiveTab('hackathon')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
              activeTab === 'hackathon'
                ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/25'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Zap className="w-4 h-4 text-amber-400" />
            Vibe Code Hackathon (48H)
            <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-rose-500/20 text-rose-300 font-bold border border-rose-500/30 animate-pulse">LIVE</span>
          </button>

          <button
            onClick={() => setActiveTab('streak')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
              activeTab === 'streak'
                ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/25'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Flame className="w-4 h-4 text-amber-400" />
            60-Day Streak Matrix
          </button>

          <button
            onClick={() => setActiveTab('showcase')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
              activeTab === 'showcase'
                ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/25'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Trophy className="w-4 h-4 text-cyan-400" />
            Project Showcase & Leaderboard
          </button>

          <button
            onClick={() => setActiveTab('ai-roadmap')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
              activeTab === 'ai-roadmap'
                ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/25'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Sparkles className="w-4 h-4 text-emerald-400" />
            31-Day AI Chatbot Cohort
          </button>

          <button
            onClick={() => setActiveTab('recruiter')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
              activeTab === 'recruiter'
                ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-500/25'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Briefcase className="w-4 h-4 text-emerald-400" />
            Recruiter Talent Hub
          </button>
        </div>
      </div>
    </header>
  );
}
