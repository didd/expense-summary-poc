import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Expense } from "src/data/expenses/types";
import { Box } from "src/lib/shared-styles";

type Props<T> = {
  columns: GridColDef[];
  data: T[];
};

export function DataTable<T>({ columns, data }: Props<T>) {
  return (
    <Box>
      <DataGrid
        rows={
          data.map((datum, index) => ({
            ...datum,
            id: index,
          })) /*We are adding ID purely to cater for the DataGrid component we are using */
        }
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        disableSelectionOnClick
      />
    </Box>
  );
}
