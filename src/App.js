import "./App.css";
import Header from "./Components/Shared/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Components/Shared/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import Login from "./Components/Pages/Login/Login";
import Register from "./Components/Pages/Login/Register";
import Contact from "./Components/Pages/Contact/Contact";
import NotFound from "./Components/Pages/NotFound/NotFound";
import Blogs from "./Components/Pages/Blogs/Blogs";
import Manage from "./Components/Pages/Manage/Manage";
import Add from "./Components/Pages/Add/Add";
import Myitems from "./Components/Pages/Myitems/Myitems";
import SingleInventory from "./Components/Pages/SingleInventory/SingleInventory";
import RequireAuth from "./Components/RequireAuth";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/products/:id"
          element={
            <RequireAuth>
              <SingleInventory></SingleInventory>
            </RequireAuth>}
        ></Route>
        <Route path="/manage" element={<Manage></Manage>}></Route>
        <Route path="/add" element={<Add></Add>}></Route>
        <Route path="/myitems" element={<Myitems></Myitems>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
