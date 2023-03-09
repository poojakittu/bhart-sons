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
import { useToast } from '@chakra-ui/react'
import emailjs from 'emailjs-com';
import React, { useRef } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone:"",
    query: "",
  
      date: Date.now()
  });
  const toast = useToast()
  const navigate = useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs.sendForm('service_nfaguyy', 'template_v1u5czp', event.target, 'q_Hj2qb4KkIpVEebd')
    .then((result) => {
     
      console.log(result)
     
        
    }, (error) => {
        console.log(error.text);
    });
   
    axios.post('https://sparkling-blue-drill.cyclic.app/Contact/add', formData)
      .then(response => {
        console.log(response);
        toast({
          title: 'Message Sent',
          description: "Your Query Has Been Recorded Succesfully",
          status: 'success',
          duration: 4000,
          isClosable: true,
        })
        setTimeout(()=>{
          navigate("/")

        },2000)
      })
      .catch(error => {
        console.log(error);
        toast({
          title: 'Something Went Wrong',
          description: "Error",
          status: 'Error',
          duration: 4000,
          isClosable: true,
        })
      });
      
      setTimeout(() => {
        event.target.reset();
      }, 3000);
  }

  const handleChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value });
  }
    

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
            Functionalities for the Indian. Bharat & Son's can be used Globally with
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
                        href="mailto:sales@bharatsonssystemssolutions.com"
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
                  <form  name="contact"
            onSubmit={handleSubmit}>
                    <Box>
                      <Input
                       
                       name="name" value={formData.name} onChange={handleChange}
                        color="black"
                        required={true}
                       
                        className="input_tag"
                        type="text"
                        placeholder="Full Name"
                      />
                    </Box>
                    <Box>
                      <Input
                       name="email" value={formData.email} onChange={handleChange}
                        
                        color="black"
                        required={true}
                        
                        className="input_tag"
                        type="email"
                        placeholder="Email"
                      />
                    </Box>
                    <Box>
                      <Input
                       
                       name="phone" value={formData.phone} onChange={handleChange}
                        color="black"
                        
                        required={true}
                        className="input_tag"
                        type="number"
                        placeholder="Mobile Number"
                      />
                    </Box>
                    <Box className="input_message">
                      <Textarea
                       
                       name="query" value={formData.query} onChange={handleChange}
                        color="black"
                        mb="15px"
                        required={true}
                       
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
                       
                        type="submit"
                        height="65px"
                        width="50%"
                        padding="0px 20px"
                        backgroundColor="#e8c615"
                        margin-top="20px"
                        color="black"
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
