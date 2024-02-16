/**
 * 日付から年を取り除き, 日月のみの形式で返す
 * @param dateTime 例:"2024-01-27 or 2024-01-27 13:08"
 * @returns 例:"27/01"
 */
export function getMonthAndDate(dateTime: string) {
  const [date] = dateTime.split(" ");
  const [_, month, day] = date.split("-");
  return `${day}/${month}`;
}
