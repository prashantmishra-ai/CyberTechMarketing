import {sanityClient, sanityConfigured} from '@/lib/sanity';

export type SiteLink = {
  id?: string;
  label: string;
  href: string;
};

export type UtilityLink = {
  label: string;
  href: string;
  variant?: 'text' | 'filled' | 'outline';
};

export type AdvantageLink = {
  title: string;
  description?: string;
  href: string;
};

export type SiteSettings = {
  announcementText: string;
  announcementCtaLabel: string;
  announcementCtaHref: string;
  primaryNavLinks: SiteLink[];
  utilityLinks: UtilityLink[];
  mobileCtaLabel: string;
  mobileCtaHref: string;
  platformAdvantageLinks: AdvantageLink[];
  platformServiceLinks: SiteLink[];
  platformFocusLinks: SiteLink[];
  footerDescription: string;
  footerCompanyLinks: SiteLink[];
  footerEmail: string;
  footerPhone: string;
  footerLegalLinks: SiteLink[];
};

export const defaultSiteSettings: SiteSettings = {
  announcementText:
    "Don't Miss the CyberTech Marketing Forum — Learn How AI Is Changing the Marketing Landscape.",
  announcementCtaLabel: 'Register Now',
  announcementCtaHref: '/contact',
  primaryNavLinks: [
    {id: 'platform', label: 'Platform', href: '/#platform'},
    {id: 'services', label: 'Services', href: '/services'},
    {id: 'partners', label: 'Partners', href: '/#partners'},
    {id: 'testimonials', label: 'Testimonials', href: '/#testimonials'},
    {id: 'careers', label: 'Careers', href: '/careers'},
    {id: 'about', label: 'About', href: '/about'},
    {id: 'pricing', label: 'Pricing', href: '/pricing'},
  ],
  utilityLinks: [
    {label: 'Experiencing a Breach?', href: '/contact', variant: 'text'},
    {label: 'Blog', href: '/blog', variant: 'text'},
    {label: 'Get Started', href: '/blog', variant: 'filled'},
    {label: 'Contact Us', href: '/contact', variant: 'outline'},
  ],
  mobileCtaLabel: 'Contact',
  mobileCtaHref: '/contact',
  platformAdvantageLinks: [
    {
      title: 'Growth Platform',
      description:
        'Integrated strategy across SEO, content, paid media, and conversion optimization.',
      href: '/platform/growth-platform',
    },
    {
      title: 'Service Stack',
      description:
        'Explore the digital marketing, design, PPC, and web capabilities behind the system.',
      href: '/platform/service-stack',
    },
    {
      title: 'Proof & Trust',
      description:
        'See the client signals, testimonials, and credibility markers that support our approach.',
      href: '/platform/proof-trust',
    },
    {
      title: 'Meet CyberTech',
      description:
        'Learn how our agency combines creative execution with data-driven growth frameworks.',
      href: '/about',
    },
  ],
  platformServiceLinks: [
    {label: 'Digital Marketing', href: '/services/digital-marketing'},
    {label: 'Graphic Design', href: '/services/graphic-design'},
    {label: 'E-commerce Marketing', href: '/services/ecommerce-marketing'},
    {label: 'Pay Per Click', href: '/services/pay-per-click'},
    {label: 'Web Design', href: '/services/web-design'},
    {label: 'Content Writing', href: '/services/content-writing'},
    {label: 'Pricing Plans', href: '/pricing'},
    {label: 'Contact Strategy Team', href: '/contact'},
  ],
  platformFocusLinks: [
    {label: 'SaaS Growth', href: '/focus-areas/saas-growth'},
    {label: 'E-commerce Brands', href: '/focus-areas/ecommerce-brands'},
    {label: 'Healthcare Marketing', href: '/focus-areas/healthcare-marketing'},
    {label: 'Education Campaigns', href: '/focus-areas/education-campaigns'},
    {label: 'Real Estate Lead Gen', href: '/focus-areas/real-estate-lead-gen'},
    {label: 'Finance & B2B', href: '/focus-areas/finance-b2b'},
    {label: 'Hospitality Visibility', href: '/focus-areas/hospitality-visibility'},
    {label: 'D2C Performance', href: '/focus-areas/d2c-performance'},
  ],
  footerDescription:
    'Save Costs And Grow Fast With Cybertech Marketing. Transforming Clicks into Conversions through AI-powered digital strategies.',
  footerCompanyLinks: [
    {label: 'About Us', href: '/about'},
    {label: 'Services', href: '/services'},
    {label: 'Careers', href: '/careers'},
    {label: 'Contact', href: '/contact'},
  ],
  footerEmail: 'info@cybertechmarketing.com',
  footerPhone: '+91 7428768779',
  footerLegalLinks: [
    {label: 'Privacy Policy', href: '/contact'},
    {label: 'Terms of Service', href: '/contact'},
  ],
};

