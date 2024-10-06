export interface Project {
  emoji?: string;
  title: string;
  href: string;
  image?: ImageMetadata;
  stars?: string | number;
  forks?: string | number;
  description: string;
  techs: string[];
}
