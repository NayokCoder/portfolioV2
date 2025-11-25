"use client";
import { Scrollspy } from "@/components/ui/Scrollspy";

const MenuNav = ({ nav, scrollContainerRef, className }) => {
  return (
    <div className={className}>
      <div className="flex items-center backdrop-blur-xl">
        <div className="px-2 py-4 bg-card border border-border h-fit rounded-full shadow-lg">
          <Scrollspy offset={50} targetRef={scrollContainerRef} className="flex flex-col items-center gap-5">
            {nav?.map((item) => (
              <button key={item.id} variant="outline" data-scrollspy-anchor={item.id} className="data-[active=true]:bg-secondary-foreground data-[active=true]:text-secondary rounded-full w-12 h-12 border border-border hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-all duration-200 shadow-md hover:shadow-lg">
                {item.icon && <span className="text-2xl mx-auto data-[active=true]:text-accent-foreground flex items-center justify-center">{item.icon}</span>}
              </button>
            ))}
          </Scrollspy>
        </div>
      </div>
    </div>
  );
};

export default MenuNav;
