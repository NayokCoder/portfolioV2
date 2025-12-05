"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

// Custom text splitter function (no premium plugin needed)
const splitTextIntoChars = (element) => {
  const originalHTML = element.innerHTML;
  const text = element.textContent;

  // Split into characters and wrap each in a span
  const chars = [];

  text.split("").forEach((char) => {
    const span = document.createElement("span");
    span.textContent = char;
    span.className = "scroll-reveal-char";
    span.style.cssText = "display: inline-block; transition: none;";

    // Preserve spaces
    if (char === " ") {
      span.innerHTML = "&nbsp;";
    }

    chars.push(span);
  });

  // Clear element and append character spans
  element.innerHTML = "";
  chars.forEach((char) => element.appendChild(char));

  return { chars, originalHTML };
};

export default function ScrollRevealText({ children, colorInitial = "#888", colorAccent = "#BFFF00", colorFinal = "#ffffff" }) {
  const containerRef = useRef(null);
  const charsRef = useRef([]);
  const originalContentRef = useRef([]);
  const lastScrollProgress = useRef(0);
  const colorTransitionTimers = useRef(new Map());
  const completedChars = useRef(new Set());

  useGSAP(
    () => {
      if (!containerRef.current) return;

      charsRef.current = [];
      originalContentRef.current = [];
      lastScrollProgress.current = 0;
      colorTransitionTimers.current.clear();
      completedChars.current.clear();

      // Get all leaf text elements (elements with no child elements)
      const elements = Array.from(containerRef.current.querySelectorAll("*")).filter((el) => el.children.length === 0 && el.textContent.trim() !== "");

      // If no elements found, try the container itself
      if (elements.length === 0 && containerRef.current.textContent.trim() !== "") {
        elements.push(containerRef.current);
      }

      // Split text in each element
      elements.forEach((element) => {
        const { chars, originalHTML } = splitTextIntoChars(element);
        charsRef.current.push(...chars);
        originalContentRef.current.push({ element, originalHTML });
      });

      const allChars = charsRef.current;

      // Set initial color with !important to override Tailwind
      allChars.forEach((char) => {
        char.style.setProperty("color", colorInitial, "important");
      });

      // Final transition scheduler
      const scheduleFinalTransition = (char, index) => {
        if (colorTransitionTimers.current.has(index)) {
          clearTimeout(colorTransitionTimers.current.get(index));
        }

        const timer = setTimeout(() => {
          if (!completedChars.current.has(index)) {
            gsap.to(char, {
              duration: 0.3,
              ease: "power2.out",
              color: colorFinal,
              // textShadow: "0 0 0px transparent",
              onComplete: () => {
                completedChars.current.add(index);
                char.style.setProperty("color", colorFinal, "important");
                char.style.setProperty("text-shadow", "none", "important");
              },
            });
          }
          colorTransitionTimers.current.delete(index);
        }, 200);

        colorTransitionTimers.current.set(index, timer);
      };

      // Find the custom scroll container
      const scrollContainer = containerRef.current.closest("[data-radix-scroll-area-viewport]");

      // ScrollTrigger animation
      const scrollTrigger = ScrollTrigger.create({
        trigger: containerRef.current,
        scroller: scrollContainer,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.5,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const totalChars = allChars.length;
          const isScrollingDown = progress >= lastScrollProgress.current;
          const currentCharIndex = Math.floor(progress * totalChars);

          allChars.forEach((char, index) => {
            // Scrolling up → reset
            if (!isScrollingDown && index >= currentCharIndex) {
              if (colorTransitionTimers.current.has(index)) {
                clearTimeout(colorTransitionTimers.current.get(index));
                colorTransitionTimers.current.delete(index);
              }

              completedChars.current.delete(index);
              char.style.setProperty("color", colorInitial, "important");
              char.style.setProperty("text-shadow", "none", "important");
              return;
            }

            if (completedChars.current.has(index)) return;

            if (index <= currentCharIndex) {
              // Main accent color with glow
              char.style.setProperty("color", colorAccent, "important");
              // char.style.setProperty("text-shadow", `0 0 20px ${colorAccent}, 0 0 20px ${colorAccent}80, 0 0 60px ${colorAccent}40`, "important");

              if (!colorTransitionTimers.current.has(index)) {
                scheduleFinalTransition(char, index);
              }

              // Apply gradient glow to nearby characters
              const glowRadius = 0;
              for (let i = 1; i <= glowRadius; i++) {
                // Glow forward
                if (index + i < allChars.length && !completedChars.current.has(index + i) && index + i > currentCharIndex) {
                  const intensity = 1 - i / (glowRadius + 1);
                  const glowColor = `${colorAccent}${Math.round(intensity * 100)
                    .toString(16)
                    .padStart(2, "0")}`;
                  allChars[index + i].style.setProperty("color", glowColor, "important");
                  allChars[index + i].style.setProperty("text-shadow", `0 0 ${10 * intensity}px ${colorAccent}`, "important");
                }
              }
            } else {
              char.style.setProperty("color", colorInitial, "important");
              char.style.setProperty("text-shadow", "none", "important");
            }
          });

          lastScrollProgress.current = progress;
        },
      });

      // Force refresh after creation
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);

      // Cleanup
      return () => {
        scrollTrigger.kill();

        colorTransitionTimers.current.forEach((timer) => clearTimeout(timer));
        colorTransitionTimers.current.clear();
        completedChars.current.clear();

        // Restore original HTML
        originalContentRef.current.forEach(({ element, originalHTML }) => {
          element.innerHTML = originalHTML;
        });
      };
    },
    { scope: containerRef, dependencies: [colorInitial, colorAccent, colorFinal] }
  );

  return <div ref={containerRef}>{children}</div>;
}
