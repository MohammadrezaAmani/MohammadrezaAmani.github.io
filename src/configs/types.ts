import { IconType } from "react-icons";

import { Theme } from "../components/theme";
import { langs } from "./langs";

export type ThemeType = typeof Theme.dark;

export type headerArgs = {
  lang: keyof typeof langs;
  toggleLang: () => void;
  theme: ThemeType;
  toggleTheme: () => void;
};

export type resumeInputArgs = {
  lang: keyof typeof langs;
  updateLanguage: (newLang: string) => void;
  theme: ThemeType;
  updateTheme: (newTheme: string) => void;
  slug: string;
};

export type commonArgs = {
  lang: keyof typeof langs;
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
    lang: keyof typeof langs;
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
    value: string;
  }[];
};

export type resumeType = {
  personal: profileType;
  education: Data;
  experiences: Data;
  projects: Data;
  courses: Data;
  publications: Data;
};

export type resumeCommonType = {
  resume: resumeType;
  lang: keyof typeof langs;
  theme: ThemeType;
  slug: string;
};
