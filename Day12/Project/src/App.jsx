import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import User from "./pages/User";
import Home from "./pages/Home";
import API from "./API";

function App() {
  return (
    <div>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/user/:id?" element={<User />} />
        </Routes>
      </BrowserRouter> */}

      <API />
      

    </div>
  );
}

export default App;
