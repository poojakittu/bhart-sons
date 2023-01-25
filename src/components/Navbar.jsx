import {
  Flex,
  Box,
  Link,
  
  Image,
  
} from "@chakra-ui/react";

import styles from './Header.module.css'

import { Link as RouterLink } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";
import { useSelector } from "react-redux";


function Navbar() {
  const {isAuth} = useSelector((store) => store.auth);

  return (
    <Box
      position="fixed"
      borderTop="4px solid #4ea819"
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
          <Image  h="80px" src={require("../assets/logo.jpg")} />
        </Link>

        <BurgerMenu />

        <Flex
          justifyContent="center"
          alignItems="center"
          gap={["10px", "10px", "10px", "20px"]}
          zIndex="100"
          display={["none", "none", "flex", "flex"]}
        >
                  <Link
                    as={RouterLink}
                    to="/demo"
                    className="un"
                    _hover={{ textDecoration: "none" }}
                  >
                    Demo
                  </Link>

         
           <Link
            className="un"
            _hover={{ textDecoration: "none" }}
            as={RouterLink}
            to="/pricing"
          >
            Cloud Pricing
          </Link>

          <div className={styles.makeup} >
          <Link
            className="un"
            _hover={{ textDecoration: "none" }}
            as={RouterLink}
            to="/pricing"
          >
           Sofware
          </Link>
         
          
          <div className={styles.dropdown1} >
                        <Link to="/lips">LIPS</Link>
                        <Link to="/face">FACE</Link>
                        <Link to="/eyes">EYES</Link>
          </div>
          </div>
          <div className={styles.makeup} >
          <Link
            className="un"
            _hover={{ textDecoration: "none" }}
            as={RouterLink}
            to="/pricing"
          >
            Hardware
          </Link>
          <div className={styles.dropdown1} >
                        <Link to="/lips">LIPS</Link>
                        <Link to="/face">FACE</Link>
                        <Link to="/eyes">EYES</Link>
          </div>
          </div>
         

          <Link
            as={RouterLink}
            to="/faq"
            className="un"
            _hover={{ textDecoration: "none" }}
          >
            FAQ
          </Link>

          <Link
            as={RouterLink}
            to="/blog"
            className="un"
            _hover={{ textDecoration: "none" }}
          >
            Blog
          </Link>
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
            to="/aboutus"
            className="un"
            _hover={{ textDecoration: "none" }}
          >
            Contact us
          </Link>

        </Flex>
      </Flex>
    </Box>
  );
}

export default Navbar;
