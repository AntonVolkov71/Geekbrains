export function addDays (date: Date, value: number): Date {
  return (new Date(date.getFullYear(), date.getMonth(), date.getDate() + value))
}
