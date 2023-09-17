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
  colorVariant?: string;
  sizeVariant?: string;
  availableQty?: number;
  category: { slug: string };
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
  type?: any;
  onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
  background?: string;
  color?: string;
  border?: string;
  as?: any;
  disabled?: boolean;
}

export interface ButtonStylesProps {
  background?: string;
  color?: string;
  border?: string;
  disabled?: boolean;
}

export interface DetailsProps {
  children: React.ReactNode;
  className?: string;
  summary: string;
  open?: boolean;
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
  bannerDesktop: Images[];
  bannerMobile: Images;
  alt?: string;
  outraAba: boolean;
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

export interface ModalProps {
  modalHeader?: React.ReactNode;
  modalBody: React.ReactNode;
  modalFooter?: React.ReactNode;
  close: MouseEventHandler<HTMLButtonElement>;
}

export interface VariantProps {
  active?: boolean;
}
