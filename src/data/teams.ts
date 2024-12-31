export interface TeamOwner {
  name: string;
  company: string;
  image: string;
}

export interface Player {
  name: string;
  role: string;
  image: string;
}

export interface Team {
  id: string;
  name: string;
  shortName: string;
  color: string;
  logo: string;
  owner: TeamOwner;
  players: Player[];
}

export const teams: Team[] = [
  {
    id: 'mumbai-strikers',
    name: 'Mumbai Strikers',
    shortName: 'MS',
    color: '#FF6B00',
    logo: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&auto=format&fit=crop&q=60',
    owner: {
      name: 'Rajesh Mehta',
      company: 'Local Chai Wala',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop&q=60'
    },
    players: [
      {
        name: 'Sunil Kumar',
        role: 'Captain/All-rounder',
        image: 'https://images.unsplash.com/photo-1544699652-70c807164d91?w=800&auto=format&fit=crop&q=60'
      }
    ]
  },
  {
    id: 'delhi-daredevils',
    name: 'Delhi Daredevils',
    shortName: 'DD',
    color: '#DC2626',
    logo: 'https://images.unsplash.com/photo-1587385789097-0197a7fbd179?w=800&auto=format&fit=crop&q=60',
    owner: {
      name: 'Amit Sharma',
      company: 'Sharma General Store',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&auto=format&fit=crop&q=60'
    },
    players: [
      {
        name: 'Ravi Verma',
        role: 'Opening Batsman',
        image: 'https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?w=800&auto=format&fit=crop&q=60'
      }
    ]
  },
  {
    id: 'kolkata-kings',
    name: 'Kolkata Kings',
    shortName: 'KK',
    color: '#7C3AED',
    logo: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&auto=format&fit=crop&q=60',
    owner: {
      name: 'Pranab Das',
      company: 'Das Electronics',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60'
    },
    players: [
      {
        name: 'Bijoy Roy',
        role: 'Fast Bowler',
        image: 'https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?w=800&auto=format&fit=crop&q=60'
      }
    ]
  },
  {
    id: 'chennai-warriors',
    name: 'Chennai Warriors',
    shortName: 'CW',
    color: '#FBBF24',
    logo: 'https://images.unsplash.com/photo-1587385789097-0197a7fbd179?w=800&auto=format&fit=crop&q=60',
    owner: {
      name: 'Senthil Kumar',
      company: 'SK Motors',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=60'
    },
    players: [
      {
        name: 'Karthik Rajan',
        role: 'Wicket Keeper',
        image: 'https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?w=800&auto=format&fit=crop&q=60'
      }
    ]
  },
  {
    id: 'pune-panthers',
    name: 'Pune Panthers',
    shortName: 'PP',
    color: '#059669',
    logo: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&auto=format&fit=crop&q=60',
    owner: {
      name: 'Ganesh Joshi',
      company: 'Joshi Sweets',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&auto=format&fit=crop&q=60'
    },
    players: [
      {
        name: 'Prakash Patil',
        role: 'Spin Bowler',
        image: 'https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?w=800&auto=format&fit=crop&q=60'
      }
    ]
  },
  {
    id: 'bangalore-bulls',
    name: 'Bangalore Bulls',
    shortName: 'BB',
    color: '#DB2777',
    logo: 'https://images.unsplash.com/photo-1587385789097-0197a7fbd179?w=800&auto=format&fit=crop&q=60',
    owner: {
      name: 'Ramesh Rao',
      company: 'Rao Coffee House',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&auto=format&fit=crop&q=60'
    },
    players: [
      {
        name: 'Arun Kumar',
        role: 'All-rounder',
        image: 'https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?w=800&auto=format&fit=crop&q=60'
      }
    ]
  }
];