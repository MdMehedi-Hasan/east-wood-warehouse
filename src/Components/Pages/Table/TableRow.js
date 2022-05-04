import React, { useEffect } from "react";

const TableRow = (props) => {
  const { image, name, price } = props.details;
  useEffect(() => {
    fetch('http://localhost:5000/remove',
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
          
        },})
  },[])
  return (
      <tr>
        <td className="text-center"><img width={'64px'} height={'32px'} src={image} alt="" /></td>
      <td>{name}</td>
      <td>{price}</td>
        <td>Table cell</td>
        <td className="text-center"><button className=" border border-0 bg-transparent">Delete</button></td>
      </tr>
  );
};

export default TableRow;
