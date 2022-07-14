import Link from "next/link";
import { GridColDef } from "@mui/x-data-grid";
import { useExpensesList } from "src/data/expenses/api";
import { Root } from "src/lib/shared-styles";
import { DataTable } from "src/lib/components/DataTable";

export function ExpenseList() {
  const data = useExpensesList();
  const columns: GridColDef[] = [
    {
      field: "departments",
      headerName: "Departments",
      flex: 1,
    },
    {
      field: "project_name",
      headerName: "Project Name",
      flex: 1,
    },
    {
      field: "amount",
      headerName: "Amount",
      flex: 1,
    },
    {
      field: "date",
      headerName: "Date",
      type: "date",
      flex: 1,
    },
    {
      field: "member_name",
      headerName: "Name",
      flex: 1,
    },
  ];


  return (
    <Root>
      <Link href="/total-expense-by">Total Expense</Link>
      {data === "loading" ? (
        <>Loading ...</>
      ) : (
        <DataTable columns={columns} data={data} />
      )}
    </Root>
  );
}
