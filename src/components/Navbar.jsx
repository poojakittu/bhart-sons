import { Flex, Box, Link, Image } from "@chakra-ui/react";

import styles from "./Header.module.css";

import { Link as RouterLink } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";
import { useSelector } from "react-redux";

function Navbar() {
  return (
    <Box
      position="fixed"
      borderTop="4px solid #e8c615"
      boxShadow="0 0 12px rgb(0 0 0 / 12%)"
      w="100%"
      zIndex="10"
      bgColor="white"
    >
      <Flex
        h="82.6px"
        alignItems="center"
        justifyContent="space-around"
        fontWeight="500"
        fontSize="17px"
        zIndex="100"
      >
        <Link as={RouterLink} to="/" _hover={{ textDecoration: "none" }}>
          <Image h="80px" src={require("../assets/logo.jpg")} />
        </Link>

        <BurgerMenu />

        <Flex
          justifyContent="center"
          alignItems="center"
          gap={["10px", "10px", "10px", "20px"]}
          zIndex="100"
          display={["none", "none", "flex", "flex"]}
        >
           <div className={styles.makeup}>
            <Link
              className="un"
              _hover={{ textDecoration: "none" }}
              as={RouterLink}
              to=""
            >
              Cloud Solutions
            </Link>
            <div className={styles.dropdown1}>
              <Link to="/vps" as={RouterLink}>
                Cloud VPS
              </Link>
              <Link to="/dedicate" as={RouterLink}>
                Dedicate Server
              </Link>
              <Link to="/gpu" as={RouterLink}>
                GPU Server
              </Link>
              <Link to="/backup" as={RouterLink}>
                Backup And Storage
              </Link>
              <Link to="/email" as={RouterLink}>
                Premium Email Hosting
              </Link>
              <Link to="/employee" as={RouterLink}>
                Employee Monitoring
              </Link>
              <Link to="/socket" as={RouterLink}>
                Secure Socket Layer{" "}
              </Link>
              <Link to="/licence" as={RouterLink}>
                Software Licencing
              </Link>
              <Link to="/hosting" as={RouterLink}>
                Web Hosting
              </Link>
            </div>
          </div>
         

          {/* <Link
            className="un"
            _hover={{ textDecoration: "none" }}
            as={RouterLink}
            to="/pricing"
          >
            Cloud Pricing
          </Link> */}

          <div className={styles.makeup}>
            <Link
              className="un"
              _hover={{ textDecoration: "none" }}
              as={RouterLink}
              to="/software"
            >
              Sofwares
            </Link>

            <div className={styles.dropdown1}>
              <Link to="/software" as={RouterLink}>
                Access Control{" "}
              </Link>
              <Link to="/software" as={RouterLink}>
                Biometic Attendance
              </Link>
              <Link to="/software" as={RouterLink}>
                Payroll-Software
              </Link>
              <Link to="/software" as={RouterLink}>
                Visual ERP{" "}
              </Link>
              <Link to="/software" as={RouterLink}>
                Website Design
              </Link>
              {/* <Link to="/software" as={RouterLink}>
                Cloud & Storage
              </Link> */}
              {/* <Link to="/software" as={RouterLink}>
                Dedicate Server{" "}
              </Link> */}
              {/* <Link to="/software" as={RouterLink}>
                Email Solutions
              </Link> */}
              
            </div>
          </div>
          <div className={styles.makeup}>
            <Link
              className="un"
              _hover={{ textDecoration: "none" }}
              as={RouterLink}
              to="/hardware"
            >
              Hardwares
            </Link>
            <div className={styles.dropdown1}>
              <Link to="/sub" as={RouterLink}>
                It Equipment
              </Link>
              <Link to="/hardware" as={RouterLink}>
                Network Security
              </Link>
              <Link to="/hardware" as={RouterLink}>
                Rental
              </Link>
              {/* <Link to="/hardware" as={RouterLink}>
                Servers
              </Link>
              <Link to="/hardware" as={RouterLink}>
                Technical Support
              </Link> */}
            </div>
          </div>

         

          <Link
            as={RouterLink}
            to="/aboutus"
            className="un"
            _hover={{ textDecoration: "none" }}
          >
            About us
          </Link>
          <Link
            as={RouterLink}
            to="/contact"
            className="un"
            _hover={{ textDecoration: "none" }}
          >
            Contact us
          </Link>
          <Link
            as={RouterLink}
            to="/demo"
            className="un"
            _hover={{ textDecoration: "none" }}
          >
           Book a Demo
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Navbar;
