export type Expense = {
  departments: string;
  project_name: string;
  amount: number;
  date: string;
  member_name: string;
};

export type TotalAmountBy = keyof Omit<Expense, "amount">;
