import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import DemoPage from "../pages/DemoPage";
import AboutDeskTime from "../pages/About";
import { Faq } from "../pages/Faq";
import Pricing from "../pages/pricing";
import Software from "../pages/Software";
import Contact from "../pages/Contact";
import SingleDirectory from "../pages/SingleDirectory";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/demo" element={<DemoPage />}></Route>
      <Route path="/pricing" element={<Pricing />}></Route>
      <Route path="/aboutus" element={<AboutDeskTime />}></Route>
      <Route path="/faq" element={<Faq />}></Route>    
      <Route path="/software" element={<Software />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/dir/:_id" element={<SingleDirectory />}></Route>
    </Routes>
  );
}

export default AllRoutes;
