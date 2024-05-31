import { format } from "date-fns";

import { enUS } from "date-fns/locale";
import { getItemFromStorage } from "./locaStorage";

export function getDaysInMonth(year: number, month: number): string[] {
  // Create a new Date object for the first day of the specified month
  //   const firstDayOfMonth = new Date(year, month - 1, 1);
  // Get the last day of the month by subtracting 1 millisecond from the first day of the next month
  const lastDayOfMonth = new Date(year, month, 0);
  // Get the number of days in the month
  const numberOfDaysInMonth = lastDayOfMonth.getDate();

  // Create an array to store the days of the month as strings
  const daysOfMonth: string[] = [];

  // Loop through the days of the month and add them to the array as strings
  for (let i = 1; i <= numberOfDaysInMonth; i++) {
    daysOfMonth.push(String(i).padStart(2, "0")); // Convert each day number to a string
  }

  return daysOfMonth;
}

// Example usage:
export const months = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
];

export function generateYears(): string[] {
  const currentYear = new Date().getFullYear();
  const startYear = 1960;
  const years: string[] = [];

  for (let year = startYear; year <= currentYear; year++) {
    years.push(year.toString());
  }

  return years;
}

export function convertTime(timeString: string): string | any {
  // Updated regex to handle both PT11H and PT11H30M formats
  const regex = /PT(\d+)H(?:(\d+)M)?/;
  const match = timeString.match(regex);

  if (match) {
    const hours = parseInt(match[1], 10);
    const minutes = match[2] ? parseInt(match[2], 10) : 0;
    return { hours, minutes };
  } else {
    return "N/A";
  }
}

export function extractTime(isoString: string): string {
  const date = new Date(isoString);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const period = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

  return `${formattedHours}:${formattedMinutes} ${period}`;
}

export function formatCurrency(amount: number): string {
  const FLIGHT_TYPE: { rate: number } = getItemFromStorage("flight_type");
  const addedPrice = addPercentage(Number(amount), FLIGHT_TYPE.rate);
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "NGN",
  });
  // return formatter.format(amount);
  return formatter.format(addedPrice);
}

export function addPercentage(price: number, percentage: number): number {
  const additionalAmount = price * (percentage / 100);
  const newPrice = price + additionalAmount;
  return Math.round(newPrice); // Rounds the number to the nearest integer
}

export function formatDate(dateString: string): string {
  const months: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days: string[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const date: Date = new Date(dateString);
  const dayOfWeek: string = days[date.getDay()];
  const month: string = months[date.getMonth()];
  const dayOfMonth: number = date.getDate();

  return `${dayOfWeek}, ${month} ${dayOfMonth}`;
}

export function formatDateWithDateFns(
  date: Date | undefined | string,
  short?: string
): string {
  if (!date || date === "undefined") {
    return "N/A";
  }
  return format(date, short ? " MMMM d" : "EEEE, MMMM d", {
    locale: enUS,
  });
}

export function formatDateString(date: Date | undefined): string | null {
  if (!date) {
    return null;
  }

  // Format the Date object into the desired string format (YYYY-MM-DD)
  return format(date, "yyyy-MM-dd");
}

export function extractHour(dateTime: string): number {
  const date = new Date(dateTime);
  return date.getHours();
}

export function isDateLessThanYesterday(inputDate: undefined | Date): boolean {
  const date = new Date(inputDate as Date);
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  return isBefore(date, yesterday) && !isToday(date);
}

function isBefore(date: Date, comparedDate: Date): boolean {
  return date < comparedDate;
}

function isToday(date: Date): boolean {
  const today = new Date();
  return (
    date.getFullYear() === today.getFullYear() &&
    date.getMonth() === today.getMonth() &&
    date.getDate() === today.getDate()
  );
}
