import { BlogPost } from '../../models/blog-post.model';

export const japaneseArchitecturePosts: BlogPost[] = [
  {
    id: 'japanese-1',
    title: 'The Serene Beauty of Japanese Architecture',
    region: 'Japanese',
    country: 'Japan',
    excerpt: 'Discover the minimalist elegance and deep connection to nature that defines Japanese architectural philosophy.',
    content: `
      <h2>Japanese Architectural Philosophy</h2>
      <p>Japanese architecture embodies the principle of <em>wabi-sabi</em>: finding beauty in imperfection, impermanence, and simplicity. This philosophy creates spaces that are not just functional but deeply contemplative, fostering harmony between human habitation and the natural world.</p>
      
      <h2>Traditional Elements</h2>
      <p><strong>Tatami Rooms:</strong> The modular tatami mat system creates flexible, multi-purpose spaces. The standard 3x6 shaku mat governs room proportions, creating a human-scaled environment.</p>
      
      <p><strong>Shoji Screens:</strong> These translucent paper screens allow natural light to filter softly into spaces while maintaining privacy. They can be opened to connect interior and exterior.</p>
      
      <p><strong>Post-and-Beam Construction:</strong> Traditional Japanese buildings use a sophisticated timber frame system that allows for flexibility and earthquake resistance.</p>
      
      <h2>Zen Architecture</h2>
      <p>Zen temples and gardens represent the ultimate expression of Japanese architectural philosophy. The rock garden at Ryoan-ji in Kyoto uses only 15 rocks and raked gravel to suggest infinite space.</p>
      
      <h2>Contemporary Japanese Architecture</h2>
      <p>Modern masters like Tadao Ando and Kengo Kuma have reinterpreted traditional principles. Ando's use of raw concrete creates spaces of light and shadow, while Kuma's work emphasizes materiality.</p>
    `,
    featuredImage: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2000&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1580490135831-27ee3ca6f633?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=2000&auto=format&fit=crop'
    ],
    date: '2024-02-10',
    author: 'Prof. Yuki Tanaka',
    tags: ['Minimalism', 'Zen', 'Traditional', 'Wabi-Sabi'],
    architecturalStyle: 'Traditional Japanese, Zen',
    keyFeatures: [
      'Tatami modular system',
      'Shoji screens',
      'Post-and-beam timber construction',
      'Connection to nature',
      'Minimalist aesthetics'
    ],
    historicalContext: 'Japanese architecture has evolved from Jomon period dwellings through Chinese-influenced temple architecture to unique expressions like the tea house.',
    designPhilosophy: 'Wabi-sabi, harmony with nature, flexibility, and the concept of ma (negative space).',
    notableExamples: [
      'Kiyomizu-dera, Kyoto',
      'Katsura Imperial Villa, Kyoto',
      '21st Century Museum of Contemporary Art, Kanazawa',
      'Tokyo Skytree'
    ]
  }
];
