#!/bin/bash

echo "🚀 Deploying CTO Toolkit to Railway..."

# Check if Railway CLI is installed
if ! command -v railway &> /dev/null; then
    echo "Railway CLI not found. Installing..."
    npm i -g @railway/cli
fi

# Build the project
echo "Building project..."
npm run build

# Log in to Railway (if not already logged in)
railway login

# Initialize project on Railway (if not already initialized)
if [ ! -f ".railway/project.json" ]; then
    echo "Initializing Railway project..."
    railway init
fi

# Deploy to Railway
echo "Deploying to Railway..."
railway up

echo "✅ Deployment complete! Check your Railway dashboard for the live URL." 