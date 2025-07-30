import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Mohammadreza Amani",
  title: "Software Engineer",
  initials: "MA",
  url: "https://moamani.ir",
  location: "Tehran, Iran",
  locationLink: "https://www.google.com/maps/place/tehran",
  description: "Software engineer with dreams of becoming an entrepreneur.",
  summary:
    "My professional career path began at the beginning of 2020 with Arishop, when I worked there as a backend developer, and after that, I have been working in various positions in companies such as Yektant, Diginext, Hojan, and Paya, overcoming many challenges to gain new experiences. Also, academically, I am a graduate of Amirkabir University in Computer Science.",
  avatarUrl: "/me.jpg",
  skills: [
    "Python",
    "Django",
    "React",
    "Next.js",
    "Typescript",
    "Linux: Debian, Fedora, Arch, Ubuntu...",
    "Node.js",
    "FastAPI",
    "Go, Gin, Echo",
    "Postgres, MSSQL, MySQL, MongoDB",
    "Redis, Memcached",
    "Docker",
    "Kubernetes",
    "RabbitMQ, Celery, Kafka, Elasticsearch",
    "OpenAI and OpenAI agents sdk",
    "...",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "more.amani@yahoo.com",
    tel: "+989352462779",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/MohammadrezaAmani",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/mohammadreza-amani",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https:/x.com/moh_ammadreza",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:more.amani@yahoo.com",
        icon: Icons.email,

        navbar: true,
      },
      phone: {
        name: "Phone",
        url: "tel:+989352462779",
        icon: Icons.phone,

        navbar: true,
      },
      resume: {
        name: "Resume",
        url: "/assets/cv/Mohammadreza_Amani_CV.pdf",
        icon: Icons.resume,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Walliro",
      href: "https://walliro.com/",
      badges: [],
      location: "Remote",
      title: "Tech Team Lead",
      logoUrl: "/walliro.png",
      start: "Sep 2024",
      end: "now",
      description:
        "I served as the Technical Team Lead at Walliro, where I was responsible for maintaining and enhancing legacy projects for clients such as the Ministry of Interior, Ministry of Energy, Oghaf Organization, Khuzestan Water and Power Authority, and the Social Affairs Organization, among others. Additionally, I oversaw the development of new applications, including Studixo, Walliro, and Lopiro. Our tech stack included Django, Next.js, React, FastAPI, and GoLang for various projects.",
    },
    {
      company: "Yektanet",
      badges: [],
      href: "https://yektanet.com",
      location: "Onsite, Tehran, Iran",
      title: "Software Engineer",
      logoUrl: "/yektanet.png",
      start: "May 2024",
      end: "Sep 2024",
      description:
        "I worked on the maintenance and development of the Chavosh application, handling tasks like building a Telegram bot, setting up CI/CD pipelines, and managing Kubernetes deployments. I also developed an AI-based fraud detection system to improve security. Using Django and FastAPI, I wrote scripts to automate tasks and ensure system reliability across environments.",
    },
    {
      company: "Paya",
      href: "",
      badges: [],
      location: "Onsite, Tehran, Iran",
      title: "Software Engineer",
      logoUrl: "/paya.png",
      start: "Sep 2023",
      end: "May 2024",
      description:
        "I worked as a Backend Developer at Paya, primarily using Django and FastAPI, while occasionally contributing to frontend development with React. Our focus was on developing enterprise ERP systems. I also worked with GoLang, Apache Kafka, ETL processes, and related technologies to build and maintain robust solutions.",
    },
    {
      company: "Digi Next",
      href: "https://diginext.ir/",
      badges: [],
      location: "Onsite, Tehran, Iran",
      title: "Software Engineer",
      logoUrl: "/diginext.png",
      start: "Short",
      end: "Period",
      description: "",
    },
    {
      company: "Arushop",
      href: "https://arushop.ir/",
      badges: [],
      location: "Onsite - Part time, Tehran, Iran",
      title: "Software Engineer",
      logoUrl: "/arushop.png",
      start: "Nov 2020",
      end: "Jun 2023",
      description:
        "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
    },
  ],
  education: [
    {
      school: "Shahid Beheshti University",
      href: "https://www.sbu.ac.ir/",
      degree: "Master's Degree of Data Mining",
      logoUrl: "/sbu.png",
      start: "2025",
      end: "2027",
    },
    {
      school: "Amirkabir University of Technology (Tehran Polytechnic)",
      href: "https://aut.ac.ir/",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/aut.png",
      start: "2020",
      end: "2024",
    },
    {
      school: "SAMPAD - Talented Students Organization",
      href: "https://sampad.gov.ir/",
      degree: "High School Diploma",
      logoUrl: "/sampad.png",
      start: "2020",
      end: "2013",
    },
  ],
  projects: [
    {
      title: "Bionex",
      href: "https://bionex.ir",
      dates: "Dec 2021 - now",
      active: true,
      description:
        "In late 2021, I launched the Bionex project, an application designed to support people in the healthcare sector. Following the rise of large language models (LLMs) and their advancements, we significantly enhanced the application by integrating a wide range of artificial intelligence features, from conversational capabilities to automatic body movement detection and correction. This project remains in active development and is slated for public release by late 2025.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Django",
        "Django REST Framework",
        "OpenAI & OpenAI Agents SDK",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://bionex.ir",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "INUI",
      href: "https://pypi.org/project/inui/",
      dates: "Aug 2023 - Present",
      active: true,
      description:
        "Created and developed a Python frontend library to streamline the process for Python users to build intuitive and efficient frontend interfaces for their applications..",
      technologies: ["Python"],
      links: [
        {
          type: "Website",
          href: "https://pypi.org/project/inui/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/MohammadrezaAmani/INUI",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Studixo",
      href: "https://studixo.com",
      dates: "Jan 2025 - Jul 2025",
      active: true,
      description:
        "Developed an online AI Eucational and analytics platform for Students: Studixo, which provides a comprehensive suite of tools for students to enhance their learning experience. The platform includes features such as AI-powered study assistance, personalized learning paths, and advanced analytics to track academic performance.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Django",
        "Django REST Framework",
        "Celery",
        "OpenAI & OpenAI Agents SDK",
        "TailwindCSS",
        "Shadcn UI",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://studixo.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Hojan BIZZ",
      href: "https://hojan.bizz",
      dates: "Sep 2024 - May 2025",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Django",
        "Django REST Framework",
        "PostgreSQL",
        "OpenAI & OpenAI Agents SDK",
        "Celery",
        "Redis",
      ],
      links: [],
      image: "",
      video: "",
    },
  ],
} as const;
