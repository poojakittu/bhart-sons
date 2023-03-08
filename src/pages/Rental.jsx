import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Directory.css";
import axios from "axios";

import { Link } from 'react-router-dom'

export default function Rental() {
  const [page, setPage] = useState(1);
 
  const [text, setText] = useState("");
  const [que, setQue] = useState(text);

  const arr = [
    {
        title:"Laptop / Desktop",
        img:"https://onsitego.com/blog/wp-content/uploads/2021/04/Laptop-Desk-Setup.jpg"
    },
    {
        title:"Printer / Other Accessories",
        img:"https://m.media-amazon.com/images/I/711yJipUQVL._SX569_.jpg"
    }
  ]

  return (
    <>
      <div className="speacer" style={{paddingTop:"100px"}} >
        <img style={{height:"400px",width:"100%"}} src="https://www.sfleblanc.ca/wp-content/uploads/2018/11/equipement-informatique-large.jpg" alt="" />
      </div>
      <div className="directoryintro">
        <h1 style={{fontWeight:"600"}}>Rental</h1>
        <p>
        we are rental services provider in India. We’re also one of the leading players in the 
        field of examination support services nationally. Being pioneers in our field and widely 
        recognized by all the leading industries for renting the latest and viable enterprise IT 
        rental services for offices, events, conferences,
         and examinations. BSSS is striving hard to work beyond the expectation of our clients.

        </p>
        <p>
        Our Products are affordable for all businesses. Quick and easy to implement, Its runs
         stand alone. Giving you maximum return in minimum time. Streamlines and automates operational
          processes and provides the timely, accurate and actionable information.

        </p>
      </div>
      
      
     
        <h1 style={{textAlign:"center",fontSize:"24px",fontWeight:"600"}}>We are Dealing with all kind of Rental Services</h1>
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
