import { Rajdhani } from "next/font/google";
import "../css/globals.css";
import SmoothDrawer from "@/components/kokonutui/smooth-drawer";
import Sidebar from "@/components/layout/sidebar/Sidebar";

const geistMono = Rajdhani({
  subsets: ["latin"],
  variable: "--geist-mono-font",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Ferdous Alam - Portfolio",
  description: "Ferdous Alam's Portfolio showcasing projects, skills, and experience in web development and design.",
  icons: {
    icon: "/asset/align-left-svgrepo-com (1).svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistMono.className} bg-black relative`}>
      <body className={`${geistMono.variable} `}>{children}</body>
    </html>
  );
}
