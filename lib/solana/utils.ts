import {
  Connection,
  PublicKey,
  LAMPORTS_PER_SOL,
  TokenAccountsFilter,
  AccountInfo,
  ParsedAccountData,
} from "@solana/web3.js";
import { TOKEN_PROGRAM_ID } from "@solana/spl-token";

// Connection to Solana - will use the ConnectionProvider in components
const getSolanaConnection = () => {
  // Use env var or fallback to devnet
  const rpcUrl = process.env.NEXT_PUBLIC_SOLANA_RPC_URL || "https://api.devnet.solana.com";
  return new Connection(rpcUrl);
};

// For now, we'll use a hardcoded program ID for SPL tokens
// In a production app, we would import this from @solana/spl-token

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
export const isValidSolanaAddress = (address: string): boolean => {
  try {
    new PublicKey(address);
    return true;
  } catch (error) {
    return false;
  }
};

/**
 * Scan a token by address to get detailed information
 * This function will query Solana blockchain for token info
 * @param tokenAddress The token mint address to scan
 * @returns TokenData with all available information
 */
export const scanToken = async (tokenAddress: string): Promise<TokenData | null> => {
  try {
    if (!isValidSolanaAddress(tokenAddress)) {
      throw new Error("Invalid token address");
    }

    const connection = getSolanaConnection();
    const mint = new PublicKey(tokenAddress);

    // Get token supply and mint info
    const tokenSupply = await connection.getTokenSupply(mint);
    const mintInfo = await connection.getParsedAccountInfo(mint);
    
    if (!mintInfo.value || !mintInfo.value.data) {
      throw new Error("Token not found");
    }
    
    // Parse account data
    const parsedData = (mintInfo.value.data as ParsedAccountData).parsed;
    const tokenInfo = parsedData.info;
    
    // Get token accounts to estimate holders
    const tokenAccountsFilter: TokenAccountsFilter = {
      programId: TOKEN_PROGRAM_ID,
    };
    
    const tokenAccounts = await connection.getParsedTokenAccountsByOwner(
      mint, // This should be adapted depending on network info
      tokenAccountsFilter
    );
    
    // Simulating LP info - in a real implementation, this would check DEX contracts
    // This is a simplified mock that should be replaced with actual DEX queries
    const lpInfo = {
      totalLiquidity: `${Math.random() * 100000} SOL`,
      locked: Math.random() > 0.5,
      lockedPercentage: Math.floor(Math.random() * 100),
      lockedAmount: `${Math.random() * 50000} SOL`,
      expiryDate: new Date(Date.now() + Math.random() * 30 * 24 * 60 * 60 * 1000),
    };

    return {
      mintAddress: tokenAddress,
      symbol: tokenInfo.symbol || "UNKNOWN",
      name: tokenInfo.name || "Unknown Token",
      mintAuthority: tokenInfo.mintAuthority,
      freezeAuthority: tokenInfo.freezeAuthority,
      decimals: tokenInfo.decimals,
      totalSupply: (Number(tokenSupply.value.amount) / Math.pow(10, tokenInfo.decimals)).toString(),
      holders: tokenAccounts.value.length,
      isVerified: false, // Would need additional verification service
      lpInfo,
    };
  } catch (error) {
    console.error("Error scanning token:", error);
    return null;
  }
};

/**
 * Calculate the estimated cost to become a top holder
 * @param tokenAddress The token mint address
 * @param targetPercentage Percentage of supply to target (0-100)
 * @returns Estimated cost in SOL
 */
export const calculateBuyoutCost = async (
  tokenAddress: string,
  targetPercentage: number = 10
): Promise<number | null> => {
  try {
    const tokenData = await scanToken(tokenAddress);
    if (!tokenData || !tokenData.lpInfo) return null;
    
    // This is a simplified estimation - in real implementation,
    // we would calculate this based on AMM formulas and actual liquidity data
    const estimatedCost = 
      (parseFloat(tokenData.lpInfo.totalLiquidity) * (targetPercentage / 100)) * 
      (1 + 0.05); // Adding 5% slippage
    
    return parseFloat(estimatedCost.toFixed(4));
  } catch (error) {
    console.error("Error calculating buyout cost:", error);
    return null;
  }
};

/**
 * Format SOL amount with proper decimals
 * @param amount Amount in lamports
 * @returns Formatted SOL amount
 */
export const formatSol = (amount: number): string => {
  return (amount / LAMPORTS_PER_SOL).toFixed(4);
};

/**
 * Shorten an address for display
 * @param address The address to shorten
 * @param chars Number of chars to keep at start and end
 * @returns Shortened address
 */
export const shortenAddress = (address: string, chars = 4): string => {
  return `${address.slice(0, chars)}...${address.slice(-chars)}`;
}; 