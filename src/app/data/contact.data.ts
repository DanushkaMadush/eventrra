export interface SocialLink {
  label: string;
  url: string;
  shortLabel: string;
}

export const whatsappNumber = '+94 77 123 4567';
export const whatsappMessage = 'Hi Eventrra by Peththa, I would like to book an event decoration service.';

export const contactData = {
  businessName: 'Eventrra by Peththa',
  slogan: 'Exclusive Events, Priceless Memories',
  whatsapp: whatsappNumber,
  phone: '+94 77 123 4567',
  email: 'hello@eventrra.com',
  location: 'Colombo, Sri Lanka',
  socialLinks: [
    { label: 'Facebook', shortLabel: 'Fb', url: 'https://facebook.com/eventrra' },
    { label: 'Instagram', shortLabel: 'Ig', url: 'https://instagram.com/eventrra' },
    { label: 'TikTok', shortLabel: 'Tk', url: 'https://tiktok.com/@eventrra' },
  ] satisfies SocialLink[],
};

export const whatsappUrl =
  `https://wa.me/94771234567?text=${encodeURIComponent(whatsappMessage)}`;
