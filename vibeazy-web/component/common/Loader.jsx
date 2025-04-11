"use client";

import { PulseLoader } from "react-spinners";

export default function ElementLoader({ text, color, loading, size }) {
  return (
    <span className="flex gap-1 justify-center items-center">
      {text && text}
      <PulseLoader
        color={color || "#fff"}
        loading={loading}
        size={size || 10}
        data-testid="loader"
      />
    </span>
  );
}
