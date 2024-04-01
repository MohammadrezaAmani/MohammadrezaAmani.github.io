import { useState, useEffect } from "react";
import { Skeleton } from "@mui/material";
import { profile } from "../configs/data";
import { commonArgs } from "../configs/types";
import { langs } from "../configs/site";

interface Education {
  degree: string;
  institution: string;
}

// const skillsData: string[] = [
//   "JavaScript",
//   "React",
//   "Node.js",
//   "Python",
//   "Rust",
//   "Go",
// ];

// const educationData: Education[] = [
//   { degree: "Bachelor of Science", institution: "Example University" },
//   { degree: "Master of Science", institution: "Another University" },
//   {
//     degree: "Ph.D. in Computer Science",
//     institution: "University of Technology",
//   },
// ];

function Image({
  imageLoaded,
  handleImageError,
  showSkills,
}: {
  imageLoaded: boolean;
  showSkills: boolean;
  handleImageError: () => void;
}) {
  const containerClass = imageLoaded ? "" : "ml-4 mt-4 scale-150";

  return (
    <div className={`shadow-lg rounded-lg p-4  sm:flex ${containerClass}`}>
      {imageLoaded ? (
        <img
          src="https://avatars.githubusercontent.com/u/64687226?v=4"
          className={`rounded-lg h-72 w-72 ${
            showSkills ? "sm:h-12 sm:w-12" : ""
          }`}
          alt="Profile"
          onError={handleImageError}
        />
      ) : (
        <Skeleton variant="rectangular" width={12} height={12} />
      )}
    </div>
  );
}

// function Skills({ showSkills }: { showSkills: boolean }) {
//   const visibilityClass = showSkills ? "visible" : "sm:invisible";

//   return (
//     <div className={`flex mt-8 p-6 ${visibilityClass}`}>
//       <div className="flex flex-col mr-4">
//         <h2 className="text-xl font-semibold mb-2">Skills</h2>
//         <ul>
//           {skillsData.map((skill, index) => (
//             <li key={index}>{skill}</li>
//           ))}
//         </ul>
//       </div>
//       <div className="flex flex-col">
//         <h2 className="text-xl font-semibold mb-2">Education</h2>
//         <ul>
//           {educationData.map((edu, index) => (
//             <li key={index}>
//               {edu.degree} - {edu.institution}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

function Hero({ lang, theme }: commonArgs) {
  const [imageLoaded, setImageLoaded] = useState<boolean>(true);
  const [showSkills, setShowSkills] = useState<boolean>(false);
  const [atTop, setAtTop] = useState<boolean>(true);

  const handleImageError = () => {
    setImageLoaded(false);
  };

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const isTop = window.scrollY === 0;
  //     setShowSkills(!isTop);
  //     setAtTop(isTop);
  //   };

  //   const disableScroll = (e: WheelEvent) => {
  //     if (atTop && e.deltaY < 0) {
  //       e.preventDefault();
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   window.addEventListener("wheel", disableScroll, { passive: false });

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //     window.removeEventListener("wheel", disableScroll);
  //   };
  // }, [atTop]);

  return (
    <div className="w-full h-full mt-20 sm:mt-0 relative">
      <div className="container mx-auto">
        <div
          className={`flex flex-col sm:flex-row items-center 
                      justify-center p-6 w-full shadow-lg 
                      rounded-b-lg h-screen sm:mt-0 bg-gray-100
                      relative
          ${showSkills ? "justify-start" : "justify-start"}`}
        >
          <Image
            imageLoaded={imageLoaded}
            handleImageError={handleImageError}
            showSkills={showSkills}
          />
          <div className="flex flex-col sm:w-1/2 sm:ml-4">
            <h1
              className={`text-4xl font-bold mt-6 sm:mt-0 ${
                showSkills ? "sm:invisible" : "visible"
              }`}
            >
              {profile[lang as keyof typeof langs].title}
            </h1>
            <p
              className={`text-lg mt-4 ${
                showSkills ? "sm:invisible" : "visible"
              }`}
            >
              {profile[lang as keyof typeof langs].about}
            </p>
            {/* <Skills showSkills={showSkills} /> */}
            {/* <div className="flex mt-8 p-6 justify-end">
              <a
                href="/"
                className="btn-primary mr-4 shadow-lg rounded-lg p-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </a>
              <a
                href="/node_modules"
                className="btn-secondary shadow-lg rounded-lg p-4"
                rel="noopener noreferrer"
              >
                Contact Me
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
