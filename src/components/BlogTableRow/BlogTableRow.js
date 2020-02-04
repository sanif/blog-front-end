import React from "react";
import TableRow from "@material-ui/core/TableRow";
import _ from "lodash";
import TableCell from "@material-ui/core/TableCell";
import { TableBody } from "@material-ui/core";
const BlogTableRow = ({ items, onRowClick }) => {
  return (
    <TableBody>
      {_.isArray(items) &&
        items.map((row, index) => {
          return (
            <TableRow
              hover
              role="checkbox"
              key={row.id}
              onClick={() => {
                onRowClick && onRowClick(row.id);
              }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.userId}</TableCell>
              <TableCell>{row.title}</TableCell>
            </TableRow>
          );
        })}
    </TableBody>
  );
};

export default BlogTableRow;
