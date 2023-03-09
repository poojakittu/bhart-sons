import {
  Link,
  Box,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Divider,
  Image,
  Flex,
} from "@chakra-ui/react";

import styles from "./Header.module.css";

import { GiHamburgerMenu } from "react-icons/gi";

import { Link as RouterLink } from "react-router-dom";

import { useRef } from "react";
import { useSelector } from "react-redux";

const BurgerMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <Box display={["flex", "flex", "none", "none"]}>
      <Box onClick={onOpen} ref={btnRef}>
        <GiHamburgerMenu className="burger" />
      </Box>
      <Drawer
        isOpen={isOpen}
        size="lg"
        placement="top"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <Link as={RouterLink} to="/home" _hover={{ textDecoration: "none" }}>
            <Image w="70px" h="50px" src={require("../assets/logo.jpg")} />
          </Link>

          <Flex
            flexDirection="column"
            justifyContent="left"
            alignItems="left"
            gap="20px"
            zIndex="100"
            fontSize="22px"
            fontWeight="bold"
            margin={"left"}
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
              Softwares
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
              <Link to="/hardware" as={RouterLink}>
                It Equipment
              </Link>
              <Link to="/network" as={RouterLink}>
                Network Security
              </Link>
              <Link to="/rental" as={RouterLink}>
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
            <Divider orientation="horizontal" />

            <Divider orientation="horizontal" />
          </Flex>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default BurgerMenu;
