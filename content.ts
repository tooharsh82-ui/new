import { PortfolioItem, SpecialityItem, TestimonialItem } from '../types';

export const BUSINESS_INFO = {
  name: 'Studio Manju Sri',
  tagline: 'Thoughtful visual storytelling turning genuine moments into timeless heirloom memories.',
  phone: '06203-851700',
  phoneClean: '916203851700',
  address: 'Near Sapna Cinema, Shivganj, Arrah, Bihar 802301',
  plusCode: 'HM5G+84 Arrah, Bihar',
  hours: 'Mon – Sun: 9:00 AM – 9:00 PM',
  coverage: 'Studio & On-Location across Arrah, Bhojpur & Bihar',
  googleMapsDirectionsUrl: 'https://www.google.com/maps/search/?api=1&query=Shivganj+Sapna+Cinema+Arrah+Bihar+802301',
  googleMapsEmbedUrl: 'https://maps.google.com/maps?q=Shivganj,%20Arrah,%20Bihar%20802301&t=&z=14&ie=UTF8&iwloc=&output=embed',
  rating: 5.0,
  reviewsCount: 31,
};

export const createWhatsAppUrl = (message: string): string => {
  return `https://wa.me/${BUSINESS_INFO.phoneClean}?text=${encodeURIComponent(message.trim())}`;
};

// Featured hero photo (Studio Manju Sri featured photograph)
export const HERO_FEATURED_IMAGE = 'https://i.ibb.co/qZsCRtS/j2.webp';

// EXACTLY 2 Selected Works (editorial layout)
export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'work-1',
    number: '01',
    title: 'Sacred Rituals & Radiance',
    category: 'Weddings',
    categoryLabel: 'Weddings',
    description: 'Fine-art editorial coverage capturing authentic emotion, sacred traditions, and refined detail.',
    imageUrl: 'https://i.ibb.co/pBNt0ZmZ/j3.webp',
    aspectRatio: 'aspect-[4/3]',
  },
  {
    id: 'work-2',
    number: '02',
    title: 'Heirloom Elegance',
    category: 'Portraits',
    categoryLabel: 'Portraits',
    description: 'Calibrated natural color chemistry and intimate expression celebrating lasting family heritage.',
    imageUrl: 'https://i.ibb.co/Y4PdrVhp/j4.webp',
    aspectRatio: 'aspect-[4/3]',
  },
];

// EXACTLY 7 Services
export const SPECIALITY_ITEMS: SpecialityItem[] = [
  {
    id: 'spec-1',
    number: '01',
    title: 'Wedding Photography',
    category: 'Weddings',
    categoryLabel: 'Weddings',
    description: 'Comprehensive ceremonial documentation honoring the grandeur, sacred rituals, and deep family connections of your wedding day.',
    whatsappMessage: 'Hello Studio Manju Sri, I would like to inquire about your Wedding Photography packages and availability.',
  },
  {
    id: 'spec-2',
    number: '02',
    title: 'Bridal Portraits',
    category: 'Portraits',
    categoryLabel: 'Portraits',
    description: 'Timeless bridal sessions capturing delicate jewelry details, ornate attire, and regal poise in both studio and ambient light.',
    whatsappMessage: 'Hello Studio Manju Sri, I am interested in booking a dedicated Bridal Portrait session.',
  },
  {
    id: 'spec-3',
    number: '03',
    title: 'Pre-Wedding Shoots',
    category: 'Weddings',
    categoryLabel: 'Weddings',
    description: 'Scenic, story-driven couple sessions tailored to your romantic journey, aesthetic vision, and personal narrative.',
    whatsappMessage: 'Hello Studio Manju Sri, I want to know more about booking a Pre-Wedding shoot session.',
  },
  {
    id: 'spec-4',
    number: '04',
    title: 'Candid Photography',
    category: 'Weddings',
    categoryLabel: 'Weddings',
    description: 'Unscripted, genuine laughter, emotional tears, and heartfelt glimpses that naturally unfold between the planned ceremonies.',
    whatsappMessage: 'Hello Studio Manju Sri, I would like details regarding your Candid Photography coverage.',
  },
  {
    id: 'spec-5',
    number: '05',
    title: 'Event Coverage',
    category: 'Events',
    categoryLabel: 'Events',
    description: 'Complete dynamic photography for Ring Ceremonies, Tilak, Haldi, Sangeet, anniversaries, and milestone family celebrations.',
    whatsappMessage: 'Hello Studio Manju Sri, I am looking for Event Photography coverage for an upcoming family occasion.',
  },
  {
    id: 'spec-6',
    number: '06',
    title: 'Videography',
    category: 'Events',
    categoryLabel: 'Events',
    description: 'Cinematic film production with 4K clarity, calibrated color grading, drone perspectives, and emotional storytelling edits.',
    whatsappMessage: 'Hello Studio Manju Sri, I would like to inquire about your Cinematic Videography services and rates.',
  },
  {
    id: 'spec-7',
    number: '07',
    title: 'Portrait Sessions',
    category: 'Portraits',
    categoryLabel: 'Portraits',
    description: 'Individual, executive, and family studio portraits crafted with fine-art lighting and thoughtful framing.',
    whatsappMessage: 'Hello Studio Manju Sri, I am interested in scheduling a Portrait Session at your studio in Arrah.',
  },
];

// EXACTLY 3 Real Client Testimonials (provided in prompt)
export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    quote: 'This studio does the best photographers and videography in Arrah City and book it at the lowest price.',
    author: 'Abhishek Kumar',
    rating: 5,
    highlight: 'Best Photography & Lowest Price in Arrah',
  },
  {
    id: 'test-2',
    quote: 'Am searching in Arra a best photographer. My friend suggest studio manju sri in Ara. And I hire this photographer. Result is so fantastic.',
    author: 'Oshu Soni',
    rating: 5,
    highlight: 'Fantastic Results & High Recommendation',
  },
  {
    id: 'test-3',
    quote: 'Photo quality is so good and amazing experience in the studio field.',
    author: 'Verified Client',
    rating: 5,
    highlight: 'Exceptional Photo Quality & Studio Experience',
  },
];
