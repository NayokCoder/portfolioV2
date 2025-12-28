import { Rajdhani } from "next/font/google";
import "../css/globals.css";
import Drawer from "@/components/layout/drawer/Drawer";
import Sidebar from "@/components/layout/sidebar/Sidebar";
import SmoothDrawer from "@/components/kokonutui/smooth-drawer";

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
      <body className={`${geistMono.variable} antialiased flex flex-col xl:flex-row max-w-[1920px] mx-auto px-4 xl:px-6 xl:px-12  justify-between h-screen xl:overflow-hidden`}>
        {/* Background Video */}
        <video className="fixed top-0 left-0 w-full h-full object-cover -z-10" autoPlay loop muted playsInline preload="auto">
          <source src="/asset/Bg-Video/video5.mp4" type="video/mp4" />
        </video>

        {/* Drawer */}
        <div className="z-50 absolute right-1/40 top-1/20">
          <SmoothDrawer />
          {/* <Drawer /> */}
        </div>

        {/* Gradient Box */}
        <div className="mxauto ">
          <div className="">
            <Sidebar />
          </div>
        </div>

        {children}
      </body>
    </html>
  );
}
