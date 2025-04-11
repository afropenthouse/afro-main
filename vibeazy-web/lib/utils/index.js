import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
    return twMerge(clsx(inputs))
}

export const fetchQuery = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

