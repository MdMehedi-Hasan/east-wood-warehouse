import "./App.css";
import Header from "./Components/Shared/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Components/Shared/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/service"></Route>
        <Route path="/about"></Route>
        <Route path="/contact"></Route>
        <Route path="/login"></Route>
      </Routes>

      {/* <ul>
        <h1>Client side</h1>
        <li>Bootstrap installed</li>
        <li>Router installed</li>
        <li>Firese not installed</li>
      </ul>
      <ul>
        <h1>Server side</h1>
        <li>Express installed || setup done</li>
        <li>Doteenv installed || need to setup</li>
        <li>Cors installed || setup done</li>
        <li>MongoDB installed || need to setup</li>
      </ul> */}
      <Footer></Footer>
    </div>
  );
}

export default App;
