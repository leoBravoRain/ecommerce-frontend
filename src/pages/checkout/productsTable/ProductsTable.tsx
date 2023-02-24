import { FC } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import { ProductsTableProps } from "./types";

const ProductsTable: FC<ProductsTableProps> = ({ items }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 350 }} aria-label="simple table">
        {/* header */}
        <TableHead>
          <TableRow>
            <TableCell>Producto</TableCell>
            <TableCell align="right">Precio unitario</TableCell>
            <TableCell align="right">Cantidad</TableCell>
            <TableCell align="right">Total</TableCell>
          </TableRow>
        </TableHead>

        {/* rows */}
        <TableBody>
          {items.map((item) => (
            <TableRow
              key={item._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {item.name}
              </TableCell>
              <TableCell align="right">{item.price}</TableCell>
              <TableCell align="right">{item.quantity}</TableCell>
              <TableCell align="right">{item.price * item.quantity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductsTable;