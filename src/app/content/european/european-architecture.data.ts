import { BlogPost } from '../../models/blog-post.model';

export const europeanArchitecturePosts: BlogPost[] = [
  {
    id: 'european-1',
    title: 'The Grandeur of European Classical Architecture',
    region: 'European',
    country: 'Europe',
    excerpt: 'From Greek columns to Gothic cathedrals, explore the evolution of European architecture through the ages.',
    content: `
      <h2>The Legacy of European Architecture</h2>
      <p>European architecture represents a continuous dialogue between past and present, tradition and innovation. From the mathematical perfection of Greek temples to the soaring verticality of Gothic cathedrals, European architecture has shaped the built environment across continents.</p>
      
      <h2>Classical Foundations: Greek and Roman</h2>
      <p>The Parthenon in Athens exemplifies Greek architectural principles: mathematical precision, proportional harmony, and the three orders. The Romans adapted and expanded these principles, developing the arch, vault, and dome.</p>
      
      <h2>Gothic Architecture: Reaching for Heaven</h2>
      <p>Gothic architecture represents a technological and spiritual revolution. The pointed arch, ribbed vault, and flying buttress allowed buildings to reach unprecedented heights while filling interiors with light.</p>
      
      <h2>Renaissance: The Rebirth of Classicism</h2>
      <p>The Renaissance saw a return to classical principles with new understanding. Filippo Brunelleschi's dome for Florence Cathedral combined Roman engineering with Renaissance innovation.</p>
    `,
    featuredImage: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2000&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2000&auto=format&fit=crop'
    ],
    date: '2024-02-01',
    author: 'Dr. Emma Thompson',
    tags: ['Classical', 'Gothic', 'Renaissance', 'Baroque'],
    architecturalStyle: 'Classical, Gothic, Renaissance',
    keyFeatures: [
      'Classical orders',
      'Pointed arches',
      'Flying buttresses',
      'Stained glass',
      'Proportions'
    ],
    historicalContext: 'European architecture evolved from Greek and Roman foundations through medieval and Renaissance periods.',
    designPhilosophy: 'Harmony through mathematical proportion and the relationship between form and function.',
    notableExamples: [
      'Parthenon, Athens',
      'Notre-Dame de Paris',
      'St. Peter\'s Basilica, Vatican',
      'Colosseum, Rome'
    ]
  },
  {
    id: 'european-2',
    title: 'Modern European Architecture: From Bauhaus to Contemporary',
    region: 'European',
    country: 'Europe',
    excerpt: 'Explore how European architects revolutionized design in the 20th and 21st centuries, from functionalism to parametric architecture.',
    content: `
      <h2>The Modern Movement</h2>
      <p>The 20th century saw European architecture break free from historical styles, embracing new materials and technologies. The Bauhaus school in Germany became the epicenter of modern design.</p>
      
      <h2>Key Movements</h2>
      <p><strong>Bauhaus:</strong> Championed the unity of art, craft, and technology.</p>
      
      <p><strong>International Style:</strong> Architects like Le Corbusier and Mies van der Rohe created a universal language of architecture using steel, glass, and concrete.</p>
      
      <p><strong>Contemporary:</strong> Today's architects push boundaries with sustainable design and innovative materials.</p>
    `,
    featuredImage: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2000&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2000&auto=format&fit=crop'
    ],
    date: '2024-02-15',
    author: 'Dr. Emma Thompson',
    tags: ['Modern', 'Bauhaus', 'Contemporary', 'Innovation'],
    architecturalStyle: 'Modern, International Style',
    keyFeatures: [
      'Form follows function',
      'Steel and glass construction',
      'Minimalist aesthetics',
      'Sustainable design'
    ],
    historicalContext: 'Modern European architecture emerged in the early 20th century, rejecting historical styles.',
    designPhilosophy: 'Functionalism, honesty of materials, and universal design principles.',
    notableExamples: [
      'Bauhaus Building, Dessau',
      'Villa Savoye, France',
      'The Shard, London'
    ]
  }
];
