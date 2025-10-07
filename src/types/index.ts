export interface NavItem {
  href: string;
  label: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  author: string;
}

export interface DonationFormData {
  amount: number;
  name: string;
  email: string;
  message?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}