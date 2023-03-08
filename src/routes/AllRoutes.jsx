import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import DemoPage from "../pages/DemoPage";
import AboutDeskTime from "../pages/About";
import Pricing from "../pages/pricing";
import Software from "../pages/Software";
import Contact from "../pages/Contact";
import SingleDirectory from "../pages/SingleDirectory";
import Hardware from "../pages/Hardware";
import Vps from "../pages/Vps";

import Dedicate from "../pages/Dedicate";
import Gpu from "../pages/Gpu";
import Backup from "../pages/Backup";
import Employee from "../pages/Employee";
import Email from "../pages/Email";
import Socket from "../pages/Socket";
import Hosting from "../pages/Hosting";
import SoftwareLicence from "../pages/SoftwareLicencing";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/demo" element={<DemoPage />}></Route>
      <Route path="/pricing" element={<Pricing />}></Route>
      <Route path="/aboutus" element={<AboutDeskTime />}></Route>
      <Route path="/vps" element={<Vps />}></Route>
      <Route path="/software" element={<Software />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/dir/:_id" element={<SingleDirectory />}></Route>
      <Route path="/hardware" element={<Hardware />}></Route>
      <Route path="/vps" element={<Vps />}></Route>
      <Route path="/dedicate" element={<Dedicate />}></Route>
      <Route path="/gpu" element={<Gpu />}></Route>
      <Route path="/backup" element={<Backup />}></Route>
      <Route path="/employee" element={<Employee />}></Route>
      <Route path="/email" element={<Email />}></Route>
      <Route path="/socket" element={<Socket />}></Route>
      <Route path="/hosting" element={<Hosting />}></Route>
      <Route path="/licence" element={<SoftwareLicence />}></Route>
    </Routes>
  );
}

export default AllRoutes;
