export type Performance = {
  date: string;
  venue: string;
  location: string;
  isPast?: boolean;
};

export type VenuesByCity = {
  [city: string]: string[];
};

export type SocialLinks = {
  website: string;
  instagram: string;
  soundcloud: string;
  email: string;
};

export type PressKitImage = {
  id: string;
  cloudinaryId: string;
  description?: string;
};

export type Track = {
  trackId: string;
  title: string;
};
