"use client";

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { FC, useState, useEffect } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";

interface WalletConnectButtonProps {
  className?: string;
}

export const WalletConnectButton: FC<WalletConnectButtonProps> = ({ className }) => {
  const { connected, publicKey } = useWallet();
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted to avoid hydration errors
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button 
        className={`bg-[#9945FF] hover:bg-[#7C3ADB] text-white ${className}`}
      >
        <Wallet className="mr-2 h-4 w-4" />
        Connect Wallet
      </Button>
    );
  }

  return <WalletMultiButton className={className} />;
};

export default WalletConnectButton; 