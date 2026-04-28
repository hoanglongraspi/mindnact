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
  imagePosition?: string;
}

export const newsItems: NewsItem[] = [
  {
    id: '13',
    title: 'Exploring Digital Music Technology',
    excerpt: 'The AgeWell team hosted a local community event to help older adult participants explore digital music technology, fostering both technical learning and strengthened communication skills.',
    content: 'On April 27, 2026, the AgeWell team hosted an engaging local community event focused on helping older adults explore the exciting world of digital music technology. Participants had the opportunity to interact with modern software and devices to create, mix, and enjoy music in new ways.\n\nBeyond just learning new technical skills, the event provided a wonderful platform for attendees to strengthen their communication skills and build meaningful social connections. By sharing their musical creations and collaborating on projects, participants fostered a vibrant sense of community and demonstrated the powerful role that creative technology can play in enhancing well-being and lifelong learning.',
    date: '2026-04-27',
    author: 'AgeWell Lab Team',
    category: 'AgeWell Lab',
    featured: true,
    image: '/events/agewell_04282026.jpg'
  },
  {
    id: '12',
    title: 'Community Science Exploration',
    excerpt: 'TogetherLab members led a hands-on community science exploration in the Williamsville North High neighborhood to assess and advocate for suburban infrastructure accessibility.',
    content: 'On April 25, 2026, TogetherLab members proudly held their very first community science exploration, focusing on suburban infrastructure accessibility. The initiative took place in the Williamsville North High neighborhood, where our youth participants actively assessed and documented the accessibility of local public spaces, sidewalks, and crosswalks.\n\nEquipped with observation tools and a passion for inclusive design, the members gathered valuable data on how suburban environments support or hinder mobility for diverse populations. This hands-on project not only empowered the students to engage directly with real-world civic issues but also highlighted TogetherLab\'s commitment to advocating for safer, more accessible communities for everyone.',
    date: '2026-04-25',
    author: 'Together Lab Team',
    category: 'Together Lab',
    image: '/events/together_04262026.jpg'
  },
  {
    id: '11',
    title: 'Introducing OneScan Biometrical Technologies',
    excerpt: 'TogetherLab members showcased OneScan, an advanced biometrical technology utilizing gait sensors for fall risk diagnostics, at a local Western New York community event.',
    content: 'At a recent Western New York community event on April 25, 2026, TogetherLab members had the exciting opportunity to showcase advanced biometrical technologies to the public. The highlight of their presentation was OneScan, an innovative system utilizing balancing and gait sensors designed specifically for fall risk diagnostics.\n\nThe youth members demonstrated how these cutting-edge products can proactively monitor health and improve safety for vulnerable populations. Engaging with community members, they explained the underlying science and the potential impact of such technologies on preventative healthcare. This event successfully combined STEM education with community outreach, allowing our participants to act as ambassadors for health-focused innovation.',
    date: '2026-04-25',
    author: 'Together Lab Team',
    category: 'Together Lab',
    image: '/events/together_04252026.jpg',
    imagePosition: '50% 20%'
  },
  {
    id: '10',
    title: 'Choir Performance at WNY Community Event',
    excerpt: 'The AgeWell Lab choir delivered an inspiring and heartwarming musical performance at a local Western New York community event, celebrating the arts and social connection.',
    content: 'On April 25, 2026, the AgeWell Lab choir delivered a heartwarming and uplifting performance at a prominent Western New York community event. The choir, composed of enthusiastic AgeWell participants, spent weeks rehearsing a diverse repertoire of songs designed to bring joy and inspiration to the audience.\n\nThe performance was a resounding success, highlighting the incredible talent and vibrant spirit of our older adult members. More than just a musical showcase, the event served as a powerful testament to the importance of the arts in fostering social inclusion, boosting mental health, and bridging generational divides within the community.',
    date: '2026-04-25',
    author: 'AgeWell Lab Team',
    category: 'AgeWell Lab',
    image: '/events/agewell_04252026.jpg'
  },
  {
    id: '9',
    title: 'Digital Literacy and Communication Skills',
    excerpt: 'AgeWell team members participated in an empowering workshop to enhance their digital literacy, safely navigate new technologies, and strengthen communication skills.',
    content: 'In an empowering workshop held on April 21, 2026, AgeWell team members came together to enhance their digital literacy and strengthen vital communication skills. As technology continues to evolve rapidly, staying connected and informed has become increasingly important for older adults.\n\nDuring the session, participants learned how to navigate new digital platforms, safely use online communication tools, and protect their digital privacy. The collaborative environment encouraged peer-to-peer support, allowing members to share tips and build confidence together. This initiative reflects AgeWell Lab\'s ongoing dedication to bridging the digital divide and ensuring that all community members can actively participate in today\'s connected world.',
    date: '2026-04-21',
    author: 'AgeWell Lab Team',
    category: 'AgeWell Lab',
    image: '/events/agewell_04212026.jpg'
  },
  {
    id: '8',
    title: 'Food Exploration Experience with YSA',
    excerpt: 'TogetherLab participants came together for a shared food exploration experience supported by YSA to foster social connection, cultural learning, and team communication skills.',
    content: 'On April 19, 2026, TogetherLab participants came together for a unique and engaging food exploration experience, generously supported by YSA (Youth Service America). This special event was designed to go far beyond just tasting new foods — it was a hands-on opportunity to foster meaningful social connections, celebrate cultural diversity, and strengthen team communication skills.\n\nParticipants worked together to explore and prepare dishes from various cultural backgrounds, learning about the histories and traditions behind each recipe. The collaborative cooking environment naturally encouraged conversation, cooperation, and a deeper appreciation for the diverse backgrounds within our community. Events like these are a cornerstone of TogetherLab\'s mission to build bridges between young people through shared, enriching experiences.',
    date: '2026-04-19',
    author: 'Together Lab Team',
    category: 'Together Lab',
    image: '/events/together_04192026.jpg'
  },
  {
    id: '7',
    title: '3D Printing Lab Visit at UB',
    excerpt: 'TogetherLab participants visited the university\'s 3D printing lab to explore advanced manufacturing technologies and build STEM learning and innovation skills.',
    content: 'On April 18, 2026, TogetherLab participants had an incredible opportunity to visit the University at Buffalo\'s state-of-the-art 3D printing lab. The visit was designed to immerse our youth members in the world of advanced manufacturing technologies and spark their curiosity about STEM career pathways.\n\nDuring the visit, participants observed 3D printers in action, learned about the design-to-prototype pipeline, and had hands-on experiences with digital modeling tools. The lab staff walked them through real-world applications of 3D printing in healthcare, engineering, and product design. This kind of experiential learning is exactly what TogetherLab strives to provide — bridging the gap between classroom concepts and cutting-edge innovation.',
    date: '2026-04-18',
    author: 'Together Lab Team',
    category: 'Together Lab',
    image: '/events/together_04182026.jpg'
  },
  {
    id: '6',
    title: 'AgeWell Experiential Travel Retreat',
    excerpt: 'AgeWell participants joined an experiential travel retreat in Los Angeles and Hawaii to strengthen life skills, social connection, teamwork, and intergenerational learning.',
    content: 'From April 5, 2026, AgeWell Lab participants embarked on an extraordinary experiential travel retreat spanning Los Angeles and Hawaii. This immersive program was thoughtfully designed to strengthen essential life skills, deepen social connections, and promote intergenerational learning in inspiring new environments.\n\nParticipants engaged in a variety of team-building exercises, cultural excursions, and reflective workshops throughout their journey. From exploring the vibrant communities of Los Angeles to experiencing the natural beauty and cultural heritage of Hawaii, every activity was crafted to encourage teamwork, resilience, and personal growth. The retreat exemplified AgeWell Lab\'s commitment to creating transformative experiences that empower participants of all ages to learn, connect, and thrive together.',
    date: '2026-04-05',
    author: 'AgeWell Lab Team',
    category: 'AgeWell Lab',
    image: '/events/agewell_04052026.jpg'
  },
  {
    id: '1',
    title: 'Volunteering at Buffalo Heritage Village',
    excerpt: 'TogetherLab members volunteered at Buffalo Heritage Village from 11:00 AM to 3:00 PM, helping make pancakes for the Maple Festival.',
    content: 'On Saturday, March 28, 2026, TogetherLab members volunteered at the Buffalo Heritage Village. From 11:00 AM to 3:00 PM, they rolled up their sleeves to help prepare and serve delicious pancakes for the highly anticipated annual Maple Festival.\n\nCommunity events like these are at the heart of what makes our programs special. By bridging generations and getting involved in local traditions, our youth members learn the value of service, teamwork, and active community participation. We extend our deepest gratitude to our volunteer for representing Minds & Actions so wonderfully and ensuring the Maple Festival was a sweet success for all who attended!',
    date: '2026-03-28',
    author: 'Together Lab',
    category: 'Together Lab',
    image: '/events/together_03282026.jpg'
  },
  {
    id: '2',
    title: 'UB Research Lab Visit',
    excerpt: 'TogetherLab members visited the UB research lab to study advanced healthcare technologies.',
    content: 'In an exciting educational excursion on March 26, TogetherLab members visited the University at Buffalo (UB) research laboratories. The trip was organized to give our youth a firsthand look at how advanced healthcare technologies are being developed and tested.\n\nDuring the visit, the team was introduced to cutting-edge medical devices and innovative software designed to improve patient care and accessibility. The hands-on experience not only broadened their understanding of STEM career pathways but also sparked engaging discussions about the future of inclusive technology design. This collaboration with UB highlights our commitment to providing experiential learning opportunities that inspire the next generation of researchers and innovators.',
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
    timeZone: 'UTC',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};
