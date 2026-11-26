export interface Speaker {
  id: string;
  name: string;
  role: string;
  company: string;
  bio: string;
  image: string;
  socials?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export interface AgendaItem {
  id: string;
  time: string;
  title: string;
  description: string;
  speakerId?: string;
  category: "keynote" | "panel" | "workshop" | "breakout";
}

export interface Sponsor {
  id: string;
  name: string;
  tier: "headline" | "gold" | "silver" | "community";
  logo: string;
  website: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface HighlightItem {
  title: string;
  description: string;
  tag: string;
}
