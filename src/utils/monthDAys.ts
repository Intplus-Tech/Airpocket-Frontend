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
    daysOfMonth.push(String(i)); // Convert each day number to a string
  }

  return daysOfMonth;
}

// Example usage:
export const months = [
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

export function generateYears(): string[] {
  const currentYear = new Date().getFullYear();
  const startYear = 1960;
  const years: string[] = [];

  for (let year = startYear; year <= currentYear; year++) {
    years.push(year.toString());
  }

  return years;
}
