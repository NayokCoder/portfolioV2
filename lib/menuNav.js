import TechStack from "@/app/(root)/techStack/TechStack";

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
    id: "Introduction",
    label: "Introduction",
    icon: <IoIosHome />,
    component: <Intro />,
  },
  {
    id: "section-2",
    label: "Section 2",
    icon: <FaNetworkWired />,
    component: <TechStack />,
  },
  {
    id: "section-3",
    label: "Section 3",
    icon: <GrServices />,
  },
  {
    id: "section-4",
    label: "Section 4",
    icon: <GiAchievement />,
    component: <Course />,
  },
  {
    id: "section-5",
    label: "Section 5",
    icon: <FiMessageSquare />,
  },
  {
    id: "section-6",
    label: "Section 6",
    icon: <IoIosMail />,
    component: <Contact />,
  },
  {
    id: "section-7",
    label: "Section 7",
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
