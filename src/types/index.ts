export type PageId = 'home' | 'about' | 'skills' | 'works' | 'contact';

export interface NavItem {
  id: PageId;
  label: string;
}

export interface SoftSkill {
  name: string;
  category: 'soft' | 'language';
}

export interface SoftwareTool {
  name: string;
  category: 'workspace' | 'design' | 'engineering';
  icon?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'shirts' | 'cosmetics' | 'illustrations' | 'certificates';
  description?: string;
  image: string;
  tags?: string[];
}

export interface ProfileData {
  name: string;
  year: number;
  roles: string[];
  bio: string;
  skills: string[];
  contact: {
    socialMedia: string;
    website: string;
    email: string;
  };
}
