import React, { useState, useEffect, useRef } from "react";
import ResumeTemplate from "./resume";
import { commonArgs } from "../../configs/types";
import { IoPrintOutline } from "react-icons/io5";
import { RiSettingsLine } from "react-icons/ri";
import { BsTranslate } from "react-icons/bs";
import { IoIosArrowRoundBack } from "react-icons/io";
import { CiDark, CiLight } from "react-icons/ci";
import { resumeLangs } from "../../configs/resume/data";
import { useLang } from "../../hooks/langHook";
import { useTheme } from "../../hooks/themeHook";

function Resume(props: commonArgs) {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { lang, toggleLang } = useLang();
  const { theme, toggleTheme } = useTheme();
  let resumeLang = resumeLangs.find((item) => item.lang === lang);
  if (!resumeLang) {
    resumeLang = resumeLangs[0];
  }
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handlePrint = () => {
    const element = document.getElementById("print-content");
    if (element) {
      document.body.innerHTML = element.innerHTML;
      window.print();
      document.location.reload();
    } else {
      document.body.innerHTML = "Error in printing";
    }
  };
  const handelBack = () => {
    window.history.back();
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const resume = <ResumeTemplate slug={props.slug} resumeLang={resumeLang} />;

  return (
    <div className="bg-gray-100 font-sans p-8 relative">
      <div className="bg-white mx-auto rounded-lg shadow-md p-4 w-[60rem]">
        <div className="top-5 left-4 rtl:right-4 fixed">
          <RiSettingsLine
            onClick={() => {
              toggleMenu();
            }}
            className="shadow-md hover:bg-blue-200 text-slate-800 font-bold p-2 w-12 h-12 rounded-full focus:outline-none focus:shadow-outline cursor-pointer"
          />
          {showMenu && (
            <div
              ref={menuRef}
              className="mt-2 bg-white rounded-lg shadow-md p-4 absolute divide-y-2"
            >
              <button
                className="w-full py-2 flex flex-row space-x-2 rtl:space-x-reverse"
                onClick={handlePrint}
              >
                {" "}
                <IoPrintOutline className="w-6 h- 6" /> {resumeLang.print}
              </button>
              <button
                className="w-full py-2 flex flex-row space-x-2 rtl:space-x-reverse"
                onClick={toggleLang}
              >
                {" "}
                <BsTranslate className="w-6 h- 6" /> {resumeLang.lang}
              </button>
              <button
                className="w-full py-2 flex flex-row space-x-2 rtl:space-x-reverse"
                onClick={handelBack}
              >
                {" "}
                <IoIosArrowRoundBack className="w-6 h- 6" /> {resumeLang.back}
              </button>
              <button
                className="w-full py-2 flex flex-row space-x-2 rtl:space-x-reverse"
                onClick={toggleTheme}
              >
                {" "}
                {theme === "light" ? (
                  <CiLight className="w-6 h-6 text-yellow-400" />
                ) : (
                  <CiDark className="w-6 h-6" />
                )}
              </button>
            </div>
          )}
        </div>
        {resume}
        <div id="print-content" className="hidden">
          {resume}
        </div>
      </div>
    </div>
  );
}

export default Resume;
