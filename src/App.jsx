import React, { useState } from 'react';
import Header from './components/Header';
import HackathonHub from './components/HackathonHub';
import StreakTracker from './components/StreakTracker';
import LeaderboardShowcase from './components/LeaderboardShowcase';
import RecruiterPortal from './components/RecruiterPortal';
import AIRoadmap from './components/AIRoadmap';

export default function App() {
  const [activeTab, setActiveTab] = useState('hackathon');
  const [userRole, setUserRole] = useState('builder');
  const [userXP, setUserXP] = useState(2450);
  const [userStreak, setUserStreak] = useState(25);
  const [userRank, setUserRank] = useState('Vibe Master');
  const [toastMessage, setToastMessage] = useState(null);

  // Default projects list
  const [projects, setProjects] = useState([
    {
      id: 101,
      title: 'Antigravity RAG Agent Hub',
      tagline: 'Autonomous AI workflow agent executing code analysis, RAG searches, and tool calls in real-time.',
      author: 'Ananya Sharma',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
      track: 'Vibe Code Hackathon',
      github: 'https://github.com/ananyasharma/antigravity-rag-hub',
      demo: 'https://antigravity-hub.vercel.app',
      upvotes: 42,
      aiTools: ['Claude 3.7', 'Antigravity AI', 'Pinecone', 'Next.js'],
      verifiedProof: true,
      timeAgo: '2h ago'
    },
    {
      id: 102,
      title: 'FastAPI Agent Orchestrator',
      tagline: 'Distributed multi-agent pipeline using LangGraph & Claude 3.5 Sonnet for automated PR reviews.',
      author: 'Rohan Mehta',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
      track: '60-Day Coding Challenge',
      github: 'https://github.com/rohan/agent-orchestrator',
      demo: 'https://fastapi-agents.demo.in',
      upvotes: 38,
      aiTools: ['FastAPI', 'LangGraph', 'ChromaDB', 'Python'],
      verifiedProof: true,
      timeAgo: '5h ago'
    },
    {
      id: 103,
      title: 'Interactive Canvas Generative UI',
      tagline: 'Dynamic React canvas component generating interactive dashboards on-the-fly from natural language.',
      author: 'Priya Verma',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80',
      track: '31-Day AI Cohort',
      github: 'https://github.com/priya/generative-ui-canvas',
      demo: 'https://gen-ui.abtalks.in',
      upvotes: 29,
      aiTools: ['React', 'Tailwind', 'Three.js', 'Claude API'],
      verifiedProof: true,
      timeAgo: '1d ago'
    }
  ]);

  const handleAwardXP = (amount, reason) => {
    setUserXP(prev => prev + amount);
    setToastMessage({ amount, reason });
    setTimeout(() => setToastMessage(null), 4000);
  };

  return (
    <div className="min-h-screen bg-[#090d16] text-gray-100 flex flex-col font-sans selection:bg-violet-500 selection:text-white">
      
      {/* Toast Notification Popup */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 glass-panel border border-amber-500/40 rounded-2xl p-4 shadow-2xl flex items-center gap-3 animate-in slide-in-from-bottom-5 duration-300">
          <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 font-extrabold text-lg">
            +{toastMessage.amount} XP
          </div>
          <div>
            <h4 className="font-bold text-white text-xs">Achievement Unlocked! 🔥</h4>
            <p className="text-[11px] text-gray-300">{toastMessage.reason}</p>
          </div>
        </div>
      )}

      {/* Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        userXP={userXP}
        userStreak={userStreak}
        userRank={userRank}
        userRole={userRole}
        setUserRole={setUserRole}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {activeTab === 'hackathon' && (
          <HackathonHub
            projects={projects}
            setProjects={setProjects}
            onAwardXP={handleAwardXP}
          />
        )}

        {activeTab === 'streak' && (
          <StreakTracker
            streak={userStreak}
            setStreak={setUserStreak}
            onAwardXP={handleAwardXP}
          />
        )}

        {activeTab === 'showcase' && (
          <LeaderboardShowcase
            projects={projects}
            setProjects={setProjects}
          />
        )}

        {activeTab === 'recruiter' && (
          <RecruiterPortal />
        )}

        {activeTab === 'ai-roadmap' && (
          <AIRoadmap />
        )}

      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#070a12] py-8 text-xs text-gray-400 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white text-sm">ABTalks</span>
            <span>· Built by Anil Bajpai's ABTalks Community</span>
          </div>

          <div className="flex items-center gap-4 text-gray-400">
            <a href="https://www.instagram.com/abtalksonai/" target="_blank" rel="noreferrer" className="hover:text-violet-400">Instagram</a>
            <a href="https://www.linkedin.com/company/abtalks-on-ai/" target="_blank" rel="noreferrer" className="hover:text-violet-400">LinkedIn</a>
            <a href="https://www.youtube.com/@ABTalksOnAI" target="_blank" rel="noreferrer" className="hover:text-violet-400">YouTube</a>
            <a href="https://discord.gg/j4Q8tvDj6" target="_blank" rel="noreferrer" className="hover:text-violet-400">Discord</a>
            <span>Contact: <strong className="text-violet-300">team@abtalks.in</strong></span>
          </div>
        </div>
      </footer>

    </div>
  );
}
