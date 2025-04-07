import { NextResponse } from "next/server";
import {
  Connection,
  PublicKey,
  TokenAccountsFilter,
  ParsedAccountData,
} from "@solana/web3.js";
import { TOKEN_PROGRAM_ID } from "@solana/spl-token";

// Interface for token data returned by the scanner
export interface TokenData {
  mintAddress: string;
  symbol: string;
  name: string;
  iconUrl?: string;
  mintAuthority: string | null;
  freezeAuthority: string | null;
  decimals: number;
  totalSupply: string;
  holders?: number;
  isVerified?: boolean;
  lpInfo?: {
    totalLiquidity: string;
    locked: boolean;
    lockedPercentage?: number;
    lockedAmount?: string;
    expiryDate?: Date;
  };
}

/**
 * Validates a Solana token address
 * @param address The address to validate
 * @returns Whether the address is valid
 */
const isValidSolanaAddress = (address: string): boolean => {
  try {
    new PublicKey(address);
    return true;
  } catch (error) {
    return false;
  }
};

/**
 * POST handler for token scanning
 */
export async function POST(request: Request) {
  try {
    const { tokenAddress } = await request.json();

    if (!tokenAddress) {
      return NextResponse.json(
        { error: "Token address is required" },
        { status: 400 }
      );
    }

    if (!isValidSolanaAddress(tokenAddress)) {
      return NextResponse.json(
        { error: "Invalid Solana address format" },
        { status: 400 }
      );
    }

    // Connect to Solana
    const rpcUrl = process.env.NEXT_PUBLIC_SOLANA_RPC_URL || "https://api.devnet.solana.com";
    const connection = new Connection(rpcUrl);
    const mint = new PublicKey(tokenAddress);

    try {
      // Get token supply and mint info
      const tokenSupply = await connection.getTokenSupply(mint);
      const mintInfo = await connection.getParsedAccountInfo(mint);
      
      if (!mintInfo.value || !mintInfo.value.data) {
        return NextResponse.json(
          { error: "Token not found" },
          { status: 404 }
        );
      }
      
      // Parse account data
      const parsedData = (mintInfo.value.data as ParsedAccountData).parsed;
      const tokenInfo = parsedData.info;
      
      // Get token accounts to estimate holders
      const tokenAccountsFilter: TokenAccountsFilter = {
        programId: TOKEN_PROGRAM_ID,
      };
      
      // In a production app, we would query actual holders
      // For the MVP, we'll simulate this data
      const holdersCount = Math.floor(Math.random() * 1000) + 50;
      
      // Simulating LP info - in a real implementation, this would check DEX contracts
      const lpInfo = {
        totalLiquidity: `${Math.random() * 100000} SOL`,
        locked: Math.random() > 0.5,
        lockedPercentage: Math.floor(Math.random() * 100),
        lockedAmount: `${Math.random() * 50000} SOL`,
        expiryDate: new Date(Date.now() + Math.random() * 30 * 24 * 60 * 60 * 1000),
      };

      const tokenData: TokenData = {
        mintAddress: tokenAddress,
        symbol: tokenInfo.symbol || "UNKNOWN",
        name: tokenInfo.name || "Unknown Token",
        mintAuthority: tokenInfo.mintAuthority,
        freezeAuthority: tokenInfo.freezeAuthority,
        decimals: tokenInfo.decimals,
        totalSupply: (Number(tokenSupply.value.amount) / Math.pow(10, tokenInfo.decimals)).toString(),
        holders: holdersCount,
        isVerified: false, // Would need additional verification service
        lpInfo,
      };

      return NextResponse.json(tokenData);
    } catch (error) {
      console.error("Error scanning token:", error);
      return NextResponse.json(
        { error: "Error retrieving token information" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Unexpected error:", error);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
} 