import { MouseEventHandler } from "react";

export interface ProductsProps {
  products: Product[];
}
export interface Product {
  id: string;
  slug: string;
  images?: Images[];
  image: string;
  name: string;
  price: number;
  qty?: number;
}

export interface Images {
  url: string;
}
export interface GridContainerProps {
  responsive: boolean;
  children: React.ReactNode;
}
export interface SectionContainerProps {
  id?: string;
  sectionTitle?: string;
  className?: string;
  children: React.ReactNode;
}
export interface PostProps {
  slug: string;
  coverImage: string;
  title: string;
  exerpt: string;
}

export interface ButtonProps {
  href?: string;
  text: string;
  type?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  background?: string;
  color?: string;
  border?: string;
}

export interface ButtonStylesProps {
  background?: string;
  color?: string;
  border?: string;
}

export interface DetailsProps {
  children: React.ReactNode;
  className?: string;
  summary: string;
}

export interface IconProps {
  width?: string;
  height?: string;
  color?: string;
}

export interface BannersProps {
  banners: Banner[];
}
export interface Banner {
  id: string;
  url: string;
  link: string;
  bannerImage: Images[];
  alt?: string;
}

export interface PostsProps {
  posts: BlogPost[];
}

export interface CoverImage {
  url: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  coverImage: CoverImage;
  title: string;
  exerpt: string;
}

export interface PromotionsProps {
  promotions: Promotion[];
}

export interface Promotion {
  id: string;
  link: string;
  image: { url: string };
  title: string;
}

export interface StylesProps {
  open: boolean;
}
