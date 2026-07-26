import { clsx } from "clsx"; // CHANGED HERE: Removed ", type ClassValue"
import { twMerge } from "tailwind-merge";

// CHANGED HERE: Removed ": ClassValue[]" type annotation
export function cn(...inputs) { 
  return twMerge(clsx(inputs)); 
}
