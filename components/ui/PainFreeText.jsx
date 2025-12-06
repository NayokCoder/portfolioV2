"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function PainFreeText({
  children,
  animationType = "slideUp", // Options: "slideUp", "fadeIn", "reveal", "blur", "scale", "wave", "glitch", "bounce", "magnetic", "flicker", "typewriter", "elastic"
  staggerSpeed = 0.03,
  duration = 0.8,
  splitBy = "chars", // Options: "chars", "words"
}) {
  const textRef = useRef(null);

  useEffect(() => {
    if (!textRef.current) return;

    const text = textRef.current.innerText;
    let elements = [];

    // Split text based on splitBy option
    if (splitBy === "chars") {
      elements = text.split("");
      textRef.current.innerHTML = elements
        .map((char) => {
          const displayChar = char === " " ? "&nbsp;" : char;
          return `<span class="inline-block" style="overflow: hidden;"><span class="inline-block">${displayChar}</span></span>`;
        })
        .join("");
    } else if (splitBy === "words") {
      elements = text.split(" ");
      textRef.current.innerHTML = elements.map((word) => `<span class="inline-block overflow-hidden"><span class="inline-block">${word}</span></span>`).join('<span class="inline-block">&nbsp;</span>');
    }

    const spans = textRef.current.querySelectorAll("span > span");

    // Animation configurations
    const animations = {
      slideUp: {
        from: { opacity: 0, x: 50, rotateZ: 5 },
        to: { opacity: 1, x: 0, rotateZ: 0, ease: "power4.out" },
      },
      fadeIn: {
        from: { opacity: 0, scale: 0.8 },
        to: { opacity: 1, scale: 1, ease: "power3.out" },
      },
      reveal: {
        from: { y: "120%", opacity: 0, rotateX: 90 },
        to: { y: "0%", opacity: 1, rotateX: 0, ease: "power4.out" },
      },
      blur: {
        from: { opacity: 0, filter: "blur(20px)", scale: 1.2, y: 20 },
        to: { opacity: 1, filter: "blur(0px)", scale: 1, y: 0, ease: "expo.out" },
      },
      scale: {
        from: { opacity: 0, scale: 0, rotateZ: -15 },
        to: { opacity: 1, scale: 1, rotateZ: 0, ease: "back.out(2)" },
      },
      wave: {
        from: { opacity: 0, y: 100, rotateX: -90, transformOrigin: "0% 50%" },
        to: { opacity: 1, y: 0, rotateX: 0, ease: "elastic.out(1, 0.5)" },
      },
      glitch: {
        from: { opacity: 0, x: -100, skewX: 20 },
        to: { opacity: 1, x: 0, skewX: 0, ease: "expo.out" },
      },
      bounce: {
        from: { opacity: 0, y: -100, scale: 0.3 },
        to: { opacity: 1, y: 0, scale: 1, ease: "bounce.out" },
      },
      magnetic: {
        from: { opacity: 0, scale: 0, rotateY: 180, z: -200 },
        to: { opacity: 1, scale: 1, rotateY: 0, z: 0, ease: "power4.out" },
      },
      flicker: {
        from: { opacity: 0, filter: "blur(8px) brightness(0.5)", y: 30 },
        to: { opacity: 1, filter: "blur(0px) brightness(1)", y: 0, ease: "steps(5)" },
      },
      typewriter: {
        from: { opacity: 0, width: 0, x: -20 },
        to: { opacity: 1, width: "auto", x: 0, ease: "power2.inOut" },
      },
      elastic: {
        from: { opacity: 0, scaleX: 0, transformOrigin: "left center" },
        to: { opacity: 1, scaleX: 1, ease: "elastic.out(1.2, 0.4)" },
      },
    };

    const selectedAnimation = animations[animationType] || animations.slideUp;

    gsap.fromTo(spans, selectedAnimation.from, {
      ...selectedAnimation.to,
      duration: duration,
      stagger: staggerSpeed,
    });
  }, [animationType, staggerSpeed, duration, splitBy]);

  return (
    <div
      ref={textRef}
      className="overflow-hidden"
      style={{
        perspective: "1000px",
        perspectiveOrigin: "50% 50%"
      }}
    >
      {children}
    </div>
  );
}
