export const formatDate = (date: string) => {
  const targetDate = new Date(date);
  const year = targetDate.getFullYear();
  const month = targetDate.getMonth() + 1;
  const day = targetDate.getDate();
  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
};

export const formatMoney = (money: number): string => {
  if (money < 1000) {
    return money.toString();
  }
  if (money >= 1000 && money < 100000) {
    return `${Math.trunc(money / 1000)}천원`;
  }
  return `${Math.trunc(money / 10000).toLocaleString()}만원`;
};
