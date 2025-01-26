import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...args: ClassValue[]) => {
    return twMerge(clsx(...args));
};

export const timeAgo = (timestamp: number) => {
    const seconds = Math.floor((Date.now() - timestamp) / 1000);

    const intervals = [
        Math.floor(seconds / 31536000), // years
        Math.floor(seconds / 2592000), // months
        Math.floor(seconds / 86400), // days
        Math.floor(seconds / 3600), // hours
        Math.floor(seconds / 60), // minutes
    ];

    const labels = ["year", "month", "day", "hour", "minute"];

    for (let i = 0; i < intervals.length; i++) {
        if (intervals[i] > 0) {
            return `${intervals[i]} ${labels[i]}${intervals[i] !== 1 ? "s" : ""} ago`;
        }
    }

    return "Just now";
};
