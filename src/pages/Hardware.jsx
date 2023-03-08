import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Directory.css";
import axios from "axios";

import { Link } from 'react-router-dom'

export default function Hardware() {
  const [page, setPage] = useState(1);
  const [arr, setArr] = useState([]);
  const [text, setText] = useState("");
  const [que, setQue] = useState(text);

  useEffect(() => {
    axios
      .get(
        `https://sparkling-blue-drill.cyclic.app/Hardware`
      )
      .then((res) => setArr(res.data));
  }, [page, que]);

  const searchDirectory = () => {
    setQue(text);
    console.log(arr);
  };

  return (
    <>
      <div className="speacer" style={{paddingTop:"100px"}} >
        <img style={{height:"400px",width:"100%"}} src="https://rockwellautomation.scene7.com/is/image/rockwellautomation/16x9-ebook-micro-control-systems.768.jpg" alt="" />
      </div>
      <div className="directoryintro">
        <h1>	Hardware Solutions </h1>
        <p>
        which has earned an excellent reputation for its quality Products, services,
         ethics, professionalism and credibility in the field of Software Development,
          Implementations, Support & Service. M-Tech is promoted and managed by experienced
           professionals, with multidisciplinary skills and expertise and backed by a wide
            network of associates and consultants.

        </p>
        <p>
        Our Products are affordable for all businesses. Quick and easy to implement, Its runs
         stand alone. Giving you maximum return in minimum time. Streamlines and automates operational
          processes and provides the timely, accurate and actionable information.

        </p>
      </div>
      
      
     
      <div className="directorycontainer">
        {arr &&
          arr.map((ele) => (
            <div className="directorycontainer2" key={ele._id}>
             
              <img
                src={ele.image}
                alt={ele.title}
              />
              <h1>{ele.title}</h1>
              
              <p className="directoryheading">Price :</p>
              
              
             
               
                
               <Link to={"/contact"}> <button className="demobtn">Shedule a Demo</button> </Link>
              
            </div>
          ))}
      </div>
      
    </>
  );
}
