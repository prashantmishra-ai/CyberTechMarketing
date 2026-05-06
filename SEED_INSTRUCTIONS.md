# 🌱 Seed Sanity CMS with Data

I've created all the data files for you. Follow these simple steps to populate your Sanity CMS:

## ✅ **Option 1: Using Sanity CLI (Recommended)**

Run this single command:

```bash
npx sanity dataset import scripts/seed-data.json production --replace
```

This will import:
- ✅ 3 Pricing Plans (Starter, Growth, Enterprise)
- ✅ 6 Services (Digital Marketing, Graphic Design, etc.)
- ✅ 8 Focus Areas (SaaS Growth, E-commerce Brands, etc.)

## ✅ **Option 2: Manual Import via Sanity Studio**

1. Go to http://localhost:3000/studio
2. Open the "Vision" tab (query tool)
3. Copy and paste the content from `scripts/seed-data.json`
4. Click "Execute" or use the import feature

## 📋 **What Data Will Be Added:**

### Pricing Plans:
1. **Starter** - $999/month
   - SEO Optimization
   - Social Media Management
   - Monthly Performance Reports
   - Email Support
   - 2 Blog Posts per Month

2. **Growth** - $2,499/month (Most Popular)
   - Everything in Starter
   - PPC Campaign Management
   - Advanced Analytics
   - Weekly Strategy Calls
   - 4 Blog Posts per Month
   - Social Media Advertising
   - Priority Support

3. **Enterprise** - Custom Pricing
   - Everything in Growth
   - Dedicated Account Manager
   - Custom Strategy Development
   - Unlimited Content Creation
   - Advanced Conversion Optimization
   - Multi-Channel Campaigns
   - 24/7 Priority Support
   - Quarterly Business Reviews

### Services:
- Digital Marketing
- Graphic Design
- E-commerce Marketing
- Pay Per Click
- Web Design
- Content Writing

### Focus Areas:
- SaaS Growth
- E-commerce Brands
- Healthcare Marketing
- Education Campaigns
- Real Estate Lead Gen
- Finance & B2B
- Hospitality Visibility
- D2C Performance

## 🎉 **After Importing:**

1. Refresh your website at http://localhost:3000/pricing
2. You should see all 3 pricing plans displayed
3. Navigate to services and focus areas to verify they work
4. All data can be edited in Sanity Studio at any time!

## 🔄 **To Update Data Later:**

Simply go to http://localhost:3000/studio and edit any document. Changes will reflect immediately on your website!
