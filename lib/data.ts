import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { BsBank } from "react-icons/bs";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import a2r_lab from "@/public/a2r_lab.png";
import mywebsite from "@/public/mywebsite.png";
import byrds from "@/public/byrds.png";
import stocktrading from "@/public/stocktrading.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Researcher @ The Accessible and Accelerated Robotics Lab (A²R Lab)",
    location: "Barnard Collge/ Columbia University",
    description:
      "Developing and implementing open-source algorithms for dynamic motion planning and control. Now taking these algorithms and implementing them on the robot dog & robot arm hardware.",
    icon: React.createElement(FaReact),
    date: "2024 - present",
  },
  {
    title: "Columbia University",
    location: "New York, NY",
    description:
      "Clubs: CU Formula Racing, CU Robotics Club - Battlebots, Columbia Space Initiative, Paragon Global Investments (Quant Division) ",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - present",
  },
  {
    title: "Cranbrook HUB",
    location: "Bloomfield Hills, Mi",
    description:
      "Instructed Horizons-Upward Bound students in foundational robotics by guiding hands-on VEX robot construction and programming for individual teams.",
    icon: React.createElement(FaChalkboardTeacher),
    date: "2023 | 3 months",
  },
  {
    title: "Rockbridge Growth Equity",
    location: "Detroit, MI",
    description:
      "Interned at private equity firm, learning about and working on fundemental analysis of potential investments. Attended board meetings, and created company summaries.",
    icon: React.createElement(BsBank),
    date: "2023 | 1 month",
  },
  {
    title: "Intrepid Control Systems",
    location: "Troy, MI",
    description:
      "Drasically reduced hardware device startup time by improving GPS startup. Revamped loe-level C code to store and access critical data.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 | 3 months",
  },
  {
    title: "Intrepid Control Systems",
    location: "Troy, MI",
    description:
      "Expedited the PCB file generation process by creating a CI/CD pipeline in GitLab. Also included PCB validation, assembly, build, and BOM file generation.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 | 3 months",
  },
  {
    title: "Student Researcher @ Oakland University",
    location: "Rochester Hills, MI",
    description:
      "Developed adversarial attack defense algorithms & ASV countermeasures using teacher/student and federated learning techniques. Published a comparative analysis of ASV methods ",
    icon: React.createElement(FaReact),
    date: "2020 - 2022",
  },
] as const;

export const projectsData = [
  {
    title: "A²R Lab",
    description:
      "The A²R Lab develops algorithms for dynamic motion planning and control of robots. I am the link betwen software and the robot dog hardware.",
    tags: ["Python", "C", "Robotics", "Motion Planning", "Algorithms"],
    imageUrl: a2r_lab,
    url: "https://a2r-lab.org/",
  },
  {
    title: "Personal Website",
    description:
      "I created this website to showcase all my projects, big and small, and learn web dev!",
    tags: ["React", "Next.js", "Tailwind", "TypeScript"],
    imageUrl: mywebsite,
    url: "https://github.com/MiPlayer123/mikul_personal_website",
  },
  {
    title: "BYRDS",
    description:
      "A natural disaster response aid that helps responders find critical information and location to save lives .",
    tags: ["Python", "GPT4-V", "OpenAI Clips", "Figma", "Tkinter"],
    imageUrl: byrds,
    url: "https://github.com/julialding/imagine/tree/main",
  },
  {
    title: "Stock Trading",
    description:
      "Analyzing stocks programmatically to pinpoint the best moments for buying and selling strategically.",
    tags: ["Python", "Data Analytics", "Stock Indicators", "PyTorch", "ML"],
    imageUrl: stocktrading,
    url: "",
  },
] as const;

export const pastProjectsData = [
  {
    title: "Air Cleaning Robot v2",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["ROS", "CAD", "CFD", "Sesnors", "Autonomus Robot", "CV"],
    imageUrl: corpcommentImg,
    url: "",
  },
  {
    title: "Audio Forensics Research",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["Python", "Deep Learing", "PyTorch", "Research"],
    imageUrl: rmtdevImg,
    url: "",
  },
  {
    title: "Air Cleaning Robot v1",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["CAD", "CFD", "Electronics", "Air Quality", "Python"],
    imageUrl: wordanalyticsImg,
    url: "",
  },
  {
    title: "Credit Deals",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["HTML", "CSS", "PHP", "MySQL", "API"],
    imageUrl: corpcommentImg,
    url: "",
  },
  {
    title: "VEX Robotics - 39K",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["VEX", "Robotics", "CAD", "C++", "PID"],
    imageUrl: rmtdevImg,
    url: "",
  },
  {
    title: "6-Axis Robot Arm",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: [],
    imageUrl: wordanalyticsImg,
    url: "",
  },
] as const;

export const skillsData = [
  "Python",
  "Java",
  "C++",
  "C",
  "PyTorch",
  "Machine Learning",
  "React",
  "Next.js",
  "Git",
  "ROS",
  "HTML",
  "PHP",
  "CAD",
  "Simulation",
  "Figma",
  "Robotics",
  "Algorithms",
  "Electronics",
  "Microsoft Office",
  "Data Analysis",
  "Presentation",
  "Passionate",
  "Problem Solver",
  "Adaptive",
  "Collaborative",

] as const;