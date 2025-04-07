"use client";

import { useWallet } from "@solana/wallet-adapter-react";
import { useConnection } from "@solana/wallet-adapter-react";
import { useState, useEffect } from "react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import WalletConnectButton from "./ui/wallet-connect-button";

export const WalletTest = () => {
  const { connection } = useConnection();
  const { publicKey, connected, disconnect } = useWallet();
  const [balance, setBalance] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted to avoid hydration errors
  useEffect(() => {
    setMounted(true);
  }, []);

  // Fetch balance when wallet is connected
  useEffect(() => {
    if (publicKey && connection) {
      setIsLoading(true);
      connection
        .getBalance(publicKey)
        .then((balance) => {
          setBalance(balance / LAMPORTS_PER_SOL);
        })
        .catch((error) => {
          console.error("Error fetching balance:", error);
          setBalance(null);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      setBalance(null);
    }
  }, [connection, publicKey]);

  if (!mounted) {
    return null;
  }

  return (
    <div className="bg-[#1C1F3A]/80 backdrop-blur-sm rounded-lg p-6 border border-[#9945FF]/30 shadow-lg max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4 text-white">Wallet Connection Test</h2>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-gray-300">Connection Status:</span>
          <span className={`font-medium ${connected ? "text-green-400" : "text-red-400"}`}>
            {connected ? "Connected" : "Disconnected"}
          </span>
        </div>
        
        {connected && publicKey ? (
          <>
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Wallet Address:</span>
              <span className="font-mono text-sm bg-[#272145] p-1 rounded truncate max-w-[200px]">
                {publicKey.toString()}
              </span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Network:</span>
              <span className="font-medium text-[#14F195]">Devnet</span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Balance:</span>
              {isLoading ? (
                <Loader2 className="h-4 w-4 animate-spin text-[#14F195]" />
              ) : (
                <span className="font-medium text-white">{balance !== null ? `${balance.toFixed(4)} SOL` : "Error"}</span>
              )}
            </div>
            
            <Button 
              onClick={() => disconnect()} 
              className="w-full bg-red-500 hover:bg-red-600 text-white mt-4"
            >
              Disconnect
            </Button>
          </>
        ) : (
          <div className="mt-4">
            <WalletConnectButton className="w-full bg-[#9945FF] hover:bg-[#7C3ADB] text-white" />
          </div>
        )}
        
        <div className="mt-6 text-xs text-gray-400">
          <p>Note: This is connected to the Solana Devnet. Use a devnet wallet for testing.</p>
          <p className="mt-1">To get devnet SOL, use the <a href="https://solfaucet.com/" target="_blank" rel="noopener noreferrer" className="text-[#14F195] hover:underline">Solana Faucet</a>.</p>
        </div>
      </div>
    </div>
  );
};

export default WalletTest; 