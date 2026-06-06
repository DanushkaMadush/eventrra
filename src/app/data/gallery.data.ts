export interface GalleryItem {
  id: number;
  title: string;
  category: string;
  imgUrl: string;
}

export const galleryData: GalleryItem[] = [
  {
    id: 1,
    title: 'Candlelit Proposal',
    category: 'Wedding Proposals',
    imgUrl: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 2,
    title: 'Golden Reception',
    category: 'Weddings',
    imgUrl: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 3,
    title: 'Blush Birthday Table',
    category: 'Birthdays',
    imgUrl: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 4,
    title: 'Garden Reveal',
    category: 'Gender Reveals',
    imgUrl: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 5,
    title: 'Bridal Soiree',
    category: 'Brides-to-Be',
    imgUrl: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 6,
    title: 'Custom Floral Lounge',
    category: 'Custom Events',
    imgUrl: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=1200&q=80',
  },
];
