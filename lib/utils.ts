import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import PocketBase from "pocketbase";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const pb = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_URL);

export default pb;
