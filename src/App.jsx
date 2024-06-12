// import React from 'react';

import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Navbar from "./component/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="*" element={<Home></Home>} />
        <Route path="/cart" element={<Cart></Cart>} />
      </Routes>
    </div>
  );
};

export default App;