import React, { Suspense } from "react";
import { useEffect, startTransition, useMemo } from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { langs } from "./configs/langs";
import Header from "./components/header";
import Footer from "./components/footer";
import { routes } from "./configs/routes";
import { Layout } from "./app/layout";
import { useLang } from "./hooks/langHook";
import { useTheme } from "./hooks/themeHook";
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
  const { lang, setLang } = useLang();
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    const updateLanguage = (newLang: string) => {
      if (!Object.keys(langs).includes(newLang)) {
        newLang = Object.keys(langs)[0];
      }
      startTransition(() => {
        document.documentElement.dir = langs[newLang as keyof typeof langs].dir;
        document.documentElement.lang =
          langs[newLang as keyof typeof langs].short;
        setLang(newLang as keyof typeof langs);
        localStorage.setItem("lang", newLang);
      });
    };
    const initializeLanguage = () => {
      const newLang = localStorage.getItem("lang") || "";
      if (Object.keys(langs).includes(newLang)) {
        updateLanguage(newLang);
      }
    };
    initializeLanguage();
  }, [setLang]);

  useEffect(() => {
    const updateTheme = (newTheme: string) => {
      startTransition(() => {
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
      });
    };
    const initializeTheme = () => {
      const newTheme = localStorage.getItem("theme") || "";
      if (newTheme) {
        updateTheme(newTheme);
      }
    };
    initializeTheme();
  }, [setTheme]);

  const memoizedHeader = useMemo(() => {
    return <Header />;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang, theme]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const memoizedFooter = useMemo(() => <Footer slug="/" />, [theme, lang]);
  const router = createHashRouter([
    {
      path: routes.home.path,
      element: (
        <Suspense fallback={null}>
          <Layout
            memoizedHeader={memoizedHeader}
            memoizedFooter={memoizedFooter}
            children={<Home slug={routes.home.path} />}
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
            children={<Blog slug={routes.blog.path} />}
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
            children={<BlogDetails slug={routes.blogDetails.path} />}
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
            children={<Project slug={routes.project.path} />}
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
            children={<ProjectDetails slug={routes.projectDetails.path} />}
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
            children={<Experience slug={routes.experience.path} />}
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
              <ExperienceDetails slug={routes.experienceDetails.path} />
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
            children={<Education slug={routes.education.path} />}
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
            children={<EducationDetails slug={routes.education.path} />}
          />
        </Suspense>
      ),
    },
    {
      path: routes.resume.path,
      element: (
        <Suspense fallback={null}>
          <Resume slug={routes.resume.path} />
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
            children={<Search slug={routes.search.path} />}
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
            children={<SearchDetails slug={routes.searchDetails.path} />}
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
            children={<Category slug={routes.category.path} />}
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
            children={<CategoryDetails slug={routes.categoryDetails.path} />}
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
            children={<Tag slug={routes.tag.path} />}
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
            children={<TagDetails slug={routes.tagDetails.path} />}
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
            children={<About slug={routes.about.path} />}
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
            children={<Contact slug={routes.contact.path} />}
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
            children={<FAQ slug={routes.faq.path} />}
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
            children={<FAQ slug={routes.faqDetails.path} />}
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
            children={<Courses slug={routes.courses.path} />}
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
            children={<CoursesDetails slug={routes.coursesDetails.path} />}
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
            children={<Publications slug={routes.publications.path} />}
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
              <PublicationDetails slug={routes.publicationDetails.path} />
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
            children={<GithubAPI slug={routes.github_api.path} />}
          />
        </Suspense>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
