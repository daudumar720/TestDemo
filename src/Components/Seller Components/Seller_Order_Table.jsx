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

const SellerOrderTable = () => {
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
            <MyTableCell>Product Name</MyTableCell>
            <MyTableCell>Product Id</MyTableCell>
            <MyTableCell>Product Price</MyTableCell>
            <MyTableCell>End Time</MyTableCell>
            <TableCell>View Details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>NFT Art</TableCell>
            <TableCell>102</TableCell>
            <TableCell>$200</TableCell>
            <TableCell>12 july, 2022</TableCell>
            <TableCell>
              <Button
                variant="outlined"
                sx={{ color: "#8080D7", "&:hover": { color: "#8080D7" } }}
              >
                Details
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SellerOrderTable;
