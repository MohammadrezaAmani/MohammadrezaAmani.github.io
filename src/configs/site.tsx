import { routes } from "./routes";
import { langs } from "./langs";
import { TbBrandGoogleHome } from "react-icons/tb";
import { CgWorkAlt } from "react-icons/cg";
import { LiaUniversitySolid } from "react-icons/lia";
import { SiReaddotcv } from "react-icons/si";
import { FaMedapps } from "react-icons/fa6";
import { LiaReadme } from "react-icons/lia";
import { FaFireAlt } from "react-icons/fa";

// BaseUri is the base path of the website, use "#" for hash router in GH pages
export const BaseUri = "#";

// siteConfig is the configuration of the website
export const siteConfig = {
  langs: [
    {
      langs: langs.en.short,
      title: "Mohammadreza Amani",
      description: "Mohammadreza Amani's personal website",
      author: "Mohammadreza Amani",
    },
    {
      lang: langs.fa.short,
      title: "محمدرضا امانی",
      description: "وبسایت شخصی محمدرضا امانی",
      author: "محمدرضا امانی",
    },
  ],
  url: "https://MohammadrezaAmani.github.io/",
  email: "more.amani@yahoo.com",
  github: "https://github.com/MohammadrezaAmani",
  theme: "dark",
};

export function getMenuItems(lang: string) {
  const iconTextColor = "text-slate-600 dark:text-slate-400 w-6 h-6";
  const findTitle = (key: string) => {
    const keylang = routes[key as keyof typeof routes].langs.find(
      (item) => item.lang === lang
    );
    if (!keylang) {
      return routes[key as keyof typeof routes].langs[0].title;
    }
    return keylang.title;
  };
  return [
    {
      text: findTitle("home"),
      slug: BaseUri + routes.home.path,
      icon: TbBrandGoogleHome,
    },
    {
      text: findTitle("experience"),
      slug: BaseUri + routes.experience.path,
      icon: CgWorkAlt,
    },
    {
      text: findTitle("education"),
      slug: BaseUri + routes.education.path,
      icon: LiaUniversitySolid,
    },
    {
      text: findTitle("resume"),
      slug: BaseUri + routes.resume.path,
      icon: SiReaddotcv,
    },
    {
      text: findTitle("project"),
      slug: BaseUri + routes.project.path,
      icon: FaMedapps,
    },
    {
      text: findTitle("blog"),
      slug: BaseUri + routes.blog.path,
      icon: LiaReadme,
    },
    {
      text: findTitle("about"),
      slug: BaseUri + routes.about.path,
      icon: FaFireAlt,
    },
  ];
}

export const categoryRoute = routes.category.path;
