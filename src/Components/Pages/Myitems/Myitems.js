import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Percard from "./Percard";

const Myitems = () => {
  const [user] = useAuthState(auth);
  const [items, setItems] = useState();
  useEffect(() => {
    fetch("https://afternoon-shore-78894.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) =>
          setItems(data.filter((item) => item.email == user?.email))
        //   uporer condition ta true howa sotteo condition er result gulo na dekhiye onno result dekhay keno?
      );
  }, []);
  const handleItemDelete = (id) => {
    const confirm = window.confirm("Do you want to delete this item? This action can't be undone")
    if (confirm == true) {
      fetch(`https://afternoon-shore-78894.herokuapp.com/products/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        const restItems = items.filter(item => item._id !== id);
        setItems(restItems);
      })
    }
    
  }
  return (
    <div style={{ minHeight: '100vh' }}>
      <h1 className="text-green text-center mb-5">Products added by user</h1>
      <Row xs={1} md={2} className="g-4 container-fluid">
      {
              items?.map(perItem => <Percard key={perItem._id} item={perItem} func={handleItemDelete}></Percard>)
          }
      </Row>
          
    </div>
  );
};

export default Myitems;
