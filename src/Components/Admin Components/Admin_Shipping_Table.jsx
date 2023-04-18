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

const AdminShippingTable = () => {
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
            <MyTableCell>From</MyTableCell>
            <MyTableCell>Destination</MyTableCell>
            <MyTableCell>Amount</MyTableCell>
            <MyTableCell>Time</MyTableCell>
            <MyTableCell>Weight</MyTableCell>
            <MyTableCell>Size</MyTableCell>
            <MyTableCell>Courier</MyTableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Rawalpindi</TableCell>
            <TableCell>Melbourne</TableCell>
            <TableCell>$200</TableCell>
            <TableCell>12,july,2022</TableCell>
            <TableCell>2kg</TableCell>
            <TableCell>1ft x 2 ft</TableCell>
            <TableCell>TCS</TableCell>
            <TableCell>
              <Button variant="outlined" color="error">
                Remove
              </Button>
            </TableCell>
            <TableCell>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#8080D7",
                  "&:hover": { backgroundColor: "#8080D7" },
                }}
              >
                Edit
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Rawalpindi</TableCell>
            <TableCell>Melbourne</TableCell>
            <TableCell>$200</TableCell>
            <TableCell>12,july,2022</TableCell>
            <TableCell>2kg</TableCell>
            <TableCell>1ft x 2 ft</TableCell>
            <TableCell>TCS</TableCell>
            <TableCell>
              <Button variant="outlined" color="error">
                Remove
              </Button>
            </TableCell>
            <TableCell>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#8080D7",
                  "&:hover": { backgroundColor: "#8080D7" },
                }}
              >
                Edit
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Rawalpindi</TableCell>
            <TableCell>Melbourne</TableCell>
            <TableCell>$200</TableCell>
            <TableCell>12,july,2022</TableCell>
            <TableCell>2kg</TableCell>
            <TableCell>1ft x 2 ft</TableCell>
            <TableCell>TCS</TableCell>
            <TableCell>
              <Button variant="outlined" color="error">
                Remove
              </Button>
            </TableCell>
            <TableCell>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#8080D7",
                  "&:hover": { backgroundColor: "#8080D7" },
                }}
              >
                Edit
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Rawalpindi</TableCell>
            <TableCell>Melbourne</TableCell>
            <TableCell>$200</TableCell>
            <TableCell>12,july,2022</TableCell>
            <TableCell>2kg</TableCell>
            <TableCell>1ft x 2 ft</TableCell>
            <TableCell>TCS</TableCell>
            <TableCell>
              <Button variant="outlined" color="error">
                Remove
              </Button>
            </TableCell>
            <TableCell>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#8080D7",
                  "&:hover": { backgroundColor: "#8080D7" },
                }}
              >
                Edit
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Rawalpindi</TableCell>
            <TableCell>Melbourne</TableCell>
            <TableCell>$200</TableCell>
            <TableCell>12,july,2022</TableCell>
            <TableCell>2kg</TableCell>
            <TableCell>1ft x 2 ft</TableCell>
            <TableCell>TCS</TableCell>
            <TableCell>
              <Button variant="outlined" color="error">
                Remove
              </Button>
            </TableCell>
            <TableCell>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#8080D7",
                  "&:hover": { backgroundColor: "#8080D7" },
                }}
              >
                Edit
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AdminShippingTable;
