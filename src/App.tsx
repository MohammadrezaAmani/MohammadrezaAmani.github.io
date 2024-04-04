import React, { Suspense } from "react";
import { useState, useEffect, startTransition } from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { Theme } from "./components/theme";
import { langs } from "./configs/site";

import { routes } from "./configs/routes";

import { Layout } from "./app/layout";

const Home = React.lazy(() => import("./app/page"));
const Blog = React.lazy(() => import("./app/blog/page"));
const BlogDetails = React.lazy(() => import("./app/blog/[blogid]/page"));
const Project = React.lazy(() => import("./app/projects/page"));
const ProjectDetails = React.lazy(
  () => import("./app/projects/[projectid]/page")
);
const About = React.lazy(() => import("./app/about/page"));
const Contact = React.lazy(() => import("./app/contact/page"));
const FAQ = React.lazy(() => import("./app/faq/page"));
const Experience = React.lazy(() => import("./app/experiences/page"));
const Education = React.lazy(() => import("./app/education/page"));
const Resume = React.lazy(() => import("./app/resume/page"));
const Search = React.lazy(() => import("./app/search/page"));
const ExperienceDetails = React.lazy(
  () => import("./app/experiences/[experienceid]/page")
);
const SearchDetails = React.lazy(() => import("./app/search/[searchid]/page"));
const Category = React.lazy(() => import("./app/category/page"));
const CategoryDetails = React.lazy(
  () => import("./app/category/[categoryid]/page")
);
const Tag = React.lazy(() => import("./app/tags/page"));
const TagDetails = React.lazy(() => import("./app/tags/[tagid]/page"));
const GithubAPI = React.lazy(() => import("./app/github_api/page"));
const Publications = React.lazy(() => import("./app/publications/page"));
const PublicationDetails = React.lazy(
  () => import("./app/publications/[publicationid]/page")
);
const Courses = React.lazy(() => import("./app/courses/page"));
const CoursesDetails = React.lazy(
  () => import("./app/courses/[courseid]/page")
);

