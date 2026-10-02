export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  link?: string;
  tags: string[];
}

export interface Service {
  title: string;
  description: string;
  iconName: string;
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "Bela",
    fullName: "Bela Creative Studio",
    tagline: "Visual & UI Designer craft playful, modern digital experiences.",
    bio: "Halo! Saya Bela, desainer grafis dan UI/UX yang berfokus menciptakan visual identitas dan antarmuka produk digital yang bersih, ekspresif, dan fungsional.",
    availability: "Available for Freelance & Full-time",
    experienceYears: "3+",
    completedProjects: "40+",
    happyClients: "25+",
  },
  skills: [
    "Figma",
    "Adobe Illustrator",
    "Photoshop",
    "UI/UX Design",
    "Visual Branding",
    "Design Systems",
    "Prototyping",
    "Motion Graphics",
  ],
  services: [
    {
      title: "Branding & Visual Identity",
      description: "Membangun logo, guidelines warna, dan identitas visual unik yang melekat kuat di benak audiens Anda.",
      iconName: "Palette",
    },
    {
      title: "UI/UX & Web Design",
      description: "Mendesain website dan aplikasi mobile yang intuitif, ramah pengguna, dan berkonversi tinggi.",
      iconName: "Layout",
    },
    {
      title: "Social Media & Marketing Assets",
      description: "Menciptakan materi promosi digital berkualitas tinggi yang konsisten dan relevan bagi target audiens.",
      iconName: "Sparkles",
    },
  ],
  projects: [
    {
      id: "1",
      title: "Kopi Senja Brand Identity & Packaging",
      category: "Branding",
      description: "Redesain identitas visual menyeluruh, label kemasan kopi botol, dan buku panduan merek.",
      image: "https://images.unsplash.com/photo-1559525839-8f8ec320b92e?auto=format&fit=crop&w=800&q=80",
      tags: ["Packaging", "Visual Identity", "Illustrator"],
      link: "#",
    },
    {
      id: "2",
      title: "Nusa Pay Mobile Banking App",
      category: "UI/UX Design",
      description: "Eksplorasi antarmuka aplikasi dompet digital dengan gaya bersih dan alur transaksi tanpa hambatan.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
      tags: ["Mobile App", "Figma", "Design System"],
      link: "#",
    },
    {
      id: "3",
      title: "Artha Finance Landing Page",
      category: "Web Design",
      description: "Landing page modern bergaya bento grid untuk platform manajemen keuangan personal.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      tags: ["Landing Page", "Web UI", "Responsive"],
      link: "#",
    },
    {
      id: "4",
      title: "Bloom Botanical Skincare Catalog",
      category: "Graphic Design",
      description: "Katalog promosi produk musiman dengan tipografi editorial dan palet warna organik.",
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      tags: ["Print & Digital", "Editorial", "Layout"],
      link: "#",
    },
  ],
  contact: {
    email: "bela.creative@example.com",
    whatsapp: "+62 812-3456-7890",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    dribbble: "https://dribbble.com",
  },
};