import React from "react";
import "./Cell.css";

const Cell = ({ content, header, fixed, height }) => {
  const fixedClass = fixed ? " Cell-fixed" : "";
  const headerClass = header ? " Cell-header" : "";

  const style = height ? { height: `${height}px` } : undefined;

  const className = `Cell${fixedClass}${headerClass}`;

  const cellMarkup = header ? (
    <th className={className} style={style}>
      {content}
    </th>
  ) : (
    <td className={className} style={style}>
      {content}
    </td>
  );

  return cellMarkup;
};

export default Cell;
