// components/PainFreeText.jsx
"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function MagneticText({ children }) {
  const textRef = useRef(null);

  useEffect(() => {
    const text = textRef.current;
    if (!text) return; // Safety check

    const handleMouseMove = (e) => {
      const rect = text.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      console.log("Mouse move:", { x, y }); // Debug log

      gsap.to(text, {
        x: x * 0.3,
        y: y * 0.3,
        skewX: x * 0.05,
        skewY: y * 0.05,
        duration: 0.6,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(text, {
        x: 0,
        y: 0,
        skewX: 0,
        skewY: 0,
        duration: 0.6,
      });
    };

    text.addEventListener("mousemove", handleMouseMove);
    text.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      if (text) {
        // Safety check in cleanup
        text.removeEventListener("mousemove", handleMouseMove);
        text.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <div
      ref={textRef}
      style={{
        display: "inline-block",
        cursor: "pointer",
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}
