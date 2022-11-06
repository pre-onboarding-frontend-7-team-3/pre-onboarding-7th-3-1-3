export const formatDate = (date: string) => {
  const targetDate = new Date(date);
  const year = targetDate.getFullYear();
  const month = targetDate.getMonth() + 1;
  const day = targetDate.getDate();
  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
};

export const formatMoney = (number: number): string => {
  if (number < 1000) {
    return number.toString();
  }
  if (number >= 1000 && number < 100000) {
    return `${Math.trunc(number / 1000)}천`;
  }
  return `${Math.trunc(number / 10000).toLocaleString()}만`;
};

export const formatTrend = (number: number): string => {
  if (number < 1000) {
    return Math.trunc(number).toString();
  }
  if (number >= 1000 && number < 100000) {
    return `${Math.trunc(number).toLocaleString()}`;
  }
  if (number >= 100000 && number < 100000000) {
    return `${Math.trunc(number / 10000).toLocaleString()}만`;
  }
  return `${Math.trunc(number / 100000000).toLocaleString()}억`;
};
