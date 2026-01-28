import Drawer from "@/components/layout/drawer/Drawer";
import Sidebar from "@/components/layout/sidebar/Sidebar";
import SmoothDrawer from "@/components/kokonutui/smooth-drawer";

export default function PortfolioLayout({ children }) {
  return (
    <div className="flex flex-col xl:flex-row  mx-auto xl:px-6 justify-between gap-6 h-screen xl:overflow-hidden">
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
      <div className="mx-auto xl:ml-5 flex items-center ">
        <Sidebar />
      </div>

      {children}
    </div>
  );
}
