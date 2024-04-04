import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import TranslateIcon from "@mui/icons-material/Translate";
import { CiLight, CiDark } from "react-icons/ci";
import { LiaTelegramPlane } from "react-icons/lia";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { TbBrandGithub } from "react-icons/tb";
import { getMenuItems, langs } from "../configs/site";
import { fullArgs } from "../configs/types";

import Logo from "./logo";
import { Theme } from "./theme";
import { profile } from "../configs/data";

const Header = ({ lang, toggleLang, theme, toggleTheme }: fullArgs) => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

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

  const MenuItem = ({ item, index }: { item: any; index: number }) => (
    <ListItem button key={index}>
      <a href={item.slug} className="text-xs flex flex-row font-vazir">
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText
          className="text-xs"
          primary={item.text}
          sx={{
            fontSize: "0.75rem",
          }}
        />
      </a>
    </ListItem>
  );

  return (
    <AppBar
      className={`header-default black-logo-version shadow-lg`}
      position="sticky"
      style={{ backgroundColor: theme.background }}
    >
      <Toolbar className="flex justify-between items-center sm:mx-20">
        <Logo lang="lang" theme={theme} slug={"/"} />
        <div className="flex items-center">
          <nav className="mainmenu-nav navbar-example2 hidden sm:block">
            <ul className="primary-menu flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
              {getMenuItems(lang).map((item, index) => (
                <li className="nav-item" key={index}>
                  <a href={item.slug}>
                    <Tooltip title={item.text}>
                      <IconButton color="inherit">{item.icon}</IconButton>
                    </Tooltip>
                  </a>
                </li>
              ))}
              <li className="nav-item" key="change language">
                <Tooltip
                  title={langs[lang as keyof typeof langs].full}
                  onClick={toggleLang}
                >
                  <IconButton color="inherit">
                    <TranslateIcon className={iconTextColor} />
                  </IconButton>
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
            <div className="flex-auto justify-between">
              <div>
                <div className="bg-white max-w-52">
                  <img
                    src="/logo512.png"
                    alt="logo"
                    className="w-full bg-slate-500"
                  />
                </div>
                <div className="p-4 pt-10">
                  <List>
                    {getMenuItems(lang).map((item, index) => (
                      <MenuItem key={index} item={item} index={index} />
                    ))}
                  </List>
                </div>
              </div>
              <div className="flex flex-col px-8">
                <div className="flex flex-row justify-between mb-4">
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
                  {profile.socials.github && (
                    <a href={profile.socials.github}>
                      <TbBrandGithub className="w-6 h-6" />
                    </a>
                  )}
                  {profile.socials.instagram && (
                    <a href={profile.socials.instagram}>
                      <FaInstagram className="w-6 h-6" />
                    </a>
                  )}
                  {profile.socials.linkedin && (
                    <a href={profile.socials.linkedin}>
                      <CiLinkedin className="w-6 h-6" />
                    </a>
                  )}
                  {profile.socials.telegram && (
                    <a href={profile.socials.telegram}>
                      <LiaTelegramPlane className="w-6 h-6" />
                    </a>
                  )}
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
