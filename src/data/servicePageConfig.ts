export interface ServiceCard {
  title: string;
  description: string;
}

export interface ServicePageConfig {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  heroH1: string;
  heroSubhead: string;
  trustBanner: string;
  services: [ServiceCard, ServiceCard, ServiceCard];
  testimonial: {
    quote: string;
    author: string;
  };
  heroImage: string;
  heroImageAlt: string;
  beforeAfterImage: string;
  contactCta: string;
  address: string;
  canonicalPath: string;
  city: string;
  serviceType: 'moleraj' | 'keramika' | 'adaptacija';
}
