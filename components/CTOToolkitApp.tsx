"use client";

import React, { useState, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Sparkles, Wallet, Globe, Users, TrendingUp, LucideIcon, CheckCircle, AlertCircle, PieChart as PieChartIcon, BarChart4, Activity, TrendingDown, Layout, Code, Link as LinkIcon, Image as ImageIcon, FileText, CheckSquare, Rocket, Lock, MessageSquare, LightbulbIcon, DollarSign, Clock, Zap, BarChart as BarChartIcon } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, BarChart, Bar, Cell, Legend, Pie, PieChart } from "recharts";

interface SectionProps {
  icon: LucideIcon;
  title: string;
  children: ReactNode;
  borderColor: string;
}

// Update the DialogContent component for all dialogs to have consistent width and better responsiveness
const ConsistentDialogContent = ({ children, className = "" }: { children: ReactNode, className?: string }) => (
  <DialogContent className={`bg-[#1f1b3a] text-white max-w-4xl w-full p-0 overflow-hidden mx-auto ${className}`}>
    {children}
  </DialogContent>
);

export default function CTOToolkitApp() {
  const [selectedMessage, setSelectedMessage] = useState("");

  const telegramMessages = {
    welcome: `🔥🚀 WELCOME DEGENS! 🚀🔥\n\n░░░░░░░░░░░░░░░░░░\n🐸 Welcome to [TokenName] — now COMMUNITY RUN.\n⛓️ Dev gone? Good. Now WE build.\n🧠 Use memes. Make noise. Take over.\n\n🚪 Enter, anon. This is YOUR token now.`,
    lore: `📜✨ THE LEGEND OF THE CTO ✨📜\n\nOnce upon a rug... the dev disappeared into the shadow realm.\nBut the community stayed. They memed. They rallied.\nNow, a leader rises — THE CTO (Community Takeover Operator).\n\n🔮 $[TokenName] will rise like a phoenix — powered by copium, memes, and SOL.`,
    buy: `📈💸 TIME TO PUMP IT 🚀\n\n🎯 Chart? Coiled.\n👑 Supply? Community controlled.\n📉 Floor price? Let's change that.\n\n💥 Buy some $[TokenName] — be part of degen history.\n🪙 Add LP. Shill. Snipe. Meme. Repeat.\n\n💬 Telegram's lit. Twitter's next. You in or what?`
  };

  const Section = ({ icon: Icon, title, children, borderColor }: SectionProps) => (
    <Card className={`bg-[#1f1b3a] border shadow-lg ${borderColor}`}>
      <CardContent className="p-6 space-y-4">
        <div className="flex items-center gap-3 border-b border-white/10 pb-3">
          <Icon className="text-white" />
          <h2 className="text-xl font-bold tracking-wide text-white">{title}</h2>
        </div>
        {children}
      </CardContent>
    </Card>
  );

  const ownershipData = [
    { day: "Day 1", ownership: 2 },
    { day: "Day 2", ownership: 7 },
    { day: "Day 3", ownership: 15 },
    { day: "Day 4", ownership: 28 },
    { day: "Day 5", ownership: 35 },
  ];

  // Activity data for token chart
  const tokenActivityData = [
    { time: '00:00', volume: 1.2, transactions: 8 },
    { time: '04:00', volume: 0.8, transactions: 5 },
    { time: '08:00', volume: 2.5, transactions: 17 },
    { time: '12:00', volume: 3.8, transactions: 25 },
    { time: '16:00', volume: 5.2, transactions: 34 },
    { time: '20:00', volume: 4.0, transactions: 29 },
    { time: '23:59', volume: 2.8, transactions: 19 },
  ];

  // Holder distribution data
  const holderDistributionData = [
    { name: 'Top Whale', value: 12, color: '#9333ea' },
    { name: 'Other Whales', value: 31, color: '#a855f7' },
    { name: 'Medium Holders', value: 27, color: '#c084fc' },
    { name: 'Small Holders', value: 30, color: '#d8b4fe' },
  ];

  // Add sample data for the landing page template usage stats
  const templateUsageData = [
    { name: 'Landing Pages', value: 62, color: '#f97316' },
    { name: 'Meme Galleries', value: 28, color: '#fb923c' },
    { name: 'Token Info', value: 10, color: '#fdba74' },
  ];

  // Sample template types data
  const templateTypesData = [
    { month: 'Jan', downloads: 12 },
    { month: 'Feb', downloads: 19 },
    { month: 'Mar', downloads: 25 },
    { month: 'Apr', downloads: 32 },
    { month: 'May', downloads: 48 },
    { month: 'Jun', downloads: 65 },
  ];

  // Sample data for DEX performance
  const dexPerformanceData = [
    { name: 'Day 1', volume: 3.2, price: 0.0002 },
    { name: 'Day 2', volume: 7.8, price: 0.0005 },
    { name: 'Day 3', volume: 12.3, price: 0.0008 },
    { name: 'Day 4', volume: 9.5, price: 0.0006 },
    { name: 'Day 5', volume: 15.2, price: 0.0012 },
    { name: 'Day 6', volume: 22.7, price: 0.0018 },
    { name: 'Day 7', volume: 28.1, price: 0.0022 },
  ];

  // Success rates data
  const successRatesData = [
    { name: 'Price Growth', value: 87, color: '#ef4444' },
    { name: 'Holder Gain', value: 92, color: '#f87171' },
    { name: 'Social Reach', value: 79, color: '#fca5a5' },
  ];

  // Calculate rows based on message content
  const calculateRows = (message: string) => {
    if (!message) return 5;
    const lineCount = (message.match(/\n/g) || []).length + 1;
    return Math.max(5, Math.min(lineCount, 15)); // Min 5 rows, max 15 rows
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-white px-4 py-10">
      <div className="relative max-w-4xl mx-auto space-y-10 pt-20">
        {/* Wallet Connect and User Info - Improved */}
        <div className="absolute top-4 right-4 z-50">
          <div className="flex items-center gap-3 bg-[#1f1b3a]/80 backdrop-blur-sm rounded-lg px-4 py-2 border border-purple-500/30 shadow-lg">
            <div className="hidden sm:flex flex-col items-end mr-1">
              <span className="text-xs text-purple-300">Logged in as</span>
              <span className="text-sm font-medium text-white">Adem The CTO King</span>
            </div>
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center text-white text-sm font-bold">
              A
            </div>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white text-xs sm:text-sm px-3 py-1 h-auto font-medium">
              <span className="hidden sm:inline">🔐 Wallet</span>
              <span className="sm:hidden">🔐</span>
            </Button>
          </div>
        </div>
        
        <header className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            🛠️ Solana CTO Takeover Toolkit
          </h1>
          <p className="text-md md:text-lg text-gray-300 max-w-2xl mx-auto">
            Scan. Buyout. Rebuild. Meme. Govern. A Swiss Army Knife for Meme Token Leadership on Solana.
          </p>
        </header>

        <Section icon={Sparkles} title="Token Scanner" borderColor="border-purple-500">
          <Input placeholder="Paste SPL token address..." className="bg-[#2d294a] text-white border border-purple-700" />
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-purple-600 hover:bg-purple-700 w-full">Analyze Token</Button>
            </DialogTrigger>
            <ConsistentDialogContent>
              <div className="flex flex-col h-full">
                {/* Header with gradient background */}
                <div className="bg-gradient-to-r from-purple-900 to-indigo-900 p-4 sm:p-6">
                  <div className="flex items-center gap-2 sm:gap-4">
                    <div className="bg-white/10 p-2 sm:p-3 rounded-full">
                      <Activity className="h-6 w-6 sm:h-8 sm:w-8 text-purple-300" />
                    </div>
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-white">Token Analysis Report</h2>
                      <p className="text-purple-300 text-xs sm:text-sm truncate max-w-[200px] sm:max-w-full">GRBGBTM1JRV8LH3U5MQ1U9A2MQNR9JVRTXKCU7YX</p>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 overflow-y-auto max-h-[70vh]">
                  {/* Status Summary */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                    <Card className="bg-[#272145] border-0 shadow-md">
                      <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                        <div className="mb-1 text-green-400">
                          <CheckCircle className="h-6 w-6 mb-1 mx-auto" />
                        </div>
                        <h3 className="font-medium text-white">Mint Authority</h3>
                        <p className="text-sm text-gray-300">Burned</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-[#272145] border-0 shadow-md">
                      <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                        <div className="mb-1 text-green-400">
                          <CheckCircle className="h-6 w-6 mb-1 mx-auto" />
                        </div>
                        <h3 className="font-medium text-white">Freeze Authority</h3>
                        <p className="text-sm text-gray-300">Removed</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-[#272145] border-0 shadow-md">
                      <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                        <div className="mb-1 text-yellow-400">
                          <AlertCircle className="h-6 w-6 mb-1 mx-auto" />
                        </div>
                        <h3 className="font-medium text-white">LP Status</h3>
                        <p className="text-sm text-gray-300">90% Locked</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Ownership Section */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <PieChartIcon className="h-5 w-5 text-purple-400" />
                      <h3 className="text-lg font-medium text-white">Token Distribution</h3>
                    </div>
                    <div className="bg-[#272145] p-4 rounded-lg">
                      <div className="flex flex-col md:flex-row gap-4 items-center">
                        <div className="w-full md:w-1/2">
                          <ResponsiveContainer width="100%" height={200}>
                            <PieChart>
                              <Tooltip 
                                contentStyle={{ 
                                  backgroundColor: "#1f1b3a", 
                                  border: "none", 
                                  borderRadius: "4px",
                                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
                                }} 
                              />
                              <Pie 
                                data={holderDistributionData} 
                                cx="50%" 
                                cy="50%" 
                                innerRadius={60}
                                outerRadius={80} 
                                fill="#8884d8" 
                                paddingAngle={2}
                                dataKey="value"
                              >
                                {holderDistributionData.map((entry, index) => (
                                  <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                              </Pie>
                              <Legend
                                verticalAlign="bottom"
                                height={36}
                                iconType="circle"
                              />
                            </PieChart>
                          </ResponsiveContainer>
                        </div>
                        <div className="w-full md:w-1/2 space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-300 text-sm">Top 10 Holders</span>
                            <span className="text-white font-medium">43% of supply</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div className="bg-purple-500 h-2 rounded-full" style={{ width: '43%' }}></div>
                          </div>
                          
                          <div className="flex justify-between items-center mt-3">
                            <span className="text-gray-300 text-sm">Holder Churn</span>
                            <span className="text-green-400 font-medium">Low (Diamond Hands)</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div className="bg-green-500 h-2 rounded-full" style={{ width: '15%' }}></div>
                          </div>
                          
                          <div className="flex justify-between items-center mt-3">
                            <span className="text-gray-300 text-sm">Team Tokens</span>
                            <span className="text-white font-medium">0% (Community Owned)</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div className="bg-blue-500 h-2 rounded-full" style={{ width: '0%' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Activity Chart */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <BarChart4 className="h-5 w-5 text-purple-400" />
                      <h3 className="text-lg font-medium text-white">24h Activity</h3>
                    </div>
                    <div className="bg-[#272145] p-4 rounded-lg">
                      <ResponsiveContainer width="100%" height={250}>
                        <AreaChart data={tokenActivityData}
                          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                          <defs>
                            <linearGradient id="colorVolume" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                              <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                            </linearGradient>
                            <linearGradient id="colorTx" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                            </linearGradient>
                          </defs>
                          <XAxis dataKey="time" stroke="#aaa" />
                          <YAxis yAxisId="left" stroke="#8884d8" />
                          <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                          <Tooltip 
                            contentStyle={{ 
                              backgroundColor: "#1f1b3a", 
                              border: "none", 
                              borderRadius: "4px" 
                            }} 
                          />
                          <Legend />
                          <Area 
                            yAxisId="left" 
                            type="monotone" 
                            dataKey="volume" 
                            stroke="#8884d8" 
                            fillOpacity={1} 
                            fill="url(#colorVolume)" 
                            name="Volume (SOL)"
                          />
                          <Area 
                            yAxisId="right" 
                            type="monotone" 
                            dataKey="transactions" 
                            stroke="#82ca9d" 
                            fillOpacity={1} 
                            fill="url(#colorTx)" 
                            name="Transactions"
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  
                  {/* AI Takeover Score */}
                  <div className="bg-gradient-to-r from-purple-900/50 to-indigo-900/50 rounded-lg p-5 border border-purple-800">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">AI Takeover Readiness Score</h3>
                        <p className="text-gray-300 text-sm max-w-lg">This token shows strong decentralization with minimal whale control. Community is active and social signals indicate growth potential. Token takeover is viable with moderate investment.</p>
                      </div>
                      <div className="text-center">
                        <div className="relative">
                          <svg className="w-20 h-20" viewBox="0 0 36 36">
                            <path
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                              fill="none"
                              stroke="#444"
                              strokeWidth="2"
                              strokeDasharray="100, 100"
                            />
                            <path
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                              fill="none"
                              stroke="#9333ea"
                              strokeWidth="2"
                              strokeDasharray="84, 100"
                            />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-2xl font-bold text-white">84</span>
                          </div>
                        </div>
                        <span className="text-xs text-purple-300">out of 100</span>
                      </div>
                    </div>
                    
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-purple-900/50 text-purple-200 text-xs rounded-full border border-purple-700">Strong Community</span>
                      <span className="px-2 py-1 bg-purple-900/50 text-purple-200 text-xs rounded-full border border-purple-700">Low Manipulation Risk</span>
                      <span className="px-2 py-1 bg-purple-900/50 text-purple-200 text-xs rounded-full border border-purple-700">Good Social Presence</span>
                      <span className="px-2 py-1 bg-purple-900/50 text-purple-200 text-xs rounded-full border border-purple-700">Revival Potential</span>
                    </div>
                  </div>
                  
                  {/* Action Button */}
                  <div className="flex justify-end">
                    <Button className="bg-purple-600 hover:bg-purple-700 px-6">
                      Export Full Report
                    </Button>
                  </div>
                </div>
              </div>
            </ConsistentDialogContent>
          </Dialog>
        </Section>

        <Section icon={Wallet} title="Buyout Strategy" borderColor="border-yellow-500">
          <p className="text-gray-300 text-sm">
            Estimate how much $SOL it takes to become a top holder.
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black w-full">Calculate Buyout</Button>
            </DialogTrigger>
            <ConsistentDialogContent>
              <div className="flex flex-col h-full">
                {/* Header with gradient background */}
                <div className="bg-gradient-to-r from-yellow-700 to-amber-600 p-4 sm:p-6">
                  <div className="flex items-center gap-2 sm:gap-4">
                    <div className="bg-white/10 p-2 sm:p-3 rounded-full">
                      <Wallet className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-200" />
                    </div>
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-white">Buyout Strategy Analysis</h2>
                      <p className="text-yellow-200 text-xs sm:text-sm">Precision planning for token control acquisition</p>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 overflow-y-auto max-h-[70vh]">
                  {/* Status Summary Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card className="bg-[#272145] border-0 shadow-md overflow-hidden">
                      <div className="h-2 bg-gradient-to-r from-yellow-500 to-amber-400"></div>
                      <CardContent className="p-5">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="bg-yellow-500/20 p-2 rounded-full">
                            <Wallet className="h-5 w-5 text-yellow-400" />
                          </div>
                          <h3 className="font-semibold text-white">Cost Estimate</h3>
                        </div>
                        <div className="space-y-2 text-sm text-gray-300">
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                            <span>Top 5 Holder: ~31 SOL</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                            <span>Slippage Buffer: 2.5%</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                            <span>Total with Fees: ~32.2 SOL</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-[#272145] border-0 shadow-md overflow-hidden">
                      <div className="h-2 bg-gradient-to-r from-yellow-500 to-amber-400"></div>
                      <CardContent className="p-5">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="bg-yellow-500/20 p-2 rounded-full">
                            <Users className="h-5 w-5 text-yellow-400" />
                          </div>
                          <h3 className="font-semibold text-white">Holder Landscape</h3>
                        </div>
                        <div className="space-y-2 text-sm text-gray-300">
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                            <span>3 Whale Wallets (Active)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                            <span>Community Wallet Exists</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <AlertCircle className="h-4 w-4 text-yellow-400 flex-shrink-0" />
                            <span>Low Community Funds</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-[#272145] border-0 shadow-md overflow-hidden">
                      <div className="h-2 bg-gradient-to-r from-yellow-500 to-amber-400"></div>
                      <CardContent className="p-5">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="bg-yellow-500/20 p-2 rounded-full">
                            <TrendingUp className="h-5 w-5 text-yellow-400" />
                          </div>
                          <h3 className="font-semibold text-white">Takeover Metrics</h3>
                        </div>
                        <div className="space-y-2 text-sm text-gray-300">
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                            <span>35% Target Ownership</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                            <span>5-Day Acquisition Timeline</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                            <span>Staggered Buy Strategy</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Ownership Timeline Chart */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <BarChartIcon className="h-5 w-5 text-yellow-400" />
                      <h3 className="text-lg font-medium text-white">Ownership Projection</h3>
                    </div>
                    <div className="bg-[#272145] p-4 rounded-lg">
                      <ResponsiveContainer width="100%" height={250}>
                        <LineChart data={ownershipData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                          <XAxis dataKey="day" stroke="#aaa" />
                          <YAxis stroke="#aaa" label={{ value: 'Ownership %', angle: -90, position: 'insideLeft', style: { fill: '#aaa' } }} />
                          <Tooltip contentStyle={{ backgroundColor: "#1f1b3a", border: "none", borderRadius: "4px" }} />
                          <Line 
                            type="monotone" 
                            dataKey="ownership" 
                            stroke="#facc15" 
                            strokeWidth={2}
                            dot={{ fill: '#facc15', r: 6 }}
                            activeDot={{ fill: '#facc15', r: 8, stroke: 'white', strokeWidth: 2 }}
                          />
                          <Legend />
                        </LineChart>
                      </ResponsiveContainer>
                      <div className="mt-4">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300 text-sm">Takeover Progress</span>
                          <span className="text-white font-medium">Day 5 Target: 35%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2 mt-1">
                          <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '35%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Strategy Section */}
                  <div className="bg-gradient-to-r from-yellow-900/50 to-amber-800/50 rounded-lg p-5 border border-yellow-700">
                    <div className="flex items-start gap-4">
                      <div className="w-full">
                        <h3 className="text-lg font-semibold text-white mb-2 flex items-center">
                          <LightbulbIcon className="h-5 w-5 mr-1 text-yellow-300" />
                          Strategic Acquisition Plan
                        </h3>
                        <p className="text-gray-300 text-sm">
                          Your path to token control requires precision and timing. Follow this strategic approach for optimal results.
                        </p>
                        
                        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-yellow-900/30 rounded-lg p-3">
                            <h4 className="text-yellow-300 font-medium mb-2">Day 1-2 Plan</h4>
                            <ul className="text-sm text-gray-300 space-y-2">
                              <li className="flex items-start gap-2">
                                <div className="bg-yellow-500/20 h-5 w-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                  <span className="text-xs text-yellow-300">1</span>
                                </div>
                                <span>Initiate contact with dormant holders via Telegram</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="bg-yellow-500/20 h-5 w-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                  <span className="text-xs text-yellow-300">2</span>
                                </div>
                                <span>Setup multisig treasury to receive tokens</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="bg-yellow-500/20 h-5 w-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                  <span className="text-xs text-yellow-300">3</span>
                                </div>
                                <span>Begin small purchases (5% total buy amount)</span>
                              </li>
                            </ul>
                          </div>
                          
                          <div className="bg-yellow-900/30 rounded-lg p-3">
                            <h4 className="text-yellow-300 font-medium mb-2">Day 3-5 Plan</h4>
                            <ul className="text-sm text-gray-300 space-y-2">
                              <li className="flex items-start gap-2">
                                <div className="bg-yellow-500/20 h-5 w-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                  <span className="text-xs text-yellow-300">4</span>
                                </div>
                                <span>Negotiate OTC deals with identified holders</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="bg-yellow-500/20 h-5 w-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                  <span className="text-xs text-yellow-300">5</span>
                                </div>
                                <span>Execute main buys during low activity periods</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="bg-yellow-500/20 h-5 w-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                  <span className="text-xs text-yellow-300">6</span>
                                </div>
                                <span>Begin meme campaign to spark community interest</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        
                        <div className="mt-4 flex flex-wrap gap-2">
                          <span className="px-2 py-1 bg-yellow-900/50 text-yellow-200 text-xs rounded-full border border-yellow-700">OTC Purchase</span>
                          <span className="px-2 py-1 bg-yellow-900/50 text-yellow-200 text-xs rounded-full border border-yellow-700">DEX Acquisition</span>
                          <span className="px-2 py-1 bg-yellow-900/50 text-yellow-200 text-xs rounded-full border border-yellow-700">Treasury Control</span>
                          <span className="px-2 py-1 bg-yellow-900/50 text-yellow-200 text-xs rounded-full border border-yellow-700">Governance Rights</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Key Insight Box */}
                  <div className="bg-[#272145] p-4 rounded-lg border border-yellow-500/30">
                    <div className="flex items-start gap-3">
                      <div className="bg-yellow-500/20 p-2 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0">
                        <AlertCircle className="h-4 w-4 text-yellow-400" />
                      </div>
                      <div>
                        <h4 className="text-yellow-300 font-medium">Strategic Insight</h4>
                        <p className="text-sm text-gray-300 italic mt-1">
                          "Coordinate with dormant holders via Telegram to negotiate buys. Establish treasury control ASAP. Memes move markets and create perfect distractions for larger buys."
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Action Button */}
                  <div className="flex justify-end">
                    <Button className="bg-yellow-600 hover:bg-yellow-700 text-white px-6">
                      Execute Buyout Plan
                    </Button>
                  </div>
                </div>
              </div>
            </ConsistentDialogContent>
          </Dialog>
        </Section>

        <Section icon={Globe} title="Social Takeover Kit" borderColor="border-pink-500">
          <p className="text-gray-300 text-sm">
            Deploy meme assets, generate token site, and launch community rooms.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button className="bg-pink-500 hover:bg-pink-600 text-black w-full sm:w-auto">Launch Kit</Button>
            <Button className="bg-teal-500 hover:bg-teal-600 text-white w-full sm:w-auto">Create Telegram Room</Button>
            <Button className="bg-indigo-500 hover:bg-indigo-600 text-white w-full sm:w-auto">Create Discord Server</Button>
          </div>
          
          {/* Two-column layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
            {/* Column 1: Telegram Message Templates */}
            <div className="space-y-2">
              <div className="bg-[#2d294a] border border-pink-400 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="bg-pink-500/20 p-2 rounded-full">
                    <MessageSquare className="h-5 w-5 text-pink-400" />
                  </div>
                  <h3 className="text-md font-semibold text-pink-300">📨 Telegram Message Templates</h3>
                </div>
                
                <p className="text-sm text-gray-300 mb-4">
                  Ready-to-use templates for community engagement. Perfect for announcements, welcomes, and more.
                </p>
                
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" className="bg-[#3a2e55] text-white border-pink-300 hover:bg-[#4b3a6c]" onClick={() => setSelectedMessage(telegramMessages.welcome)}>Welcome</Button>
                    <Button variant="outline" className="bg-[#3a2e55] text-white border-pink-300 hover:bg-[#4b3a6c]" onClick={() => setSelectedMessage(telegramMessages.lore)}>CTO Lore</Button>
                    <Button variant="outline" className="bg-[#3a2e55] text-white border-pink-300 hover:bg-[#4b3a6c]" onClick={() => setSelectedMessage(telegramMessages.buy)}>Buy Message</Button>
                  </div>
                  
                  <Textarea 
                    value={selectedMessage} 
                    readOnly 
                    className="bg-[#3a2e55] text-white border border-pink-300/30 mt-2 transition-all duration-200 rounded-md" 
                    rows={calculateRows(selectedMessage)} 
                  />
                  
                  <div className="pt-2">
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      <span>Copy to Clipboard</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Column 2: MEMEMACHINE */}
            <div className="space-y-2">
              <div className="bg-[#2d294a] border border-pink-400 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="bg-pink-500/20 p-2 rounded-full">
                    <ImageIcon className="h-5 w-5 text-pink-400" />
                  </div>
                  <h3 className="text-md font-semibold text-pink-300">🎭 MEMEMACHINE</h3>
                </div>
                
                <p className="text-sm text-gray-300 mb-4">
                  Upload your token assets to create viral memes. Get creative and boost your community engagement with dank content.
                </p>
                
                <div className="space-y-3">
                  <div className="border-2 border-dashed border-pink-300/30 rounded-lg p-6 bg-pink-500/5 text-center cursor-pointer hover:bg-pink-500/10 transition-colors">
                    <ImageIcon className="h-8 w-8 text-pink-400 mx-auto mb-2" />
                    <p className="text-pink-200 text-sm font-medium">Upload Coin Logo/Media</p>
                    <p className="text-gray-400 text-xs mt-1">Drag files or click to browse</p>
                    <input type="file" multiple className="hidden" />
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2">
                    <div className="aspect-square bg-[#3a2e55] rounded-md flex items-center justify-center">
                      <p className="text-xs text-gray-400">Logo</p>
                    </div>
                    <div className="aspect-square bg-[#3a2e55] rounded-md flex items-center justify-center">
                      <p className="text-xs text-gray-400">Media 1</p>
                    </div>
                    <div className="aspect-square bg-[#3a2e55] rounded-md flex items-center justify-center">
                      <p className="text-xs text-gray-400">Media 2</p>
                    </div>
                  </div>
                  
                  <div className="pt-2">
                    <a 
                      href="https://imgflip.com/memegenerator" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-2 rounded-md w-full hover:from-purple-700 hover:to-pink-700 transition-all"
                    >
                      <Sparkles className="h-4 w-4" />
                      <span className="font-medium">Create Memes on Imgflip</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section icon={Users} title="Community Treasury" borderColor="border-blue-500">
          <p className="text-gray-300 text-sm">
            Set up a multisig wallet and launch governance tools.
          </p>
          <Button className="bg-blue-500 hover:bg-blue-600 text-black w-full">Set Up Treasury</Button>
        </Section>

        <Section icon={TrendingUp} title="Growth & Quests" borderColor="border-green-500">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-green-500 hover:bg-green-600 text-black w-full">Open Growth Tools</Button>
            </DialogTrigger>
            <ConsistentDialogContent>
              <div className="flex flex-col h-full">
                {/* Header with gradient background */}
                <div className="bg-gradient-to-r from-green-700 to-emerald-600 p-4 sm:p-6">
                  <div className="flex items-center gap-2 sm:gap-4">
                    <div className="bg-white/10 p-2 sm:p-3 rounded-full">
                      <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 text-green-200" />
                    </div>
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-white">Growth Engine</h2>
                      <p className="text-green-200 text-xs sm:text-sm">Accelerate your community and token growth</p>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 overflow-y-auto max-h-[70vh]">
                  {/* Growth Tools */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="bg-[#272145] border-0 shadow-md overflow-hidden">
                      <div className="h-2 bg-gradient-to-r from-green-500 to-emerald-400"></div>
                      <CardContent className="p-5">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="bg-green-500/20 p-2 rounded-full">
                            <Sparkles className="h-5 w-5 text-green-400" />
                          </div>
                          <h3 className="font-semibold text-white">Airdrop Designer</h3>
                        </div>
                        <div className="space-y-2 text-sm text-gray-300">
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                            <span>Target early buyers & holders</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                            <span>Reward social participants</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                            <span>Automate distribution via SPL</span>
                          </div>
                          <div className="mt-4 text-xs text-green-300 italic">
                            "Strategic airdrops can double your community engagement overnight."
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-[#272145] border-0 shadow-md overflow-hidden">
                      <div className="h-2 bg-gradient-to-r from-green-500 to-emerald-400"></div>
                      <CardContent className="p-5">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="bg-green-500/20 p-2 rounded-full">
                            <ImageIcon className="h-5 w-5 text-green-400" />
                          </div>
                          <h3 className="font-semibold text-white">Meme Contest Module</h3>
                        </div>
                        <div className="space-y-2 text-sm text-gray-300">
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                            <span>Upload memes with one click</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                            <span>Set custom rewards for winners</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                            <span>Community voting system</span>
                          </div>
                          <div className="mt-4 text-xs text-green-300 italic">
                            "Viral memes are the currency of community tokens - reward them generously."
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-[#272145] border-0 shadow-md overflow-hidden">
                      <div className="h-2 bg-gradient-to-r from-green-500 to-emerald-400"></div>
                      <CardContent className="p-5">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="bg-green-500/20 p-2 rounded-full">
                            <CheckSquare className="h-5 w-5 text-green-400" />
                          </div>
                          <h3 className="font-semibold text-white">Quest System</h3>
                        </div>
                        <div className="space-y-2 text-sm text-gray-300">
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                            <span>Twitter retweet quests</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                            <span>Social platform joining missions</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                            <span>LP tipping/staking quests</span>
                          </div>
                          <div className="mt-4 text-xs text-green-300 italic">
                            "Quest systems gamify contribution and reward meaningful actions."
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-[#272145] border-0 shadow-md overflow-hidden">
                      <div className="h-2 bg-gradient-to-r from-green-500 to-emerald-400"></div>
                      <CardContent className="p-5">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="bg-green-500/20 p-2 rounded-full">
                            <Users className="h-5 w-5 text-green-400" />
                          </div>
                          <h3 className="font-semibold text-white">Live Leaderboards</h3>
                        </div>
                        <div className="space-y-2 text-sm text-gray-300">
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                            <span>Track active community members</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                            <span>Progressive reward tiers</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                            <span>Weekly & monthly competitions</span>
                          </div>
                          <div className="mt-4 text-xs text-green-300 italic">
                            "Public recognition drives engagement. Top performers deserve visibility."
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Growth Metrics */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <BarChartIcon className="h-5 w-5 text-green-400" />
                      <h3 className="text-lg font-medium text-white">Growth Metrics</h3>
                    </div>
                    <div className="bg-[#272145] p-4 rounded-lg">
                      <div className="flex flex-col md:flex-row gap-4 items-center">
                        <div className="w-full md:w-2/3">
                          <p className="text-sm text-gray-300 mb-2">Community Growth After Quest Implementation</p>
                          <ResponsiveContainer width="100%" height={200}>
                            <LineChart data={[
                              { day: 'Day 1', members: 50, engagement: 10 },
                              { day: 'Day 3', members: 85, engagement: 18 },
                              { day: 'Day 7', members: 120, engagement: 32 },
                              { day: 'Day 14', members: 210, engagement: 58 },
                              { day: 'Day 30', members: 320, engagement: 94 },
                            ]}>
                              <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                              <XAxis dataKey="day" stroke="#aaa" />
                              <YAxis yAxisId="left" stroke="#10b981" />
                              <YAxis yAxisId="right" orientation="right" stroke="#aaa" />
                              <Tooltip 
                                contentStyle={{ 
                                  backgroundColor: "#1f1b3a", 
                                  border: "none", 
                                  borderRadius: "4px" 
                                }} 
                              />
                              <Legend />
                              <Line 
                                yAxisId="left" 
                                type="monotone" 
                                dataKey="members" 
                                stroke="#10b981" 
                                strokeWidth={2} 
                                name="Members"
                              />
                              <Line 
                                yAxisId="right" 
                                type="monotone" 
                                dataKey="engagement" 
                                stroke="#6ee7b7" 
                                strokeWidth={2} 
                                name="Daily Engagement"
                              />
                            </LineChart>
                          </ResponsiveContainer>
                        </div>
                        <div className="w-full md:w-1/3">
                          <p className="text-sm text-gray-300 mb-2">Activity Distribution</p>
                          <ResponsiveContainer width="100%" height={200}>
                            <PieChart>
                              <Tooltip 
                                contentStyle={{ 
                                  backgroundColor: "#1f1b3a", 
                                  border: "none", 
                                  borderRadius: "4px",
                                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
                                }} 
                              />
                              <Pie 
                                data={[
                                  { name: 'Social Tasks', value: 45, color: '#10b981' },
                                  { name: 'LP/Staking', value: 30, color: '#34d399' },
                                  { name: 'Content Creation', value: 25, color: '#6ee7b7' },
                                ]} 
                                cx="50%" 
                                cy="50%" 
                                innerRadius={60}
                                outerRadius={80} 
                                fill="#8884d8" 
                                paddingAngle={2}
                                dataKey="value"
                              >
                                {[
                                  { name: 'Social Tasks', value: 45, color: '#10b981' },
                                  { name: 'LP/Staking', value: 30, color: '#34d399' },
                                  { name: 'Content Creation', value: 25, color: '#6ee7b7' },
                                ].map((entry, index) => (
                                  <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                              </Pie>
                              <Legend
                                verticalAlign="bottom"
                                height={36}
                                iconType="circle"
                              />
                            </PieChart>
                          </ResponsiveContainer>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Weekly Boosters Section */}
                  <div className="bg-gradient-to-r from-green-900/50 to-emerald-800/50 rounded-lg p-5 border border-green-700">
                    <div className="flex items-start gap-4">
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2 flex items-center">
                          <Zap className="h-5 w-5 mr-1 text-green-300" />
                          Weekly Growth Boosters
                        </h3>
                        <p className="text-gray-300 text-sm">Every Sunday, we take a snapshot of community activity and distribute bonus rewards to the most active members. The compounding effect creates lasting growth.</p>
                        
                        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="flex items-center gap-3">
                            <div className="bg-green-500/20 h-10 w-10 rounded-full flex items-center justify-center">
                              <TrendingUp className="h-5 w-5 text-green-300" />
                            </div>
                            <div>
                              <p className="font-medium text-white">+35%</p>
                              <p className="text-xs text-gray-300">Average Weekly Growth</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="bg-green-500/20 h-10 w-10 rounded-full flex items-center justify-center">
                              <Users className="h-5 w-5 text-green-300" />
                            </div>
                            <div>
                              <p className="font-medium text-white">78%</p>
                              <p className="text-xs text-gray-300">Retention Rate</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-4 flex flex-wrap gap-2">
                          <span className="px-2 py-1 bg-green-900/50 text-green-200 text-xs rounded-full border border-green-700">Triple XP Weekends</span>
                          <span className="px-2 py-1 bg-green-900/50 text-green-200 text-xs rounded-full border border-green-700">Streak Bonuses</span>
                          <span className="px-2 py-1 bg-green-900/50 text-green-200 text-xs rounded-full border border-green-700">Referral Rewards</span>
                          <span className="px-2 py-1 bg-green-900/50 text-green-200 text-xs rounded-full border border-green-700">Leader Perks</span>
                        </div>
                      </div>
                      <div className="hidden lg:flex items-center justify-center">
                        <div className="bg-green-500/20 h-24 w-24 rounded-full flex flex-col items-center justify-center border-2 border-green-500/30">
                          <svg className="w-20 h-20" viewBox="0 0 36 36">
                            <path
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                              fill="none"
                              stroke="#444"
                              strokeWidth="2"
                              strokeDasharray="100, 100"
                            />
                            <path
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                              fill="none"
                              stroke="#10b981"
                              strokeWidth="2"
                              strokeDasharray="78, 100"
                            />
                          </svg>
                          <div className="absolute text-xl font-bold text-white">78%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Action Button */}
                  <div className="flex justify-end">
                    <Button className="bg-green-600 hover:bg-green-700 text-white px-6">
                      Launch Growth Engine
                    </Button>
                  </div>
                </div>
              </div>
            </ConsistentDialogContent>
          </Dialog>
        </Section>
        <Section icon={Globe} title="Landing Page Generator" borderColor="border-orange-500">
          <p className="text-gray-300 text-sm">
            Instantly generate a beautiful, hosted landing page to showcase your meme token takeover.
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-orange-500 hover:bg-orange-600 text-black w-full">Launch Generator</Button>
            </DialogTrigger>
            <ConsistentDialogContent>
              <div className="flex flex-col h-full">
                {/* Header with gradient background */}
                <div className="bg-gradient-to-r from-orange-700 to-amber-600 p-4 sm:p-6">
                  <div className="flex items-center gap-2 sm:gap-4">
                    <div className="bg-white/10 p-2 sm:p-3 rounded-full">
                      <Layout className="h-6 w-6 sm:h-8 sm:w-8 text-orange-200" />
                    </div>
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-white">Landing Page Generator</h2>
                      <p className="text-orange-200 text-xs sm:text-sm">Create a professional token page in minutes</p>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 overflow-y-auto max-h-[70vh]">
                  {/* Preview Card */}
                  <div className="bg-[#272145] rounded-xl overflow-hidden border border-orange-500/20 shadow-lg">
                    <div className="bg-gradient-to-r from-orange-600 to-amber-500 h-24 relative">
                      <div className="absolute -bottom-10 left-6 w-20 h-20 bg-yellow-300 text-black font-extrabold text-2xl flex items-center justify-center rounded-full shadow-xl border-4 border-[#272145]">
                        🐸
                      </div>
                    </div>
                    <div className="pt-12 pb-6 px-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-bold text-white">$FROGKING</h3>
                          <p className="text-xs text-orange-300">cto.fun/yourpage_cto</p>
                        </div>
                        <div className="flex gap-2">
                          <Button className="bg-orange-500 hover:bg-orange-600 text-white text-xs px-3 py-1 h-auto">View</Button>
                          <Button className="bg-gray-700 hover:bg-gray-600 text-white text-xs px-3 py-1 h-auto">Copy</Button>
                        </div>
                      </div>
                      <p className="text-orange-300 font-medium mt-4 text-sm italic">"Dev gone. Frog lives. We're taking over."</p>
                      <div className="mt-4 grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm">
                            <CheckSquare className="h-4 w-4 text-green-400" />
                            <span className="text-gray-300">Community-owned</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <CheckSquare className="h-4 w-4 text-green-400" />
                            <span className="text-gray-300">LP 100% locked</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <CheckSquare className="h-4 w-4 text-green-400" />
                            <span className="text-gray-300">Active social presence</span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm">
                            <CheckSquare className="h-4 w-4 text-green-400" />
                            <span className="text-gray-300">690M total supply</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <CheckSquare className="h-4 w-4 text-green-400" />
                            <span className="text-gray-300">Telegram & Discord active</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <CheckSquare className="h-4 w-4 text-green-400" />
                            <span className="text-gray-300">Clear roadmap</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Features Section */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Code className="h-5 w-5 text-orange-400" />
                      <h3 className="text-lg font-medium text-white">Template Features</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Card className="bg-[#272145] border-0 shadow-md">
                        <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                          <div className="mb-2 text-orange-400">
                            <ImageIcon className="h-6 w-6 mb-1 mx-auto" />
                          </div>
                          <h3 className="font-medium text-white">Auto Branding</h3>
                          <p className="text-sm text-gray-300">Logo, banner, color scheme generation</p>
                        </CardContent>
                      </Card>
                      <Card className="bg-[#272145] border-0 shadow-md">
                        <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                          <div className="mb-2 text-orange-400">
                            <FileText className="h-6 w-6 mb-1 mx-auto" />
                          </div>
                          <h3 className="font-medium text-white">Token Info</h3>
                          <p className="text-sm text-gray-300">Supply, price, chart, LP lock details</p>
                        </CardContent>
                      </Card>
                      <Card className="bg-[#272145] border-0 shadow-md">
                        <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                          <div className="mb-2 text-orange-400">
                            <LinkIcon className="h-6 w-6 mb-1 mx-auto" />
                          </div>
                          <h3 className="font-medium text-white">Social Integration</h3>
                          <p className="text-sm text-gray-300">Twitter & Telegram embeds</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                  
                  {/* Usage Stats */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <PieChartIcon className="h-5 w-5 text-orange-400" />
                      <h3 className="text-lg font-medium text-white">Usage Trends</h3>
                    </div>
                    <div className="bg-[#272145] p-4 rounded-lg">
                      <div className="flex flex-col md:flex-row gap-4 items-center">
                        <div className="w-full md:w-1/2">
                          <ResponsiveContainer width="100%" height={200}>
                            <PieChart>
                              <Tooltip 
                                contentStyle={{ 
                                  backgroundColor: "#1f1b3a", 
                                  border: "none", 
                                  borderRadius: "4px",
                                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
                                }} 
                              />
                              <Pie 
                                data={templateUsageData} 
                                cx="50%" 
                                cy="50%" 
                                innerRadius={60}
                                outerRadius={80} 
                                fill="#8884d8" 
                                paddingAngle={2}
                                dataKey="value"
                              >
                                {templateUsageData.map((entry, index) => (
                                  <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                              </Pie>
                              <Legend
                                verticalAlign="bottom"
                                height={36}
                                iconType="circle"
                              />
                            </PieChart>
                          </ResponsiveContainer>
                        </div>
                        <div className="w-full md:w-1/2">
                          <ResponsiveContainer width="100%" height={200}>
                            <BarChart data={templateTypesData}>
                              <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                              <XAxis dataKey="month" stroke="#aaa" />
                              <YAxis stroke="#aaa" />
                              <Tooltip
                                contentStyle={{
                                  backgroundColor: "#1f1b3a",
                                  border: "none",
                                  borderRadius: "4px"
                                }}
                              />
                              <Bar dataKey="downloads" fill="#f97316" />
                            </BarChart>
                          </ResponsiveContainer>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Ready in 30 seconds section */}
                  <div className="bg-gradient-to-r from-orange-900/50 to-amber-800/50 rounded-lg p-5 border border-orange-700">
                    <div className="flex items-start gap-6">
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Ready in 30 seconds</h3>
                        <p className="text-gray-300 text-sm max-w-lg">Your landing page is the meme portal to legitimacy. Drag and drop your images, add tweets, or let AI generate everything for you. The first impression can make or break your token's revival.</p>
                        
                        <div className="mt-4 flex flex-wrap gap-2">
                          <span className="px-2 py-1 bg-orange-900/50 text-orange-200 text-xs rounded-full border border-orange-700">JSON Metadata</span>
                          <span className="px-2 py-1 bg-orange-900/50 text-orange-200 text-xs rounded-full border border-orange-700">Custom Domain</span>
                          <span className="px-2 py-1 bg-orange-900/50 text-orange-200 text-xs rounded-full border border-orange-700">SEO Optimized</span>
                          <span className="px-2 py-1 bg-orange-900/50 text-orange-200 text-xs rounded-full border border-orange-700">Analytics</span>
                        </div>
                      </div>
                      <div className="text-center hidden sm:block">
                        <div className="relative">
                          <svg className="w-20 h-20" viewBox="0 0 36 36">
                            <path
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                              fill="none"
                              stroke="#444"
                              strokeWidth="2"
                              strokeDasharray="100, 100"
                            />
                            <path
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                              fill="none"
                              stroke="#f97316"
                              strokeWidth="2"
                              strokeDasharray="30, 100"
                            />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-2xl font-bold text-white">30</span>
                          </div>
                        </div>
                        <span className="text-xs text-orange-300">seconds</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Action Button */}
                  <div className="flex justify-end">
                    <Button className="bg-orange-600 hover:bg-orange-700 text-white px-6">
                      Create Page Now
                    </Button>
                  </div>
                </div>
              </div>
            </ConsistentDialogContent>
          </Dialog>
        </Section>
        <Section icon={TrendingUp} title="DEX Booster" borderColor="border-red-500">
          <p className="text-gray-300 text-sm">
            Instantly deploy liquidity, lock LP, and boost visibility on Solana DEXs. Ideal for launch day.
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-red-500 hover:bg-red-600 text-black w-full">Launch DEX Booster</Button>
            </DialogTrigger>
            <ConsistentDialogContent>
              <div className="flex flex-col h-full">
                {/* Header with gradient background */}
                <div className="bg-gradient-to-r from-red-700 to-rose-600 p-4 sm:p-6">
                  <div className="flex items-center gap-2 sm:gap-4">
                    <div className="bg-white/10 p-2 sm:p-3 rounded-full">
                      <Rocket className="h-6 w-6 sm:h-8 sm:w-8 text-red-200" />
                    </div>
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-white">DEX Booster Suite</h2>
                      <p className="text-red-200 text-xs sm:text-sm">Supercharge your token's liquidity and market presence</p>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 overflow-y-auto max-h-[70vh]">
                  {/* Services Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="bg-[#272145] border-0 shadow-md overflow-hidden">
                      <div className="h-2 bg-gradient-to-r from-red-500 to-rose-400"></div>
                      <CardContent className="p-5">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="bg-red-500/20 p-2 rounded-full">
                            <Wallet className="h-5 w-5 text-red-400" />
                          </div>
                          <h3 className="font-semibold text-white">Liquidity Injector</h3>
                        </div>
                        <div className="space-y-2 text-sm text-gray-300">
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                            <span>Add LP to Jupiter/Raydium</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                            <span>Set slippage + pair amount</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                            <span>Auto-confirm via wallet</span>
                          </div>
                          <div className="mt-4 text-xs text-red-300 italic">
                            "Adequate liquidity is the foundation of a thriving token ecosystem."
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-[#272145] border-0 shadow-md overflow-hidden">
                      <div className="h-2 bg-gradient-to-r from-red-500 to-rose-400"></div>
                      <CardContent className="p-5">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="bg-red-500/20 p-2 rounded-full">
                            <Lock className="h-5 w-5 text-red-400" />
                          </div>
                          <h3 className="font-semibold text-white">LP Locker Integration</h3>
                        </div>
                        <div className="space-y-2 text-sm text-gray-300">
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                            <span>Lock liquidity for custom timeframes</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                            <span>Choose unlock date & backup wallet</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                            <span>Verifiable on-chain proof</span>
                          </div>
                          <div className="mt-4 text-xs text-red-300 italic">
                            "LP locks build trust and remove rug concerns for new investors."
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-[#272145] border-0 shadow-md overflow-hidden">
                      <div className="h-2 bg-gradient-to-r from-red-500 to-rose-400"></div>
                      <CardContent className="p-5">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="bg-red-500/20 p-2 rounded-full">
                            <MessageSquare className="h-5 w-5 text-red-400" />
                          </div>
                          <h3 className="font-semibold text-white">Launch Shill Pack</h3>
                        </div>
                        <div className="space-y-2 text-sm text-gray-300">
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                            <span>Auto-tweet token launch</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                            <span>Announce to Telegram + Discord</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                            <span>Enable trending pings (opt-in)</span>
                          </div>
                          <div className="mt-4 text-xs text-red-300 italic">
                            "Coordinated social pushes can 10x initial volume and attention."
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-[#272145] border-0 shadow-md overflow-hidden">
                      <div className="h-2 bg-gradient-to-r from-red-500 to-rose-400"></div>
                      <CardContent className="p-5">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="bg-red-500/20 p-2 rounded-full">
                            <LightbulbIcon className="h-5 w-5 text-red-400" />
                          </div>
                          <h3 className="font-semibold text-white">Expert Launch Strategy</h3>
                        </div>
                        <div className="space-y-2 text-sm text-gray-300">
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                            <span>Launch during low gas periods</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                            <span>Pre-position support wallets</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                            <span>Staged buying to demonstrate organic growth</span>
                          </div>
                          <div className="mt-4 text-xs text-red-300 italic">
                            "Strategic timing and buyer coordination are crucial for momentum."
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Performance Metrics */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <BarChartIcon className="h-5 w-5 text-red-400" />
                      <h3 className="text-lg font-medium text-white">Performance Metrics</h3>
                    </div>
                    <div className="bg-[#272145] p-4 rounded-lg">
                      <div className="flex flex-col md:flex-row gap-4 items-center">
                        <div className="w-full md:w-2/3">
                          <p className="text-sm text-gray-300 mb-2">Average 7-Day Performance After DEX Boost</p>
                          <ResponsiveContainer width="100%" height={200}>
                            <LineChart data={dexPerformanceData}>
                              <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                              <XAxis dataKey="name" stroke="#aaa" />
                              <YAxis yAxisId="left" stroke="#ef4444" />
                              <YAxis yAxisId="right" orientation="right" stroke="#aaa" />
                              <Tooltip 
                                contentStyle={{ 
                                  backgroundColor: "#1f1b3a", 
                                  border: "none", 
                                  borderRadius: "4px" 
                                }} 
                              />
                              <Legend />
                              <Line 
                                yAxisId="left" 
                                type="monotone" 
                                dataKey="volume" 
                                stroke="#ef4444" 
                                strokeWidth={2} 
                                name="Volume (SOL)"
                              />
                              <Line 
                                yAxisId="right" 
                                type="monotone" 
                                dataKey="price" 
                                stroke="#fca5a5" 
                                strokeWidth={2} 
                                name="Price (SOL)"
                              />
                            </LineChart>
                          </ResponsiveContainer>
                        </div>
                        <div className="w-full md:w-1/3">
                          <p className="text-sm text-gray-300 mb-2">Success Rates</p>
                          <ResponsiveContainer width="100%" height={200}>
                            <PieChart>
                              <Tooltip 
                                contentStyle={{ 
                                  backgroundColor: "#1f1b3a", 
                                  border: "none", 
                                  borderRadius: "4px",
                                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
                                }} 
                              />
                              <Pie 
                                data={successRatesData} 
                                cx="50%" 
                                cy="50%" 
                                innerRadius={60}
                                outerRadius={80} 
                                fill="#8884d8" 
                                paddingAngle={2}
                                dataKey="value"
                              >
                                {successRatesData.map((entry, index) => (
                                  <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                              </Pie>
                              <Legend
                                verticalAlign="bottom"
                                height={36}
                                iconType="circle"
                              />
                            </PieChart>
                          </ResponsiveContainer>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Pricing Section */}
                  <div className="bg-gradient-to-r from-red-900/50 to-rose-800/50 rounded-lg p-5 border border-red-700">
                    <div className="flex items-start gap-4">
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2 flex items-center">
                          <DollarSign className="h-5 w-5 mr-1 text-red-300" />
                          Pricing & Timeline
                        </h3>
                        <p className="text-gray-300 text-sm">Our booster package includes all services for a flat fee, with 10% contributing to community development.</p>
                        
                        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="flex items-center gap-3">
                            <div className="bg-red-500/20 h-10 w-10 rounded-full flex items-center justify-center">
                              <DollarSign className="h-5 w-5 text-red-300" />
                            </div>
                            <div>
                              <p className="font-medium text-white">2 SOL</p>
                              <p className="text-xs text-gray-300">Complete Package</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="bg-red-500/20 h-10 w-10 rounded-full flex items-center justify-center">
                              <Clock className="h-5 w-5 text-red-300" />
                            </div>
                            <div>
                              <p className="font-medium text-white">24 Hours</p>
                              <p className="text-xs text-gray-300">Setup Timeline</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-4 flex flex-wrap gap-2">
                          <span className="px-2 py-1 bg-red-900/50 text-red-200 text-xs rounded-full border border-red-700">
                            <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-1"></span>
                            Jupiter Support
                          </span>
                          <span className="px-2 py-1 bg-red-900/50 text-red-200 text-xs rounded-full border border-red-700">
                            <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-1"></span>
                            Raydium Support
                          </span>
                          <span className="px-2 py-1 bg-red-900/50 text-red-200 text-xs rounded-full border border-red-700">
                            <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-1"></span>
                            Post-Launch Support
                          </span>
                        </div>
                      </div>
                      <div className="hidden lg:flex items-center justify-center">
                        <div className="bg-red-500/20 h-24 w-24 rounded-full flex flex-col items-center justify-center border-2 border-red-500/30">
                          <svg className="w-20 h-20" viewBox="0 0 36 36">
                            <path
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                              fill="none"
                              stroke="#444"
                              strokeWidth="2"
                              strokeDasharray="100, 100"
                            />
                            <path
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                              fill="none"
                              stroke="#10b981"
                              strokeWidth="2"
                              strokeDasharray="78, 100"
                            />
                          </svg>
                          <div className="absolute text-xl font-bold text-white">78%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Action Button */}
                  <div className="flex justify-end">
                    <Button className="bg-red-600 hover:bg-red-700 text-white px-6">
                      Start Boosting
                    </Button>
                  </div>
                </div>
              </div>
            </ConsistentDialogContent>
          </Dialog>
        </Section>

        <footer className="text-center text-sm text-gray-500 pt-10">
          🚀 Powered by degens. Made for meme token warriors. Built on Solana.
        </footer>
      </div>
    </div>
  );
} 