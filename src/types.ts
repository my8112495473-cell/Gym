export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  benefit: string;
  tag: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  comment: string;
  avatarUrl: string;
}

export interface GalleryItem {
  id: string;
  url: string;
  tag: string;
  title: string;
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}
