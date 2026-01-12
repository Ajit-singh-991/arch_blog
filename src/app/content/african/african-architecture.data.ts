import { BlogPost } from '../../models/blog-post.model';

export const africanArchitecturePosts: BlogPost[] = [
  {
    id: 'african-1',
    title: 'The Vibrant Diversity of African Architecture',
    region: 'African',
    country: 'Africa',
    excerpt: 'From ancient pyramids to contemporary sustainable design, explore the rich architectural heritage of the African continent.',
    content: `
      <h2>African Architectural Heritage</h2>
      <p>African architecture encompasses extraordinary diversity, from the ancient pyramids of Egypt to the earth architecture of Mali, the stone cities of Zimbabwe, and contemporary innovations addressing climate and sustainability.</p>
      
      <h2>Ancient Egyptian Architecture</h2>
      <p>The Great Pyramid of Giza, built around 2560 BCE, remained the world's tallest structure for over 3,800 years. Egyptian architecture demonstrates sophisticated understanding of mathematics, astronomy, and engineering.</p>
      
      <h2>Earth Architecture</h2>
      <p>The Great Mosque of Djenné in Mali represents the pinnacle of earth architecture. Built entirely of mud bricks and mud plaster, this structure requires annual maintenance by the community.</p>
      
      <h2>Stone Architecture</h2>
      <p>Great Zimbabwe (11th-15th centuries) demonstrates sophisticated stone construction without mortar. The massive walls, some over 11 meters high, were built using a technique called "dry stone walling."</p>
      
      <h2>Contemporary African Architecture</h2>
      <p>Modern African architects like Francis Kéré are creating innovative, sustainable designs that respond to local climate and culture. Kéré's work uses local materials and passive cooling techniques.</p>
    `,
    featuredImage: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55cd?q=80&w=2000&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1516026672322-bc52d61a55cd?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1599571227566-1c2d5e307398?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1523580880018-b78f8cb08658?q=80&w=2000&auto=format&fit=crop'
    ],
    date: '2024-02-20',
    author: 'Dr. Amani Okonkwo',
    tags: ['Ancient', 'Sustainable', 'Earth Architecture', 'Cultural'],
    architecturalStyle: 'Ancient Egyptian, Earth Architecture',
    keyFeatures: [
      'Pyramidal structures',
      'Earth and mud construction',
      'Dry stone walling',
      'Climate-responsive design'
    ],
    historicalContext: 'African architecture spans millennia, from ancient Egyptian civilization through medieval kingdoms to contemporary innovations.',
    designPhilosophy: 'Harmony with environment, use of local materials, and community participation.',
    notableExamples: [
      'Great Pyramid of Giza',
      'Great Mosque of Djenné',
      'Great Zimbabwe',
      'Lalibela Rock Churches, Ethiopia'
    ]
  }
];
