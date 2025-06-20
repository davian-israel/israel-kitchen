# Deployment Guide: Israel Kitchen to Coolify on DigitalOcean

## Prerequisites

1. **DigitalOcean Account**: Sign up at [digitalocean.com](https://digitalocean.com)
2. **Coolify Instance**: Either:
   - Self-hosted Coolify on DigitalOcean droplet
   - Coolify Cloud (managed service)
3. **Domain Name** (recommended)
4. **GitHub Repository**: Your code should be in a GitHub repository

## Step 1: Set Up Coolify

### Option A: Self-Hosted Coolify on DigitalOcean

1. **Create a DigitalOcean Droplet**:
   - Choose Ubuntu 22.04 LTS
   - Select at least 2GB RAM, 1 vCPU
   - Add your SSH key

2. **Install Coolify**:
   ```bash
   curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash
   ```

3. **Access Coolify Dashboard**:
   - Open `http://YOUR_DROPLET_IP:3000`
   - Follow the setup wizard

### Option B: Coolify Cloud

1. Go to [coolify.io](https://coolify.io)
2. Sign up and create a new project
3. Connect your DigitalOcean account

## Step 2: Prepare Your Repository

1. **Push your code to GitHub** (if not already done):
   ```bash
   git add .
   git commit -m "Prepare for Coolify deployment"
   git push origin main
   ```

2. **Ensure these files are in your repository**:
   - `Dockerfile`
   - `docker-compose.prod.yml`
   - `.dockerignore`
   - `src/app/api/health/route.ts`

## Step 3: Deploy on Coolify

### 1. Create New Application

1. In Coolify dashboard, click "New Application"
2. Choose "Application" (not service)
3. Select your GitHub repository
4. Choose the branch (usually `main`)

### 2. Configure Build Settings

1. **Build Pack**: Select "Docker"
2. **Docker Compose File**: `docker-compose.prod.yml`
3. **Port**: `3000`

### 3. Set Environment Variables

Add these environment variables in Coolify:

```bash
# Database
DATABASE_URL=postgresql://postgres:your_password@db:5432/israel_kitchen
POSTGRES_DB=israel_kitchen
POSTGRES_USER=postgres
POSTGRES_PASSWORD=your_secure_password

# NextAuth
NEXTAUTH_SECRET=your_generated_secret
NEXTAUTH_URL=https://your-domain.com

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# Stripe
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...

# UploadThing
UPLOADTHING_SECRET=sk_live_...
UPLOADTHING_APP_ID=your_uploadthing_app_id
```

### 4. Configure Domain (Optional)

1. Add your domain in Coolify
2. Configure DNS to point to your Coolify instance
3. Enable SSL certificate (Coolify handles this automatically)

### 5. Deploy

1. Click "Deploy" in Coolify
2. Monitor the build logs
3. Wait for deployment to complete

## Step 4: Post-Deployment

### 1. Database Setup

After first deployment, you may need to run database migrations:

```bash
# Access your application container
docker exec -it your_app_container_name sh

# Run migrations
npx prisma migrate deploy
npx prisma generate
```

### 2. Verify Deployment

1. Check your application URL
2. Test the health endpoint: `https://your-domain.com/api/health`
3. Verify all features work correctly

## Step 5: Continuous Deployment

Coolify automatically:
- Watches your GitHub repository
- Rebuilds on new commits
- Deploys updates automatically

## Troubleshooting

### Common Issues

1. **Build Fails**:
   - Check build logs in Coolify
   - Verify all environment variables are set
   - Ensure Dockerfile is correct

2. **Database Connection Issues**:
   - Verify DATABASE_URL format
   - Check if database container is running
   - Ensure database credentials are correct

3. **Environment Variables**:
   - Double-check all required variables are set
   - Verify no typos in variable names
   - Ensure production values are used (not test keys)

### Useful Commands

```bash
# View application logs
docker logs your_app_container_name

# Check container status
docker ps

# Access application shell
docker exec -it your_app_container_name sh
```

## Security Considerations

1. **Use Strong Passwords**: Generate secure passwords for database and secrets
2. **Environment Variables**: Never commit `.env` files to repository
3. **SSL**: Always use HTTPS in production
4. **Regular Updates**: Keep Coolify and your application updated

## Monitoring

Coolify provides:
- Application logs
- Resource usage monitoring
- Health checks
- Automatic restarts on failure

## Support

- [Coolify Documentation](https://coolify.io/docs)
- [DigitalOcean Documentation](https://docs.digitalocean.com)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment) 