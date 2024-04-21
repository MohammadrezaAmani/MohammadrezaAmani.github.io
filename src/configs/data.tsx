/*

  * The data in this section will be displayed in the resume section.

*/


import {
  PiTelegramLogoThin,
  PiInstagramLogoThin,
  PiLinkedinLogoThin,
  PiGithubLogoThin,
} from "react-icons/pi";
import { langs as languages } from "./langs";

export const profile = {
  image: "https://avatars.githubusercontent.com/u/64687226?v=4",
  email: "more.amani@yahoo.com",
  phone: "+989352462779",
  langs: [
    {
      lang: languages.en.short,
      title: "Software Engineer",
      name: "Mohammadreza Amani",
      about:
        "As a software engineering specialist, my main focus is on developing and improving technologies and solutions related to software engineering, particularly in backend and server areas. Being active in this field, my interest lies in enhancing skills, expanding programming languages, and enhancing existing components infinitely. My primary goal in these efforts is to provide innovative and practical solutions to improve performance and solve problems in software systems.",
      location: "Tehran, IR",
      favorites: [
        "Linux",
        "Kubernetes",
        "ELK",
        "Docker",
        "Kafka",
        "Redis",
        "RabbitMQ",
        "Microservices",
        "Python",
        "FastAPI",
        "Django",
        "NodeJS",
        "NextJS",
        "ReactJS",
        "TailwindCSS",
        "TDD",
        "DDD",
        "GoLang",
        "Rust",
        "NN‌ and ML",
        "SQL Based DB",
        "MongoDB"
      ],
    },
    {
      lang: languages.fa.short,
      title: "مهندس نرم افزار",
      name: "محمدرضا امانی",
      about:
        "به عنوان یک متخصص در زمینه‌ی مهندسی نرم‌افزار، تمرکز اصلی من در توسعه و بهبود فناوری‌ها و راهکارهای مرتبط  با مهندسی نرم افزار علی الخصوص سمت بک‌اند و سرور است. به عنوان یک فعال در این حوزه، علاقه‌ی من به ارتقاء مهارت‌ها و توسعه زبان‌های برنامه‌نویسی و همچنین بهبود موارد موجود، بی‌نهایت است. هدف اصلی من از این تلاش‌ها، ارائه‌ی راهکارهای نوآورانه و عملی برای بهبود عملکرد و حل مسائل در سیستم‌های نرم‌افزاری می‌باشد.",
      location: "تهران، ایران",
      favorites: [
        "لینوکس",
        "کوبرنتیز",
        "ELK",
        "داکر",
        "کافکا",
        "ردیس",
        "RabbitMQ",
        "معماری میکروسرویس",
        "پایتون",
        "FastAPI",
        "جنگو",
        "نود جی‌اس",
        "نکست‌جی‌اس",
        "ری‌اکت‌جی‌اس",
        "TailwindCSS",
        "توسعه محور تست (TDD)",
        "توسعه محور طراحی (DDD)",
        "گولنگ",
        "راست",
        "شبکه‌های عصبی و یادگیری ماشین",
        "پایگاه داده‌های مبتنی بر SQL",
        "مانگو دی‌بی"
      ],
    },
  ],
  socials: [
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/mohammadreza-amani",
      icon: PiLinkedinLogoThin,
      value: "mohammadreza-amani",
    },
    {
      name: "github",
      url: "https://github.com/MohammadrezaAmani",
      icon: PiGithubLogoThin,
      value: "MohammadrezaAmani",
    },
    {
      name: "instagram",
      url: "https://www.instagram.com/more.amani",
      icon: PiInstagramLogoThin,
      value: "more.amani",
    },
    {
      name: "telegram",
      url: "https://t.me/Mohammadreza_amani",
      icon: PiTelegramLogoThin,
      value: "Mohammadreza_amani",
    },
  ],
};
