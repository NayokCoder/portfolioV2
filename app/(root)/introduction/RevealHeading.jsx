// components/SplitTextReveal.jsx
"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function RevealHeading({ children }) {
  const textRef = useRef(null);

  useEffect(() => {
    const element = textRef.current;
    if (!element) return;

    // Find the first child element (like h1 from Heading component)
    const targetElement = element.firstElementChild || element;
    const text = targetElement.textContent;
    if (!text) return;

    // Split text into character spans - keep them visible initially
    targetElement.innerHTML = text
      .split("")
      .map((char) => `<span style="display:inline-block">${char === " " ? "&nbsp;" : char}</span>`)
      .join("");

    const chars = targetElement.children;

    // Set initial state for animation
    gsap.set(chars, { opacity: 0, x: 50 });

    // Animate with better trigger
    gsap.to(chars, {
      opacity: 1,
      x: 0,
      stagger: 0.02,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: targetElement,
        start: "top bottom",
        toggleActions: "play none none none",
        once: true,
      },
    });

    // Fallback: show text after 2 seconds if animation hasn't triggered
    const fallbackTimer = setTimeout(() => {
      gsap.to(chars, { opacity: 1, x: 0, duration: 0.6 });
    }, 2000);

    return () => clearTimeout(fallbackTimer);
  }, []);

  return <div ref={textRef}>{children}</div>;
}
