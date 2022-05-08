import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Percard from "./Percard";

const Myitems = () => {
  const [user] = useAuthState(auth);
  // const email = user?.email;
  const [items, setItems] = useState();
  useEffect(() => {
    fetch("https://afternoon-shore-78894.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) =>
          setItems(data.filter((item) => item.email == user?.email))
        //   uporer condition ta true howa sotteo condition er result gulo na dekhiye onno result dekhay keno?
      );
  }, []);
//   console.log(items);
  return (
    <div>
      <Row xs={1} md={2} className="g-4 container-fluid">
      {
              items?.map(perItem => <Percard item={perItem}></Percard>)
          }
      </Row>
          
    </div>
  );
};

export default Myitems;
