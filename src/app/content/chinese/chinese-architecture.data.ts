import { BlogPost } from '../../models/blog-post.model';

export const chineseArchitecturePosts: BlogPost[] = [
  {
    id: 'chinese-1',
    title: 'The Timeless Elegance of Chinese Traditional Architecture',
    region: 'Chinese',
    country: 'China',
    excerpt: 'Explore the profound beauty and philosophical depth of Chinese architectural traditions, from imperial palaces to serene gardens.',
    content: `
      <h2>Introduction to Chinese Architecture</h2>
      <p>Chinese architecture stands as one of the world's most distinctive and influential architectural traditions, with a history spanning over 5,000 years. Rooted in profound philosophical principles and cultural values, Chinese architecture reflects the harmony between humanity and nature, embodying the principles of balance, symmetry, and cosmological order.</p>
      
      <h2>Philosophical Foundations</h2>
      <p>At the heart of Chinese architecture lies the concept of <em>Feng Shui</em> (风水), which translates to "wind and water." This ancient practice governs the spatial arrangement and orientation of buildings to achieve harmony with the environment. The principles of <em>Yin and Yang</em> and the <em>Five Elements</em> theory also deeply influence architectural design, creating spaces that balance opposing forces and elemental energies.</p>
      
      <h2>Key Architectural Elements</h2>
      <p><strong>Dougong Brackets:</strong> These interlocking wooden brackets are perhaps the most iconic feature of Chinese architecture. Without using nails, these brackets distribute weight evenly, allowing for flexible, earthquake-resistant structures. The intricate patterns also serve decorative purposes, showcasing exceptional craftsmanship.</p>
      
      <h2>Imperial Architecture</h2>
      <p>The Forbidden City in Beijing represents the pinnacle of Chinese imperial architecture. Built during the Ming Dynasty, vast complexes with yellow glazed tiles and red walls create a powerful visual hierarchy.</p>
      
      <h2>Modern Interpretations</h2>
      <p>Contemporary Chinese architects are reinterpreting traditional principles for modern contexts, incorporating recycled materials and traditional techniques.</p>
    `,
    featuredImage: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2000&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2000&auto=format&fit=crop'
    ],
    date: '2024-01-15',
    author: 'Dr. Li Wei',
    tags: ['Traditional', 'Imperial', 'Feng Shui', 'Wooden Architecture'],
    architecturalStyle: 'Traditional Chinese',
    keyFeatures: [
      'Dougong bracket system',
      'Curved roof eaves',
      'Axial symmetry',
      'Color symbolism'
    ],
    historicalContext: 'Chinese architecture has evolved over 5,000 years, with distinct periods including the Tang Dynasty golden age and Ming/Qing imperial grandeur.',
    designPhilosophy: 'Harmony between humanity and nature, balance of Yin and Yang, cosmological order.',
    notableExamples: [
      'Forbidden City, Beijing',
      'Temple of Heaven, Beijing',
      'Suzhou Classical Gardens',
      'Potala Palace, Tibet'
    ]
  },
  {
    id: 'chinese-2',
    title: 'The Art of Chinese Courtyard Houses: Siheyuan Architecture',
    region: 'Chinese',
    country: 'China',
    excerpt: 'Discover the traditional Siheyuan courtyard houses that represent the essence of Chinese residential architecture and family life.',
    content: `
      <h2>Introduction to Siheyuan</h2>
      <p>Siheyuan (四合院), meaning "four-sided courtyard," represents the quintessential form of traditional Chinese residential architecture. These courtyard houses embody the Chinese philosophy of harmony, privacy, and family unity.</p>
      
      <h2>Architectural Layout</h2>
      <p>The typical Siheyuan consists of four buildings arranged around a central courtyard. The main building faces south, receiving optimal sunlight, while side buildings flank the east and west.</p>
      
      <h2>Cultural Significance</h2>
      <p>These structures reflect Confucian values of hierarchy and respect. The central courtyard serves as a communal space for family gatherings, symbolizing unity.</p>
    `,
    featuredImage: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2000&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2000&auto=format&fit=crop'
    ],
    date: '2024-01-25',
    author: 'Dr. Li Wei',
    tags: ['Residential', 'Courtyard', 'Traditional', 'Cultural'],
    architecturalStyle: 'Siheyuan Courtyard',
    keyFeatures: [
      'Four-sided enclosure',
      'Central courtyard',
      'Privacy and security',
      'Natural ventilation'
    ],
    historicalContext: 'Siheyuan architecture flourished during the Ming and Qing dynasties, representing the ideal Chinese family dwelling.',
    designPhilosophy: 'Privacy, family unity, harmony with nature, and respect for hierarchy.',
    notableExamples: [
      'Hutongs of Beijing',
      'Pingyao Ancient City',
      'Lijiang Old Town'
    ]
  }
];
