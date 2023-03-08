import React from "react";
import "./Directory.css";
import axios from "axios";

import { Link, useParams } from "react-router-dom";

export default function SingleDirectory() {
  const [obj, setObj] = React.useState({});
  const {_id}=useParams()
  React.useEffect(() => {
    axios
      .get(`https://sparkling-blue-drill.cyclic.app/Software/${_id}`)
      .then((res) => setObj(res.data));
  }, []);

  return (
    <>
      <div className="speacer" ></div>
      <div className="directorybannersection">
        <div style={{display:"flex",margin:"auto",justifyContent:"center"}}>
          <img style={{width:"80%",height:"650px",paddingTop:"100px"}} src={obj.image} alt="" />
        </div>
        <div className="logocontener">
          <div>
            <img src={obj.image} alt="" />
          </div>
          
        </div>
      </div>
      <div className="discriptiondirectory">
       
        
          <h1 style={{width:"100%",margin:"auto",textAlign:"center",fontSize:"23px",fontWeight:"700"}} >{obj.title}</h1>
          
          {/* <h1> <h1 style={{fontWeight:"600"}}>Price :-</h1>  Rs {obj.price}</h1> */}

          <h1><h1 style={{fontWeight:"600"}}>Features</h1>  {obj.feature}</h1>
       
      </div>
      
      
      <div className="bottombanner">
      <p> <h1 style={{fontWeight:"600"}}>Description</h1>  <br /> {obj.description}</p>
      </div>

      <div className="contactbtn">
        <Link to="/contact">
        <button className="demobtn2">Buy Now</button>
        </Link>
        <button className="demobtn"><a href="https://api.whatsapp.com/send?phone=8930451535&text=Hello this is the starting message"><img  src="data:image/png;base64,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" alt="" /></a></button>
      </div>
      
    </>
  );
}
