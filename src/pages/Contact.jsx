import "./Contact.css";
import {
  Box,
  Button,
  Img,
  Input,
  SimpleGrid,
  Text,
  Textarea,
} from "@chakra-ui/react";

import React, { useRef } from "react";
import { useState } from "react";

const Contact = () => {
  const [massage, setMassage] = useState({
    email: "",
    fullName: "",
    massage: "",
    mobile: "",

    id: Date.now(),
  });
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    e.target.reset();
  };
  const handelChange = (e) => {
    let { name, value } = e.target;
    console.log(name, value);
    setMassage({ ...massage, [name]: value });
    console.log(massage);
  };
  const handleSubmit = async () => {
    console.log(massage);
    const response = await fetch(
      "https://mock-server-app-pzg9.onrender.com/message",
      {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        data: JSON.stringify(massage),
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );
    setMassage({
      email: "",
      fullName: "",
      massage: "",
      mobile: "",

      id: Date.now(),
    });
  };

  return (
    <Box
      fontFamily={["Poppins", "sans-serif"]}
      width="100%"
      margin="auto"
      padding="150px 0"
      id="contact"
    >
      <Box width="85%" margin="auto">
        <Box marginBottom="70px" textAlign="center">
          <Text fontSize="30px" fontWeight="bold">
            <h1>Contact Us</h1>
          </Text>
          <Text p="10px">
            Our Products are affordable for all businesses. Quick and easy to
            implement, Its runs stand alone. Giving you maximum return in
            minimum time. Streamlines and automates operational processes and
            provides the timely, accurate and actionable information.
            Easy-to-Use, Robust, Flexible and Feature Rich HR, Payroll Software
            and Employee Self Service with Web / Online and Payroll Software
            Functionalities for the Indian. M-Tech can be used Globally with
            some customizations to meet country specific requirements.
          </Text>
        </Box>

        <Box>
          <SimpleGrid columns={[1, 1, 1, 2]} spacing="50px">
            <Box>
            <Box><b>Technical Support:</b><p>support@bharatsonssystemssolutions.com</p></Box>
            <Box><b>Sales Support:</b><p>sales@bharatsonssystemssolutions.com</p></Box>
            <Box><b>Contact No:</b><p>+91-9818648486</p></Box>
              <Box className="contact_image" pt={["0px", "", "80px"]}>
                <Img
                  src="https://mohit-portfolio.vercel.app/assets/contact.f495edec.svg"
                  alt="Contact"
                />
              </Box>
            </Box>
            <Box>
              <Box width="80%" margin="auto">
                <Box className="contact_icon">
               
                  <SimpleGrid columns={[1, 2, 2, 2]} spacing="20px">
                   
                    <Box className="icon_box">
                      <a
                        href="https://www.linkedin.com/in/bharat-singh-001829258"
                        rel="noopener norefferer"
                        target="_blank"
                      >
                        <Box className="icon" id="icon1">
                          <h3>LinkedIn</h3>
                        </Box>
                      </a>
                    </Box>

                    <Box className="icon_box">
                      <a
                        href="mailto:bharatsonsystemssolutions@gmail.com"
                        rel="noopener norefferer"
                        target="_blank"
                      >
                        <Box className="icon" id="icon3">
                          <h3>Gmail</h3>
                        </Box>
                      </a>
                    </Box>
                    <Box className="icon_box">
                      <a
                        href="https://wa.me/981864846"
                        rel="noopener norefferer"
                        target="_blank"
                      >
                        <Box className="icon" id="icon1">
                          <h3>WhatsApp</h3>
                        </Box>
                      </a>
                    </Box>
                    <Box className="icon_box">
                      <a href="tel:+91-981864846" rel="noopener norefferer" target="_blank">
                        <Box className="icon" id="icon4">
                          <h3>+91-981864846</h3>
                        </Box>
                      </a>
                    </Box>
                  </SimpleGrid>
                </Box>

                <Box textAlign="center">
                  <form ref={form} onSubmit={sendEmail}>
                    <Box>
                      <Input
                        onChange={handelChange}
                        value={massage.fullName}
                        color="#fff"
                        required={true}
                        name="fullName"
                        className="input_tag"
                        type="text"
                        placeholder="Full Name"
                      />
                    </Box>
                    <Box>
                      <Input
                        onChange={handelChange}
                        value={massage.email}
                        color="#fff"
                        required={true}
                        name="email"
                        className="input_tag"
                        type="email"
                        placeholder="Email"
                      />
                    </Box>
                    <Box>
                      <Input
                        onChange={handelChange}
                        value={massage.mobile}
                        color="#fff"
                        name="mobile"
                        required={true}
                        className="input_tag"
                        type="number"
                        placeholder="Mobile Number"
                      />
                    </Box>
                    <Box className="input_message">
                      <Textarea
                        onChange={handelChange}
                        value={massage.massage}
                        color="#fff"
                        mb="15px"
                        required={true}
                        name="massage"
                        height=" 150px"
                        marginTop="20px"
                        borderRadius="10px"
                        paddingLeft="20px"
                        border="1px solid rgb(207, 205, 205)"
                        cursor="text"
                        type="text"
                        placeholder="Your Message"
                      />
                    </Box>
                    <Box>
                      <Button
                        onClick={handleSubmit}
                        type="submit"
                        height="65px"
                        width="30%"
                        backgroundColor="#4ea819"
                        margin-top="20px"
                        color="#fff"
                        fontSize="18px"
                        fontWeight="600"
                        borderRadius="20px"
                        className="input_btn"
                      >
                        Send Message
                      </Button>
                    </Box>
                  </form>
                </Box>
              </Box>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>
      <br />
    </Box>
  );
};

export default Contact;
