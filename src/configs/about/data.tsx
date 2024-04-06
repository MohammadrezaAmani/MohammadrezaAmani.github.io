// If you want to change the codes in an advanced way, please refer directly to the file address.

import { IconType } from "react-icons";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { MdOutlineVoicemail } from "react-icons/md";
import { MdOutlinePlace } from "react-icons/md";
import { PiTelegramLogoThin } from "react-icons/pi";
import { PiInstagramLogoThin } from "react-icons/pi";
import { PiLinkedinLogoThin } from "react-icons/pi";
// import { RiTwitterXLine } from "react-icons/ri";
import { VscGithubAlt } from "react-icons/vsc";

const Data = {
  image: "https://avatars.githubusercontent.com/u/64687226?v=4",
  en: {
    title: "Mohammadreza Amani",
    content: (
      <p>
        Experienced Software Engineer with a passion for innovation and
        problem-solving. Dedicated to crafting high-quality software solutions
        that exceed expectations. Proficient in a wide range of technologies
        including React, Node.js, TypeScript, and GraphQL, with a strong
        foundation in DevOps practices such as Docker, Kubernetes, CI/CD, and
        serverless architecture. Skilled in Agile methodologies with a focus on
        TDD and DDD principles. Committed to continuous learning and staying
        updated with the latest industry trends. Excited to collaborate on
        challenging projects and contribute to the success of dynamic teams.,
      </p>
    ),
    imageText: "Image Text",
    contact_ways: {
      title: "Contact Ways",
      content: (
        <p>If you want to contact us, you can use the following ways.</p>
      ),
      ways: [
        {
          title: "Email",
          content: "more.amani@yahoo.com",
          icon: MdOutlineAlternateEmail,
          url: "mailto:more.amani@yahoo.com",
        },
        {
          title: "Phone",
          content: "+98 912 345 6789",
          icon: MdOutlineVoicemail,
          url: "tel:+989123456789",
        },
        {
          title: "Address",
          content: "تهران، ایران",
          icon: MdOutlinePlace,
          url: "https://www.google.com/maps/d/viewer?mid=132fq12ig_YfdeN0cxzAkc6Ik4lo&hl=en&ll=35.71061825680851%2C51.4071210981902&z=17",
        },
        {
          title: "Telegram",
          content: "@Mohammadreza_Amani",
          icon: PiTelegramLogoThin,
          url: "https://t.me/Mohammadreza_Amani",
        },
        {
          title: "Instagram",
          content: "@more.amani",
          icon: PiInstagramLogoThin,
          url: "https://www.instagram.com/more.amani",
        },
        {
          title: "Linkedin",
          content: "@Mohammadreza-Amani",
          icon: PiLinkedinLogoThin,
          url: "https://www.linkedin.com/in/mohammadreza-amani",
        },
        {
          title: "Github",
          content: "@MohammadrezaAmani",
          icon: VscGithubAlt,
          url: "https://github.com/MohammadrezaAmani",
        },
      ],
    },
  },
  fa: {
    title: "محمدرضا امانی",
    content: (
      <p>
        مهندس نرم‌افزار با تجربه، با علاقه‌ی فراوان به نوآوری و حل مسائل. متعهد
        به ایجاد راه‌حل‌های نرم‌افزاری با کیفیت بالا که انتظارات را برآورده
        می‌کنند. ماهر در زمینه‌ی تکنولوژی‌های گوناگون از جمله ری‌اکت، نود.جی‌اس،
        تایپ‌اسکریپت و جی‌کیوال، با پایه‌ی استوار در روش‌های DevOps مانند داکر،
        کوبرنیتیز، CI/CD و معماری سرورلس. مسلط به روش‌های چابک با تمرکز بر اصول
        TDD و DDD. متعهد به یادگیری مداوم و دنبال کردن آخرین روندهای صنعت. مشتاق
        به همکاری در پروژه‌های چالش‌برانگیز و سهیم شدن در موفقیت تیم‌های پویا.
      </p>
    ),
    imageText: "متن تصویر",
    contact_ways: {
      title: "روش‌های تماس",
      content: (
        <p>
          اگر می‌خواهید با ما تماس بگیرید، می‌توانید از روش‌های زیر استفاده
          کنید.
        </p>
      ),
      ways: [
        {
          title: "ایمیل",
          content: "more.amani@yahoo.com",
          icon: MdOutlineAlternateEmail,
          url: "mailto:more.amani@yahoo.com",
        },
        {
          title: "تلفن",
          content: "+98 912 345 6789",
          icon: MdOutlineVoicemail,
          url: "tel:+989123456789",
        },
        {
          title: "آدرس",
          content: "تهران، ایران",
          icon: MdOutlinePlace,
          url: "https://www.google.com/maps/d/viewer?mid=132fq12ig_YfdeN0cxzAkc6Ik4lo&hl=en&ll=35.71061825680851%2C51.4071210981902&z=17",
        },
        {
          title: "تلگرام",
          content: "@Mohammadreza_Amani",
          icon: PiTelegramLogoThin,
          url: "https://t.me/Mohammadreza_Amani",
        },
        {
          title: "اینستاگرام",
          content: "@more.amani",
          icon: PiInstagramLogoThin,
          url: "https://www.instagram.com/more.amani",
        },
        {
          title: "لینکدین",
          content: "@Mohammadreza-Amani",
          icon: PiLinkedinLogoThin,
          url: "https://www.linkedin.com/in/mohammadreza-amani",
        },
        {
          title: "گیت‌هاب",
          content: "@MohammadrezaAmani",
          icon: VscGithubAlt,
          url: "https://github.com/MohammadrezaAmani",
        },
      ],
    },
  },
};

export default Data;

export type aboutType = typeof Data;

export type contact_type = {
  title: string;
  content: string;
  icon: IconType;
  url: string;
};
