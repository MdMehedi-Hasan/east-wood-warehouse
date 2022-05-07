import React from "react";

const TableRow = (props) => {
  const { image, name, price, _id } = props.details;
  return (
      <tr>
        <td className="text-center">
          <img width={"64px"} height={"64px"} src={image} alt="" />
        </td>
        <td>{name}</td>
        <td>${price}</td>
        <td>Table cell</td>
        <td className="text-center">
          <button
            className=" border border-0 bg-transparent"
            onClick={() => props.func(_id)}
          >
            Delete
          </button>
        </td>
      </tr>
  );
};

export default TableRow;
