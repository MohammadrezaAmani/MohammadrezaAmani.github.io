import { Theme } from "../components/theme";

export type projects_type = {
  slug: string;
  url: string;
  en: {
    enable: boolean;
    title: string;
    description: string;
    details: string;
  };
  fa: {
    enable: boolean;
    title: string;
    description: string;
    details: string;
  };
  year: string;
  logo: string;
  technilogHomeies: string[];
}[];

export type education_type = {
  id: number;
  en: {
    name: string;
    degree: string;
    year: string;
    location: string;
    logo: string;
    desctiption: string;
  };
  fa: {
    name: string;
    degree: string;
    year: string;
    location: string;
    logo: string;
    desctiption: string;
  };
}[];

export type ThemeType = typeof Theme.dark;

export type fullArgs = {
  lang: string;
  toggleLang: () => void;
  theme: ThemeType;
  toggleTheme: () => void;
};
export type veryFullArgs = {
  lang: string;
  toggleLang: () => void;
  theme: ThemeType;
  toggleTheme: () => void;
  children: JSX.Element;
};

export type commonArgs = {
  lang: string;
  theme: ThemeType;
  slug: string;
};

export type blogType = {
  logo: string;
  image: string;
  en: {
    title: string;
    description: string;
    data: JSX.Element;
  };
  fa: {
    title: string;
    description: string;
    data: JSX.Element;
  };
  slug: string;
  related_posts: string[];
  tags: string[];
  category: string[];
  created_at: string;
  updated_at: string;
};

export type blogItemTypes = {
  blog: blogType;
  lang: string;
  theme: ThemeType;
};

export type projectItemTypes = {
  project: blogType;
  lang: string;
  theme: ThemeType;
};

export type Data = {
  logo: string;
  image: string;
  en: {
    title: string;
    description: string;
    data: JSX.Element;
  };
  fa: {
    title: string;
    description: string;
    data: JSX.Element;
  };
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
export type result_Type = {
  data: Data[];
  lang: string;
  theme: ThemeType;
  slug: string;
};