export interface Sponsor {
  id: string;
  name: string;
  type: 'title' | 'platinum' | 'gold' | 'silver';
  logo: string;
  description: string;
}

export const sponsors: Sponsor[] = [
  {
    id: 'chai-point',
    name: 'Chai Point',
    type: 'title',
    logo: 'https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?w=800&auto=format&fit=crop&q=60',
    description: 'Your Neighborhood Tea Shop'
  },
  {
    id: 'local-sports',
    name: 'Sports Zone',
    type: 'platinum',
    logo: 'https://images.unsplash.com/photo-1593786481097-cf281dd12e9e?w=800&auto=format&fit=crop&q=60',
    description: 'Cricket Equipment & Sportswear'
  },
  {
    id: 'street-food',
    name: 'Street Food Corner',
    type: 'gold',
    logo: 'https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?w=800&auto=format&fit=crop&q=60',
    description: 'Local Food & Refreshments'
  },
  {
    id: 'local-gym',
    name: 'Fitness Hub',
    type: 'gold',
    logo: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop&q=60',
    description: 'Your Local Fitness Partner'
  },
  {
    id: 'medical',
    name: 'City Pharmacy',
    type: 'silver',
    logo: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=800&auto=format&fit=crop&q=60',
    description: '24/7 Medical Support'
  },
  {
    id: 'local-market',
    name: 'Super Market',
    type: 'silver',
    logo: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=800&auto=format&fit=crop&q=60',
    description: 'Your Daily Needs Store'
  }
];