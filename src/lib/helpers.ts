export function extractFigureFromString(money: string) {
  const digitsArr = money.match(/\d/g);
  return digitsArr ? Number(digitsArr.join("")) / 100 : 0;
}

export function extractCurrencyFromString(money: string) {
  const currArr = money.match(/[^\d,.]/g);
  return currArr ? Number(currArr.join("")) : "";
}
