import About from "@/app/(root)/techStack/About";

import Testimonial from "@/app/(root)/testimonial/Testimonial";

const { default: Contact } = require("@/app/(root)/contact/Contact");
const { default: Course } = require("@/app/(root)/courses/Course");
const { default: Intro } = require("@/app/(root)/introduction/Intro");
const { default: Project } = require("@/app/(root)/projects/Project");
const { LucideLayoutDashboard } = require("lucide-react");
const { FaNetworkWired } = require("react-icons/fa");
const { FiMessageSquare } = require("react-icons/fi");
const { GiAchievement } = require("react-icons/gi");
const { GrServices } = require("react-icons/gr");
const { ImBlog } = require("react-icons/im");
const { IoIosMail, IoIosHome } = require("react-icons/io");

export const navItems = [
  {
    id: "introduction",
    label: "Introduction",
    icon: <IoIosHome />,
    component: <Intro />,
  },
  {
    id: "about-me",
    label: "About Me",
    icon: <FaNetworkWired />,
    component: <About />,
  },
  {
    id: "courses",
    label: "Courses",
    icon: <GiAchievement />,
    component: <Course />,
  },
  {
    id: "projects",
    label: "Projects",
    icon: <GrServices />,
    component: <Project />,
  },
  {
    id: "testimonial",
    label: "Testimonial",
    icon: <FiMessageSquare />,
    component: <Testimonial />,
  },
  {
    id: "contact",
    label: "Contact-Me",
    icon: <IoIosMail />,
    component: <Contact />,
  },
  {
    id: "blog",
    label: "Blog",
    icon: <ImBlog />,
  },
];

export const dash = [
  {
    id: "section-7",
    label: "Section 7",
    icon: <LucideLayoutDashboard />,
  },
];
