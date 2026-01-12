import { BlogPost } from '../../models/blog-post.model';

export const indianArchitecturePosts: BlogPost[] = [
  {
    id: 'indian-1',
    title: 'The Majestic Splendor of Indian Temple Architecture',
    region: 'Indian',
    country: 'India',
    excerpt: 'Discover the intricate carvings, spiritual symbolism, and mathematical precision that define India\'s temple architecture across different dynasties.',
    content: `
      <h2>The Essence of Indian Temple Architecture</h2>
      <p>Indian temple architecture represents one of humanity's most sophisticated expressions of spiritual and artistic achievement. Spanning over 2,000 years, these structures are not merely buildings but three-dimensional mandalas, cosmic diagrams that map the universe and facilitate the journey from the material to the divine.</p>
      
      <h2>Vastu Shastra: The Science of Architecture</h2>
      <p>Indian architecture is governed by <em>Vastu Shastra</em>, an ancient system of design principles that align structures with cosmic forces. Every measurement, proportion, and orientation follows precise mathematical and astronomical calculations, creating spaces that resonate with universal harmony.</p>
      
      <h2>Dravidian Architecture (South India)</h2>
      <p>The Dravidian style, predominant in South India, is characterized by its towering <em>gopurams</em> (ornate gateway towers) that can reach heights of over 60 meters. The Meenakshi Temple in Madurai features 14 gopurams, each covered in thousands of intricately carved figures depicting gods, goddesses, and mythological scenes.</p>
      
      <h2>Nagara Architecture (North India)</h2>
      <p>The Nagara style, found in North and Central India, features curvilinear towers (<em>shikharas</em>) that rise like mountain peaks. The Kandariya Mahadeva Temple in Khajuraho represents the pinnacle of this style.</p>
      
      <h2>Contemporary Relevance</h2>
      <p>Modern Indian architects like Charles Correa and Balkrishna Doshi have reinterpreted traditional principles for contemporary buildings, demonstrating how ancient wisdom can inform sustainable, climate-responsive design in the 21st century.</p>
    `,
    featuredImage: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2000&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582555695092-2bd3135cb3c8?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582979512210-99b6a53386f9?q=80&w=2000&auto=format&fit=crop'
    ],
    date: '2024-01-20',
    author: 'Prof. Rajesh Kumar',
    tags: ['Temples', 'Sculpture', 'Vastu Shastra', 'Spiritual'],
    architecturalStyle: 'Dravidian, Nagara',
    keyFeatures: [
      'Gopurams (gateway towers)',
      'Shikharas (curvilinear towers)',
      'Intricate stone carvings',
      'Mathematical precision'
    ],
    historicalContext: 'Indian temple architecture evolved from simple rock-cut caves to elaborate structural temples.',
    designPhilosophy: 'Temples as cosmic diagrams (mandalas), representing the universe.',
    notableExamples: [
      'Meenakshi Temple, Madurai',
      'Brihadeeswara Temple, Thanjavur',
      'Kandariya Mahadeva Temple, Khajuraho',
      'Sun Temple, Konark'
    ]
  },
  {
    id: 'indian-2',
    title: 'Mughal Architecture: The Fusion of Persian and Indian Traditions',
    region: 'Indian',
    country: 'India',
    excerpt: 'Explore the magnificent Mughal architecture that blended Persian elegance with Indian grandeur, creating some of the world\'s most beautiful monuments.',
    content: `
      <h2>Mughal Architectural Legacy</h2>
      <p>Mughal architecture represents a unique synthesis of Persian, Central Asian, and Indian architectural traditions. From the 16th to 18th centuries, Mughal emperors created a distinctive style characterized by symmetry, intricate decoration, and monumental scale.</p>
      
      <h2>Key Characteristics</h2>
      <p>Mughal buildings feature bulbous domes, slender minarets, large halls, and extensive use of white marble and red sandstone. The style emphasizes geometric patterns, calligraphy, and inlaid precious stones.</p>
      
      <h2>The Taj Mahal</h2>
      <p>The Taj Mahal, built by Shah Jahan in memory of his wife Mumtaz Mahal, represents the pinnacle of Mughal architecture. Its perfect symmetry, intricate marble inlay work, and harmonious proportions make it one of the world's most recognized buildings.</p>
    `,
    featuredImage: 'https://images.unsplash.com/photo-1548013146-724791273845?q=80&w=2000&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1548013146-724791273845?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1588697960334-a47734493a38?q=80&w=2000&auto=format&fit=crop'
    ],
    date: '2024-02-05',
    author: 'Prof. Rajesh Kumar',
    tags: ['Mughal', 'Monumental', 'Fusion', 'Marble'],
    architecturalStyle: 'Mughal',
    keyFeatures: [
      'Bulbous domes',
      'Minarets',
      'Marble inlay work',
      'Symmetrical layouts'
    ],
    historicalContext: 'Mughal architecture flourished from the 16th to 18th centuries.',
    designPhilosophy: 'Harmony through symmetry, elegance through decoration, and grandeur through scale.',
    notableExamples: [
      'Taj Mahal, Agra',
      'Red Fort, Delhi',
      'Fatehpur Sikri',
      'Humayun\'s Tomb, Delhi'
    ]
  }
];
