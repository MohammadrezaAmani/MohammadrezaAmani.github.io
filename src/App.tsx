import React, { useState, useEffect, useMemo } from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { Theme } from "./components/theme";
import { langs } from "./configs/site";

const Home = React.lazy(() =>
  import("./pages/home").then((module) => ({ default: module.Home }))
);
const Blog = React.lazy(() =>
  import("./pages/blog").then((module) => ({ default: module.Blog }))
);
const BlogDetails = React.lazy(() =>
  import("./pages/blogDetails").then((module) => ({
    default: module.BlogDetails,
  }))
);
const Project = React.lazy(() =>
  import("./pages/project").then((module) => ({ default: module.Project }))
);
const ProjectDetails = React.lazy(() =>
  import("./pages/projectDetails").then((module) => ({
    default: module.ProjectDetails,
  }))
);

export function App() {
  const [lang, setLang] = useState("en");
  const [theme, setTheme] = useState(Theme.light);

  useEffect(() => {
    initializeLanguage();
  }, []);

  useEffect(() => {
    initializeTheme();
  }, []);

  const initializeLanguage = () => {
    const newLang = localStorage.getItem("lang") || langs.en.short;
    updateLanguage(newLang);
  };

  const updateLanguage = (newLang: string) => {
    document.documentElement.dir = langs[newLang as keyof typeof langs].dir;
    document.documentElement.lang = langs[newLang as keyof typeof langs].short;
    setLang(newLang);
    updateFontFamily(newLang);
    localStorage.setItem("lang", newLang);
  };

  const toggleLang = () => {
    const newLang = lang === langs.en.short ? langs.fa.short : langs.en.short;
    updateLanguage(newLang);
  };

  const updateFontFamily = (lang: string) => {
    document.documentElement.style.fontFamily =
      lang === "fa" ? "Vazir, sans-serif" : "Roboto, sans-serif";
  };

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

  const router = useMemo(
    () =>
      createHashRouter([
        {
          path: "/",
          element: (
            <Home
              lang={lang}
              toggleLang={toggleLang}
              theme={theme}
              toggleTheme={toggleTheme}
            />
          ),
        },
        {
          path: "/blog/",
          element: (
            <Blog
              lang={lang}
              toggleLang={toggleLang}
              theme={theme}
              toggleTheme={toggleTheme}
            />
          ),
        },
        {
          path: "/blog/:blogslug",
          element: (
            <BlogDetails
              lang={lang}
              toggleLang={toggleLang}
              theme={theme}
              toggleTheme={toggleTheme}
            />
          ),
        },
        {
          path: "/project/",
          element: (
            <Project
              lang={lang}
              toggleLang={toggleLang}
              theme={theme}
              toggleTheme={toggleTheme}
            />
          ),
        },
        {
          path: "/project/:projectslug",
          element: (
            <ProjectDetails
              lang={lang}
              toggleLang={toggleLang}
              theme={theme}
              toggleTheme={toggleTheme}
            />
          ),
        },
      ]),
    [lang, theme] // Depend on lang and theme for memoization
  );

  return <RouterProvider router={router} />;
}

export default App;
