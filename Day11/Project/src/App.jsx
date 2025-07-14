import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import Home from "./Home";
// import About from "./About";
// import Contact from "./Contact";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Profile from "./pages/Profile";

import Nav from "./Nav";
import NotFound from "./pages/NotFound";
import College from "./pages/College";
import Student from "./pages/Student";
import Colleges from "./pages/Colleges";
import Details from "./pages/Details";

const App = () => {
  return (
    <div>
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path="*" element={<h2>Page Not Found</h2>} />
        </Routes>
      </BrowserRouter> */}

      <BrowserRouter>
        <Routes>
          <Route path="" element={<Nav />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/user">
              <Route path="/user/Profile" element={<Profile />} />
            </Route>
          </Route>

          <Route path="/college" element={<College />}>
            <Route index element={<Student />} />
            <Route path="/college/colleges" element={<Colleges />} />
            <Route path="/college/details" element={<Details />} />
          </Route>

          <Route path="*" element={<NotFound />} />
          {/* agar apko koi galat url dale fir bhi home page dikhana hai  */}
          {/* <Route path="./*" element={<Navigate to={<Home/>}/>} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
