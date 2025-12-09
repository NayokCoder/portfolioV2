import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function GsapDownAnimation({ children }) {
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
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "back.in",
        scrollTrigger: {
          trigger: box,
          start: "top 95%",
          end: "top 50%",
          scroller: scrollContainer,
          scrub: 1,
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
