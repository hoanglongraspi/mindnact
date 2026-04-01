export type NewsCategory = 'All' | 'Together Lab' | 'AgeWell Lab' | 'Community Lab' | 'Access Lab' | 'Co-Design Lab';

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: NewsCategory;
  featured?: boolean;
  image?: string;
}

export const newsItems: NewsItem[] = [
  {
    id: '1',
    title: 'Volunteering at Buffalo Heritage Village',
    excerpt: 'Austin Xu volunteered at Buffalo Heritage Village from 11:00 AM to 3:00 PM, helping make pancakes for the Maple Festival.',
    content: 'On Saturday, March 28, 2026, Together Lab\'s very own Austin Xu dedicated his weekend to volunteering at the Buffalo Heritage Village. From 11:00 AM to 3:00 PM, Austin rolled up his sleeves to help prepare and serve delicious pancakes for the highly anticipated annual Maple Festival.\n\nCommunity events like these are at the heart of what makes our programs special. By bridging generations and getting involved in local traditions, our youth members learn the value of service, teamwork, and active community participation. We extend our deepest gratitude to Austin for representing Minds & Actions so wonderfully and ensuring the Maple Festival was a sweet success for all who attended!',
    date: '2026-03-28',
    author: 'Together Lab',
    category: 'Together Lab',
    featured: true,
    image: '/events/together_03282026.jpg'
  },
  {
    id: '2',
    title: 'UB Research Lab Visit',
    excerpt: 'TogetherLab members Austin, Nickolas and Issac visited the UB research lab to study advanced healthcare technologies.',
    content: 'In an exciting educational excursion on March 26, Together Lab members Austin, Nickolas, and Issac visited the University at Buffalo (UB) research laboratories. The trip was organized to give our youth a firsthand look at how advanced healthcare technologies are being developed and tested.\n\nDuring the visit, the team was introduced to cutting-edge medical devices and innovative software designed to improve patient care and accessibility. The hands-on experience not only broadened their understanding of STEM career pathways but also sparked engaging discussions about the future of inclusive technology design. This collaboration with UB highlights our commitment to providing experiential learning opportunities that inspire the next generation of researchers and innovators.',
    date: '2026-03-26',
    author: 'Together Lab Team',
    category: 'Together Lab',
    image: '/events/together_03262026.jpg'
  },
  {
    id: '3',
    title: 'Older Adults Health Activities',
    excerpt: 'AgeWell Lab co-organized an activities toward older adults for health.',
    content: 'On March 17, 2026, the AgeWell Lab successfully co-organized a comprehensive health and wellness activity day specifically tailored for older adults. The event gathered community members for a day focused on promoting healthy aging, mobility, and overall digital inclusion.\n\nParticipants engaged in guided wellness exercises, interactive health education sessions, and social mingling that encouraged peer-to-peer connection. By partnering with local health advocates, AgeWell Lab continues to fulfill its mission of ensuring older adults remain active, informed, and socially integrated. The overwhelmingly positive feedback from attendees reinforces the importance of these community-centered health initiatives.',
    date: '2026-03-17',
    author: 'AgeWell Lab Team',
    category: 'AgeWell Lab',
    image: '/events/agewell_03172026.jpg'
  },
  {
    id: '4',
    title: 'Lunar New Year Celebration',
    excerpt: 'Community Lab organized the events to get together for celebrating the lunar new year.',
    content: 'The Community Lab rang in the holiday with a vibrant Lunar New Year celebration on February 15, 2026! The event was a spectacular gathering that brought together members from diverse local communities to honor the traditions, food, and cultural significance of the new year.\n\nAttendees enjoyed festive music, shared cultural stories, and partook in traditional activities that highlighted the rich diversity of our neighborhoods. Events like this are crucial for fostering public education, cross-cultural awareness, and mutual understanding. The celebration was a beautiful reminder of the strength and joy found in a united, inclusive community.',
    date: '2026-02-15',
    author: 'Community Lab Team',
    category: 'Community Lab',
    image: '/events/community_02152026.jpg'
  },
  {
    id: '5',
    title: 'AgeWell Lab Social Activities',
    excerpt: 'AgeWell Lab members got together for singing and communication social activities.',
    content: 'The AgeWell Lab hosted a heartwarming social afternoon on February 2, 2026, where members gathered together for a joyful session of singing and communication activities. Music has long been recognized as a powerful tool for connection and cognitive health, and this event proved just how uplifting it can be.\n\nParticipants shared their favorite songs, exchanged personal stories, and enjoyed the immense social benefits of group harmony. The communication exercises designed around the singing activities helped strengthen peer support networks among older adults, combating isolation while promoting mental well-being and a vibrant community spirit.',
    date: '2026-02-02',
    author: 'AgeWell Lab Team',
    category: 'AgeWell Lab',
    image: '/events/agewell_02022026.jpg'
  }
];

export const getCategoryColor = (cat: string) => {
  switch (cat) {
    case 'Together Lab': return 'bg-green-100 text-green-800';
    case 'AgeWell Lab': return 'bg-amber-100 text-amber-800';
    case 'Community Lab': return 'bg-blue-100 text-blue-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};
