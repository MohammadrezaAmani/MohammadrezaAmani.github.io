import React, { useState } from "react";
import { commonArgs } from "../configs/types";
import Skeleton from "@mui/material/Skeleton";

import { Divider, Tooltip } from "@mui/material";
import { IoMdContact } from "react-icons/io";
import { FaUniversity } from "react-icons/fa";
import { FaPhoenixFramework } from "react-icons/fa6";
import { SiReaddotcv } from "react-icons/si";
import { PiCodesandboxLogoThin } from "react-icons/pi";
import { dataType } from "../configs/types";
import { BaseUri } from "../configs/site";

import { homePage } from "../configs/site";
export const DataItem: React.FC<dataType> = ({ data, lang, slug, theme }) => {
  let keylang = data.langs.find((item) => item.lang === lang);
  if (!keylang) {
    keylang = data.langs[0];
  }

  return (
    <div id={`data-item-${data.slug}`} className="p-6">
      <a href={BaseUri + slug + "/" + data.slug} className="block w-full">
        {data.image !== "" && (
          <div className="h-36 sm:h-48 w-full">
            <img
              src={data.image}
              alt={keylang.title}
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
        )}
        <div className="flex justify-between mt-4">
          <p className="text-white text-lg">{keylang.title}</p>
        </div>
      </a>
    </div>
  );
};

const boxStyle =
  "rounded-lg sm:shadow-xl shadow-lg bg-gradient-to-tl from-white to-gray-100 transform hover:-translate-y-0.5 transition duration-400 ease-in-out md:hover:shadow-2xl hover:shadow-xl";

export default function Blog({ theme, lang, slug }: commonArgs) {
  const [imageLoaded, setImageLoaded] = useState(false);
  let textlang = homePage.find((item) => item.lang === lang);
  if (!textlang) {
    textlang = homePage[0];
  }
  return (
    <div className="flex flex-col justify-between">
      <div className="flex flex-wrap slider-wrapper justify-center sm:mt-32 w-full gap-4">
        <div
          className={`flex p-4 sm:p-8 w-10/12 sm:w-auto h-auto justify-center mt-12 sm:mt-0 ${boxStyle}`}
        >
          {!imageLoaded && (
            <div className="flex flex-col space-y-1">
              <Skeleton variant="circular" width={64} height={64} />
              <Skeleton
                variant="rectangular"
                sx={{
                  width: { xs: 250, md: 400 },
                  height: { xs: 250, md: 400 },
                  paddingTop: "100%",
                }}
              />
            </div>
          )}
          <img
            src="https://avatars.githubusercontent.com/u/64687226?v=4"
            alt="Personal Portfolio"
            className={`rounded-md ${imageLoaded ? "" : "hidden"}`}
            onLoad={() => setImageLoaded(true)}
          />
        </div>
        <div className="grid grid-cols-12 w-10/12 sm:w-auto gap-4">
          <div className={`col-span-full  p-6 ${boxStyle}`}>
            <div className="user-info-header flex items-start   flex-col">
              {textlang.title}
              {textlang.subtitle}
            </div>
            <div className="flex flex-col mt-12">
              {textlang.skills.map((item, index) => (
                <a
                  href={item.url}
                  target="_blank"
                  className="info flex items-center"
                  rel="noreferrer"
                  key={index}
                >
                  <item.icon className="h-6 w-6 m-2" />
                  <span>{item.title}</span>
                </a>
              ))}
            </div>
          </div>

          <div
            className={`col-span-full p-6 rounded-lg shadow-xl bg-gradient-to-tl from-white to-gray-100 flex flex-col justify-end`}
          >
            <div className="flex justify-end">
              <a
                href="#contacts"
                className={`mr-5 p-4 text-md rounded-md shadow-md hover:shadow-xl`}
              >
                <span>{textlang.cvButton}</span>
              </a>
              <a
                href="/#/about"
                className={`p-4 rounded-md shadow-md hover:shadow-xl`}
              >
                <span>{textlang.contactButton}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Divider
        sx={{
          marginTop: { xs: "40px", md: "200px" },
          marginLeft: { xs: "20px", md: "200px" },
          marginRight: { xs: "120px", md: "200px" },
        }}
      />
      <div className="flex justify-center mt-12">
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
      </div>
      <div className="flex flex-row"></div>
      <Divider
        sx={{
          marginTop: { xs: "3rem", md: "3rem" },
          marginLeft: { xs: "120px", md: "300px" },
          marginRight: { xs: "20px", md: "300px" },
        }}
      />
      {/* <div>
        <Wave
          fill="#f79902"
          className="mt-12 border-gray-400"
          // paused={false}
          style={{ display: "flex" }}
          options={{
            height: 70,
            amplitude: 20,
            speed: 0.1,
            points: 3,
          }}
        ></Wave>
        {blogData.length >= 0 && (
          <div className="flex flex-col w-full bg-orange-500 shadow-md items-center h-auto p-3">
            <p className="text-xl text-white -mt-6">Latest Blogs</p>
            <Carousel
              className="w-full max-w-max flex justify-center mt-5  p-5 rounded-lg shadow-inner"
              opts={{
                direction:
                  langs[lang as keyof typeof langs].dir === "rtl"
                    ? "rtl"
                    : "ltr",
              }}
            >
              <CarouselContent>
                {blogData
                  .slice(0, blogData.length >= 7 ? 7 : blogData.length)
                  .map((key, index) => (
                    <CarouselItem
                      key={index}
                      className="md:basis-1/2 lg:basis-1/4"
                    >
                      <div className="p-0">
                        <Card>
                          <CardContent className="flex items-center justify-center p-6 h-80 w-full">
                            <DataItem
                              data={key}
                              lang={lang}
                              slug={routes.blog.path}
                              theme={theme}
                            />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
              </CarouselContent>
            </Carousel>
          </div>
        )}
      </div>
      <div>
        <Wave
          fill="#f79902"
          className="mt-12 border-gray-400"
          // paused={false}
          style={{ display: "flex" }}
          options={{
            height: 70,
            amplitude: 20,
            speed: 0.15,
            points: 3,
          }}
        ></Wave>
        {projectData.length >= 0 && (
          <div className="flex flex-col w-full bg-orange-500 shadow-md items-center h-auto p-3">
            <p className="text-xl text-white -mt-6">Latest Projects</p>
            <Carousel
              className="w-full max-w-max flex justify-center mt-5  p-5 rounded-lg shadow-inner"
              opts={{
                direction:
                  langs[lang as keyof typeof langs].dir === "rtl"
                    ? "rtl"
                    : "ltr",
              }}
            >
              <CarouselContent>
                {projectData
                  .slice(0, projectData.length >= 7 ? 7 : projectData.length)
                  .map((key, index) => (
                    <CarouselItem
                      key={index}
                      className="md:basis-1/2 lg:basis-1/4"
                    >
                      <div className="p-0">
                        <Card>
                          <CardContent className="flex items-center justify-center p-6 h-80 w-full">
                            <DataItem
                              data={key}
                              lang={lang}
                              slug={routes.blog.path}
                              theme={theme}
                            />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
              </CarouselContent>
            </Carousel>
          </div>
        )}
      </div> */}
    </div>
  );
}
