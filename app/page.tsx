import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Rocket, Users, TrendingUp, ExternalLink, Flame, ArrowUp, Clock, BarChart4, MessageSquare } from "lucide-react";
import Link from "next/link";

interface CTOCardProps {
  name: string;
  ticker: string;
  logo: React.ReactNode;
  description: string;
  marketCap: string;
  telegram: string;
  dateOfCTO: string;
  growth: string;
  ctoLead: string;
  telegramLink: string;
  twitterLink: string;
  rating: number;
  isTrending?: boolean;
  color?: "purple" | "blue" | "green" | "pink";
}

const CTOCard = ({ 
  name, 
  ticker, 
  logo, 
  description, 
  marketCap, 
  telegram, 
  dateOfCTO,
  growth,
  ctoLead,
  telegramLink,
  twitterLink,
  rating,
  isTrending = false,
  color = "purple"
}: CTOCardProps) => {
  const gradientColors = {
    purple: "from-[#9945FF] to-[#14F195]",
    blue: "from-[#00C2FF] to-[#02E4B7]",
    green: "from-[#14F195] to-[#00C2FF]",
    pink: "from-[#FA62FF] to-[#9945FF]"
  };
  
  // Generate star rating
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={`text-lg ${i <= rating ? 'text-yellow-400' : 'text-gray-600'}`}>
          ★
        </span>
      );
    }
    return stars;
  };
  
  return (
    <Card className={`bg-[#1C1F3A] border-0 shadow-lg overflow-hidden relative ${isTrending ? 'ring-2 ring-[#FC8E00]' : ''}`}>
      {isTrending && (
        <div className="absolute top-0 right-0 bg-[#FC8E00] text-black font-bold text-xs px-3 py-1 rounded-bl-md flex items-center">
          <Flame className="h-3 w-3 mr-1" />
          TRENDING
        </div>
      )}
      <div className={`h-2 bg-gradient-to-r ${gradientColors[color]}`}></div>
      <CardContent className="p-5">
        <div className="flex items-start gap-4">
          <div className="rounded-full overflow-hidden h-16 w-16 bg-[#272145] flex items-center justify-center text-3xl flex-shrink-0">
            {logo}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-start">
              <h3 className="font-bold text-lg text-white mb-1 flex items-center">
                {name} <span className="text-gray-400 ml-2 text-sm font-normal truncate">${ticker}</span>
              </h3>
              <div className="flex">{renderStars()}</div>
            </div>
            <p className="text-sm text-gray-300 mb-2 line-clamp-2">{description}</p>
            <div className="flex items-center gap-2 mb-1">
              <div className="text-xs text-gray-400">CTO Lead:</div>
              <div className="text-xs font-medium text-white">{ctoLead}</div>
            </div>
          </div>
        </div>
        
        <div className="mt-4 grid grid-cols-2 gap-3 bg-[#161A33] p-3 rounded-lg">
          <div className="flex flex-col">
            <span className="text-xs text-gray-400 flex items-center">
              <BarChart4 className="h-3 w-3 text-[#02E4B7] mr-1.5" />
              Market Cap
            </span>
            <span className="text-sm text-white font-medium">{marketCap}</span>
          </div>
          
          <div className="flex flex-col">
            <span className="text-xs text-gray-400 flex items-center">
              <Clock className="h-3 w-3 text-[#02E4B7] mr-1.5" />
              CTO Date
            </span>
            <span className="text-sm text-white font-medium">{dateOfCTO}</span>
          </div>
          
          <div className="flex flex-col">
            <span className="text-xs text-gray-400 flex items-center">
              <MessageSquare className="h-3 w-3 text-[#02E4B7] mr-1.5" />
              Community
            </span>
            <span className="text-sm text-white font-medium">{telegram} members</span>
          </div>
          
          <div className="flex flex-col">
            <span className="text-xs text-gray-400 flex items-center">
              <ArrowUp className="h-3 w-3 text-[#02E4B7] mr-1.5" />
              Growth
            </span>
            <span className={`text-sm font-medium ${growth.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
              {growth}
            </span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mt-4">
          <Button className="bg-[#1f1b3a] hover:bg-[#272145] text-white border border-[#272145] text-xs px-3 py-1 h-8">
            View Details
          </Button>
          
          <div className="flex ml-auto gap-2">
            <a 
              href={telegramLink} 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#229ED9]/10 text-[#229ED9] border border-[#229ED9]/30 rounded-md px-2 py-1 text-xs hover:bg-[#229ED9]/20"
            >
              <svg className="h-3 w-3 mr-1" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm5.8 8.1c-.2 1.8-.9 6.3-1.3 8.3-.2.8-.5 1.1-.8 1.1-.7.1-1.2-.5-1.9-1-1-.7-1.6-1.2-2.6-1.9-1.1-.8-.4-1.2.2-1.9.2-.2 3.1-2.8 3.2-3.1 0 0 0-.2-.2-.2s-.5.1-.7.1c-.3.1-1.7 1.1-2.5 1.7-1.1.8-1.9.8-2.3.8-1.7 0-3.2-1.1-3.2-1.1.8-.3 1.7-.6 2.5-1 1.7-.7 3.4-1.5 4.3-1.9.7-.1 3.5-1.1 3.5-1.1s.9-.3.9.4v.7z" />
              </svg>
              Telegram
            </a>
            <a 
              href={twitterLink} 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#1DA1F2]/10 text-[#1DA1F2] border border-[#1DA1F2]/30 rounded-md px-2 py-1 text-xs hover:bg-[#1DA1F2]/20"
            >
              <svg className="h-3 w-3 mr-1" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z" />
              </svg>
              Twitter
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default function Home() {
  const featuredCTOs = [
    {
      name: "Frog Empire",
      ticker: "FROGEMP",
      logo: "🐸",
      description: "The devs abandoned, but the frogs united. Now building the next big memecoin empire on Solana with community governance.",
      marketCap: "$3.2M",
      telegram: "5,230",
      dateOfCTO: "Apr 12, 2023",
      growth: "+127% (30d)",
      ctoLead: "KingRibbit",
      telegramLink: "https://t.me/frogempire",
      twitterLink: "https://twitter.com/frogemp",
      rating: 5,
      color: "green" as const,
      isTrending: true
    },
    {
      name: "Degen Takeover",
      ticker: "DEGENX",
      logo: "👑",
      description: "What started as a rug became a revolution. Fully community operated with advanced tokenomics and utility development.",
      marketCap: "$1.7M",
      telegram: "3,850",
      dateOfCTO: "Feb 28, 2023",
      growth: "+42% (30d)",
      ctoLead: "DegenKing",
      telegramLink: "https://t.me/degentakeover",
      twitterLink: "https://twitter.com/degenx",
      rating: 4,
      color: "purple" as const
    },
    {
      name: "Moon Pirates",
      ticker: "MPIRATE",
      logo: "🏴‍☠️",
      description: "From abandoned ship to pirate fleet. This community takeover is building treasure chests of value with innovative NFT integrations.",
      marketCap: "$950K",
      telegram: "2,740",
      dateOfCTO: "May 5, 2023",
      growth: "+18% (30d)",
      ctoLead: "CaptainHODL",
      telegramLink: "https://t.me/moonpirates",
      twitterLink: "https://twitter.com/mpirate",
      rating: 3,
      color: "blue" as const
    },
    {
      name: "Phoenix Protocol",
      ticker: "PHNX",
      logo: "🔥",
      description: "Rising from the ashes of a dead project, this token has been completely revitalized by its community with innovative staking rewards.",
      marketCap: "$5.1M",
      telegram: "8,120",
      dateOfCTO: "Jan 15, 2023",
      growth: "+215% (30d)",
      ctoLead: "AshMaker",
      telegramLink: "https://t.me/phoenixprotocol",
      twitterLink: "https://twitter.com/phnxprotocol",
      rating: 4,
      color: "pink" as const
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0A0F25] via-[#14226F] to-[#0E1B52] text-white">
      {/* Toolkit Button in Top Right */}
      <div className="fixed top-4 right-4 z-50">
        <Link href="/cto-tools" className="flex items-center justify-center bg-[#1C1F3A]/80 backdrop-blur-sm border-2 border-[#02E4B7] text-[#02E4B7] hover:bg-[#02E4B7]/10 px-4 py-2 rounded-lg shadow-lg">
          <Users className="h-5 w-5 mr-2" />
          <span className="font-medium">Open Toolkit</span>
        </Link>
      </div>
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-20 left-1/4 w-72 h-72 bg-[#9945FF]/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-[#14F195]/10 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 pt-32 pb-20 relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#9945FF] to-[#14F195]">
            CTO BIACH
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 max-w-3xl mx-auto">
            Where abandoned tokens find new life through community takeovers
          </h2>
          
          <p className="text-gray-300 text-center max-w-2xl mx-auto mb-10">
            Discover, track and participate in the most promising Community Takeover Operations (CTOs) in the Solana ecosystem. From rugs to riches - community power unleashed.
          </p>
          
          <div className="flex justify-center mb-16">
            <Button className="bg-[#9945FF] hover:bg-[#7C3ADB] text-white px-6 py-6 text-lg font-medium relative animate-pulse">
              <Sparkles className="h-5 w-5 mr-2" /> Explore CTOs
              <span className="absolute inset-0 rounded-md bg-white/20 animate-ping opacity-75"></span>
            </Button>
          </div>
          
          {/* Featured CTOs Section - MOVED UP */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Featured CTOs</h2>
              <Button className="bg-transparent hover:bg-[#1C1F3A] text-[#14F195] border border-[#14F195] text-sm">
                View All
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredCTOs.map((cto, index) => (
                <CTOCard key={index} {...cto} />
              ))}
            </div>
          </div>
          
          <div className="bg-[#1C1F3A]/60 backdrop-blur-sm rounded-xl p-6 max-w-3xl mx-auto">
            <div className="flex items-center mb-4">
              <TrendingUp className="h-5 w-5 text-[#02E4B7] mr-2" />
              <h3 className="text-xl font-bold">CTO Bot Live Updates</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Our Telegram bot continuously pushes updates on community takeovers and alerts groups that added it.
            </p>
            <div className="space-y-2">
              <div className="bg-[#272145] p-3 rounded-md">
                <div className="flex items-center text-xs text-gray-400">
                  <Clock className="h-3 w-3 mr-1" />
                  <span>2 hours ago</span>
                </div>
                <p className="text-sm mt-1">
                  <span className="text-[#14F195] font-semibold">$FROGEMP</span> community just voted on treasury allocation - 70% for marketing, 30% for development.
                </p>
              </div>
              <div className="bg-[#272145] p-3 rounded-md">
                <div className="flex items-center text-xs text-gray-400">
                  <Clock className="h-3 w-3 mr-1" />
                  <span>5 hours ago</span>
                </div>
                <p className="text-sm mt-1">
                  <span className="text-[#FA62FF] font-semibold">$CORGICTO</span> detected - Dev disappeared 6hrs ago, community forming in Telegram, LP looks healthy.
                </p>
              </div>
              <div className="bg-[#272145] p-3 rounded-md">
                <div className="flex items-center text-xs text-gray-400">
                  <Clock className="h-3 w-3 mr-1" />
                  <span>12 hours ago</span>
                </div>
                <p className="text-sm mt-1">
                  <span className="text-[#00C2FF] font-semibold">$MPIRATE</span> just released their community-built roadmap and launched voting DAO.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* How It Works Section */}
      <div className="bg-[#1C1F3A]/60 backdrop-blur-sm py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">How CTOs Work</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#272145] p-6 rounded-xl">
              <div className="w-12 h-12 bg-gradient-to-r from-[#9945FF] to-[#14F195] rounded-full flex items-center justify-center text-xl font-bold mb-4">1</div>
              <h3 className="text-lg font-bold mb-2">Identification</h3>
              <p className="text-gray-300">
                When a token creator abandons their project, our systems detect unusual on-chain activity and alert the community.
              </p>
            </div>
            
            <div className="bg-[#272145] p-6 rounded-xl">
              <div className="w-12 h-12 bg-gradient-to-r from-[#9945FF] to-[#14F195] rounded-full flex items-center justify-center text-xl font-bold mb-4">2</div>
              <h3 className="text-lg font-bold mb-2">Organization</h3>
              <p className="text-gray-300">
                Community members rally together to form a DAO, establish leadership, and create a new vision for the project.
              </p>
            </div>
            
            <div className="bg-[#272145] p-6 rounded-xl">
              <div className="w-12 h-12 bg-gradient-to-r from-[#9945FF] to-[#14F195] rounded-full flex items-center justify-center text-xl font-bold mb-4">3</div>
              <h3 className="text-lg font-bold mb-2">Resurrection</h3>
              <p className="text-gray-300">
                Using our CTO toolkit, the community rebuilds the project, implements a roadmap, and brings new life to the token.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-[#9945FF]/20 to-[#14F195]/20 rounded-3xl p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to take over a project?</h2>
          <p className="text-gray-300 max-w-xl mx-auto mb-8">
            Get instant alerts for emerging takeovers, connect with like-minded community leaders, and access the tools to turn abandoned projects into winners.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/cto-tools" className="inline-flex items-center justify-center bg-gradient-to-r from-[#9945FF] to-[#14F195] hover:from-[#7C3ADB] hover:to-[#10CC7E] text-white px-6 py-6 text-lg font-medium rounded-md">
              <Sparkles className="h-5 w-5 mr-2" /> Access CTO Toolkit
            </Link>
            <a 
              href="https://t.me/cto_biach" 
          target="_blank"
          rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#1C1F3A]/80 border border-[#14F195] text-[#14F195] px-6 py-6 text-lg font-medium rounded-md hover:bg-[#14F195]/10"
            >
              Join Telegram Community
              <ExternalLink className="h-4 w-4 ml-2" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-[#1C1F3A]/80 backdrop-blur-sm py-10 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#9945FF] to-[#14F195]">
                CTO BIACH
              </h2>
              <p className="text-gray-400 text-sm mt-1">Community Takeover Operations: By Individuals Achieving Collective Heroics</p>
            </div>
            
            <div className="flex gap-6">
              <a href="#" className="text-gray-300 hover:text-[#14F195]">Twitter</a>
              <a href="#" className="text-gray-300 hover:text-[#14F195]">Telegram</a>
              <a href="#" className="text-gray-300 hover:text-[#14F195]">Discord</a>
              <a href="#" className="text-gray-300 hover:text-[#14F195]">GitHub</a>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2023 CTO BIACH. All rights reserved.</p>
            <p className="text-gray-400 text-sm flex items-center">
              Powered by weed and degeneracy <span className="ml-1 text-lg">🦧</span>
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
