export interface BlogPost {
  id: string;
  title: string;
  region: 'Chinese' | 'Indian' | 'European' | 'Japanese' | 'Islamic' | 'African' | 'American' | 'Future' | 'Other';
  country: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  images: string[];
  date: string;
  author: string;
  tags: string[];
  architecturalStyle: string;
  keyFeatures: string[];
  historicalContext: string;
  designPhilosophy: string;
  notableExamples: string[];
}

export type Region = BlogPost['region'];
