import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const dataColorScheme = (data: number): string => {
  if (data >= 75) {
    return "from-green-700 via-green-300 to-green-500 ";
  } else if (data >= 50) {
    return "from-blue-700 via-blue-300 to-blue-500";
  } else if (data >= 25) {
    return "from-yellow-700 via-yellow-300 to-yellow-500";
  } else {
    return "from-red-700 via-yellow-300 to-red-500";
  }
};

export const motionVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};
