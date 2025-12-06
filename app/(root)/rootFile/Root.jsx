"use client";
import { useRef, useEffect } from "react";
import { ScrollArea } from "@/components/ui/Scroll-area";
import { navItems } from "@/lib/menuNav";
import MenuNav from "@/components/layout/menuNav/MenuNav";
import { gsap } from "gsap";

const Root = () => {
  const parentRef = useRef(null);

  useEffect(() => {
    const viewport = parentRef.current;
    if (!viewport) return;

    let scrollTarget = viewport.scrollTop;
    let currentScroll = viewport.scrollTop;
    let rafId = null;

    const smoothScroll = () => {
      const diff = scrollTarget - currentScroll;
      const delta = diff * 0.2; // Smoothing factor (0.1 = smooth, 0.3 = faster)

      if (Math.abs(diff) > 0.1) {
        currentScroll += delta;
        viewport.scrollTop = currentScroll;
        rafId = requestAnimationFrame(smoothScroll);
      } else {
        currentScroll = scrollTarget;
        viewport.scrollTop = currentScroll;
        rafId = null;
      }
    };

    const handleWheel = (e) => {
      e.preventDefault();
      scrollTarget += e.deltaY;
      scrollTarget = Math.max(0, Math.min(scrollTarget, viewport.scrollHeight - viewport.clientHeight));

      if (!rafId) {
        rafId = requestAnimationFrame(smoothScroll);
      }
    };

    const handleTouchStart = (e) => {
      const touch = e.touches[0];
      viewport.dataset.touchStartY = touch.clientY;
      viewport.dataset.touchStartScroll = currentScroll;
    };

    const handleTouchMove = (e) => {
      e.preventDefault();
      const touch = e.touches[0];
      const startY = parseFloat(viewport.dataset.touchStartY);
      const startScroll = parseFloat(viewport.dataset.touchStartScroll);
      const deltaY = startY - touch.clientY;

      scrollTarget = startScroll + deltaY;
      scrollTarget = Math.max(0, Math.min(scrollTarget, viewport.scrollHeight - viewport.clientHeight));

      if (!rafId) {
        rafId = requestAnimationFrame(smoothScroll);
      }
    };

    viewport.addEventListener("wheel", handleWheel, { passive: false });
    viewport.addEventListener("touchstart", handleTouchStart, { passive: true });
    viewport.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      viewport.removeEventListener("wheel", handleWheel);
      viewport.removeEventListener("touchstart", handleTouchStart);
      viewport.removeEventListener("touchmove", handleTouchMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="flex h-full w-full gap-3 lg:gap-5 flex-col lg:flex-row-reverse rounded-xl lg:rounded-2xl p-4 lg:p-0">
      <MenuNav nav={navItems} scrollContainerRef={parentRef} className="hidden lg:flex" />

      <div className="grow h-full overflow-hidden">
        <ScrollArea className="h-full lg:pe-5 lg:-me-5" viewportRef={parentRef}>
          <div className="space-y-6 lg:space-y-8 py-4 lg:py-6">
            {navItems.map((item) => (
              <div key={item.id} id={item.id} className="space-y-2.5">
                <div className="bg-transparent rounded-lg p-4 lg:p-0 shadow-sm">{item.component}</div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default Root;
