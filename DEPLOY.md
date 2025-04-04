# Deploying to Railway

There are two methods to deploy this app to Railway:

## Method 1: Direct Deployment from GitHub (Recommended)

1. **Fork this repository to your GitHub account**

2. **Create a Railway account**:
   - Sign up at [railway.app](https://railway.app)
   - Connect your GitHub account

3. **Create a new project in Railway**:
   - Choose "Deploy from GitHub repo"
   - Select your forked repository
   - Railway will automatically detect the configuration files

4. **Configure environment variables** (if needed):
   - Go to your project settings
   - Add any environment variables required for the application

5. **Generate a domain**:
   - Go to "Settings" -> "Domains"
   - Click "Generate Domain"

## Method 2: Using the Railway CLI

1. **Install Railway CLI**:
   ```bash
   npm i -g @railway/cli
   ```

2. **Login to Railway**:
   ```bash
   railway login
   ```

3. **Initialize your Railway project**:
   ```bash
   railway init
   ```

4. **Deploy your project**:
   ```bash
   railway up
   ```

5. **Generate a domain**:
   ```bash
   railway domain
   ```

## Troubleshooting

If you encounter any issues during deployment:

1. **Check build logs**: 
   - In Railway dashboard, go to "Deployments" and check the latest deployment logs

2. **Common issues**:
   - **Nixpacks errors**: If you see errors related to Nixpacks or npm, try changing the settings in the Railway dashboard:
     1. Go to your project settings
     2. Find "Settings" tab
     3. Under "Environment", make sure Node.js 18 or higher is selected
     4. Under "Build Command", enter: `npm install --legacy-peer-deps && npm run build`
     5. Under "Start Command", enter: `npm start`
   
   - **Missing dependencies**: Make sure all dependencies are properly listed in package.json
   - **Environment variables**: Ensure all required environment variables are set
   - **Port configuration**: Railway automatically assigns a PORT environment variable, make sure your app uses it

3. **Testing locally before deployment**:
   ```bash
   npm run build
   npm start
   ```

## Build Configuration Files

The repository contains multiple deployment configuration files to ensure compatibility with Railway:

- **railway.json**: Main Railway configuration
- **nixpacks.toml**: Nixpacks configuration for the build environment
- **Procfile**: Simple process declaration (alternative method)
- **.buildpacks**: Buildpacks configuration (alternative method)

Railway should automatically detect and use the appropriate configuration.

## Additional Resources

- [Railway Documentation](https://docs.railway.app/)
- [Next.js Deployment Documentation](https://nextjs.org/docs/app/building-your-application/deploying) 