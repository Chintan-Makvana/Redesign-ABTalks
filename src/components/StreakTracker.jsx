import React, { useState } from 'react';
import { 
  Flame, 
  CheckCircle2, 
  Calendar, 
  Code, 
  Share2, 
  Sparkles, 
  Play, 
  Award, 
  ArrowRight, 
  Copy, 
  Check, 
  ExternalLink,
  ChevronRight,
  Terminal
} from 'lucide-react';

export default function StreakTracker({ streak, setStreak, onAwardXP }) {
  const [selectedDay, setSelectedDay] = useState(25);
  const [isCompletedToday, setIsCompletedToday] = useState(false);
  const [codeSnippet, setCodeSnippet] = useState(`// Day 25 Challenge: Build an MCP (Model Context Protocol) Server
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

const server = new Server({
  name: "abtalks-mcp-tools",
  version: "1.0.0"
}, {
  capabilities: { tools: {} }
});

// Define custom tool for fetching candidate proof-of-work
server.setRequestHandler("list_tools", async () => ({
  tools: [{
    name: "get_builder_streak",
    description: "Fetches verified coding streak and project submission stats for a builder",
    inputSchema: { type: "object", properties: { username: { type: "string" } } }
  }]
}));

console.log("MCP Server running on stdio...");`);

  const [isRunningTests, setIsRunningTests] = useState(false);
  const [testResults, setTestResults] = useState(null);
  const [copiedShare, setCopiedShare] = useState(false);

  // Generate 60 days matrix data
  const days = Array.from({ length: 60 }, (_, i) => {
    const dayNum = i + 1;
    let status = 'upcoming';
    if (dayNum < 25) status = 'completed';
    if (dayNum === 25) status = isCompletedToday ? 'completed' : 'current';
    return { day: dayNum, status };
  });

  const handleRunCode = () => {
    setIsRunningTests(true);
    setTestResults(null);
    setTimeout(() => {
      setIsRunningTests(false);
      setTestResults({
        passed: true,
        output: '✔ MCP Server initialized successfully!\n✔ 1 Custom Tool Registered: get_builder_streak\n✔ All 3 Unit Tests Passed cleanly.'
      });
    }, 1200);
  };

  const handleSubmitDailyTask = () => {
    if (isCompletedToday) return;
    setIsCompletedToday(true);
    setStreak(prev => prev + 1);
    onAwardXP(100, 'Completed Day 25 Daily Challenge');
  };

  const shareText = `🚀 Day 25/60 completed in @ABTalksOnAI 60-Day Challenge!\n\nJust built an MCP (Model Context Protocol) Server with custom tools for builder stats verification.\n\nBuilding in public with Anil Bajpai & community 🔥\n#ABTalks #BuildInPublic #AI #MCP`;

  const handleCopyShare = () => {
    navigator.clipboard?.writeText(shareText);
    setCopiedShare(true);
    setTimeout(() => setCopiedShare(false), 2000);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      
      {/* Header Banner & Stats Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Main Stats Card */}
        <div className="lg:col-span-8 glass-panel border-white/10 rounded-3xl p-6 sm:p-8 space-y-6 flex flex-col justify-between">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
                <Flame className="w-3.5 h-3.5 fill-amber-400" />
                <span>60-Day Coding Habit Matrix</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-white mt-2 font-display">
                Your Consistency Engine
              </h1>
              <p className="text-gray-300 text-xs sm:text-base mt-1">
                Completing one focused task every day across AI, Software Engineering, & Data Science to turn daily effort into proof of work.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="px-5 py-3 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-center">
                <span className="block text-2xl font-extrabold text-amber-400 font-mono">{streak}</span>
                <span className="text-[10px] text-amber-300/80 font-bold uppercase">Current Streak</span>
              </div>
              <div className="px-5 py-3 rounded-2xl bg-violet-500/15 border border-violet-500/30 text-center">
                <span className="block text-2xl font-extrabold text-violet-400 font-mono">38</span>
                <span className="text-[10px] text-violet-300/80 font-bold uppercase">Best Streak</span>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs text-gray-300 font-medium">
              <span>Overall 60-Day Challenge Progress</span>
              <span className="text-violet-400 font-bold">{Math.round((streak / 60) * 100)}% ({streak}/60 Days)</span>
            </div>
            <div className="w-full h-3 rounded-full bg-white/5 border border-white/10 overflow-hidden p-0.5">
              <div 
                className="h-full rounded-full bg-gradient-to-r from-amber-500 via-violet-500 to-cyan-400 transition-all duration-700 shadow-lg shadow-violet-500/50"
                style={{ width: `${(streak / 60) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Accountability & Badges */}
        <div className="lg:col-span-4 glass-panel border-white/10 rounded-3xl p-6 flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Verified Streak Badges</span>
            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400">
                  <Flame className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-white">7-Day Fire</span>
                  <span className="text-[10px] text-emerald-400">Unlocked ✔</span>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-violet-500/20 text-violet-400">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-white">21-Day Habit</span>
                  <span className="text-[10px] text-emerald-400">Unlocked ✔</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-gradient-to-r from-violet-900/40 to-indigo-900/40 border border-violet-500/30 space-y-2">
            <div className="flex items-center gap-2 text-violet-300 font-semibold text-xs">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Public Accountability Partner</span>
            </div>
            <p className="text-[11px] text-gray-300 leading-relaxed">
              Posting your daily proof-of-work on X & LinkedIn increases your completion probability by <strong>85%</strong>.
            </p>
          </div>
        </div>
      </div>

      {/* Interactive 60-Day Matrix Heatmap */}
      <div className="glass-panel border-white/10 rounded-3xl p-6 sm:p-8 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Calendar className="w-5 h-5 text-violet-400" />
              60-Day Contribution Heatmap Matrix
            </h2>
            <p className="text-xs text-gray-400">Click any completed or active day tile to inspect the daily prompt and code</p>
          </div>

          {/* Legend */}
          <div className="flex items-center gap-4 text-xs text-gray-400">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-md bg-emerald-500/80 shadow-sm shadow-emerald-500/50"></span>
              <span>Completed</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-md bg-amber-500 animate-pulse ring-2 ring-amber-400"></span>
              <span>Active Today</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-md bg-white/10 border border-white/10"></span>
              <span>Upcoming</span>
            </div>
          </div>
        </div>

        {/* Matrix Grid */}
        <div className="grid grid-cols-6 sm:grid-cols-10 md:grid-cols-12 gap-2 pt-2">
          {days.map((d) => {
            const isSel = d.day === selectedDay;
            let bgClass = "bg-white/5 border border-white/10 text-gray-500 hover:border-white/30";
            
            if (d.status === 'completed') {
              bgClass = "bg-emerald-500/20 border border-emerald-500/50 text-emerald-300 font-bold hover:bg-emerald-500/30";
            } else if (d.status === 'current') {
              bgClass = "bg-amber-500/30 border-2 border-amber-400 text-amber-300 font-extrabold animate-pulse shadow-lg shadow-amber-500/30";
            }

            return (
              <button
                key={d.day}
                onClick={() => setSelectedDay(d.day)}
                className={`h-12 rounded-xl flex flex-col items-center justify-center transition-all cursor-pointer ${bgClass} ${
                  isSel ? 'ring-2 ring-white scale-105 z-10' : ''
                }`}
              >
                <span className="text-[10px] opacity-70">DAY</span>
                <span className="text-xs font-mono font-bold">{d.day}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Day Workspace & Code Sandbox */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Task Prompt & Submission */}
        <div className="lg:col-span-5 glass-panel border-white/10 rounded-3xl p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div>
              <span className="px-2.5 py-0.5 rounded-full bg-violet-500/20 border border-violet-500/30 text-violet-300 font-bold text-xs">
                DAY {selectedDay} / 60
              </span>
              <h3 className="text-xl font-bold text-white mt-2">
                Build an MCP Server with Custom Tools
              </h3>
            </div>
            {selectedDay <= streak && (
              <span className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400">
                <CheckCircle2 className="w-6 h-6" />
              </span>
            )}
          </div>

          <div className="space-y-3 text-xs sm:text-sm text-gray-300 leading-relaxed">
            <h4 className="font-bold text-white flex items-center gap-1.5 text-xs uppercase tracking-wider text-violet-400">
              <Sparkles className="w-4 h-4" /> Task Objectives
            </h4>
            <ul className="space-y-2 list-disc list-inside text-gray-300">
              <li>Initialize an Model Context Protocol (MCP) server using standard TypeScript/JS SDK.</li>
              <li>Expose a custom tool <code>get_builder_streak</code> that queries daily consistency logs.</li>
              <li>Test the tool execution in the interactive sandbox preview on the right.</li>
              <li>Click <strong>"Complete & Award XP"</strong> to update your GitHub streak!</li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 border-t border-white/10 space-y-3">
            <button
              onClick={handleSubmitDailyTask}
              disabled={isCompletedToday}
              className={`w-full py-3.5 rounded-2xl font-bold text-sm shadow-xl transition-all flex items-center justify-center gap-2 ${
                isCompletedToday
                  ? 'bg-emerald-600/30 border border-emerald-500/50 text-emerald-300 cursor-default'
                  : 'bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 hover:brightness-110 text-white shadow-violet-500/30'
              }`}
            >
              <CheckCircle2 className="w-5 h-5" />
              {isCompletedToday ? '✔ Day 25 Streak Completed (+100 XP)' : 'Mark Complete & Award +100 XP'}
            </button>

            {/* Proof of work share button */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-white flex items-center gap-1.5">
                  <Share2 className="w-3.5 h-3.5 text-cyan-400" /> Public Proof of Work
                </span>
                <button
                  onClick={handleCopyShare}
                  className="text-violet-400 hover:text-white flex items-center gap-1 text-[11px] font-semibold"
                >
                  {copiedShare ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  {copiedShare ? 'Copied!' : 'Copy Share Post'}
                </button>
              </div>
              <p className="text-[11px] font-mono text-gray-300 bg-black/40 p-2.5 rounded-xl border border-white/5 leading-relaxed">
                {shareText}
              </p>
            </div>
          </div>
        </div>

        {/* Code Sandbox / Live Code Viewer */}
        <div className="lg:col-span-7 glass-panel border-white/10 rounded-3xl p-6 space-y-4 flex flex-col justify-between min-h-[480px]">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-2 text-xs font-mono text-gray-300">
              <Terminal className="w-4 h-4 text-violet-400" />
              <span>mcp_server_day25.ts</span>
            </div>

            <button
              onClick={handleRunCode}
              disabled={isRunningTests}
              className="px-4 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 transition-all shadow-md shadow-emerald-500/20"
            >
              <Play className="w-3.5 h-3.5 fill-white" />
              {isRunningTests ? 'Executing Tests...' : 'Run Test Sandbox'}
            </button>
          </div>

          {/* Code Textarea */}
          <div className="relative font-mono text-xs text-violet-200 bg-black/60 p-4 rounded-2xl border border-white/10 overflow-x-auto min-h-[260px]">
            <textarea 
              value={codeSnippet}
              onChange={e => setCodeSnippet(e.target.value)}
              className="w-full h-64 bg-transparent border-none focus:outline-none resize-none font-mono text-xs text-gray-200 leading-relaxed"
            />
          </div>

          {/* Test Execution Logs */}
          <div className="p-3 rounded-2xl bg-white/5 border border-white/10 font-mono text-xs text-gray-300">
            <span className="text-[10px] text-gray-400 uppercase font-bold block mb-1">Sandbox Execution Output:</span>
            {isRunningTests && <span className="text-amber-400 animate-pulse">Running static analysis and MCP tool registration tests...</span>}
            {testResults && (
              <pre className="text-emerald-400 text-xs font-mono leading-relaxed whitespace-pre-wrap">
                {testResults.output}
              </pre>
            )}
            {!isRunningTests && !testResults && (
              <span className="text-gray-500 italic">Click "Run Test Sandbox" above to validate code.</span>
            )}
          </div>
        </div>

      </div>

    </div>
  );
}
