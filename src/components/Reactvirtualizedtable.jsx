import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TableVirtuoso } from "react-virtuoso";
// import Chance from "chance";
import { dataProvider } from "./Detail";
import { Data } from "../utilities/Data";

// const chance = new Chance(42);

// function createData(id) {
//   return {
//     id,
//     principle: chance.first(),
//     lastName: chance.last(),
//     interest: chance.age(),
//     remaining: chance.phone(),
//     // state: chance.state({ full: true }),
//   };
// }

const columns = [
  {
    label: "Month",
    dataKey: "id",
    minWidth: 170,
    align: "right",
  },
  {
    label: "Principal",
    dataKey: "principle",
    minWidth: 170,
    align: "right",
  },
  {
    minWidth: 170,
    align: "right",
    label: "Interest",
    dataKey: "interest",
    numeric: true,
  },
  {
    minWidth: 170,
    align: "right",
    label: "Remaining Balance",
    dataKey: "remaining",
  },
];

const VirtuosoTableComponents = {
  Scroller: React.forwardRef((props, ref) => (
    <TableContainer component={Paper} {...props} ref={ref} />
  )),
  Table: (props) => (
    <Table
      {...props}
      sx={{ borderCollapse: "separate", tableLayout: "fixed" }}
    />
  ),
  TableHead: React.forwardRef((props, ref) => (
    <TableHead {...props} ref={ref} />
  )),
  TableRow,
  TableBody: React.forwardRef((props, ref) => (
    <TableBody {...props} ref={ref} />
  )),
};

function fixedHeaderContent() {
  return (
    <TableRow>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          variant="head"
          align={column.numeric || false ? "right" : "left"}
          style={{ width: column.minWidth }}
          sx={{
            backgroundColor: "background.paper",
            textAlign: "center",
          }}
        >
          {column.label}
        </TableCell>
      ))}
    </TableRow>
  );
}

function rowContent(_index, row) {
  return (
    <React.Fragment>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          align={column.numeric || false ? "right" : "left"}
          sx={{ textAlign: "center" }}
        >
          {row[column.dataKey]}
        </TableCell>
      ))}
    </React.Fragment>
  );
}

export default function Reactvirtualizedtable() {
  let { loanAmount, interest, term } = React.useContext(dataProvider);
  //   const rows = Array.from({ length: term * 12 }, (_, index) =>
  //     createData(index + 1)
  //   );
  let rows = Data(loanAmount, interest, term);
  //   console.log(rows);
  return (
    <Paper style={{ height: 400, width: "100%" }}>
      <TableVirtuoso
        data={rows}
        components={VirtuosoTableComponents}
        fixedHeaderContent={fixedHeaderContent}
        itemContent={rowContent}
      />
    </Paper>
  );
}