export function App() {
  const [lang, setLang] = useState("en");
  const [theme, setTheme] = useState(Theme.light);
  useEffect(() => {
    // initializeLanguage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    initializeTheme();
  }, []);

  // const initializeLanguage = () => {
  //   const newLang = localStorage.getItem("lang") || langs.en.short;
  //   updateLanguage(newLang);
  // };

  const updateLanguage = (newLang: string) => {
    startTransition(() => {
      document.documentElement.dir = langs[newLang as keyof typeof langs].dir;
      document.documentElement.lang =
        langs[newLang as keyof typeof langs].short;
      setLang(newLang);
      // updateFontFamily(newLang);
      localStorage.setItem("lang", newLang);
    });
  };

  const toggleLang = () => {
    const newLang = lang === langs.en.short ? langs.fa.short : langs.en.short;
    updateLanguage(newLang);
  };

  // const updateFontFamily = (lang: string) => {
  //   document.documentElement.style.fontFamily =
  //     lang === "fa" ? "Vazir, sans-serif" : "Roboto, sans-serif";
  // };

  const initializeTheme = () => {
    try {
      const storedTheme = JSON.parse(
        localStorage.getItem("theme") || JSON.stringify(Theme.light)
      );
      const newTheme =
        typeof storedTheme === typeof Theme.dark ? storedTheme : Theme.dark;
      setTheme(newTheme);
      localStorage.setItem("theme", JSON.stringify(newTheme));
    } catch {
      setTheme(Theme.dark);
      localStorage.setItem("theme", JSON.stringify(Theme.dark));
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === Theme.dark ? Theme.light : Theme.dark;
    setTheme(newTheme);
    localStorage.setItem("theme", JSON.stringify(newTheme));
  };

  const router = createHashRouter([
    {
      path: routes.home.path,
      element: (
        <Suspense fallback={null}>
          <Layout
            lang={lang}
            toggleLang={toggleLang}
            theme={theme}
            toggleTheme={toggleTheme}
            children={
              <Home lang={lang} theme={theme} slug={routes.home.path} />
            }
          />
        </Suspense>
      ),
    },
    {
      path: routes.blog.path,
      element: (
        <Suspense fallback={null}>
          <Layout
            lang={lang}
            toggleLang={toggleLang}
            theme={theme}
            toggleTheme={toggleTheme}
            children={
              <Blog lang={lang} theme={theme} slug={routes.blog.path} />
            }
          />
        </Suspense>
      ),
    },
    {
      path: routes.blogDetails.path,
      element: (
        <Suspense fallback={null}>
          <Layout
            lang={lang}
            toggleLang={toggleLang}
            theme={theme}
            toggleTheme={toggleTheme}
            children={
              <BlogDetails
                lang={lang}
                theme={theme}
                slug={routes.blogDetails.path}
              />
            }
          />
        </Suspense>
      ),
    },
    {
      path: routes.project.path,
      element: (
        <Suspense fallback={null}>
          <Layout
            lang={lang}
            toggleLang={toggleLang}
            theme={theme}
            toggleTheme={toggleTheme}
            children={
              <Project lang={lang} theme={theme} slug={routes.project.path} />
            }
          />
        </Suspense>
      ),
    },
    {
      path: routes.projectDetails.path,
      element: (
        <Suspense fallback={null}>
          <Layout
            lang={lang}
            toggleLang={toggleLang}
            theme={theme}
            toggleTheme={toggleTheme}
            children={
              <ProjectDetails
                lang={lang}
                theme={theme}
                slug={routes.projectDetails.path}
              />
            }
          />
        </Suspense>
      ),
    },
    {
      path: routes.experience.path,
      element: (
        <Suspense fallback={null}>
          <Layout
            lang={lang}
            toggleLang={toggleLang}
            theme={theme}
            toggleTheme={toggleTheme}
            children={
              <Experience
                lang={lang}
                theme={theme}
                slug={routes.experience.path}
              />
            }
          />
        </Suspense>
      ),
    },
    {
      path: routes.experienceDetails.path,
      element: (
        <Suspense fallback={null}>
          <Layout
            lang={lang}
            toggleLang={toggleLang}
            theme={theme}
            toggleTheme={toggleTheme}
            children={
              <ExperienceDetails
                lang={lang}
                theme={theme}
                slug={routes.experienceDetails.path}
              />
            }
          />
        </Suspense>
      ),
    },
    {
      path: routes.education.path,
      element: (
        <Suspense fallback={null}>
          <Layout
            lang={lang}
            toggleLang={toggleLang}
            theme={theme}
            toggleTheme={toggleTheme}
            children={
              <Education
                lang={lang}
                theme={theme}
                slug={routes.education.path}
              />
            }
          />
        </Suspense>
      ),
    },
    {
      path: routes.resume.path,
      element: (
        <Suspense fallback={null}>
          <Layout
            lang={lang}
            toggleLang={toggleLang}
            theme={theme}
            toggleTheme={toggleTheme}
            children={
              <Resume lang={lang} theme={theme} slug={routes.resume.path} />
            }
          />
        </Suspense>
      ),
    },
    {
      path: routes.search.path,
      element: (
        <Suspense fallback={null}>
          <Layout
            lang={lang}
            toggleLang={toggleLang}
            theme={theme}
            toggleTheme={toggleTheme}
            children={
              <Search lang={lang} theme={theme} slug={routes.search.path} />
            }
          />
        </Suspense>
      ),
    },
    {
      path: routes.searchDetails.path,
      element: (
        <Suspense fallback={null}>
          <Layout
            lang={lang}
            toggleLang={toggleLang}
            theme={theme}
            toggleTheme={toggleTheme}
            children={
              <SearchDetails
                lang={lang}
                theme={theme}
                slug={routes.searchDetails.path}
              />
            }
          />
        </Suspense>
      ),
    },
    {
      path: routes.category.path,
      element: (
        <Suspense fallback={null}>
          <Layout
            lang={lang}
            toggleLang={toggleLang}
            theme={theme}
            toggleTheme={toggleTheme}
            children={
              <Category lang={lang} theme={theme} slug={routes.category.path} />
            }
          />
        </Suspense>
      ),
    },
    {
      path: routes.categoryDetails.path,
      element: (
        <Suspense fallback={null}>
          <Layout
            lang={lang}
            toggleLang={toggleLang}
            theme={theme}
            toggleTheme={toggleTheme}
            children={
              <CategoryDetails
                lang={lang}
                theme={theme}
                slug={routes.categoryDetails.path}
              />
            }
          />
        </Suspense>
      ),
    },
    {
      path: routes.tag.path,
      element: (
        <Suspense fallback={null}>
          <Layout
            lang={lang}
            toggleLang={toggleLang}
            theme={theme}
            toggleTheme={toggleTheme}
            children={<Tag lang={lang} theme={theme} slug={routes.tag.path} />}
          />
        </Suspense>
      ),
    },
    {
      path: routes.tagDetails.path,
      element: (
        <Suspense fallback={null}>
          <Layout
            lang={lang}
            toggleLang={toggleLang}
            theme={theme}
            toggleTheme={toggleTheme}
            children={
              <TagDetails
                lang={lang}
                theme={theme}
                slug={routes.tagDetails.path}
              />
            }
          />
        </Suspense>
      ),
    },
    {
      path: routes.about.path,
      element: (
        <Suspense fallback={null}>
          <Layout
            lang={lang}
            toggleLang={toggleLang}
            theme={theme}
            toggleTheme={toggleTheme}
            children={
              <About lang={lang} theme={theme} slug={routes.about.path} />
            }
          />
        </Suspense>
      ),
    },
    {
      path: routes.contact.path,
      element: (
        <Suspense fallback={null}>
          <Layout
            lang={lang}
            toggleLang={toggleLang}
            theme={theme}
            toggleTheme={toggleTheme}
            children={
              <Contact lang={lang} theme={theme} slug={routes.contact.path} />
            }
          />
        </Suspense>
      ),
    },
    {
      path: routes.faq.path,
      element: (
        <Suspense fallback={null}>
          <Layout
            lang={lang}
            toggleLang={toggleLang}
            theme={theme}
            toggleTheme={toggleTheme}
            children={<FAQ lang={lang} theme={theme} slug={routes.faq.path} />}
          />
        </Suspense>
      ),
    },
    {
      path: routes.faqDetails.path,
      element: (
        <Suspense fallback={null}>
          <Layout
            lang={lang}
            toggleLang={toggleLang}
            theme={theme}
            toggleTheme={toggleTheme}
            children={
              <FAQ lang={lang} theme={theme} slug={routes.faqDetails.path} />
            }
          />
        </Suspense>
      ),
    },
    {
      path: routes.courses.path,
      element: (
        <Suspense fallback={null}>
          <Layout
            lang={lang}
            toggleLang={toggleLang}
            theme={theme}
            toggleTheme={toggleTheme}
            children={
              <Courses lang={lang} theme={theme} slug={routes.courses.path} />
            }
          />
        </Suspense>
      ),
    },
    {
      path: routes.coursesDetails.path,
      element: (
        <Suspense fallback={null}>
          <Layout
            lang={lang}
            toggleLang={toggleLang}
            theme={theme}
            toggleTheme={toggleTheme}
            children={
              <CoursesDetails
                lang={lang}
                theme={theme}
                slug={routes.coursesDetails.path}
              />
            }
          />
        </Suspense>
      ),
    },
    {
      path: routes.publications.path,
      element: (
        <Suspense fallback={null}>
          <Layout
            lang={lang}
            toggleLang={toggleLang}
            theme={theme}
            toggleTheme={toggleTheme}
            children={
              <Publications
                lang={lang}
                theme={theme}
                slug={routes.publications.path}
              />
            }
          />
        </Suspense>
      ),
    },
    {
      path: routes.publicationDetails.path,
      element: (
        <Suspense fallback={null}>
          <Layout
            lang={lang}
            toggleLang={toggleLang}
            theme={theme}
            toggleTheme={toggleTheme}
            children={
              <PublicationDetails
                lang={lang}
                theme={theme}
                slug={routes.publicationDetails.path}
              />
            }
          />
        </Suspense>
      ),
    },
    {
      path: routes.github_api.path,
      element: (
        <Suspense fallback={null}>
          <Layout
            lang={lang}
            toggleLang={toggleLang}
            theme={theme}
            toggleTheme={toggleTheme}
            children={
              <GithubAPI
                lang={lang}
                theme={theme}
                slug={routes.github_api.path}
              />
            }
          />
        </Suspense>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
