import { useState, useEffect, useRef } from "react";
import { RiMenu4Line } from "react-icons/ri";
import { useTheme } from "../hooks/themeHook";
import { useLang } from "../hooks/langHook";
import Logo from "./logo";
import { getMenuItems } from "../configs/site";
import { langs } from "../configs/langs";
import { profile } from "../configs/data";
import { CiDark, CiLight } from "react-icons/ci";
import { PiTranslate } from "react-icons/pi";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showShadow, setShowShadow] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLang } = useLang();
  const drawerRef = useRef<HTMLDivElement>(null); // Define the type for the ref

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.body.scrollTop;
    setShowShadow(scrollTop > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target as Node)
      ) {
        setDrawerOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const iconTextColor = "text-gray-600";

  const drawerDirection =
    langs[lang as keyof typeof langs].dir === "rtl" ? "left-0" : "right";

  return (
    <div
      className={`fixed w-full bg-white dark:bg-gray-900 bg-blend-saturation ${
        showShadow ? " shadow-md " : ""
      } z-10`}
    >
      <header>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between py-4">
            <Logo slug={"/"} />
            <div className="hidden md:flex items-center space-x-4">
              <nav>
                <ul className="flex space-x-4 rtl:space-x-reverse">
                  {getMenuItems(lang).map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.slug}
                        className="font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300"
                      >
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="flex items-center space-x-4">
                <PiTranslate
                  onClick={toggleLang}
                  className={`w-5 h-5 cursor-pointer ${iconTextColor} text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300"`}
                />
                {theme === "light" ? (
                  <CiLight
                    className="w-6 h-6 cursor-pointer text-yellow-400"
                    onClick={toggleTheme}
                  />
                ) : (
                  <CiDark
                    className="w-6 h-6 cursor-pointer text-white"
                    onClick={toggleTheme}
                  />
                )}
                {profile.socials.map((item, index) => (
                  <a
                    href={item.url}
                    key={index}
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300"
                  >
                    {<item.icon className="h-6 w-6" />}
                  </a>
                ))}
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleDrawer}
                className="text-gray-600 hover:text-gray-900 focus:outline-none"
              >
                <RiMenu4Line className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 overflow-hidden bg-gray-800 bg-opacity-50 backdrop-blur-md transition-opacity duration-300 shadow-lg ${
          drawerOpen ? "" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleDrawer}
      >
        <div className="flex justify-end h-full">
          <div
            ref={drawerRef}
            className={`w-auto bg-white dark:bg-gray-900 transform transition-transform duration-300 ease-in-out ${drawerDirection} ${
              drawerOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex flex-col justify-between h-full">
              <div>
                <div className="bg-white max-w-52">
                  <img
                    src="/logo512.png"
                    alt="logo"
                    className="w-full bg-slate-500"
                  />
                </div>
                <div className="p-4 pt-10">
                  <div className="">
                    {getMenuItems(lang).map((item, index) => (
                      <a
                        href={item.slug}
                        className="flex flex-row font-vazir py-2 px-1 space-x-2 rtl:space-x-reverse"
                      >
                        <item.icon className="w-5 h-5 text-xs text-slate-600" />
                        <p className="text-slate-600">{item.text} </p>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-col px-6 my-5">
                <div className="flex flex-row justify-between mb-4 text-slate-600">
                  <PiTranslate onClick={toggleLang} />
                  {theme === "light" ? (
                    <CiLight
                      className="w-6 h-6 text-yellow-400"
                      onClick={toggleTheme}
                    />
                  ) : (
                    <CiDark className="w-6 h-6" onClick={toggleTheme} />
                  )}
                </div>
                <div className="flex flex-row justify-around">
                  {profile.socials.map((item, index) => (
                    <a
                      href={item.url}
                      key={index}
                      className="text-xl text-slate-600"
                    >
                      {<item.icon className="h-6 w-6" />}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
