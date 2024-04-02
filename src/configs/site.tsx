import {
  Home as HomeIcon,
  Work as WorkIcon,
  School as SchoolIcon,
  Description as DescriptionIcon,
  Apps as AppsIcon,
  ContactSupport as ContactSupportIcon,
} from "@mui/icons-material";
import { DiWebplatform } from "react-icons/di";

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
  return [
    {
      text: lang === "en" ? "Home" : "صفحه‌ی اصلی",
      slug: "/",
      icon: <HomeIcon className={iconTextColor} />,
    },
    {
      text: lang === "en" ? "Experience" : "تجارب کاری",
      slug: "/#/experience",

      icon: <WorkIcon className={iconTextColor} />,
    },
    {
      text: lang === "en" ? "Education" : "تحصیلات",
      slug: "/#/education",

      icon: <SchoolIcon className={iconTextColor} />,
    },
    {
      text: lang === "en" ? "Resume" : "رزومه",
      slug: "/#/resume",

      icon: <DescriptionIcon className={iconTextColor} />,
    },
    {
      text: lang === "en" ? "Portfolio" : "پورتوفیلو",
      slug: "/#/project",

      icon: <AppsIcon className={iconTextColor} />,
    },
    {
      text: lang === "en" ? "Blog" : "بلاگ",
      slug: "/#/blog/",

      icon: <DiWebplatform className={iconTextColor}  />,
    },
  ];
}
