import {
  Button,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

const AdminPaymentTable = () => {
  const MyTableCell = styled(TableCell)({
    foneweight: "bold",
    fontSize: "16px",
  });
  return (
    <TableContainer>
      <Table
        sx={{ border: 20, borderColor: "#D1D1D1" }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <MyTableCell>Seller Name</MyTableCell>
            <MyTableCell>Iban/Wallet</MyTableCell>
            <MyTableCell>Amount</MyTableCell>
            <MyTableCell>Date of Purchase</MyTableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>John</TableCell>
            <TableCell>95783920-211-0</TableCell>
            <TableCell>$200</TableCell>
            <TableCell>12,july,2022</TableCell>
            <TableCell>
              <Button variant="outlined" color="warning">
                Pending
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>John</TableCell>
            <TableCell>95783920-211-0</TableCell>
            <TableCell>$200</TableCell>
            <TableCell>12,july,2022</TableCell>
            <TableCell>
              <Button variant="outlined" color="warning">
                Pending
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>John</TableCell>
            <TableCell>95783920-211-0</TableCell>
            <TableCell>$200</TableCell>
            <TableCell>12,july,2022</TableCell>
            <TableCell>
              <Button variant="outlined" color="warning">
                Pending
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>John</TableCell>
            <TableCell>95783920-211-0</TableCell>
            <TableCell>$200</TableCell>
            <TableCell>12,july,2022</TableCell>
            <TableCell>
              <Button variant="outlined" color="warning">
                Pending
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>John</TableCell>
            <TableCell>95783920-211-0</TableCell>
            <TableCell>$200</TableCell>
            <TableCell>12,july,2022</TableCell>
            <TableCell>
              <Button variant="outlined" color="warning">
                Pending
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AdminPaymentTable;
