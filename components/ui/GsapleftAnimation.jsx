import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function GsapleftAnimation({ children }) {
  const boxRef = useRef(null);

  useEffect(() => {
    const box = boxRef.current;
    if (!box) return;

    // Find the custom scroll container (ScrollArea viewport)
    const scrollContainer = box.closest("[data-radix-scroll-area-viewport]");
    if (!scrollContainer) return;

    // Create ScrollTrigger animation
    const animation = gsap.fromTo(
      box,
      { x: -60, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        ease: "sine.in",
        scrollTrigger: {
          trigger: box,
          start: "top 95%",
          end: "top 50%",
          scroller: scrollContainer,
          scrub: 2,
        },
      }
    );

    setTimeout(() => ScrollTrigger.refresh(), 100);

    return () => {
      animation.scrollTrigger?.kill();
      animation.kill();
    };
  }, []);

  return <div ref={boxRef}>{children}</div>;
}
