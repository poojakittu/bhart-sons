import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import DemoPage from "../pages/DemoPage";
import AboutDeskTime from "../pages/AboutDeskTime";

import { Faq } from "../pages/Faq";
import Pricing from "../pages/pricing";
import Blog from "../pages/Blog";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Projects from "../pages/Projects";
import DashboardPage from "../pages/DasboardPage";


import Contact from "../pages/Contact";
import SingleDirectory from "../pages/SingleDirectory";
import Hardware from "../pages/Hardware";
import Software from "../pages/Software";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/demo" element={<DemoPage />}></Route>
      <Route path="/pricing" element={<Pricing />}></Route>
      <Route path="/aboutus" element={<AboutDeskTime />}></Route>
      <Route path="/faq" element={<Faq />}></Route>
      <Route path="/blog" element={<Blog />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/dashboard/my" element={<DashboardPage />}></Route>
      <Route path="/dashboard/project" element={<Projects />}></Route>
      <Route path="/software" element={<Software/>}></Route>
      <Route path="/hardware" element={<Hardware/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/dir/:_id" element={<SingleDirectory/>}></Route>
    </Routes>
  );
}

export default AllRoutes;
