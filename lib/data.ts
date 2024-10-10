import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { BsBank } from "react-icons/bs";
import a2r_lab from "@/public/a2r_lab.png";
import mywebsite from "@/public/mywebsite.png";
import byrds from "@/public/byrds.png";
import stocktrading from "@/public/stocktrading.png";
import robotV2 from "@/public/robotV2.png";
import ouResearch from "@/public/ouResearch.png";
import robotV1 from "@/public/robotV1_1.png";
import creditDeals from "@/public/creditDeals.png";
import robotArm from "@/public/robotArm.jpg";
import vex39k from "@/public/39k.jpg";
import pongirl from "@/public/pong_irl.png";
import dash from "@/public/dash.png";
import accumulator from "@/public/accumulator.png";

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
    title: "Prompt Engineering Intern - Rilla",
    location: "New York, NY",
    description:
      "Generate accurate prompts for sales/ marketing rep tracker systems that align with client use cases.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - present",
  },
  {
    title: "Digitization Intern - Magna International",
    location: "Troy, MI",
    description:
      "Implementing text-to-speech and speech-to-text algorithms using AWS and integrating them with Gen AI via AWS and Claude.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - 2024 | 3 months",
  },
  {
    title: "Researcher @ The Accessible and Accelerated Robotics Lab (A²R Lab)",
    location: "Barnard Collge, Columbia University",
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
    location: "Bloomfield Hills, MI",
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
      "Drasically reduced hardware device startup time by improving GPS startup. Revamped low-level C code to store and access critical data.",
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
      "Developed adversarial attack defense algorithms & ASV countermeasures using teacher/student and federated learning techniques. Published a comparative analysis of ASV methods.",
    icon: React.createElement(FaReact),
    date: "2020 - 2022",
  },
] as const;

export const projectsData = [
  {
    title: "Dash - Startup",
    description:
      "Co-founded with Samay to apply technology to protect families by develoiping a distraction detection system for drivers.",
    tags: ["Startup", "Computer-Vision", "App Dev", "AI", ],
    imageUrl: dash,
    url: "https://dash-demo-web.vercel.app/",
  },
  {
    title: "A²R Lab",
    description:
      "The A²R Lab develops algorithms for dynamic motion planning and control of robots. I am the link betwen software and the robot dog hardware.",
    tags: ["Python", "C", "Robotics", "Motion Planning", "Algorithms"],
    imageUrl: a2r_lab,
    url: "https://a2r-lab.org/",
  },
  {
    title: "HV Enclosure - FSAE",
    description:
      "I am creating and testing the High Voltate enclosure (accumulator) for our FSAE 2025 car.",
    tags: ["Solidworks", "FEA", "Manufacturing", "Design"],
    imageUrl: accumulator,
    url: "https://fsae.engineering.columbia.edu/",
  },
  {
    title: "Stock Trading",
    description:
      "Analyzing stocks programmatically to pinpoint the best moments for buying and selling strategically.",
    tags: ["Python", "Data Analytics", "Stock Indicators", "PyTorch", "ML"],
    imageUrl: stocktrading,
    url: "",
  },
];

export const pastProjectsData = [
  {
    title: "Pong IRL",
    description:
      "Team project by Aryan, Julia, Samay, and Wesley to create a real-life pong game using motors and physical conrol.",
    tags: ["Arduion", "Stepper", " Electronics", "C", "Engineering"],
    imageUrl: pongirl,
    url: "https://www.youtube.com/watch?v=HaI8qRW8Zmc",
  },
  {
    title: "BYRDS",
    description:
      "A natural disaster response aid that helps responders find critical information and location to save lives.",
    tags: ["Python", "GPT4-V", "OpenAI Clips", "Figma", "Tkinter"],
    imageUrl: byrds,
    url: "https://github.com/julialding/imagine/tree/main",
  },
  {
    title: "Air Cleaning Robot v2",
    description:
      "This is v2 of my novel autonomous robot with a complete redesign, new ROS navigation stack, and better performance.",
    tags: ["ROS", "CAD", "CFD", "Sesnors", "Autonomus Robot", "CV"],
    imageUrl: robotV2,
    url: "https://github.com/MiPlayer123/better_air_bot",
  },
  {
    title: "Audio Forensics Research",
    description:
      "Developed adversarial attack defense algorithms & ASV countermeasures using teacher/student and federated learning techniques.",
    tags: ["Python", "Deep Learing", "PyTorch", "Research", "ASV"],
    imageUrl: ouResearch,
    url: "https://www.researchgate.net/scientific-contributions/Mikul-Saravanan-2232381117",
  },
  {
    title: "Air Cleaning Robot v1",
    description:
      "A novel multipurpose air-handling robot that purifies, humidifies, and disinfects the air evenly within a room or rooms.",
    tags: ["CAD", "CFD", "Electronics", "Air Quality", "Python"],
    imageUrl: robotV1,
    url: "https://youtu.be/qHCJDDwnEOc",
  },
  {
    title: "Credit Deals",
    description:
      "Project website that manages all Credit Card deals from Visa (API), MasterCard (soon), and custom deals so you know which credit card to use when.",
    tags: ["HTML", "CSS", "PHP", "MySQL", "API"],
    imageUrl: creditDeals,
    url: "https://github.com/MiPlayer123/CreditDeals",
  },{
    title: "Personal Website",
    description:
      "I created this website to showcase all my projects, big and small, and learn web dev!",
    tags: ["React", "Next.js", "Tailwind", "TypeScript"],
    imageUrl: mywebsite,
    url: "https://github.com/MiPlayer123/mikul_personal_website",
  },
  {
    title: "6-Axis Robot Arm",
    description:
      "Designed, constructed, and programmed a low-cost and lightweight robot arm with novel dynamic soft gripper.",
    tags: [],
    imageUrl: robotArm,
    url: "https://youtu.be/VcGS_pkGSuc",
  },
  
  {
    title: "VEX Robotics - 39K",
    description:
      "VEX Robotics team 39K Rest in Pieces. Led the team to be one of the top perorming teams in the world for 4+ years, working on all aspects of the robot.",
    tags: ["VEX", "Robotics", "CAD", "C++", "PID"],
    imageUrl: vex39k,
    url: "https://www.youtube.com/vspuzzler",
  },
];

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