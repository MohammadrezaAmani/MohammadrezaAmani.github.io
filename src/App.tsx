import React, { Suspense } from "react";
import { useState, useEffect, startTransition, useMemo } from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { Theme } from "./components/theme";
import { langs } from "./configs/langs";
import Header from "./components/header";
import Footer from "./components/footer";
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
const EducationDetails = React.lazy(
  () => import("./app/education/[educationid]/page")
);
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
  const [lang, setLang] = useState(langs.en.short);
  const [theme, setTheme] = useState(Theme.light);
  useEffect(() => {
    initializeLanguage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   initializeTheme();
  // }, []);

  const initializeLanguage = () => {
    const newLang = localStorage.getItem("lang") || "";
    if (Object.keys(langs).includes(newLang)) {
      updateLanguage(newLang);
    }
  };

  const updateLanguage = (newLang: string) => {
    if (!Object.keys(langs).includes(newLang)) {
      newLang = Object.keys(langs)[0];
    }
    startTransition(() => {
      document.documentElement.dir = langs[newLang as keyof typeof langs].dir;
      document.documentElement.lang =
        langs[newLang as keyof typeof langs].short;
      setLang(newLang);
      localStorage.setItem("lang", newLang);
    });
  };
  // Memoize the Header component

  // const updateFontFamily = (lang: string) => {
  //   document.documentElement.style.fontFamily =
  //     lang === "fa" ? "Vazir, sans-serif" : "Roboto, sans-serif";
  // };

  // const initializeTheme = () => {
  //   try {
  //     const storedTheme = JSON.parse(
  //       localStorage.getItem("theme") || JSON.stringify(Theme.light)
  //     );
  //     const newTheme =
  //       typeof storedTheme === typeof Theme.dark ? storedTheme : Theme.dark;
  //     setTheme(newTheme);
  //     localStorage.setItem("theme", JSON.stringify(newTheme));
  //   } catch {
  //     setTheme(Theme.dark);
  //     localStorage.setItem("theme", JSON.stringify(Theme.dark));
  //   }
  // };

  const memoizedHeader = useMemo(() => {
    const toggleLang = () => {
      const arraylangs = Object.keys(langs);
      const newLang =
        langs[
          arraylangs[
            (arraylangs.indexOf(lang) + 1) % arraylangs.length
          ] as keyof typeof langs
        ].short;
      updateLanguage(newLang);
    };
    const toggleTheme = () => {
      const newTheme = theme === Theme.dark ? Theme.light : Theme.dark;
      setTheme(newTheme);
      localStorage.setItem("theme", JSON.stringify(newTheme));
    };

    return (
      <Header
        lang={lang}
        toggleLang={toggleLang}
        theme={theme}
        toggleTheme={toggleTheme}
      />
    );
  }, [lang, theme]);
  const memoizedFooter = useMemo(
    () => <Footer lang={lang} theme={theme} slug="/" />,
    [lang, theme]
  );
  const router = createHashRouter([
    {
      path: routes.home.path,
      element: (
        <Suspense fallback={null}>
          <Layout
            memoizedHeader={memoizedHeader}
            memoizedFooter={memoizedFooter}
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
            memoizedHeader={memoizedHeader}
            memoizedFooter={memoizedFooter}
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
            memoizedHeader={memoizedHeader}
            memoizedFooter={memoizedFooter}
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
            memoizedHeader={memoizedHeader}
            memoizedFooter={memoizedFooter}
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
            memoizedHeader={memoizedHeader}
            memoizedFooter={memoizedFooter}
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
            memoizedHeader={memoizedHeader}
            memoizedFooter={memoizedFooter}
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
            memoizedHeader={memoizedHeader}
            memoizedFooter={memoizedFooter}
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
            memoizedHeader={memoizedHeader}
            memoizedFooter={memoizedFooter}
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
      path: routes.educationDetails.path,
      element: (
        <Suspense fallback={null}>
          <Layout
            memoizedHeader={memoizedHeader}
            memoizedFooter={memoizedFooter}
            children={
              <EducationDetails
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
            memoizedHeader={memoizedHeader}
            memoizedFooter={memoizedFooter}
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
            memoizedHeader={memoizedHeader}
            memoizedFooter={memoizedFooter}
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
            memoizedHeader={memoizedHeader}
            memoizedFooter={memoizedFooter}
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
            memoizedHeader={memoizedHeader}
            memoizedFooter={memoizedFooter}
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
            memoizedHeader={memoizedHeader}
            memoizedFooter={memoizedFooter}
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
            memoizedHeader={memoizedHeader}
            memoizedFooter={memoizedFooter}
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
            memoizedHeader={memoizedHeader}
            memoizedFooter={memoizedFooter}
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
            memoizedHeader={memoizedHeader}
            memoizedFooter={memoizedFooter}
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
            memoizedHeader={memoizedHeader}
            memoizedFooter={memoizedFooter}
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
            memoizedHeader={memoizedHeader}
            memoizedFooter={memoizedFooter}
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
            memoizedHeader={memoizedHeader}
            memoizedFooter={memoizedFooter}
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
            memoizedHeader={memoizedHeader}
            memoizedFooter={memoizedFooter}
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
            memoizedHeader={memoizedHeader}
            memoizedFooter={memoizedFooter}
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
            memoizedHeader={memoizedHeader}
            memoizedFooter={memoizedFooter}
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
            memoizedHeader={memoizedHeader}
            memoizedFooter={memoizedFooter}
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
            memoizedHeader={memoizedHeader}
            memoizedFooter={memoizedFooter}
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
