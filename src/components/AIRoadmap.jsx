import React, { useState } from 'react';
import { 
  Sparkles, 
  BookOpen, 
  CheckCircle2, 
  Code, 
  Terminal, 
  Play, 
  Zap, 
  Cpu, 
  Database, 
  Bot, 
  Layers
} from 'lucide-react';

export default function AIRoadmap() {
  const [userPrompt, setUserPrompt] = useState(`You are an expert AI Engineer. Analyze the following user context and formulate a structured RAG query response using JSON mode.`);
  const [promptOutput, setPromptOutput] = useState(null);
  const [isExecuting, setIsExecuting] = useState(false);

  const cohortWeeks = [
    {
      week: 'Week 1',
      title: 'LLM Foundations & Prompt Engineering',
      icon: <Sparkles className="w-5 h-5 text-amber-400" />,
      topics: ['System Prompt Design', 'Structured Outputs (JSON)', 'Chain of Thought Reasoning', 'Few-shot Learning']
    },
    {
      week: 'Week 2',
      title: 'Retrieval Augmented Generation (RAG)',
      icon: <Database className="w-5 h-5 text-cyan-400" />,
      topics: ['Chunking & Vector Embeddings', 'Pinecone & Chroma Integration', 'Hybrid Search & Re-ranking', 'Contextual Evaluation']
    },
    {
      week: 'Week 3',
      title: 'Autonomous Agents & Function Calling',
      icon: <Bot className="w-5 h-5 text-emerald-400" />,
      topics: ['Agentic Loops', 'LangGraph State Machines', 'Tool Calling APIs', 'Multi-Agent Coordination']
    },
    {
      week: 'Week 4',
      title: 'Model Context Protocol (MCP) & Deployment',
      icon: <Cpu className="w-5 h-5 text-violet-400" />,
      topics: ['Custom MCP Server Development', 'Vercel / Cloudflare Deployment', 'Recruiter Showcase Demo', 'Production Monitoring']
    }
  ];

  const handleTestPrompt = () => {
    setIsExecuting(true);
    setPromptOutput(null);
    setTimeout(() => {
      setIsExecuting(false);
      setPromptOutput({
        status: 'Success (200 OK)',
        latency: '340ms',
        tokensUsed: 142,
        result: `{\n  "analysis": "Prompt contains clear persona definition and strict schema requirement.",\n  "qualityScore": 9.8,\n  "recommendedModel": "claude-3-7-sonnet",\n  "status": "Production Ready"\n}`
      });
    }, 1000);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      
      {/* Hero Header */}
      <div className="glass-panel border-cyan-500/30 rounded-3xl p-6 sm:p-8 space-y-6 relative overflow-hidden">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>31-Day AI Chatbot Cohort & Claude Challenge</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white mt-2 font-display">
              Production AI Engineering Curriculum
            </h1>
            <p className="text-gray-300 text-xs sm:text-base mt-1 max-w-2xl">
              Master RAG, Autonomous Agents, and Model Context Protocol (MCP) through daily building sessions.
            </p>
          </div>

          <div className="px-5 py-3 rounded-2xl bg-cyan-500/15 border border-cyan-500/30 text-center">
            <span className="block text-2xl font-extrabold text-cyan-400 font-mono">Day 18 / 31</span>
            <span className="text-[10px] text-cyan-300 uppercase font-bold">Current Module: Agents</span>
          </div>
        </div>
      </div>

      {/* 4-Week Roadmap Visualization */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cohortWeeks.map((w, idx) => (
          <div key={idx} className="glass-panel glass-panel-hover rounded-3xl p-6 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white/5 border border-white/10 text-gray-300">
                  {w.week}
                </span>
                {idx < 2 && <span className="text-[10px] text-emerald-400 font-bold">✔ Unlocked</span>}
                {idx === 2 && <span className="text-[10px] text-amber-400 font-bold animate-pulse">In Progress 🔥</span>}
                {idx === 3 && <span className="text-[10px] text-gray-500 font-semibold">Upcoming</span>}
              </div>

              <div className="flex items-center gap-3 pt-1">
                <div className="p-2.5 rounded-2xl bg-white/5 border border-white/10">
                  {w.icon}
                </div>
                <h3 className="font-bold text-white text-base leading-snug">
                  {w.title}
                </h3>
              </div>

              <ul className="space-y-2 pt-2 border-t border-white/10 text-xs text-gray-300">
                {w.topics.map((t, tIdx) => (
                  <li key={tIdx} className="flex items-center gap-2">
                    <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${idx <= 2 ? 'text-emerald-400' : 'text-gray-600'}`} />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Claude Challenge Interactive Prompt Engineering Sandbox */}
      <div className="glass-panel border-white/10 rounded-3xl p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Terminal className="w-5 h-5 text-cyan-400" />
              Claude Track Interactive Prompt Sandbox
            </h2>
            <p className="text-xs text-gray-400">Test and evaluate system prompt instructions against Claude 3.7 Sonnet runtime simulation</p>
          </div>

          <button
            onClick={handleTestPrompt}
            disabled={isExecuting}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-teal-600 hover:brightness-110 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-cyan-500/25"
          >
            <Play className="w-4 h-4 fill-white" />
            {isExecuting ? 'Evaluating Prompt...' : 'Run Prompt Test'}
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
              System Prompt Instruction
            </label>
            <textarea
              rows={8}
              value={userPrompt}
              onChange={e => setUserPrompt(e.target.value)}
              className="w-full p-4 rounded-2xl bg-black/60 border border-white/10 font-mono text-xs text-cyan-200 focus:outline-none focus:border-cyan-500 leading-relaxed"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider">
              Output & Evaluation Metrics
            </label>
            <div className="p-4 rounded-2xl bg-black/60 border border-white/10 font-mono text-xs min-h-[190px]">
              {isExecuting && (
                <div className="text-amber-400 animate-pulse flex items-center gap-2">
                  <Sparkles className="w-4 h-4" /> Evaluating prompt structure and output compliance...
                </div>
              )}
              {promptOutput && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-gray-400 pb-2 border-b border-white/10">
                    <span className="text-emerald-400 font-bold">{promptOutput.status}</span>
                    <span>Latency: {promptOutput.latency} | Tokens: {promptOutput.tokensUsed}</span>
                  </div>
                  <pre className="text-cyan-300 whitespace-pre-wrap leading-relaxed">
                    {promptOutput.result}
                  </pre>
                </div>
              )}
              {!isExecuting && !promptOutput && (
                <span className="text-gray-500 italic">Click "Run Prompt Test" to simulate Claude API output.</span>
              )}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