const siteSettingsQuery = `*[_type == "siteSettings"][0]{
  announcementText,
  announcementCtaLabel,
  announcementCtaHref,
  primaryNavLinks[]{
    id,
    "label": label,
    href
  },
  utilityLinks[]{
    label,
    href,
    variant
  },
  mobileCtaLabel,
  mobileCtaHref,
  platformAdvantageLinks[]{
    title,
    "description": description,
    href
  },
  platformServiceLinks[]{
    "label": label,
    href
  },
  platformFocusLinks[]{
    "label": label,
    href
  },
  footerDescription,
  footerCompanyLinks[]{
    "label": label,
    href
  },
  footerEmail,
  footerPhone,
  footerLegalLinks[]{
    "label": label,
    href
  }
}`;

export async function getSiteSettings(): Promise<SiteSettings> {
  if (!sanityConfigured) {
    return defaultSiteSettings;
  }

  try {
    const data =
      (await sanityClient.fetch<Partial<SiteSettings> | null>(siteSettingsQuery)) || {};

    return {
      announcementText: data.announcementText || defaultSiteSettings.announcementText,
      announcementCtaLabel:
        data.announcementCtaLabel || defaultSiteSettings.announcementCtaLabel,
      announcementCtaHref:
        data.announcementCtaHref || defaultSiteSettings.announcementCtaHref,
      primaryNavLinks:
        data.primaryNavLinks?.length ? data.primaryNavLinks : defaultSiteSettings.primaryNavLinks,
      utilityLinks: data.utilityLinks?.length ? data.utilityLinks : defaultSiteSettings.utilityLinks,
      mobileCtaLabel: data.mobileCtaLabel || defaultSiteSettings.mobileCtaLabel,
      mobileCtaHref: data.mobileCtaHref || defaultSiteSettings.mobileCtaHref,
      platformAdvantageLinks:
        data.platformAdvantageLinks?.length
          ? data.platformAdvantageLinks
          : defaultSiteSettings.platformAdvantageLinks,
      platformServiceLinks:
        data.platformServiceLinks?.length
          ? data.platformServiceLinks
          : defaultSiteSettings.platformServiceLinks,
      platformFocusLinks:
        data.platformFocusLinks?.length
          ? data.platformFocusLinks
          : defaultSiteSettings.platformFocusLinks,
      footerDescription:
        data.footerDescription || defaultSiteSettings.footerDescription,
      footerCompanyLinks:
        data.footerCompanyLinks?.length
          ? data.footerCompanyLinks
          : defaultSiteSettings.footerCompanyLinks,
      footerEmail: data.footerEmail || defaultSiteSettings.footerEmail,
      footerPhone: data.footerPhone || defaultSiteSettings.footerPhone,
      footerLegalLinks:
        data.footerLegalLinks?.length
          ? data.footerLegalLinks
          : defaultSiteSettings.footerLegalLinks,
    };
  } catch (error) {
    console.error('Failed to fetch site settings from Sanity:', error);
    return defaultSiteSettings;
  }
}
