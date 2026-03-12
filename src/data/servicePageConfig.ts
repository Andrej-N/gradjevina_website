export interface ServiceCard {
  title: string;
  description: string;
}

export interface ServicePageConfig {
  slug: string;
  metaTitle: string;
  heroH1: string;
  heroSubhead: string;
  trustBanner: string;
  services: [ServiceCard, ServiceCard, ServiceCard];
  testimonial: {
    quote: string;
    author: string;
  };
  beforeAfterImage: string;
  contactCta: string;
  address: string;
}
