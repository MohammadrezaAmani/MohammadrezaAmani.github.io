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
    title: "About Us",
    content: (
      <p>
        <b> Mohammadreza Amani </b>
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nunc nec
        dui fermentum tincidunt. Ut ultricies, mi sit amet luctus tincidunt,
        nunc libero fringilla eros, vel tincidunt erat sapien vel eros.
        Suspendisse potenti. Nullam sit amet libero nec nunc aliquam venenatis.
        Sed auctor, mi nec tincidunt sollicitudin, orci mi tincidunt mi, vel
        tincidunt odio purus eu purus. Sed nec nunc nec nunc fermentum
        tincidunt. Nullam sit amet libero nec nunc aliquam venenatis. Sed
        auctor, mi nec tincidunt sollicitudin, orci mi tincidunt mi, vel
        tincidunt odio purus eu purus. Sed nec nunc nec nunc fermentum
        tincidunt.
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
    title: "درباره ما",
    content: (
      <p>
        <b> محمدرضا امانی </b>
        <br />
        لورم ایپسوم (Lorem Ipsum)، متنی آزمایشی و بی‌معنی است که صنعت چاپ از آن
        برای طراحی گرافیکی و طراحی متن استفاده می‌کند. طراح گرافیک باید نوع و
        اندازه متن را مشخص کند و این متن باید نشان دهنده تمامی خصوصیات فونت،
        اندازه، رنگ و فضا باشد.
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
        // {
        //   title: "توییتر",
        //   content: "https://twitter.com/moreamani",
        //   icon: RiTwitterXLine,
        //   url: "https://twitter.com/moreamani",
        // },
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
