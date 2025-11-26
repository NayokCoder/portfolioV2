"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const KEY_PREFIX_LENGTH = 3;

export default function ScrollRevealParagraph({ paragraph, className = "" }) {
  const container = useRef(null);
  const isInView = useInView(container, {
    once: false,
    amount: 0.3,
    margin: "0px 0px -100px 0px",
  });

  const words = paragraph.split(" ");

  return (
    <p className={`text-lg leading-relaxed ${className}`} ref={container}>
      {words.map((word, i) => {
        const delay = i * 0.03;

        return (
          <Word key={`word-${i}-${word.slice(0, KEY_PREFIX_LENGTH)}`} delay={delay} isInView={isInView}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}

const Word = ({ children, delay, isInView }) => {
  return (
    <span className="relative mr-2 inline-block">
      <motion.span
        initial={{ opacity: 0.2, y: 10 }}
        animate={{
          opacity: isInView ? 1 : 0.2,
          y: isInView ? 0 : 10,
        }}
        transition={{
          duration: 0.5,
          delay: isInView ? delay : 0,
          ease: "easeOut",
        }}
        className="inline-block"
      >
        {children}
      </motion.span>
    </span>
  );
};
