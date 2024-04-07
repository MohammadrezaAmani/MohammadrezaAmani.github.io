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

// import { PiLinkedinLogoThin } from "react-icons/pi";
// import { VscGithubAlt } from "react-icons/vsc";
// import { IoMdContact } from "react-icons/io";
// import { FaUniversity } from "react-icons/fa";
// import { FaPhoenixFramework } from "react-icons/fa6";
// import { SiReaddotcv } from "react-icons/si";
// <div className="flex justify-center mt-12">
// <PiLinkedinLogoThin className="h-12 w-12 m-2 bg-blue-700 rounded-full p-2 text-white" />
// <VscGithubAlt className="h-12 w-12 m-2 bg-gray-700 rounded-full p-2 text-white" />
// <IoMdContact className="h-12 w-12 m-2 bg-green-700 rounded-full p-2 text-white" />
// <FaUniversity className="h-12 w-12 m-2 bg-yellow-700 rounded-full p-2 text-white" />
// <FaPhoenixFramework className="h-12 w-12 m-2 bg-red-700 rounded-full p-2 text-white" />
// <SiReaddotcv className="h-12 w-12 m-2 bg-purple-700 rounded-full p-2 text-white" />

// </div>