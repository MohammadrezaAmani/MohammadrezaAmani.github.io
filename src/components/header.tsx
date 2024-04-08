import React from "react";
import { AppBar, Toolbar, IconButton, Drawer, Tooltip } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import TranslateIcon from "@mui/icons-material/Translate";
import { CiLight, CiDark } from "react-icons/ci";
import { getMenuItems } from "../configs/site";
import { langs } from "../configs/langs";
import { headerArgs } from "../configs/types";
import Logo from "./logo";
import { Theme } from "./theme";
import { profile } from "../configs/data";

const Header = ({ lang, toggleLang, theme, toggleTheme }: headerArgs) => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [showShadow, setShowShadow] = React.useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.body.scrollTop;
    setShowShadow(scrollTop > 0);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setDrawerOpen(open);
    };

  const iconTextColor = "text-slate-600";

  return (
    <AppBar
      position="sticky"
      style={{
        backgroundColor: theme.background,
        opacity: 0.9,
        boxShadow: showShadow ? "0 0 10px 0 rgba(0,0,0,0.2)" : "none",
      }}
    >
      <Toolbar className="flex justify-between items-center sm:mx-20">
        <Logo lang="lang" theme={theme} slug={"/"} />
        <div className="flex items-center">
          <nav className="mainmenu-nav navbar-example2 hidden sm:block">
            <ul className="primary-menu flex flex-col space-y-2 sm:flex-row sm:space-y-0">
              {getMenuItems(lang).map((item, index) => (
                <li
                  className="nav-item hover:bg-slate-100 px-3 py-2 rounded-md"
                  key={index}
                >
                  <a href={item.slug}>
                    <li key={index}>
                      <a href={item.slug} className="flex flex-row font-vazir">
                        <p className="text-slate-600">{item.text}</p>
                      </a>
                    </li>
                  </a>
                </li>
              ))}
              <li
                className="nav-item py-2 px-2 hover:bg-gray-100 rounded-full"
                key="change language"
              >
                <Tooltip
                  title={langs[lang as keyof typeof langs].full}
                  onClick={toggleLang}
                >
                  <TranslateIcon className={iconTextColor} />
                </Tooltip>
              </li>
            </ul>
          </nav>
        </div>
        <div className="block sm:hidden">
          <Tooltip title="menu">
            <IconButton
              className="hamberger-menu"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon className="text-slate-600" />
            </IconButton>
          </Tooltip>
          <Drawer
            anchor={
              langs[lang as keyof typeof langs].dir !== "rtl" ? "right" : "left"
            }
            open={drawerOpen}
            onClose={toggleDrawer(false)}
            className="drawer-menu"
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
                  <TranslateIcon onClick={toggleLang} />
                  {theme === Theme.light ? (
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
          </Drawer>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
