export interface EventService {
  title: string;
  icon: 'cake' | 'heart' | 'sparkles' | 'crown' | 'rings' | 'palette';
  description: string;
  highlights: string[];
}

export const servicesData: EventService[] = [
  {
    title: 'Birthday Decorations',
    icon: 'cake',
    description: 'Refined birthday styling with layered backdrops, floral accents, balloons, and table details.',
    highlights: ['Milestone birthdays', 'Kids and adults', 'Statement photo corners'],
  },
  {
    title: 'Wedding Proposals',
    icon: 'heart',
    description: 'Romantic proposal settings designed around your story, location, and preferred mood.',
    highlights: ['Private setups', 'Candlelit styling', 'Floral pathways'],
  },
  {
    title: 'Gender Reveals',
    icon: 'sparkles',
    description: 'Elegant reveal moments with coordinated color palettes, decor, and reveal-ready focal points.',
    highlights: ['Pastel themes', 'Family gatherings', 'Photo-ready details'],
  },
  {
    title: 'Brides-to-Be Events',
    icon: 'crown',
    description: 'Polished celebrations for bridal showers, hen parties, and intimate pre-wedding moments.',
    highlights: ['Chic lounge styling', 'Floral tablescapes', 'Custom signage'],
  },
  {
    title: 'Wedding Decorations',
    icon: 'rings',
    description: 'Ceremony and reception styling with an eye for scale, lighting, florals, and guest experience.',
    highlights: ['Aisle styling', 'Reception decor', 'Premium tablescapes'],
  },
  {
    title: 'Custom Event Styling',
    icon: 'palette',
    description: 'Tailored concepts for private dinners, corporate moments, cultural events, and bespoke occasions.',
    highlights: ['Moodboards', 'Theme planning', 'Full styling direction'],
  },
];
