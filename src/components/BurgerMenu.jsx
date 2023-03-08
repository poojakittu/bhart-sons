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
            justifyContent="center"
            alignItems="center"
            gap="20px"
            zIndex="100"
            fontSize="22px"
            fontWeight="bold"
          >
            <Link
              as={RouterLink}
              to="/demo"
              className="un"
              _hover={{ textDecoration: "none" }}
            >
              Demo
            </Link>
            <Divider orientation="horizontal" />
            <Link
              className="un"
              _hover={{ textDecoration: "none" }}
              as={RouterLink}
              to="/pricing"
            >
              Pricing
            </Link>
            <Divider orientation="horizontal" />

            <Link
              as={RouterLink}
              to="/aboutus"
              className="un"
              _hover={{ textDecoration: "none" }}
            >
              About us
            </Link>
            <Divider orientation="horizontal" />
            <Link
              as={RouterLink}
              to="/faq"
              className="un"
              _hover={{ textDecoration: "none" }}
            >
              FAQ
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
