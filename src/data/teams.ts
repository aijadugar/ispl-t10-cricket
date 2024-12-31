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
    id: 'majhi-mumbai',
    name: 'Majhi Mumbai',
    shortName: 'MM',
    color: '#FF6B00',
    logo: 'https://images.mykhel.com/img/2024/02/majhi-mumbai-ispl-20241-1708930034.jpg',
    owner: {
      name: 'Amitabh Bachchan',
      company: 'Indian actor who works in Hindi Cinema',
      image: 'https://media.gettyimages.com/id/487802833/photo/iffm-awards-2014.jpg?b=1&s=594x594&w=0&k=20&c=4gFiy6u8MKyPUqfOX5S7l2E7iHZjHmW7bszzb3m3IJU='
    },
    players: [
      {
        name: 'Abhishek Kumar Dalhor',
        role: '20.50 lakh',
        image: 'https://images.mykhel.com/img/2024/03/dalhor-1710930660.jpg'
      }
    ]
  },
  {
    id: 'tigers-of-kolkata',
    name: 'Tigers of Kolkata',
    shortName: 'TK',
    color: '#DC2626',
    logo: 'https://www.mykhel.com/img/2024/02/tiigers-of-kolkata-ispl-1708941406.jpg',
    owner: {
      name: 'Saif Ali Khan',
      company: 'Indian actor and Film Producer',
      image: 'https://images.news18.com/ibnlive/uploads/2021/11/saif-ali-khan-1-16373841574x3.jpg'
    },
    players: [
      {
        name: 'Fardeen Kazi',
        role: '15.90 lakh',
        image: 'https://i.ytimg.com/vi/0fjo0KYzmK4/oardefault.jpg?sqp=-oaymwEkCJUDENAFSFqQAgHyq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB&rs=AOn4CLDz9YAOd2KFdMS2VJGj8MXCGq8oJg'
      }
    ]
  },
  {
    id: 'srinagar-ke-veer',
    name: 'Srinagar Ke Veer',
    shortName: 'SV',
    color: '#7C3AED',
    logo: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjlj9fi4m1cE69s5zh2VkItELtBWTl6X7jCQcW15oEv1Ivgh-0NXLbSky7eyKGOEYHh6kqmStrFMlkS6eUGAJi4iam39FLWTApQPiMzNJZgyfJeV7paTPZG4Rt8UUaA8Ub-GTeAc8hEK-Sbkv6Fb5r9iczrV4raafj1OwKjlmOBcYnVPmIs2wjA3a9qEjM/s545/Srinagar%20Ke%20Veer.png',
    owner: {
      name: 'Akshay Kumar',
      company: 'Indian actor and Film Producer working in Hindi Cinema',
      image: 'https://www.dailypioneer.com/uploads/2019/story/images/big/akshay-kumar-asks-fans-to-not-participate-in--negative-trends--regarding--sooryavanshi--2019-06-14.jpg'
    },
    players: [
      {
        name: 'Raju Mukhiya',
        role: '8.50 lakh',
        image: 'https://i.ytimg.com/vi/DQ8lvDAQdpc/hq2.jpg?sqp=-oaymwEoCOADEOgC8quKqQMcGADwAQH4AbYIgAKAD4oCDAgAEAEYZSBIKEYwDw==&rs=AOn4CLAcK6NxQP8ucnp1BZ7u551qQ0cb1A'
      }
    ]
  },
  {
    id: 'falcon-risers-hyderabad',
    name: 'Falcon Risers Hyderabad',
    shortName: 'FRH',
    color: '#FBBF24',
    logo: 'https://scontent.fbom20-1.fna.fbcdn.net/v/t39.30808-6/429658500_122116136600208456_8890479502242913226_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=oQu-utCd7MUQ7kNvgEO_tXD&_nc_zt=23&_nc_ht=scontent.fbom20-1.fna&_nc_gid=A1yBXOvNOu0v9AxDsaijwrn&oh=00_AYCFnkeTcu_XDJ09dMHtgD8kvYbN71AKn4mRnHFUthw91g&oe=67797E9A',
    owner: {
      name: 'Ram Charan',
      company: 'Indian actor, Film Producer, and Entrepreneur',
      image: 'https://magzentine.com/wp-content/uploads/2023/06/ram_charan_good_morning_america-three_four.jpg'
    },
    players: [
      {
        name: 'Irfan Umair',
        role: '16.50 lakh',
        image: 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1jDnLG.img?w=600&h=450&m=4&q=98'
      }
    ]
  },
  {
    id: 'chennai-singams',
    name: 'Chennai Singams',
    shortName: 'CS',
    color: '#059669',
    logo: 'https://www.indiantelevision.com/sites/default/files/styles/smartcrop_800x800/public/images/tv-images/2024/02/14/74.jpg?itok=_IkzLuPY',
    owner: {
      name: 'Suriya',
      company: 'Indian actor and Film Producer',
      image: 'https://i.zoomtventertainment.com/story/Suriya_39_next_film.png'
    },
    players: [
      {
        name: 'Ketan Mhatre',
        role: '17.25 lakh',
        image: 'https://kheltoday.com/wp-content/uploads/2024/03/Ketan-M-in-action-scaled.jpg'
      }
    ]
  },
  {
    id: 'bengaluru-strikers',
    name: 'Bengaluru Strikers',
    shortName: 'BS',
    color: '#DB2777',
    logo: 'https://images.mykhel.com/img/2024/02/bangalore-strikers-ispl2024-squad1-1708925715.jpg',
    owner: {
      name: 'Hrithik Roshan',
      company: 'Indian actor who works in Hindi Cinema',
      image: 'https://www.easterneye.biz/media-library/hrithik-roshan-photo-by-sujit-jaiswal-afp-via-getty-images.jpg?id=53728837'
    },
    players: [
      {
        name: 'Saroj Pramanik',
        role: '16.25 lakh',
        image: 'https://i.ytimg.com/vi/-GylRFlA-fo/oardefault.jpg?sqp=-oaymwEkCJUDENAFSFqQAgHyq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB&rs=AOn4CLCzoj4FID__nlcAsleJ9kRSw5DKuQ'
      }
    ]
  }
];