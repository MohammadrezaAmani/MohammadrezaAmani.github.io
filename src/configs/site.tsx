import {
  Home as HomeIcon,
  Work as WorkIcon,
  School as SchoolIcon,
  Description as DescriptionIcon,
  Apps as AppsIcon,
} from "@mui/icons-material";
import { DiWebplatform } from "react-icons/di";
import { routes } from "./routes";

export const BaseUri = "#";

export const siteConfig = {
  en: {
    title: "Mohammadreza Amani",
    description: "Mohammadreza Amani's personal website",
    author: "Mohammadreza Amani",
  },
  fa: {
    title: "محمدرضا امانی",
    description: "وبسایت شخصی محمدرضا امانی",
    author: "محمدرضا امانی",
  },
  url: "https://MohammadrezaAmani.github.io/",
  email: "more.amani@yahoo.com",
  github: "https://github.com/MohammadrezaAmani",
  theme: "dark",
};

export const langs = {
  en: {
    short: "en",
    full: "English",
    dir: "ltr",
  },
  fa: {
    short: "fa",
    full: "فارسی",
    dir: "rtl",
  },
};

export function getMenuItems(lang: string) {
  const iconTextColor = "text-slate-600 dark:text-slate-400 w-6 h-6";
  const keylang = lang as keyof typeof langs;
  return [
    {
      text: routes.home[keylang].title,
      slug: BaseUri + routes.home.path,
      icon: <HomeIcon className={iconTextColor} />,
    },
    {
      text: routes.experience[keylang].title,
      slug: BaseUri + routes.experience.path,
      icon: <WorkIcon className={iconTextColor} />,
    },
    {
      text: routes.education[keylang].title,
      slug: BaseUri + routes.education.path,
      icon: <SchoolIcon className={iconTextColor} />,
    },
    {
      text: routes.resume[keylang].title,
      slug: BaseUri + routes.resume.path,
      icon: <DescriptionIcon className={iconTextColor} />,
    },
    {
      text: routes.project[keylang].title,
      slug: BaseUri + routes.project.path,
      icon: <AppsIcon className={iconTextColor} />,
    },
    {
      text: routes.blog[keylang].title,
      slug: BaseUri + routes.blog.path,
      icon: <DiWebplatform className={iconTextColor} />,
    },
  ];
}

export const categoryRoute = routes.category.path;
