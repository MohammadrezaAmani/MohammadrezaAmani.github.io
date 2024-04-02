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
import { getMenuItems, langs } from "../configs/site";
import Logo from "./logo";
import TranslateIcon from "@mui/icons-material/Translate";
import { fullArgs } from "../configs/types";

function Header({ lang, toggleLang, theme, toggleTheme }: fullArgs) {
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

  return (
    <AppBar
      className={`header-default black-logo-version shadow-lg`}
      position="sticky"
      style={{ backgroundColor: theme.background }}
    >
      <Toolbar className="flex justify-between items-center sm:mx-20">
        <Logo lang="lang" theme={theme} />
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
            className="drawer-menu rounded-lg"
          >
            <div className="p-4 pt-20">
              <List>
                {getMenuItems(lang).map((item, index) => (
                  <ListItem button key={index}>
                    <a href={item.slug} className="text-xs">
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText className="text-xs rtl:font-vazir" primary={item.text} />
                    </a>
                  </ListItem>
                ))}
                <ListItem button key={"lang"} onClick={toggleLang}>
                  <ListItemIcon>
                    <TranslateIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={langs[lang as keyof typeof langs].full}
                  />
                </ListItem>
              </List>
            </div>
          </Drawer>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
