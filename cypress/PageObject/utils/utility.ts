export function incrementDateByDays(days: number): string {
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + days);
  const formattedDate = `"${currentDate.toISOString().substring(0, 10)}"`;
  return formattedDate;
}
