"use client";
import { useRef } from "react";
import { ScrollArea } from "@/components/ui/Scroll-area";
import { navItems } from "@/lib/menuNav";
import MenuNav from "@/components/layout/menuNav/MenuNav";

const Root = () => {
  const parentRef = useRef(null);

  return (
    <div className="flex  h-full w-full gap-3 lg:gap-5 flex-col lg:flex-row-reverse rounded-xl lg:rounded-2xl p-4 lg:p-0">
      <MenuNav nav={navItems} scrollContainerRef={parentRef} className="hidden lg:flex" />

      <div className="grow h-full overflow-hidden">
        <ScrollArea className="h-full lg:pe-5 lg:-me-5" viewportRef={parentRef}>
          <div className="space-y-6 lg:space-y-8 py-4 lg:py-6">
            {navItems.map((item) => (
              <div key={item.id} id={item.id} className="space-y-2.5">
                <div className="bg-card border border-border rounded-lg p-4 lg:p-6 shadow-sm">{item.component}</div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default Root;
