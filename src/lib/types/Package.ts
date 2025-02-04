export type Package = {
  id: number;
  name: string;
  image: string;
  destination: string;
  price: number;
  duration: string;
  description: string;
  itinerary: string[];
  amenities: string[];
  rating: number;
  reviews: number;
  availableDates: string[];  
  maxGroupSize: number;     
  featured: boolean;         
};
