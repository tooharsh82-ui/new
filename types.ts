export interface PortfolioItem {
  id: string;
  number: string;
  title: string;
  category: 'Weddings' | 'Bridal' | 'Candid' | 'Portraits';
  categoryLabel: string;
  description: string;
  imageUrl: string;
  aspectRatio: string;
}

export interface SpecialityItem {
  id: string;
  number: string;
  title: string;
  category: 'Weddings' | 'Portraits' | 'Events';
  categoryLabel: string;
  description: string;
  whatsappMessage: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  rating: number;
  highlight: string;
}

export interface InquiryFormData {
  occasion: string;
  name: string;
  date: string;
  note: string;
}
