import { Box } from "@chakra-ui/react";

import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AllRoutes from "./routes/AllRoutes";
import { FloatingWhatsApp } from "react-floating-whatsapp";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Box
        height={"70px"}
        width="130px"
        position="fixed"
        marginTop={"500px"}
        w="100%"
        zIndex="100"
        marginLeft={"1200px"}
      >
        {/* <a
          href="https://wa.me/9871418798"
          rel="noopener norefferer"
          target="_blank"
        >
          {" "} */}

        <FloatingWhatsApp
          phoneNumber="9871418798"
          accountName="Welcome Bharat & Son's"
        />
        {/* </a> */}
      </Box>
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
