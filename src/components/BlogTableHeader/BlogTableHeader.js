import React from "react";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
const BlogTableHeader = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Id</TableCell>
        <TableCell>User Id</TableCell>
        <TableCell>Title</TableCell>
      </TableRow>
    </TableHead>
  );
};

export default BlogTableHeader;
