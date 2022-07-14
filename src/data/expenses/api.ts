import React, { useEffect, useState } from "react";
import { extractFigureFromString } from "src/lib/helpers";
import { expensesData } from "./expenses";
import { getTotalSumByField } from "./getTotalSumByField";
import { Expense, TotalAmountBy } from "./types";

const delay = (amount: number) =>
  new Promise((resolve) => setTimeout(resolve, amount));

const getExpensesList = async () => {
  /*We are adding delay to simulate actual response from the backend*/
  await delay(1000);
  return expensesData;
};

export function useExpensesList() {
  const [expensesList, setExpensesList] = useState<Expense[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const expensesList = await getExpensesList();
      setExpensesList(
        expensesList.map((datum) => ({
          ...datum,
          /*Extract figure from an amount which contains currency */
          amount: extractFigureFromString(datum.amount),
        }))
      );
      setIsLoading(false);
    })();
  }, []);

  return React.useMemo(() => {
    if (isLoading) return "loading";
    return expensesList;
  }, [expensesList, isLoading]);
}

export function useTotalExpensesBy(groupBy: TotalAmountBy) {
  const [totalAmountBy, setTotalAmountBy] = useState<Expense[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const expensesList = await getExpensesList();
      setTotalAmountBy(
        getTotalSumByField(
          expensesList.map((datum) => ({
            ...datum,
            amount: extractFigureFromString(datum.amount),
          })),
          groupBy
        )
      );
      setIsLoading(false);
    })();
  }, [groupBy]);

  return React.useMemo(() => {
    if (isLoading) return "loading";
    return totalAmountBy;
  }, [totalAmountBy, isLoading]);
}
