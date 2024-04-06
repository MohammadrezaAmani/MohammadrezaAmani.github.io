import { langs as languages } from "./langs";

export const routes = {
  home: {
    path: "/",
    langs: [{
      lang: languages.en.short,
      title: "Home",
      description: "Mohammadreza Amani's personal website",
    },
    {
      lang: languages.fa.short,
      title: "صفحه‌ی اصلی",
      description: "وبسایت شخصی محمدرضا امانی",
    }],
  },
  experience: {
    path: "/experience",
    langs: [{
      lang: languages.en.short,
      title: "Experience",
      description: "Mohammadreza Amani's work experience",
    },
    {
      lang: languages.fa.short,
      title: "تجارب کاری",
      description: "تجارب کاری محمدرضا امانی",
    }],
  },
  education: {
    path: "/education",
    langs: [{
      lang: languages.en.short,
      title: "Education",
      description: "Mohammadreza Amani's education",
    },
    {
      lang: languages.fa.short,
      title: "تحصیلات",
      description: "تحصیلات محمدرضا امانی",
    }],
  },
  resume: {
    path: "/resume",
    langs: [{
      lang: languages.en.short,
      title: "Resume",
      description: "Mohammadreza Amani's resume",
    },
    {
      lang: languages.fa.short,
      title: "رزومه",
      description: "رزومه محمدرضا امانی",
    }],
  },
  project: {
    path: "/project",
    langs: [{
      lang: languages.en.short,
      title: "Portfolio",
      description: "Mohammadreza Amani's projects",
    },
    {
      lang: languages.fa.short,
      title: "پورتوفیلو",
      description: "پروژه‌های محمدرضا امانی",
    }],
  },
  blog: {
    path: "/blog",
    langs: [{
      lang: languages.en.short,
      title: "Blog",
      description: "Mohammadreza Amani's blog",
    },
    {
      lang: languages.fa.short,
      title: "بلاگ",
      description: "بلاگ محمدرضا امانی",
    }],
  },
  notFound: {
    langs: [{
      lang: languages.en.short,
      title: "Not Found",
      description: "Page not found",
    },
    {
      lang: languages.fa.short,
      title: "پیدا نشد",
      description: "صفحه پیدا نشد",
    }],
  },
  about: {
    path: "/about",
    langs: [{
      lang: languages.en.short,
      title: "About",
      description: "About Mohammadreza Amani",
    },
    {
      lang: languages.fa.short,
      title: "درباره",
      description: "درباره محمدرضا امانی",
    }],
  },
  contact: {
    path: "/contact",
    langs: [{
      lang: languages.en.short,
      title: "Contact",
      description: "Contact Mohammadreza Amani",
    },
    {
      lang: languages.fa.short,
      title: "تماس",
      description: "تماس با محمدرضا امانی",
    }],
  },
  faq: {
    path: "/faq",
    langs: [{
      lang: languages.en.short,
      title: "FAQ",
      description: "Frequently Asked Questions",
    },
    {
      lang: languages.fa.short,
      title: "سوالات متداول",
      description: "سوالات متداول",
    }],
  },
  faqDetails: {
    path: "/faq/:faqid",
    langs: [{
      lang: languages.en.short,
      title: "FAQ Details",
      description: "Frequently Asked Questions",
    },
    {
      lang: languages.fa.short,
      title: "جزئیات سوالات متداول",
      description: "جزئیات سوالات متداول",
    }],
  },
  projectDetails: {
    path: "/project/:projectid",
    langs: [{
      lang: languages.en.short,
      title: "Project Details",
      description: "Project Details",
    },
    {
      lang: languages.fa.short,
      title: "جزئیات پروژه",
      description: "جزئیات پروژه",
    }],
  },
  blogDetails: {
    path: "/blog/:blogid",
    langs: [{
      lang: languages.en.short,
      title: "Blog Details",
      description: "Blog Details",
    },
    {
      lang: languages.fa.short,
      title: "جزئیات بلاگ",
      description: "جزئیات بلاگ",
    }],
  },
  educationDetails: {
    path: "/education/:educationid",
    langs: [{
      lang: languages.en.short,
      title: "Education",
      description: "Mohammadreza Amani's education",
    },
    {
      lang: languages.fa.short,
      title: "تحصیلات",
      description: "تحصیلات محمدرضا امانی",
    }],
  },
  search: {
    path: "/search",
    langs: [{
      lang: languages.en.short,
      title: "Search",
      description: "Search",
    },
    {
      lang: languages.fa.short,
      title: "جستجو",
      description: "جستجو",
    }],
  },
  experienceDetails: {
    path: "/experience/:experienceid",
    langs: [{
      lang: languages.en.short,
      title: "Experience Details",
      description: "Experience Details",
    },
    {
      lang: languages.fa.short,
      title: "جزئیات تجربه",
      description: "جزئیات تجربه",
    }],
  },
  searchDetails: {
    path: "/search/:searchid",
    langs: [{
      lang: languages.en.short,
      title: "Search Details",
      description: "Search Details",
    },
    {
      lang: languages.fa.short,
      title: "جزئیات جستجو",
      description: "جزئیات جستجو",
    }],
  },
  category: {
    path: "/category",
    langs: [{
      lang: languages.en.short,
      title: "Category",
      description: "Category",
    },
    {
      lang: languages.fa.short,
      title: "دسته‌بندی",
      description: "دسته‌بندی",
    }],
  },
  categoryDetails: {
    path: "/category/:categoryid",
    langs: [{
      lang: languages.en.short,
      title: "Category Details",
      description: "Category Details",
    },
    {
      lang: languages.fa.short,
      title: "جزئیات دسته‌بندی",
      description: "جزئیات دسته‌بندی",
    }],
  },
  tag: {
    path: "/tag",
    langs: [{
      lang: languages.en.short,
      title: "Tag",
      description: "Tag",
    },
    {
      lang: languages.fa.short,
      title: "برچسب",
      description: "برچسب",
    }],
  },
  tagDetails: {
    path: "/tag/:tagid",
    langs: [{
      lang: languages.en.short,
      title: "Tag Details",
      description: "Tag Details",
    },
    {
      lang: languages.fa.short,
      title: "جزئیات برچسب",
      description: "جزئیات برچسب",
    }],
  },
  courses: {
    path: "/courses",
    langs: [{
      lang: languages.en.short,
      title: "Courses",
      description: "Courses",
    },
    {
      lang: languages.fa.short,
      title: "دوره‌ها",
      description: "دوره‌ها",
    }],
  },
  coursesDetails: {
    path: "/courses/:courseid",
    langs: [{
      lang: languages.en.short,
      title: "Courses Details",
      description: "Courses Details",
    },
    {
      lang: languages.fa.short,
      title: "جزئیات دوره",
      description: "جزئیات دوره",
    }],
  },
  publications: {
    path: "/publications",
    langs: [{
      lang: languages.en.short,
      title: "Publications",
      description: "Publications",
    },
    {
      lang: languages.fa.short,
      title: "منابع",
      description: "منابع",
    }],
  },
  publicationDetails: {
    path: "/publications/:publicationid",
    langs: [{
      lang: languages.en.short,
      title: "Publication Details",
      description: "Publication Details",
    },
    {
      lang: languages.fa.short,
      title: "جزئیات منبع",
      description: "جزئیات منبع",
    }],
  },
  github_api: {
    path: "/github_api",
    langs: [{
      lang: languages.en.short,
      title: "Github API",
      description: "Github API",
    },
    {
      lang: languages.fa.short,
      title: "API گیت‌هاب",
      description: "API گیت‌هاب",
    }],
  },
};
