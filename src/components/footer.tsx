import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import { siteConfig } from "../configs/site";
import { commonArgs } from "../configs/types";

function Footer({ theme, lang, slug }: commonArgs) {
  return (
    <div className="w-full">
      <footer className="bg-black text-white text-center p-4">
        <p className="text-sm">
          {siteConfig.en.author} © {new Date().getFullYear()}
        </p>
        <p className="text-sm">
          {siteConfig.en.author} is open-source on{" "}
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noreferrer"
            className="text-white"
          >
            <GitHubIcon />
          </a>
        </p>
      </footer>
    </div>
  );
}

export default Footer;
