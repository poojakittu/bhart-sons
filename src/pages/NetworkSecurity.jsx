import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Directory.css";
import axios from "axios";

import { Link } from 'react-router-dom'

export default function NetworkSecurity() {
  const [page, setPage] = useState(1);
 
  const [text, setText] = useState("");
  const [que, setQue] = useState(text);

  const arr = [
    {
        title:"Switch / Router",
        img:"https://www.networkbulls.com/ask/public/uploads/images/426bc4189d4f67d8026833274e9bcf0d.jpg"
    },
    {
        title:"Firewall",
        img:"https://www.networkbulls.com/ask/public/uploads/images/5f76132d82e6dfa59e2a742bc6f51696.jpg"
    }
  ]

  return (
    <>
      <div className="speacer" style={{paddingTop:"100px"}} >
        <img style={{height:"400px",width:"100%"}} src="https://www.bn-its.de/assets/images/3/Firewall-49374825.webp" alt="" />
      </div>
      <div className="directoryintro">
        <h1 style={{fontWeight:"600"}}>	Network Security </h1>
        <p>
        Network security is a set of technologies that protects the usability and integrity 
        of a company's infrastructure by preventing 
        the entry or proliferation within a network of a wide variety of potential threats.

        </p>
        <p>
        Our Products are affordable for all businesses. Quick and easy to implement, Its runs
         stand alone. Giving you maximum return in minimum time. Streamlines and automates operational
          processes and provides the timely, accurate and actionable information.

        </p>
      </div>
      
      
     
        <h1 style={{textAlign:"center",fontSize:"24px",fontWeight:"600"}}>We are Dealing with all kind of Network Security</h1>
      <div className="directorycontainer">
        {arr &&
          arr.map((ele) => (
            <div className="directorycontainer2" key={ele._id}>
             
              <img
               style={{height:"300px",width:"400px"}}
                src={ele.img}
                alt={ele.title}
              />
              <h1>{ele.title}</h1>
              
             
              
              
             
               
                
               <Link to={"/contact"}> <button className="demobtn">Contact Us</button> </Link>
              
            </div>
          ))}
      </div>
      
    </>
  );
}
