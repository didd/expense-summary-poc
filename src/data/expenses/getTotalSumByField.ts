import { Expense, TotalAmountBy } from "./types";

export function getTotalSumByField(data: Expense[], field: TotalAmountBy) {
  return Object.values(
    data.reduce((bucket, current) => {
      const currentFieldValue = current[field];
      /*Check if current field value exists in a bucket, and if it doesn't initialize it*/
      if (!bucket[currentFieldValue]) {
        bucket[currentFieldValue] = {
          ...bucket[currentFieldValue],
          [field]: currentFieldValue,
          amount: 0,
        };
      }
      /*Sum up the amount of current field value in a bucket*/
      bucket[currentFieldValue].amount += current.amount;
      return bucket;
    }, {} as { [key in any]: { [key in TotalAmountBy | "amount"]: any } })
  );
}
