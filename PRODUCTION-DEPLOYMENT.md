# Production Deployment Guide

## 🚀 Pre-Deployment Checklist

### 1. SEO Verification
- [ ] All meta tags are properly set
- [ ] Structured data is implemented
- [ ] Sitemap.xml is accessible
- [ ] Robots.txt is configured
- [ ] Canonical URLs are set
- [ ] Open Graph tags are complete

### 2. Performance Check
- [ ] Images are optimized
- [ ] Lazy loading is implemented
- [ ] Compression is enabled
- [ ] Security headers are configured
- [ ] Core Web Vitals are optimized

### 3. Content Review
- [ ] All phone numbers have +1 prefix
- [ ] Contact information is accurate
- [ ] Service descriptions are complete
- [ ] Portfolio images are high quality
- [ ] Testimonials are verified

## 🌐 Domain & Hosting Setup

### 1. Domain Configuration
```bash
# Update your domain in these files:
# - app/layout.tsx (metadataBase)
# - public/robots.txt (Sitemap URL)
# - public/sitemap.xml (all URLs)
# - components/structured-data.tsx (business URLs)
# - next.config.mjs (if needed)
```

### 2. DNS Configuration
- **A Record**: Point to your hosting server IP
- **CNAME**: www → yourdomain.com
- **MX Record**: For email (if applicable)
- **TXT Record**: For domain verification

### 3. SSL Certificate
- Install SSL certificate (Let's Encrypt recommended)
- Force HTTPS redirects
- Update security headers in `next.config.mjs`

## 🔧 Environment Configuration

### 1. Create Production Environment File
```bash
# .env.production
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://homeexpressconstructionllc.com
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
```

### 2. Update Configuration Files
```javascript
// next.config.mjs - Update domain references
const nextConfig = {
  // ... existing config
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // ... existing headers
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains'
          }
        ]
      }
    ]
  }
}
```

## 📊 Analytics & Monitoring Setup

### 1. Google Analytics 4
1. Create GA4 property
2. Get Measurement ID
3. Add to environment variables
4. Test tracking implementation

### 2. Google Search Console
1. Add property to Search Console
2. Verify ownership
3. Submit sitemap
4. Monitor indexing status

### 3. Performance Monitoring
- Set up Core Web Vitals reporting
- Configure performance budgets
- Monitor page load speeds
- Track user engagement metrics

## 🚀 Deployment Process

### 1. Build Application
```bash
# Install dependencies
npm install

# Build for production
npm run build

# Test build locally
npm start
```

### 2. Deploy to Hosting Platform

#### Option A: Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

#### Option B: Traditional Hosting
```bash
# Copy build files to server
scp -r .next/* user@server:/path/to/website/
scp -r public/* user@server:/path/to/website/public/
scp package.json user@server:/path/to/website/
scp next.config.mjs user@server:/path/to/website/

# On server
npm install --production
npm start
```

#### Option C: Docker
```dockerfile
# Dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### 3. Server Configuration

#### Nginx Configuration
```nginx
server {
    listen 80;
    server_name homeexpressconstructionllc.com www.homeexpressconstructionllc.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name homeexpressconstructionllc.com www.homeexpressconstructionllc.com;
    
    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
    
    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

#### PM2 Process Manager
```bash
# Install PM2
npm install -g pm2

# Create ecosystem file
pm2 ecosystem

# Start application
pm2 start ecosystem.config.js

# Save PM2 configuration
pm2 save
pm2 startup
```

## 🔍 Post-Deployment Verification

### 1. Technical Checks
- [ ] Website loads correctly
- [ ] All pages are accessible
- [ ] Images load properly
- [ ] Forms work correctly
- [ ] Mobile responsiveness
- [ ] SSL certificate is valid

### 2. SEO Verification
- [ ] Sitemap is accessible at `/sitemap.xml`
- [ ] Robots.txt is accessible at `/robots.txt`
- [ ] Meta tags are present in page source
- [ ] Structured data is valid (use Google's Rich Results Test)
- [ ] Page speed is acceptable

### 3. Analytics Verification
- [ ] Google Analytics is tracking
- [ ] Page views are being recorded
- [ ] Events are firing correctly
- [ ] Search Console is receiving data

## 📱 Mobile Optimization Verification

### 1. Mobile Testing
- [ ] Test on various devices
- [ ] Verify touch interactions
- [ ] Check mobile menu functionality
- [ ] Test responsive breakpoints
- [ ] Verify PWA features

### 2. Performance Testing
- [ ] Google PageSpeed Insights
- [ ] Mobile usability score
- [ ] Core Web Vitals
- [ ] Lighthouse mobile audit

## 🔒 Security Hardening

### 1. Security Headers
```javascript
// Already configured in next.config.mjs
{
  key: 'X-Content-Type-Options',
  value: 'nosniff'
},
{
  key: 'X-Frame-Options',
  value: 'DENY'
},
{
  key: 'X-XSS-Protection',
  value: '1; mode=block'
}
```

### 2. Additional Security Measures
- [ ] Enable HTTPS redirects
- [ ] Set up rate limiting
- [ ] Configure firewall rules
- [ ] Regular security updates
- [ ] Monitor access logs

## 📈 Performance Optimization

### 1. Caching Strategy
- [ ] Browser caching for static assets
- [ ] CDN implementation (if applicable)
- [ ] Database query optimization
- [ ] Image compression and formats

### 2. Monitoring Tools
- [ ] Google PageSpeed Insights
- [ ] GTmetrix
- [ ] WebPageTest
- [ ] Lighthouse CI
- [ ] Real User Monitoring (RUM)

## 🚨 Emergency Procedures

### 1. Rollback Plan
```bash
# If deployment fails, rollback to previous version
git checkout HEAD~1
npm run build
npm start
```

### 2. Monitoring Alerts
- Set up uptime monitoring
- Configure error tracking
- Monitor performance metrics
- Set up alert notifications

## 📋 Maintenance Schedule

### Daily
- [ ] Check website accessibility
- [ ] Monitor error logs
- [ ] Review analytics data

### Weekly
- [ ] Performance review
- [ ] Security updates
- [ ] Content updates
- [ ] SEO monitoring

### Monthly
- [ ] Full security audit
- [ ] Performance optimization
- [ ] SEO strategy review
- [ ] Backup verification

## 🔗 Important URLs

- **Production Site**: https://homeexpressconstructionllc.com
- **Sitemap**: https://homeexpressconstructionllc.com/sitemap.xml
- **Robots**: https://homeexpressconstructionllc.com/robots.txt
- **Google Analytics**: [Your GA4 Property]
- **Search Console**: [Your Search Console Property]

## 📞 Support Contacts

- **Technical Issues**: Development team
- **Hosting Issues**: Hosting provider
- **Domain Issues**: Domain registrar
- **SSL Issues**: Certificate provider

---

**Deployment Date**: [Date]  
**Deployed By**: [Name]  
**Version**: 1.0.0  
**Status**: Production Ready 🚀
