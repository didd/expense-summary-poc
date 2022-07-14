import { getTotalSumByField } from "../getTotalSumByField";
import { Expense } from "../types";

describe("getTotalSumByField", () => {
  const data: Expense[] = [
    {
      departments: "IT",
      project_name: "Gaama",
      amount: 1200,
      date: "10/2/2021",
      member_name: "Sam",
    },
    {
      departments: "IT",
      project_name: "Asterin",
      amount: 800,
      date: "3/8/2021",
      member_name: "George",
    },
    {
      departments: "HR",
      project_name: "Mars-NS1",
      amount: 500,
      date: "5/10/2021",
      member_name: "Sam",
    },
  ];
  it("should only show departments field along with the corresponding sum of expense amount", () => {
    expect(getTotalSumByField(data, "departments")).toMatchObject([
      { departments: "IT", amount: 2000 },
      { departments: "HR", amount: 500 },
    ]);
  });
  it("should only show member name field along with the corresponding sum of expense amount", () => {
    expect(getTotalSumByField(data, "member_name")).toMatchObject([
      { member_name: "Sam", amount: 1700 },
      { member_name: "George", amount: 800 },
    ]);
  });
});
