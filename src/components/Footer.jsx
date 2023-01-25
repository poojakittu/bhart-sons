import {
  Flex,
  Box,
  Image,
  Text,
  List,
  ListItem,
  Input,
  Button,
  Grid,
} from "@chakra-ui/react";
import {
  GrFacebook,
  GrLinkedin,
  GrSkype,
  GrTwitter,
  GrYoutube,
} from "react-icons/gr";
import { ImWhatsapp } from "react-icons/im";

function Footer() {
  return (
    <Box pt="40px" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px">
      <Grid
        p="10px 50px"
        rowGap="20px"
        templateColumns={[
          "repeat(1, auto)",
          "repeat(2, 1fr)",
          "repeat(3, 1fr)",
          "repeat(5, 1fr)",
        ]}
      >
        <List textAlign={["center", "left", "left", "left"]}>
          <ListItem className="footerItems firsti">Company</ListItem>
          <ListItem className="footerItems">Home</ListItem>
          <ListItem className="footerItems">Pricing</ListItem>
          <ListItem className="footerItems">Softwares</ListItem>
          <ListItem className="footerItems">Hardwares</ListItem>
          <ListItem className="footerItems">Faq</ListItem>
          <ListItem className="footerItems">Contact Us</ListItem>
          <ListItem className="footerItems">About Us</ListItem>
          
        </List>
                      

        <List textAlign={["center", "left", "left", "left"]}>
          <ListItem className="footerItems firsti">Sofwares</ListItem>
          <ListItem className="footerItems">Access Control</ListItem>
          <ListItem className="footerItems">Biometic Attendance</ListItem>
          <ListItem className="footerItems">
          Payroll-Software
          </ListItem>
          <ListItem className="footerItems">Visual ERP</ListItem>
          <ListItem className="footerItems">Website Design</ListItem>
          <ListItem className="footerItems">Cloud & Storage</ListItem>
          <ListItem className="footerItems">Dedicate Server</ListItem>
          <ListItem className="footerItems">Email Solutions</ListItem>
          <ListItem className="footerItems">Employee Monitoring</ListItem>
          <ListItem className="footerItems">Secure Socket Layer</ListItem>
          <ListItem className="footerItems">Software Licencing</ListItem>
          <ListItem className="footerItems">Web Hosting</ListItem>
        </List>
       
        <List textAlign={["center", "left", "left", "left"]}>
          <ListItem className="footerItems firsti">Hardwares</ListItem>
          <ListItem className="footerItems">Network Security</ListItem>
          <ListItem className="footerItems">Rental</ListItem>
          <ListItem className="footerItems">Servers</ListItem>
          <ListItem className="footerItems">Technical Support</ListItem>
          <ListItem className="footerItems">Asana</ListItem>
          
        </List>

        <List textAlign={["center", "left", "left", "left"]}>
          <ListItem className="footerItems firsti">Features</ListItem>
          <ListItem className="footerItems">Easy to use</ListItem>
          <ListItem className="footerItems">High Performance</ListItem>
          <ListItem className="footerItems">Low Risk</ListItem>
          <ListItem className="footerItems">Feature request</ListItem>
        </List>

        <List textAlign={["center", "left", "left", "left"]}>
          <ListItem className="footerItems firsti">Help center</ListItem>
          <ListItem className="footerItems">Contact us</ListItem>
          <ListItem className="footerItems">Schedule a call</ListItem>
          <ListItem className="footerItems">Send us an e-mail</ListItem>
          <ListItem className="footerItems">
            Request In-person training
          </ListItem>
          <ListItem className="footerItems">Open chat</ListItem>
          <ListItem className="footerItems firsti">Phone support</ListItem>
          <ListItem className="footerItems">+1 (315) 6365354</ListItem>
          <ListItem className="footerItems">MON-FRI 9:00-22:00 EET</ListItem>
        </List>
      </Grid>

      <Box mt="40px" bg="#EBECEC" p="20px 0">
        <Box w="79%" m="auto">
          <Flex justifyContent="space-between" alignItems="center" mb="20px">
            <Image
             
              h="80px"
              mixBlendMode="multiply"
              src={require("../assets/logo.jpg")}
              alt="AT Logo"
            />
            <Flex>
              <Image
                w="121px"
                h="36px"
                src="https://desktime.com/assets/design/dist/assets/Google-Play.svg"
              ></Image>
              <Image
                w="121px"
                h="36px"
                src="https://desktime.com/assets/design/dist/assets/App-Store.svg"
              ></Image>
            </Flex>
          </Flex>

          <Flex
            gap={["20px", "20px", "20px", "10px"]}
            justifyContent="space-between"
            flexDirection={["column", "column", "column", "row"]}
          >
            <Flex
              justifyContent={["flex-end", "flex-end", "flex-end", "center"]}
              alignItems="center"
              gap="20px"
            >
              <GrFacebook className="ficons" />
              <GrTwitter className="ficons" />
              <GrYoutube className="ficons" />
              <GrLinkedin className="ficons" />
              <GrSkype className="ficons" />
              <ImWhatsapp className="ficons" />
            </Flex>
           
          </Flex>
        </Box>
      </Box>
      <Box bg="#D6D8D9" p="20px 0">
        <Flex
          w="79%"
          m="auto"
          justifyContent="space-between"
          alignItems="center"
        >
          
          <Image src="https://desktime.com/assets/design/dist/assets/dg-logo-group.svg" />
        </Flex>
      </Box>
    </Box>
  );
}

export default Footer;
