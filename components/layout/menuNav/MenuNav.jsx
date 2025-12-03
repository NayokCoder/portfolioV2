"use client";
import { Scrollspy } from "@/components/ui/Scrollspy";

const MenuNav = ({ nav, scrollContainerRef, className }) => {
  return (
    <div className={className}>
      <div className="flex items-center  ">
        <div className=" glassyBg  h-fit rounded-full ">
          <Scrollspy offset={50} targetRef={scrollContainerRef} className="flex flex-col items-center gap-5">
            {nav?.map((item) => (
              <button key={item.id} data-tip={item.label} variant="outline" data-scrollspy-anchor={item.id} className=" data-[active=true]:bg-secondary hover:bg-ring text-white data-[active=true]:text-accent-foreground rounded-full w-12 h-12 border border-gray-800 shadow-md hover:shadow-lg flex items-center justify-center tooltip  tooltip-left">
                {item.icon && <span className="text-2xl flex items-center justify-center">{item.icon}</span>}
              </button>
            ))}
          </Scrollspy>
        </div>
      </div>
    </div>
  );
};

export default MenuNav;
