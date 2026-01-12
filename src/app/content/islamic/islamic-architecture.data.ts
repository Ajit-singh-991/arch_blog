import { BlogPost } from '../../models/blog-post.model';

export const islamicArchitecturePosts: BlogPost[] = [
  {
    id: 'islamic-1',
    title: 'The Geometric Poetry of Islamic Architecture',
    region: 'Islamic',
    country: 'Middle East & Beyond',
    excerpt: 'Explore the mathematical beauty and spiritual symbolism of Islamic architecture from the Alhambra to the Taj Mahal.',
    content: `
      <h2>Islamic Architectural Principles</h2>
      <p>Islamic architecture, spanning from Spain to Indonesia, represents one of the world's most sophisticated building traditions. It shares common principles: geometric precision, calligraphic ornamentation, and the creation of spaces that facilitate spiritual contemplation.</p>
      
      <h2>Geometric Patterns</h2>
      <p>Islamic architecture avoids representational imagery in favor of abstract geometric patterns. These designs, based on mathematical principles, create infinite patterns that suggest the infinite nature of the divine. The Alhambra in Granada demonstrates this mastery.</p>
      
      <h2>Key Elements</h2>
      <p><strong>Domes:</strong> The dome represents the vault of heaven. The Hagia Sophia's massive dome influenced Islamic architecture for centuries.</p>
      
      <p><strong>Arches:</strong> The horseshoe arch, pointed arch, and multifoil arch create rhythm and visual interest. The Great Mosque of Cordoba features over 850 columns supporting double arches.</p>
      
      <p><strong>Muqarnas:</strong> These three-dimensional decorative elements, resembling stalactites, create transitions between different architectural elements.</p>
      
      <h2>Courtyard Design</h2>
      <p>Islamic architecture often centers around courtyards, creating oases of tranquility. The Court of the Lions demonstrates how water, geometry, and architecture combine.</p>
    `,
    featuredImage: 'https://images.unsplash.com/photo-1583096114844-06ce5a5f2171?q=80&w=2000&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1583096114844-06ce5a5f2171?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1596627670716-e82208a0d0d5?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1565552627915-416b24d7768e?q=80&w=2000&auto=format&fit=crop'
    ],
    date: '2024-02-15',
    author: 'Dr. Ahmed Hassan',
    tags: ['Geometric', 'Spiritual', 'Domes', 'Calligraphy'],
    architecturalStyle: 'Islamic, Moorish, Persian, Ottoman',
    keyFeatures: [
      'Geometric patterns',
      'Domes and arches',
      'Muqarnas decoration',
      'Calligraphic ornamentation',
      'Courtyard-centered design'
    ],
    historicalContext: 'Islamic architecture emerged in the 7th century, synthesizing Byzantine, Persian, and local traditions.',
    designPhilosophy: 'Avoidance of representational imagery, emphasis on geometric abstraction as expression of divine order.',
    notableExamples: [
      'Alhambra, Granada',
      'Taj Mahal, Agra',
      'Blue Mosque, Istanbul',
      'Sheikh Zayed Grand Mosque, Abu Dhabi'
    ]
  }
];
