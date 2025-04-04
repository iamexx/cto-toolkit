# 🛠️ Solana CTO Takeover Toolkit

A web interface that helps token communities take over and revive abandoned meme token projects on Solana.

## Features

- 🔍 **Token Scanner**: Analyze SPL token details and readiness for takeover
- 💰 **Buyout Strategy**: Calculate costs to become a top holder
- 🌐 **Social Takeover Kit**: Deploy community rooms and message templates
- 👥 **Community Treasury**: Setup multisig wallet and governance
- 📈 **Growth & Quests**: Tools to grow community and engagement
- 🚀 **Landing Page Generator**: Quickly create a token landing page
- 🪙 **DEX Booster**: Deploy liquidity and boost visibility

## Tech Stack

- **Frontend**: Next.js, React, TailwindCSS
- **UI Components**: shadcn/ui components
- **Charts**: Recharts
- **Icons**: Lucide React
- **Deployment**: Railway

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Deployment to Railway

1. Create a Railway account at [railway.app](https://railway.app)
2. Install Railway CLI:
   ```bash
   npm i -g @railway/cli
   ```
3. Login to Railway:
   ```bash
   railway login
   ```
4. Initialize project:
   ```bash
   railway init
   ```
5. Deploy to Railway:
   ```bash
   railway up
   ```

## Customization

1. Modify the tokens and messages in `components/CTOToolkitApp.tsx`
2. Adjust styles in `app/globals.css`
3. Update project settings in `railway.json`

## License

MIT
