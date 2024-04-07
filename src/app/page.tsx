import React, { useState } from "react";
import { commonArgs } from "../configs/types";
import { TbHeartCode } from "react-icons/tb";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import Skeleton from "@mui/material/Skeleton";
import Wave from "react-wavify";
import { Divider, Tooltip } from "@mui/material";
import { PiLinkedinLogoThin } from "react-icons/pi";
import { VscGithubAlt } from "react-icons/vsc";
import { IoMdContact } from "react-icons/io";
import { FaUniversity } from "react-icons/fa";
import { FaPhoenixFramework } from "react-icons/fa6";
import { SiReaddotcv } from "react-icons/si";
import { PiCodesandboxLogoThin } from "react-icons/pi";

import { Card, CardContent } from "../components/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/carousel";

const boxStyle =
  "rounded-lg sm:shadow-xl shadow-lg bg-gradient-to-tl from-white to-gray-100 transform hover:-translate-y-0.5 transition duration-400 ease-in-out md:hover:shadow-2xl hover:shadow-xl";

export default function Blog({ theme, lang, slug }: commonArgs) {
  const [imageLoaded, setImageLoaded] = useState(false);

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
            <div className="user-info-header flex items-start flex-col">
              <h2 className="text-4xl">
                Hi, I’m <span className="text-red-600">Mohammadreza</span>
              </h2>
              <p className="text-slate-600">Web designer and developer</p>
            </div>
            <div className="flex flex-col mt-12">
              <a
                href="https://github.com/MohammadrezaAmani"
                target="_blank"
                className="info flex items-center"
                rel="noreferrer"
              >
                <TbHeartCode className="h-6 w-6 m-2" />
                <span>Web designer & developer</span>
              </a>
              <a
                href="mailto:more.amani@yahoo.com"
                target="_blank"
                className="info flex items-center"
                rel="noreferrer"
              >
                <MdOutlineAlternateEmail className="h-6 w-6 m-2" />
                <span>more.amani@yahoo.com</span>
              </a>
              <a
                href="https://www.google.com/maps/d/viewer?mid=132fq12ig_YfdeN0cxzAkc6Ik4lo&hl=en&ll=35.71061825680851%2C51.4071210981902&z=17"
                target="_blank"
                className="info flex items-center"
                rel="noreferrer"
              >
                <CiLocationOn className="h-6 w-6 m-2" />
                <span>Tehran, Iran</span>
              </a>
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
                <span>DOWNLOAD CV</span>
              </a>
              <a
                href="/#/about"
                className={`p-4 rounded-md shadow-md hover:shadow-xl`}
              >
                <span>CONTACT ME</span>
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
      {/* <div className="flex flex-col w-full h-96 bg-fuchsia-600 shadow-md items-center">
        <Carousel className="w-full max-w-xs flex justify-center">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex items-center justify-center p-6 h-80 w-full">
                      <span className="text-3xl font-semibold w-80">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div> */}
      <div>
        <Wave
          fill="#f79902"
          className="mt-12 border-gray-400"
          paused={false}
          style={{ display: "flex" }}
          options={{
            height: 10,
            amplitude: 40,
            speed: 0.15,
            points: 3,
          }}
        >
          <h1 className="text-center text-4xl text-white">Hello</h1>
        </Wave>
      </div>
    </div>
  );
}
