export interface DesignResource {
    id: string;
    title: string;
    author: string;
    type: 'Publication' | 'Paper' | 'Toolkit';
    url: string;
    tags: string[];
    description: string;
}

export const MOCK_RESOURCES: DesignResource[] = [
    {
        id: 'r1',
        title: 'INNOVATION Magazine: Supernatural Issue',
        author: 'IDSA National',
        type: 'Publication',
        url: 'https://www.idsa.org/innovation',
        tags: ['Industry Trends', 'Thought Leadership'],
        description: 'The voice of the industrial design profession, covering cutting-edge trends and methodologies.',
    },
    {
        id: 'r2',
        title: 'Form Follows Fiber: Low-Carbon Bioplastic Case Study',
        author: 'GW Design + Innovation Lab',
        type: 'Paper',
        url: '#',
        tags: ['Sustainability', 'Materials Science'],
        description: 'A peer-reviewed academic paper exploring plant-based interfaces and sustainable manufacturing.',
    },
    {
        id: 'r3',
        title: 'Stanford d.school Design Thinking Bootleg',
        author: 'Stanford d.school',
        type: 'Toolkit',
        url: 'https://dschool.stanford.edu/resources/design-thinking-bootleg',
        tags: ['Methodology', 'Education'],
        description: 'A set of tools and methods to help you start your design journey.',
    },
];
