import React from "react";
import Home from "./routes/Home";
import Reservations from "./routes/Reservations";
import About from "./routes/About";
import Login from "./routes/Login";
import Menu from "./routes/Menu";
import OrderOnline from "./routes/OrderOnline";
import Donate from "./routes/Donate";


import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path = "/" element = {<Home />}/>
        <Route path = "/reservations" element = {<Reservations />}/>
        <Route path = "/about" element = {<About />}/>
        <Route path = "/menu" element = {<Menu />}/>
        <Route path = "/order-online" element = {<OrderOnline />}/>
        <Route path = "/login" element = {<Login />}/>
        <Route path = "/donate" element = {<Donate />}/>
      </Routes>
    </>
  );
}

export default App;