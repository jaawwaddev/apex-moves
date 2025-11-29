import { Service, Testimonial } from '../types';

export const services: Service[] = [
  {
    id: '1',
    title: 'Local Residential',
    description: 'Stress-free moving for apartments, condos, and houses within the metro area. We handle your belongings with care.',
    iconName: 'Home',
  },
  {
    id: '2',
    title: 'Long Distance',
    description: 'Cross-country logistics handled by experts. GPS tracking and guaranteed delivery windows for your peace of mind.',
    iconName: 'Map',
  },
  {
    id: '3',
    title: 'Commercial Office',
    description: 'Efficient office relocations with minimal downtime. We disassemble, transport, and reassemble workstations.',
    iconName: 'Building2',
  },
  {
    id: '4',
    title: 'Packing & Unpacking',
    description: 'Full-service packing using high-quality materials. Let us handle the tedious part of moving.',
    iconName: 'PackageOpen',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'Homeowner',
    content: 'Apex Moves made our move absolutely seamless. The AI estimate was surprisingly accurate, and the team was professional.',
    avatar: 'https://picsum.photos/seed/sarah/100/100',
  },
  {
    id: '2',
    name: 'Marcus Chen',
    role: 'Business Owner',
    content: 'Moved our entire startup office over a weekend. Monday morning, everything was ready to go. Incredible service.',
    avatar: 'https://picsum.photos/seed/marcus/100/100',
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    role: 'Architect',
    content: 'I have a lot of fragile models and equipment. Nothing was scratched. Highly recommend for delicate items.',
    avatar: 'https://picsum.photos/seed/elena/100/100',
  },
];