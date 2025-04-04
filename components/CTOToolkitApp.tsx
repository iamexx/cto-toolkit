"use client";

import React, { useState, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Sparkles, Wallet, Globe, Users, TrendingUp, LucideIcon } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface SectionProps {
  icon: LucideIcon;
  title: string;
  children: ReactNode;
  borderColor: string;
}

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-white px-4 py-10">
      <div className="relative max-w-4xl mx-auto space-y-10 pt-20">
        {/* Wallet Connect and User Info */}
        <div className="absolute top-4 right-4 text-right space-y-1 z-50">
          <Button className="bg-white text-black font-bold px-4 py-1 text-sm hover:bg-gray-200">
            🔐 Connect Wallet
          </Button>
          <div className="text-xs text-gray-400">👤 Logged in as: <span className="text-white font-semibold">Adem The CTO King</span></div>
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
            <DialogContent className="bg-[#1f1b3a] text-white max-w-2xl w-full">
              <DialogHeader>
                <DialogTitle className="text-white text-2xl">📊 Token Analysis Report</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 text-sm text-gray-300">
                <p>🔍 Token Overview:</p>
                <ul className="list-disc list-inside">
                  <li>Mint Authority: Burned ✅</li>
                  <li>Freeze Authority: Removed ✅</li>
                  <li>LP Status: 90% locked</li>
                  <li>Top 10 Holders: Control 43% of supply</li>
                  <li>Holder Churn: Low (Strong Diamond Hands 🧱)</li>
                </ul>
                <p>📈 Activity Chart (24h Volume vs. Transactions)</p>
                <div className="h-48 bg-white/10 rounded-md p-2 text-center text-gray-400">
                  [Graph Placeholder]
                </div>
                <p>🧠 AI Takeover Readiness Score: 84/100</p>
                <p className="italic">"This token shows strong decentralization and hype potential. Community takeover is viable."</p>
              </div>
            </DialogContent>
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
            <DialogContent className="bg-[#1f1b3a] text-white max-w-2xl w-full">
              <DialogHeader>
                <DialogTitle className="text-white text-2xl">💸 Buyout Strategy Breakdown</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 text-sm text-gray-300">
                <p>💰 Estimated Cost:</p>
                <ul className="list-disc list-inside">
                  <li>Top 5 Holder Position: ~31 SOL</li>
                  <li>Slippage Buffer: 2.5%</li>
                  <li>Total with Fees: ~32.2 SOL</li>
                </ul>
                <p>👥 Holder Landscape:</p>
                <ul className="list-disc list-inside">
                  <li>Whale Wallets: 3 (All active traders)</li>
                  <li>Community Wallet: Exists (but low funds)</li>
                </ul>
                <p>📊 Ownership Timeline Projection</p>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={ownershipData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                    <XAxis dataKey="day" stroke="#aaa" />
                    <YAxis stroke="#aaa" />
                    <Tooltip contentStyle={{ backgroundColor: "#2d294a", border: "none" }} />
                    <Line type="monotone" dataKey="ownership" stroke="#facc15" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
                <p>🧠 Strategy Tip:</p>
                <p className="italic">
                  "Coordinate with dormant holders via Telegram to negotiate buys. Establish treasury control ASAP. Memes move markets."
                </p>
              </div>
            </DialogContent>
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
          <div className="mt-5 space-y-2">
            <h3 className="text-md font-semibold text-pink-300">📨 Telegram Message Templates</h3>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" className="bg-[#3a2e55] text-white border-pink-300 hover:bg-[#4b3a6c]" onClick={() => setSelectedMessage(telegramMessages.welcome)}>Welcome</Button>
              <Button variant="outline" className="bg-[#3a2e55] text-white border-pink-300 hover:bg-[#4b3a6c]" onClick={() => setSelectedMessage(telegramMessages.lore)}>CTO Lore</Button>
              <Button variant="outline" className="bg-[#3a2e55] text-white border-pink-300 hover:bg-[#4b3a6c]" onClick={() => setSelectedMessage(telegramMessages.buy)}>Buy Message</Button>
            </div>
            <Textarea value={selectedMessage} readOnly className="bg-[#2d294a] text-white border border-pink-400 mt-2" rows={5} />
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
            <DialogContent className="bg-[#1f1b3a] text-white max-w-2xl w-full">
              <DialogHeader>
                <DialogTitle className="text-white text-2xl">📣 Growth Engine</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 text-sm text-gray-300">
                <p>🎁 <strong>Airdrop Designer:</strong> Easily target early buyers, holders, or social participants with SPL token rewards.</p>
                <p>📢 <strong>Meme Contest Module:</strong> Upload memes, set rewards, and let the community vote. Most viral gets paid 💸</p>
                <p>🏆 <strong>Quest System:</strong></p>
                <ul className="list-disc list-inside ml-4">
                  <li>✔️ Retweet the latest announcement</li>
                  <li>✔️ Join Telegram</li>
                  <li>✔️ Add LP or tip the treasury</li>
                </ul>
                <p>📈 <strong>Live Leaderboard</strong> to reward active degens and reward tiers.</p>
                <div className="rounded-md bg-gradient-to-br from-green-400/20 to-green-700/20 p-4 border border-green-500">
                  <p className="font-bold text-green-300 text-md">🔥 Weekly Growth Boosters</p>
                  <p className="text-sm">Every Sunday: Snapshot your activity for the week and receive bonus rewards.</p>
                </div>
                <p className="italic">"Engaged communities grow faster. Make growth fun, competitive, and rewarding."</p>
              </div>
            </DialogContent>
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
            <DialogContent className="bg-[#1f1b3a] text-white max-w-2xl w-full">
              <DialogHeader>
                <DialogTitle className="text-white text-2xl">🌐 Landing Page Generator</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 text-sm text-gray-300">
                <p>✨ <strong>What You Get:</strong></p>
<div className="bg-[#30294b] border border-orange-400 rounded-md p-4 flex items-center justify-between text-sm text-white font-semibold">
  <span>⚡ FAST PAGE TO SHARE: <span className="text-yellow-300">cto.fun/yourpage_cto</span></span>
  <div className="space-x-2">
    <Dialog>
  <DialogTrigger asChild>
    <Button className="bg-yellow-500 hover:bg-yellow-600 text-black text-xs px-3 py-1">View</Button>
  </DialogTrigger>
  <DialogContent className="bg-[#1f1b3a] text-white max-w-2xl w-full">
    <DialogHeader>
      <DialogTitle className="text-yellow-400 text-2xl">⚡ Fresh CTO Takeover Page</DialogTitle>
    </DialogHeader>
    <div className="space-y-4 text-sm text-gray-300">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 bg-yellow-300 text-black font-extrabold text-xl flex items-center justify-center rounded-full shadow-lg">
          🐸
        </div>
        <div>
          <h3 className="text-lg font-bold text-white">$FROGKING</h3>
          <p className="text-xs text-gray-400">Verified by CTO Toolkit · 3m ago</p>
        </div>
      </div>
      <p className="text-yellow-300 font-semibold">"Dev gone. Frog lives. We're taking over."</p>
      <ul className="list-disc list-inside ml-4 text-white">
        <li>👑 CTO Lead: @ctolead0r</li>
        <li>📈 Price: 0.00037 SOL</li>
        <li>🪙 Supply: 690,000,000</li>
        <li>🔐 LP Locked: 100% for 3 months</li>
        <li>💬 Telegram: @FrogKingCTO</li>
        <li>🐦 Twitter: twitter.com/frogking_memes</li>
        <li>📜 Lore: "Frog was rugged. Meme is eternal. We rebuild from 0."</li>
      </ul>
      <div className="rounded-md bg-yellow-900/20 border border-yellow-600 p-4 text-center">
        <p className="font-semibold text-yellow-400">🔥 Share this takeover page:</p>
        <code className="text-white font-mono">https://cto.fun/frogking</code>
      </div>
    </div>
  </DialogContent>
</Dialog>
    <Button className="bg-yellow-500 hover:bg-yellow-600 text-black text-xs px-3 py-1">Copy</Button>
  </div>
</div>
                <ul className="list-disc list-inside ml-4">
                  <li>🖼️ Auto-generated branding (logo, banner, token colors)</li>
                  <li>🪙 Token stats: supply, price, chart, LP lock, contract info</li>
                  <li>📜 Lore section: Community takeover story + memes</li>
                  <li>📣 Embedded Twitter/X + Telegram links</li>
                  <li>👥 Team & community showcase</li>
                  <li>🔗 Custom shortlink (e.g. cto.page/[tokenname])</li>
                </ul>
                <p>🚀 <strong>Why It Matters:</strong> First impressions count. This site rallies new buyers, signals leadership, and shows it's not just another rug.</p>
                <div className="rounded-md bg-gradient-to-br from-orange-400/20 to-orange-700/20 p-4 border border-orange-500">
                  <p className="font-bold text-orange-300 text-md">✅ Template ready in 30 seconds</p>
                  <p className="text-sm">Drag and drop your images, add tweets, or let AI generate it for you.</p>
                </div>
                <p className="italic">"Your landing page is the meme portal to legitimacy. Own the vibe."</p>
              </div>
            </DialogContent>
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
            <DialogContent className="bg-[#1f1b3a] text-white max-w-2xl w-full">
              <DialogHeader>
                <DialogTitle className="text-white text-2xl">🚀 DEX Booster Suite</DialogTitle>
              </DialogHeader>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300">
                <div className="space-y-3">
                  <p>💧 <strong>Liquidity Injector</strong></p>
                  <ul className="list-disc list-inside ml-4">
                    <li>Add LP to Jupiter/Raydium</li>
                    <li>Set slippage + pair amount</li>
                    <li>Auto-confirm via wallet</li>
                  </ul>

                  <p>🔐 <strong>LP Locker Integration</strong></p>
                  <ul className="list-disc list-inside ml-4">
                    <li>Lock liquidity for X days</li>
                    <li>Choose unlock date & backup wallet</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <p>📣 <strong>Launch Shill Pack</strong></p>
                  <ul className="list-disc list-inside ml-4">
                    <li>Auto-tweet token launch</li>
                    <li>Announce to Telegram + Discord</li>
                    <li>Enable trending pings (opt-in)</li>
                  </ul>

                  <p>🧠 <strong>Tips for a Hot Launch</strong></p>
                  <ul className="list-disc list-inside ml-4">
                    <li>Launch at night (low gas)</li>
                    <li>Pre-buy support wallets</li>
                    <li>LP lock = trust signal</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 rounded-md bg-gradient-to-br from-red-400/20 to-red-700/20 p-4 border border-red-500">
                <p className="font-bold text-red-300 text-md">💰 2 SOL Booster Fee (includes 3 services)</p>
                <p className="text-sm">*10% goes to the Toolkit Treasury — thanks for supporting community tools.</p>
              </div>
            </DialogContent>
          </Dialog>
        </Section>

        <footer className="text-center text-sm text-gray-500 pt-10">
          🚀 Powered by degens. Made for meme token warriors. Built on Solana.
        </footer>
      </div>
    </div>
  );
} 