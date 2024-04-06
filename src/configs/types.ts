import { IconType } from "react-icons";

import { Theme } from "../components/theme";

export type ThemeType = typeof Theme.dark;

export type headerArgs = {
  lang: string;
  toggleLang: () => void;
  theme: ThemeType;
  toggleTheme: () => void;
};

export type commonArgs = {
  lang: string;
  theme: ThemeType;
  slug: string;
};

export type Data = {
  logo: string;
  image: string;
  langs: {
    lang: string;
    title: string;
    description: string;
    data: JSX.Element;
  }[];
  slug: string;
  related_posts: string[];
  tags: string[];
  category: string[];
  created_at: string;
  updated_at: string;
};

export type dataType = {
  data: Data;
  lang: string;
  theme: ThemeType;
  slug: string;
};

export type resultType = {
  data: Data[];
  lang: string;
  theme: ThemeType;
  slug: string;
};

export type profileType = {
  image: string;
  email: string;
  phone: string;
  langs: {
    lang: string;
    title: string;
    name: string;
    about: string;
    location: string;
    favorites: string[];
  }[];
  socials: {
    name: string;
    url: string;
    icon: IconType;
  }[];
}


export type resumeType = {
  personal: profileType;
  education: Data;
  experiences: Data;
  projects: Data;
  courses: Data;
  publications: Data;
};