export interface Department {
  id: string;
  name: string;
  teluguName: string;
  shortDesc: string;
  longDesc: string;
  image: string;
  services: string[];
  features: string[];
  color: string;
}

export interface Doctor {
  id: string;
  name: string;
  role: string;
  qualification: string;
  experience: string;
  specialties: string[];
  description: string;
  image: string;
  availableDays: string;
  whatsappPreFill: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  service: string;
  quote: string;
  rating: number;
  date: string;
  verified: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'maternity' | 'ortho' | 'emergency';
}
