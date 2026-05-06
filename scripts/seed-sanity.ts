import { config } from 'dotenv';
import { sanityClient } from '../lib/sanity';

// Load environment variables
config({ path: '.env.local' });

// Pricing Plans Data
const pricingPlans = [
  {
    _type: 'pricingPlan',
    name: 'Starter',
    description: 'Perfect for small businesses getting started with digital marketing',
    price: '$999',
    period: '/month',
    features: [
      'SEO Optimization',
      'Social Media Management',
      'Monthly Performance Reports',
      'Email Support',
      '2 Blog Posts per Month'
    ],
    isPopular: false,
    displayOrder: 1,
    ctaText: 'Get Started',
    ctaUrl: '/contact'
  },
  {
    _type: 'pricingPlan',
    name: 'Growth',
    description: 'Ideal for growing businesses ready to scale their marketing',
    price: '$2,499',
    period: '/month',
    features: [
      'Everything in Starter',
      'PPC Campaign Management',
      'Advanced Analytics',
      'Weekly Strategy Calls',
      '4 Blog Posts per Month',
      'Social Media Advertising',
      'Priority Support'
    ],
    isPopular: true,
    displayOrder: 2,
    ctaText: 'Get Started',
    ctaUrl: '/contact'
  },
  {
    _type: 'pricingPlan',
    name: 'Enterprise',
    description: 'Comprehensive solution for established businesses',
    price: 'Custom',
    period: '',
    features: [
      'Everything in Growth',
      'Dedicated Account Manager',
      'Custom Strategy Development',
      'Unlimited Content Creation',
      'Advanced Conversion Optimization',
      'Multi-Channel Campaigns',
      '24/7 Priority Support',
      'Quarterly Business Reviews'
    ],
    isPopular: false,
    displayOrder: 3,
    ctaText: 'Contact Sales',
    ctaUrl: '/contact'
  }
];

// Services Data
const services = [
  {
    _type: 'service',
    title: 'Digital Marketing',
    slug: { _type: 'slug', current: 'digital-marketing' },
    category: 'Marketing',
    description: 'Comprehensive digital marketing strategies to grow your online presence and drive measurable results',
    displayOrder: 1
  },
  {
    _type: 'service',
    title: 'Graphic Design',
    slug: { _type: 'slug', current: 'graphic-design' },
    category: 'Design',
    description: 'Creative design solutions that capture attention and communicate your brand message effectively',
    displayOrder: 2
  },
  {
    _type: 'service',
    title: 'E-commerce Marketing',
    slug: { _type: 'slug', current: 'ecommerce-marketing' },
    category: 'Marketing',
    description: 'Specialized marketing strategies to increase online sales and grow your e-commerce business',
    displayOrder: 3
  },
  {
    _type: 'service',
    title: 'Pay Per Click',
    slug: { _type: 'slug', current: 'pay-per-click' },
    category: 'Advertising',
    description: 'Data-driven PPC campaigns that maximize ROI and drive qualified traffic to your website',
    displayOrder: 4
  },
  {
    _type: 'service',
    title: 'Web Design',
    slug: { _type: 'slug', current: 'web-design' },
    category: 'Design',
    description: 'Modern, responsive websites that deliver exceptional user experiences and drive conversions',
    displayOrder: 5
  },
  {
    _type: 'service',
    title: 'Content Writing',
    slug: { _type: 'slug', current: 'content-writing' },
    category: 'Content',
    description: 'Engaging, SEO-optimized content that resonates with your audience and drives action',
    displayOrder: 6
  }
];

// Focus Areas Data
const focusAreas = [
  {
    _type: 'focusArea',
    title: 'SaaS Growth',
    slug: { _type: 'slug', current: 'saas-growth' },
    description: 'Accelerate your SaaS growth with targeted marketing strategies',
    displayOrder: 1
  },
  {
    _type: 'focusArea',
    title: 'E-commerce Brands',
    slug: { _type: 'slug', current: 'ecommerce-brands' },
    description: 'Drive online sales and build your e-commerce brand',
    displayOrder: 2
  },
  {
    _type: 'focusArea',
    title: 'Healthcare Marketing',
    slug: { _type: 'slug', current: 'healthcare-marketing' },
    description: 'Compliant marketing solutions for healthcare providers',
    displayOrder: 3
  },
  {
    _type: 'focusArea',
    title: 'Education Campaigns',
    slug: { _type: 'slug', current: 'education-campaigns' },
    description: 'Increase enrollment with targeted education marketing',
    displayOrder: 4
  },
  {
    _type: 'focusArea',
    title: 'Real Estate Lead Gen',
    slug: { _type: 'slug', current: 'real-estate-lead-gen' },
    description: 'Generate quality leads for your real estate business',
    displayOrder: 5
  },
  {
    _type: 'focusArea',
    title: 'Finance & B2B',
    slug: { _type: 'slug', current: 'finance-b2b' },
    description: 'B2B marketing strategies for financial services',
    displayOrder: 6
  },
  {
    _type: 'focusArea',
    title: 'Hospitality Visibility',
    slug: { _type: 'slug', current: 'hospitality-visibility' },
    description: 'Increase visibility for hotels and hospitality businesses',
    displayOrder: 7
  },
  {
    _type: 'focusArea',
    title: 'D2C Performance',
    slug: { _type: 'slug', current: 'd2c-performance' },
    description: 'Performance marketing for direct-to-consumer brands',
    displayOrder: 8
  }
];

async function seedData() {
  console.log('🌱 Starting Sanity data seeding...\n');

  try {
    // Create Pricing Plans
    console.log('📊 Creating Pricing Plans...');
    for (const plan of pricingPlans) {
      const result = await sanityClient.create(plan);
      console.log(`✅ Created pricing plan: ${plan.name} (${result._id})`);
    }

    // Create Services
    console.log('\n🛠️  Creating Services...');
    for (const service of services) {
      const result = await sanityClient.create(service);
      console.log(`✅ Created service: ${service.title} (${result._id})`);
    }

    // Create Focus Areas
    console.log('\n🎯 Creating Focus Areas...');
    for (const area of focusAreas) {
      const result = await sanityClient.create(area);
      console.log(`✅ Created focus area: ${area.title} (${result._id})`);
    }

    console.log('\n✨ Seeding completed successfully!');
    console.log('\n📝 Summary:');
    console.log(`   - ${pricingPlans.length} Pricing Plans created`);
    console.log(`   - ${services.length} Services created`);
    console.log(`   - ${focusAreas.length} Focus Areas created`);
    console.log('\n🎉 Your Sanity CMS is now populated with data!');
    
  } catch (error) {
    console.error('❌ Error seeding data:', error);
    process.exit(1);
  }
}

// Run the seeding function
seedData();
