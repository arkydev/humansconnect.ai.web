// Application metadata constants
export const APP_METADATA = {
  NAME: 'Humans Connect AI',
  TITLE: 'Humans Connect AI - Smart Matching Platform for Meaningful Connections',
  DESCRIPTION: 'AI-powered platform connecting like-minded people across romance, business, creative, and athletic domains. Smart matching with privacy-first authentication.',
  SHORT_DESCRIPTION: 'AI-powered platform connecting like-minded people across romance, business, creative, and athletic domains. Smart matching with privacy-first authentication. Launching Q4 2025.',
  AUTHOR: 'Humans Connect AI',
  VERSION: 'v0.1',
  COPYRIGHT: '© 2025',
  LAUNCH_TEXT: 'Launching Q4 2025',
  STATUS_TEXT: 'Private Beta'
} as const;

// URL constants
export enum Urls {
  SITE = 'https://humansconnect.ai',
  FAVICON_PNG = 'https://humansconnect.ai/favicon.png',
  FONTS_PRECONNECT = 'https://fonts.googleapis.com',
  FONTS_STATIC_PRECONNECT = 'https://fonts.gstatic.com',
  INTER_FONT = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap',
  SCHEMA_CONTEXT = 'https://schema.org'
}

// File paths
export const FILE_PATHS = {
  FAVICON_ICO: '/favicon.ico',
  FAVICON_PNG: '/favicon.png',
  FAVICON_SVG: '$lib/assets/favicon.svg'
} as const;

// Meta property names
export enum MetaProperties {
  OG_TYPE = 'og:type',
  OG_URL = 'og:url', 
  OG_TITLE = 'og:title',
  OG_DESCRIPTION = 'og:description',
  OG_IMAGE = 'og:image',
  OG_SITE_NAME = 'og:site_name',
  OG_LOCALE = 'og:locale',
  TWITTER_CARD = 'twitter:card',
  TWITTER_URL = 'twitter:url',
  TWITTER_TITLE = 'twitter:title', 
  TWITTER_DESCRIPTION = 'twitter:description',
  TWITTER_IMAGE = 'twitter:image'
}

// Meta content values
export enum MetaContent {
  OG_TYPE_WEBSITE = 'website',
  TWITTER_CARD_LARGE = 'summary_large_image',
  ROBOTS_INDEX_FOLLOW = 'index, follow',
  VIEWPORT = 'width=device-width, initial-scale=1.0',
  THEME_COLOR = '#0a0a0a',
  LOCALE_EN_US = 'en_US'
}

// Schema.org structured data
export enum SchemaTypes {
  CONTEXT = '@context',
  TYPE = '@type',
  SOFTWARE_APPLICATION = 'SoftwareApplication',
  ORGANIZATION = 'Organization',
  OFFER = 'Offer'
}

export const SCHEMA_DATA = {
  APPLICATION_CATEGORY: 'SocialNetworkingApplication',
  OPERATING_SYSTEM: 'Web',
  PRICE: '0',
  PRICE_CURRENCY: 'USD'
} as const;

// Feature content
export const FEATURES = {
  INTELLIGENT_MATCHING: {
    title: 'Intelligent Matching',
    description: 'AI matches based on who you are, not how you look'
  },
  PRIVACY_FOCUSED: {
    title: 'Privacy Focused', 
    description: 'Private and secure, with optional anonymity'
  },
  AUTHENTIC_CONNECTIONS: {
    title: 'Authentic Connections',
    description: 'Find people who share your core values and worldview'  
  },
  UNIVERSAL_PLATFORM: {
    title: 'Universal Platform',
    description: 'Romance, business, creative, athletic — connections across all life domains'
  }
} as const;

// Hero section content
export const HERO_CONTENT = {
  HEADING_LINE_1: 'Connect with',
  HEADING_LINE_2: 'Like-minded People', 
  SUBHEADING: 'Discover meaningful connections through intelligent matching and shared interests.',
  BRAND_NAME: 'Humans'
} as const;

// SEO keywords
export const SEO_KEYWORDS = 'human connections, AI matching, networking platform, meaningful relationships, smart matching, privacy-focused, social networking';
