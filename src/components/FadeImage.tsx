"use client";
import { useState } from "react";

interface FadeImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholderColor?: string;
}

export default function FadeImage({
  src,
  alt,
  className = "",
  placeholderColor = "#C8DCEF",
}: FadeImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: loaded ? "transparent" : placeholderColor,
        transition: "background 0.3s",
      }}
    >
      <img
        src={src}
        alt={alt}
        loading="eager"
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={className}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.5s ease",
        }}
      />
    </div>
  );
}
