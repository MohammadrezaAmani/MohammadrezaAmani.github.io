import { PiLinkedinLogoThin } from "react-icons/pi";
import { VscGithubAlt } from "react-icons/vsc";
import { IoMdContact } from "react-icons/io";
import { FaPhoenixFramework } from "react-icons/fa6";
import { SiReaddotcv } from "react-icons/si";
import { siteConfig } from "../configs/site";
import { commonArgs } from "../configs/types";
import Wave from "react-wavify";
import { PiTelegramLogoLight } from "react-icons/pi";

function Footer({ theme, lang, slug }: commonArgs) {
  let findLang = siteConfig.langs.find((item) => item.lang === lang);
  if (!findLang) {
    findLang = siteConfig.langs[0];
  }
  const buttonSize =
    "h-10 sm:h-12 w-10 sm:w-12 m-2 bg-blue-700 rounded-full p-2.5";
  return (
    <div className="w-full">
      <Wave
        fill="#1ED4DE"
        className="mt-10 border-gray-400"
        // paused={false}
        style={{ display: "flex" }}
        options={{
          height: 70,
          amplitude: 20,
          speed: 0.17,
          points: 3,
        }}
      ></Wave>{" "}
      <footer className={`text-center ${theme.white} ${theme.secondary}`}>
        <Wave
          fill="rgb(17 24 39)"
          className="-mt-12 border-gray-400"
          // paused={false}
          style={{ display: "flex" }}
          options={{
            height: 8,
            amplitude: 20,
            speed: 0.14,
            points: 4,
          }}
        ></Wave>
        <div className="flex justify-center px-1 pb-5">
          <PiLinkedinLogoThin className={` bg-blue-700 ${buttonSize}`} />
          <VscGithubAlt className={` bg-gray-700 ${buttonSize}`} />
          <IoMdContact className={` bg-green-700 ${buttonSize}`} />
          <PiTelegramLogoLight className={` bg-fuchsia-700 ${buttonSize}`} />
          <FaPhoenixFramework className={` bg-red-700 ${buttonSize}`} />
          <SiReaddotcv className={` bg-purple-700 ${buttonSize}`} />
          {/* <div className="flex justify-center mt-12">
            <Tooltip title={"projects"}>
              <a href="/#/project">
                <PiCodesandboxLogoThin className="h-12 w-12 m-2 bg-yellow-500 rounded-full p-2 text-white" />
              </a>
            </Tooltip>
            <Tooltip title={"about"}>
              <a href="/#/about">
                <IoMdContact className="h-12 w-12 m-2 bg-green-700 rounded-full p-2 text-white" />
              </a>
            </Tooltip>
            <Tooltip title={"education"}>
              <a href="/#/education">
                <FaUniversity className="h-12 w-12 m-2 bg-yellow-700 rounded-full p-2 text-white" />
              </a>
            </Tooltip>
            <Tooltip title={"blog"}>
              <a href="/#/blog">
                <FaPhoenixFramework className="h-12 w-12 m-2 bg-red-700 rounded-full p-2 text-white" />
              </a>
            </Tooltip>
            <Tooltip title={"resume"}>
              <a href="/#/resume">
                <SiReaddotcv className="h-12 w-12 m-2 bg-purple-700 rounded-full p-2 text-white" />
              </a>
            </Tooltip>
          </div> */}
        </div>
      </footer>
    </div>
  );
}

export default Footer;
