"use client";
import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";

export const TracingBeam = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <div
      ref={ref}
      className="relative antialiased"
    >
      <motion.div
        className="absolute left-0 top-3 w-[2px] h-full bg-gradient-to-b from-[#924ad8] to-transparent"
        style={{
          scaleY: scrollYProgress,
        }}
      />
      {children}
    </div>
  );
};
