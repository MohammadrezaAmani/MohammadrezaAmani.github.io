import { Home } from "./pages/home";
import { Blog } from "./pages/blog";
import { BlogDetails } from "./pages/blogDetails";
import { Project } from "./pages/project";
import { ProjectDetails } from "./pages/projectDetails";
import { useState, useEffect } from "react";
import { Theme } from "./components/theme";
import { langs } from "./configs/site";
import { createHashRouter, RouterProvider } from "react-router-dom";

export function App() {
  const [lang, setLang] = useState("en");
  const [theme, setTheme] = useState(Theme.light);

  useEffect(() => {
    initializeLanguage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  const router = createHashRouter([
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
  ]);

  return <RouterProvider router={router} />;
}

export default App;
