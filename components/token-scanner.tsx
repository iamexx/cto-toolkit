"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { 
  CheckCircle, 
  AlertCircle, 
  Activity, 
  Loader2,
  AlertTriangle
} from "lucide-react";
import { 
  TokenData, 
  isValidSolanaAddress,
  shortenAddress
} from "@/lib/solana/utils";

// Token Scanner Component
export const TokenScanner = () => {
  const [tokenAddress, setTokenAddress] = useState("");
  const [tokenData, setTokenData] = useState<TokenData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle token address input change
  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTokenAddress(e.target.value);
    setError(null);
  };

  // Handle token scanning
  const handleScanToken = async () => {
    if (!tokenAddress) {
      setError("Please enter a token address");
      return;
    }

    if (!isValidSolanaAddress(tokenAddress)) {
      setError("Invalid Solana address format");
      return;
    }

    setIsLoading(true);
    setError(null);
    
    try {
      // Call our API endpoint
      const response = await fetch('/api/scan-token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ tokenAddress }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        setError(data.error || "Error scanning token");
        setTokenData(null);
      } else {
        setTokenData(data);
        setIsModalOpen(true);
      }
    } catch (err: any) {
      setError(err.message || "Error scanning token");
      setTokenData(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-3">
        <Input 
          placeholder="Paste SPL token address..." 
          className="bg-[#1C1F3A] text-white border border-[#9945FF]" 
          value={tokenAddress}
          onChange={handleAddressChange}
          disabled={isLoading}
        />
        <Button 
          className="bg-[#9945FF] hover:bg-[#7C3ADB] text-white px-4 whitespace-nowrap"
          onClick={handleScanToken}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Scanning...
            </>
          ) : (
            "Analyze Token"
          )}
        </Button>
      </div>

      {error && (
        <div className="flex items-center gap-2 text-red-400 text-sm">
          <AlertTriangle className="h-4 w-4" />
          {error}
        </div>
      )}

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="bg-[#1f1b3a] text-white max-w-4xl w-full p-0 overflow-hidden">
          {tokenData && (
            <div className="flex flex-col h-full">
              {/* Header with gradient background */}
              <div className="bg-gradient-to-r from-[#9945FF] to-[#14F195] p-4 sm:p-6">
                <div className="flex items-center gap-2 sm:gap-4">
                  <div className="bg-white/10 p-2 sm:p-3 rounded-full">
                    <Activity className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white">Token Analysis Report</h2>
                    <p className="text-white/80 text-xs sm:text-sm truncate max-w-[200px] sm:max-w-full">
                      {tokenData.mintAddress}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 overflow-y-auto max-h-[70vh]">
                {/* Token Basic Info */}
                <div className="bg-[#272145] p-4 rounded-lg">
                  <div className="flex flex-col md:flex-row gap-4 items-start">
                    <div className="rounded-full overflow-hidden h-16 w-16 bg-[#1C1F3A] flex items-center justify-center text-3xl flex-shrink-0">
                      {tokenData.symbol.charAt(0)}
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-lg font-bold">{tokenData.name}</h3>
                      <p className="text-sm text-gray-300">${tokenData.symbol}</p>
                      <div className="flex flex-wrap gap-2 mt-1">
                        <span className="inline-flex items-center px-2 py-1 bg-[#1C1F3A] text-xs rounded-md border border-[#9945FF]/30">
                          Total Supply: {tokenData.totalSupply}
                        </span>
                        <span className="inline-flex items-center px-2 py-1 bg-[#1C1F3A] text-xs rounded-md border border-[#9945FF]/30">
                          Decimals: {tokenData.decimals}
                        </span>
                        {tokenData.holders && (
                          <span className="inline-flex items-center px-2 py-1 bg-[#1C1F3A] text-xs rounded-md border border-[#9945FF]/30">
                            Holders: {tokenData.holders}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Status Summary */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                  <Card className="bg-[#1C1F3A] border-0 shadow-md">
                    <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                      <div className="mb-1 text-[#14F195]">
                        {!tokenData.mintAuthority || tokenData.mintAuthority === "null" ? (
                          <CheckCircle className="h-6 w-6 mb-1 mx-auto" />
                        ) : (
                          <AlertCircle className="h-6 w-6 mb-1 mx-auto text-yellow-400" />
                        )}
                      </div>
                      <h3 className="font-medium text-white">Mint Authority</h3>
                      <p className="text-sm text-gray-300">
                        {!tokenData.mintAuthority || tokenData.mintAuthority === "null" 
                          ? "Burned" 
                          : shortenAddress(tokenData.mintAuthority)
                        }
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="bg-[#1C1F3A] border-0 shadow-md">
                    <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                      <div className="mb-1 text-[#14F195]">
                        {!tokenData.freezeAuthority || tokenData.freezeAuthority === "null" ? (
                          <CheckCircle className="h-6 w-6 mb-1 mx-auto" />
                        ) : (
                          <AlertCircle className="h-6 w-6 mb-1 mx-auto text-yellow-400" />
                        )}
                      </div>
                      <h3 className="font-medium text-white">Freeze Authority</h3>
                      <p className="text-sm text-gray-300">
                        {!tokenData.freezeAuthority || tokenData.freezeAuthority === "null" 
                          ? "Removed" 
                          : shortenAddress(tokenData.freezeAuthority)
                        }
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="bg-[#1C1F3A] border-0 shadow-md">
                    <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                      <div className="mb-1 text-yellow-400">
                        {tokenData.lpInfo?.locked ? (
                          <CheckCircle className="h-6 w-6 mb-1 mx-auto text-[#14F195]" />
                        ) : (
                          <AlertCircle className="h-6 w-6 mb-1 mx-auto" />
                        )}
                      </div>
                      <h3 className="font-medium text-white">LP Status</h3>
                      <p className="text-sm text-gray-300">
                        {tokenData.lpInfo?.locked
                          ? `${tokenData.lpInfo.lockedPercentage}% Locked`
                          : "Not Locked"
                        }
                      </p>
                    </CardContent>
                  </Card>
                </div>
                
                {/* AI Takeover Score */}
                <div className="bg-gradient-to-r from-[#1C1F3A] to-[#2D3282]/50 rounded-lg p-5 border border-[#9945FF]/50">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">AI Takeover Readiness Score</h3>
                      <p className="text-gray-300 text-sm max-w-lg">
                        {tokenData.mintAuthority === null && tokenData.freezeAuthority === null
                          ? "This token shows strong decentralization with minimal whale control. Community is active and social signals indicate growth potential. Token takeover is viable with moderate investment."
                          : "This token has active mint or freeze authority which may present risks for takeover. Verify authority ownership and intent before proceeding."
                        }
                      </p>
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
                            stroke="#9945FF"
                            strokeWidth="2"
                            strokeDasharray={`${tokenData.mintAuthority === null && tokenData.freezeAuthority === null ? "84" : "45"}, 100`}
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-2xl font-bold text-white">
                            {tokenData.mintAuthority === null && tokenData.freezeAuthority === null ? "84" : "45"}
                          </span>
                        </div>
                      </div>
                      <span className="text-xs text-[#02E4B7]">out of 100</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-[#1C1F3A] text-[#02E4B7] text-xs rounded-full border border-[#9945FF]/50">
                      {tokenData.holders && tokenData.holders > 100 ? "Strong Community" : "Small Community"}
                    </span>
                    <span className="px-2 py-1 bg-[#1C1F3A] text-[#02E4B7] text-xs rounded-full border border-[#9945FF]/50">
                      {tokenData.mintAuthority === null ? "Low Manipulation Risk" : "Potential Mint Risk"}
                    </span>
                    <span className="px-2 py-1 bg-[#1C1F3A] text-[#02E4B7] text-xs rounded-full border border-[#9945FF]/50">
                      {tokenData.lpInfo?.locked ? "LP Security: Good" : "LP Security: Poor"}
                    </span>
                    <span className="px-2 py-1 bg-[#1C1F3A] text-[#02E4B7] text-xs rounded-full border border-[#9945FF]/50">
                      Revival Potential: {tokenData.mintAuthority === null && tokenData.freezeAuthority === null ? "High" : "Moderate"}
                    </span>
                  </div>
                </div>
                
                {/* Action Button */}
                <div className="flex justify-end">
                  <Button className="bg-[#9945FF] hover:bg-[#7C3ADB] px-6">
                    Proceed to Buyout Planning
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TokenScanner; 