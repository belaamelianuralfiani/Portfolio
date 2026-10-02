import shirtsImg from '../assets/works/works-shirts-2x.png';
import cosmeticsImg from '../assets/works/works-cosmetics-2x.png';
import illustrationsImg from '../assets/works/works-illustrations-2x.png';
import certificateImg from '../assets/works/works-certificate-2x.png';
import type { ProjectItem } from '../types';

export const projectsData: ProjectItem[] = [
  {
    id: 'shirts',
    title: 'Shirt Designs',
    category: 'shirts',
    description: 'Custom graphic apparel layouts, merchandise concept development, and typography compositions.',
    image: shirtsImg,
    tags: ['Apparel Design', 'Merchandise', 'Illustrator', 'Screen Printing'],
  },
  {
    id: 'cosmetics',
    title: 'Cosmetic Project',
    category: 'cosmetics',
    description: 'Brand identity, modern beauty packaging aesthetics, and curated digital presence for natural skincare solutions.',
    image: cosmeticsImg,
    tags: ['Brand Identity', 'Product Presentation', 'Beauty & Skincare', 'Art Direction'],
  },
  {
    id: 'illustrations',
    title: 'Illustration Folio',
    category: 'illustrations',
    description: 'Vibrant character illustration, expressive anime mascots, stickers, and whimsical digital artwork.',
    image: illustrationsImg,
    tags: ['Digital Art', 'Character Design', 'Mascot', 'Color Palette'],
  },
  {
    id: 'certificates',
    title: 'Certificates & Recognition',
    category: 'certificates',
    description: 'Official certification as Tim Pelaksana in Program Penguatan Kapasitas Organisasi Kemahasiswaan (PPK Ormawa) Kemendikbudristek.',
    image: certificateImg,
    tags: ['Kemendikbudristek', 'Leadership', 'Organizational Excellence'],
  },
];
