import { Button } from "@/components/ui/button";
import Link from "next/link";
import CTOToolkitApp from "@/components/CTOToolkitApp";
import { ArrowLeft } from "lucide-react";

export default function CTOToolsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0F25] via-[#14226F] to-[#0E1B52] text-white">
      <div className="sticky top-0 z-50 bg-[#1C1F3A]/80 backdrop-blur-sm border-b border-[#02E4B7]/30 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#9945FF] to-[#14F195]">
            CTO BIACH
          </Link>
          
          <Link href="/" className="inline-flex items-center text-[#02E4B7] hover:underline">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Homepage
          </Link>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">CTO Toolkit Suite</h1>
        <p className="text-gray-300 mb-8 max-w-2xl">
          Access our powerful tools designed specifically for community takeover operators. This toolkit has everything you need to revitalize abandoned tokens.
        </p>
      </div>
      
      <CTOToolkitApp />
    </div>
  );
} 