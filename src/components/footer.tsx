import GitHubIcon from "@mui/icons-material/GitHub";
import { siteConfig } from "../configs/site";
import { commonArgs } from "../configs/types";

function Footer({ theme, lang, slug }: commonArgs) {
  let findLang = siteConfig.langs.find((item) => item.lang === lang);
  if (!findLang) {
    findLang = siteConfig.langs[0];
  }
  return (
    <div className="w-full">
      <footer className={`text-center p-4 ${theme.white} ${theme.secondary}`}>
        <p className="text-sm">
          {findLang.author} © {new Date().getFullYear()}
        </p>
        <p className="text-sm">
          {findLang.author} is open-source on{" "}
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
