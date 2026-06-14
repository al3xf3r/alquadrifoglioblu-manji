"use client";
import { useState } from "react";

interface FadeImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function FadeImage({ src, alt, className = "" }: FadeImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      onLoad={() => setLoaded(true)}
      className={`${className} transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
    />
  );
}
