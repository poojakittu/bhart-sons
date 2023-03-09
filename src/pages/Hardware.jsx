import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Directory.css";
import axios from "axios";

import { Link } from "react-router-dom";

export default function Hardware() {
  const [page, setPage] = useState(1);
  const [arr, setArr] = useState([]);
  const [text, setText] = useState("");
  const [que, setQue] = useState(text);

  useEffect(() => {
    axios
      .get(`https://sparkling-blue-drill.cyclic.app/Hardware`)
      .then((res) => setArr(res.data));
  }, [page, que]);

  const searchDirectory = () => {
    setQue(text);
    console.log(arr);
  };

  return (
    <>
      <div className="speacer" style={{ paddingTop: "100px" }}>
        <img
          style={{ height: "400px", width: "100%" }}
          src="https://i.ibb.co/VwBNMLz/software-development-banner-with-icons-vector-38824108.jpg"
          alt="hardware"
        />
      </div>
      <div className="directoryintro">
        <h1 style={{ fontWeight: "600" }}> Hardware Solutions </h1>
        <p>
          We are providing total IT solutions, computer networking solutions,
          network design consultancy helping our clients to develop short-term
          and long-term goals and dovetail it with their business objectives to
          act as a catalyst and lend direction. We operate in an industry which
          is pushing the boundaries of knowledge and redefining the way we live.
          We adopt newer and more effective ways of managing ourselves provide
          an effective and harmonious working atmosphere where individual
          aspirations are concomitant with organizational objectives.
        </p>
        <p>
          Our Products are affordable for all businesses. Quick and easy to
          implement, Its runs stand alone. Giving you maximum return in minimum
          time. Streamlines and automates operational processes and provides the
          timely, accurate and actionable information.
        </p>
      </div>

      <h1 style={{ textAlign: "center", fontSize: "24px", fontWeight: "600" }}>
        We are Dealing with all kind of Hardware equipment
      </h1>
      <div className="directorycontainer">
        {arr &&
          arr.map((ele) => (
            <div className="directorycontainer2" key={ele._id}>
              <img
                style={{ height: "300px", width: "400px" }}
                src={ele.image}
                alt={ele.title}
              />
              <h1>{ele.title}</h1>

              <Link to={"/contact"}>
                {" "}
                <button className="demobtn">Contact Us</button>{" "}
              </Link>
            </div>
          ))}
      </div>
    </>
  );
}
