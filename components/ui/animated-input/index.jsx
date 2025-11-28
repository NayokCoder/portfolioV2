import { motion } from "motion/react";
import { useRef, useState } from "react";

const EASE_IN_OUT_CUBIC_X1 = 0.4;
const EASE_IN_OUT_CUBIC_Y1 = 0;
const EASE_IN_OUT_CUBIC_X2 = 0.2;
const EASE_IN_OUT_CUBIC_Y2 = 1;
const RADIX_BASE_36 = 36;
const RANDOM_ID_START_INDEX = 2;
const RANDOM_ID_LENGTH = 9;

const LABEL_TRANSITION = {
  duration: 0.28,
  ease: [EASE_IN_OUT_CUBIC_X1, EASE_IN_OUT_CUBIC_Y1, EASE_IN_OUT_CUBIC_X2, EASE_IN_OUT_CUBIC_Y2], // standard material easing
};

export default function AnimatedInput({ value, defaultValue = "", onChange, label, placeholder = "", disabled = false, className = "", inputClassName = "", labelClassName = "", icon }) {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const isControlled = value !== undefined;
  const val = isControlled ? value : internalValue;
  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const isFloating = !!val || isFocused;
  const inputId = `animated-input-${Math.random().toString(RADIX_BASE_36).substring(RANDOM_ID_START_INDEX, RANDOM_ID_LENGTH)}`;

  return (
    <div className={`relative flex items-center ${className}`}>
      {icon && <span className="-translate-y-1/2 absolute top-1/2 left-3">{icon}</span>}
      <input
        className={`peer w-full rounded-sm border-b border-muted bg-transparent px-3 py-3 text-lg text-muted outline-none transition focus:ring-1 focus:ring-primary ${icon ? "pl-10" : ""} ${inputClassName}`}
        disabled={disabled}
        id={inputId}
        onBlur={() => setIsFocused(false)}
        onChange={(e) => {
          if (!isControlled) {
            setInternalValue(e.target.value);
          }
          onChange?.(e.target.value);
        }}
        onFocus={() => setIsFocused(true)}
        placeholder={isFloating ? placeholder : ""}
        ref={inputRef}
        type="text"
        value={val}
      />
      <motion.label
        animate={
          isFloating
            ? {
                y: -24,
                scale: 0.85,
                color: "var( --chart-1)",
                borderColor: "var(--color-brand)",
              }
            : { y: 0, scale: 1, color: "#6b7280" }
        }
        className={`-translate-y-1/2 pointer-events-none absolute top-1/2 left-3 origin-left rounded-sm border border-transparent bg-background px-1 text-foreground transition-all ${labelClassName}`}
        htmlFor={inputId}
        style={{
          zIndex: 2,
        }}
        transition={LABEL_TRANSITION}
      >
        {label}
      </motion.label>
    </div>
  );
}
