import { NextResponse } from "next/server";

// Interface for the landing page data
export interface LandingPageData {
  id: string;
  pageSlug: string;
  tokenAddress: string;
  tokenName: string;
  tokenSymbol: string;
  description: string;
  telegramLink?: string;
  twitterLink?: string;
  discordLink?: string;
  roadmap?: string[];
  logoUrl?: string;
  bannerUrl?: string;
  createdAt: Date;
  updatedAt: Date;
  ctoLead?: {
    name: string;
    walletAddress: string;
    telegramHandle?: string;
    twitterHandle?: string;
  };
}

// Mock database for landing pages - in a real app, this would be stored in a database
let landingPages: LandingPageData[] = [];

/**
 * POST handler for creating a landing page
 */
export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Validate required fields
    if (!data.tokenAddress || !data.tokenName || !data.tokenSymbol) {
      return NextResponse.json(
        { error: "Missing required fields: tokenAddress, tokenName, and tokenSymbol are required" },
        { status: 400 }
      );
    }
    
    // Generate a unique ID and page slug
    const id = Math.random().toString(36).substring(2, 15);
    const pageSlug = data.tokenSymbol.toLowerCase().replace(/[^a-z0-9]/g, '-');
    
    // Create the landing page data
    const landingPage: LandingPageData = {
      id,
      pageSlug,
      tokenAddress: data.tokenAddress,
      tokenName: data.tokenName,
      tokenSymbol: data.tokenSymbol,
      description: data.description || `Community takeover for ${data.tokenName} (${data.tokenSymbol})`,
      telegramLink: data.telegramLink,
      twitterLink: data.twitterLink,
      discordLink: data.discordLink,
      roadmap: data.roadmap || [],
      logoUrl: data.logoUrl,
      bannerUrl: data.bannerUrl,
      createdAt: new Date(),
      updatedAt: new Date(),
      ctoLead: data.ctoLead,
    };
    
    // Save to our mock database
    landingPages.push(landingPage);
    
    // Return the created landing page with a 201 status code (Created)
    return NextResponse.json(
      { 
        ...landingPage,
        pageUrl: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://cto.fun'}/${pageSlug}`
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating landing page:", error);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}

/**
 * GET handler for retrieving all landing pages or a specific one by slug
 */
export async function GET(request: Request) {
  try {
    // Get the URL from the request
    const url = new URL(request.url);
    // Get the slug parameter from the query string
    const slug = url.searchParams.get('slug');
    
    if (slug) {
      // Find the landing page with the given slug
      const landingPage = landingPages.find(page => page.pageSlug === slug);
      
      if (!landingPage) {
        return NextResponse.json(
          { error: "Landing page not found" },
          { status: 404 }
        );
      }
      
      return NextResponse.json(landingPage);
    }
    
    // Return all landing pages (in a real app, we would add pagination)
    return NextResponse.json({ landingPages });
  } catch (error) {
    console.error("Error retrieving landing pages:", error);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
} 