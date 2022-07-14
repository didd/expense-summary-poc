import styled from "styled-components";
import Link from "next/link";
import Select from "react-select";
import { useMemo, useState } from "react";
import { TotalAmountBy } from "src/data/expenses/types";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useTotalExpensesBy } from "src/data/expenses/api";
import { Box, Root } from "src/lib/shared-styles";

const totalAmountByKeyToColumnMap: Record<TotalAmountBy, GridColDef> = {
  departments: {
    field: "departments",
    headerName: "Departments",
    flex: 1,
  },
  project_name: {
    field: "project_name",
    headerName: "Project Name",
    flex: 1,
  },
  date: {
    field: "date",
    headerName: "Date",
    type: "date",
    flex: 1,
  },
  member_name: {
    field: "member_name",
    headerName: "Name",
    flex: 1,
  },
};

export function TotalExpenseByPresentation() {
  const [totalExpenseBy, setTotalExpenseBy] =
    useState<TotalAmountBy>("departments");
  const data = useTotalExpensesBy(totalExpenseBy);
  const defaultValue: {
    value: TotalAmountBy;
    label: string;
  } = { value: "departments", label: "Departments" };
  const totalAmountByOptions: {
    value: TotalAmountBy;
    label: string;
  }[] = [
    { value: "departments", label: "Departments" },
    { value: "project_name", label: "Project Name" },
    { value: "date", label: "Date" },
    { value: "member_name", label: "Name" },
  ];

  const totalAmount = useMemo(
    () =>
      data === "loading"
        ? ""
        : data
            .reduce((bucket, curr) => bucket + curr.amount, 0)
            .toLocaleString(),
    [data]
  );

  return (
    <Root>
      <Link href="/">Go back home</Link>
      <Select
        defaultValue={defaultValue}
        onChange={(selectedOption) =>
          setTotalExpenseBy(selectedOption?.value ?? "departments")
        }
        options={totalAmountByOptions}
      />
      {data === "loading" ? (
        <>Loading ...</>
      ) : (
        <>
          <Box>
            <DataGrid
              rows={
                data.map((datum, index) => ({
                  ...datum,
                  id: index,
                })) /*We are adding ID purely to cater for the DataGrid component we are using */
              }
              columns={[
                totalAmountByKeyToColumnMap[totalExpenseBy],
                {
                  field: "amount",
                  headerName: "Amount",
                  flex: 1,
                },
              ]}
              pageSize={10}
              rowsPerPageOptions={[10]}
              disableSelectionOnClick
            />
          </Box>
          <TotalAmount>Total Amount : {totalAmount}</TotalAmount>
        </>
      )}
    </Root>
  );
}

const TotalAmount = styled.div`
  margin-left: auto;
  font-weight: bold;
  margin-right: 25px;
`;
