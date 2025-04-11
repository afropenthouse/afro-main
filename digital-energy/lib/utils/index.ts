import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

/**
 * @param str as string text or sentence
 * @returns the first letter of each word in the sentence capitalized
 */
export const capitalizeWords = (str: string): string => {
    const splitStr = str.split(' ');

    const capitalizedStr = splitStr.map(word =>
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    );

    return capitalizedStr.join(' ');
}
