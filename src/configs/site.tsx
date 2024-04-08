import { routes } from "./routes";
import { langs } from "./langs";
import { TbHeartCode } from "react-icons/tb";
import { CgWorkAlt } from "react-icons/cg";
import { LiaUniversitySolid } from "react-icons/lia";
import { SiReaddotcv } from "react-icons/si";
import { FaMedapps } from "react-icons/fa6";
import { LiaReadme } from "react-icons/lia";
import { FaFireAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineAlternateEmail } from "react-icons/md";

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

export const homePage = [
  {
    lang: langs.en.short,
    title: (
      <h2 className="text-4xl">
        Hi, I’m <span className="text-red-600">Mohammadreza</span>
      </h2>
    ),
    subtitle: (
      <p className="text-slate-600">Sofware Engineer and FullStack Developer</p>
    ),
    skills: [
      {
        title: "Web designer & developer",
        icon: TbHeartCode,
        url: "https://github.com/MohammadrezaAmani",
      },
      {
        title: "Tehran, Iran",
        icon: CiLocationOn,
        url: "https://www.google.com/maps/d/viewer?mid=132fq12ig_YfdeN0cxzAkc6Ik4lo&hl=en&ll=35.71061825680851%2C51.4071210981902&z=17",
      },
      {
        title: "more.amani@yahoo.com",
        icon: MdOutlineAlternateEmail,
        url: "mailto:more.amani@yahoo.com",
      },
    ],
    cvButton: "DOWNLOAD CV",
    contactButton: "CONTACT ME",
  },
  {
    lang: langs.fa.short,
    title: (
      <h2 className="text-4xl">
        <span className="text-red-600">محمدرضا</span> هستم.
      </h2>
    ),
    subtitle: <p className="text-slate-600">برنامه‌نویس و مهندس کامپیوتر</p>,
    skills: [
      {
        title: "برنامه نویس و توسعه دهنده‌ وب",
        icon: TbHeartCode,
        url: "https://github.com/MohammadrezaAmani",
      },
      {
        title: "تهران، ایران",
        icon: CiLocationOn,
        url: "https://www.google.com/maps/d/viewer?mid=132fq12ig_YfdeN0cxzAkc6Ik4lo&hl=en&ll=35.71061825680851%2C51.4071210981902&z=17",
      },
      {
        title: "more.amani@yahoo.com",
        icon: MdOutlineAlternateEmail,
        url: "mailto:more.amani@yahoo.com",
      },
    ],
    cvButton: "دانلود رزومه",
    contactButton: "تماس با من",
  },
];
