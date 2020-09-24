import React from "react";
import "./body.css";
import SOTO from "../../assests/imags/soto.png";

export default function Body() {
  return (
    <div className="container">
      <h1 className="col"> SINS OF THE OCEAN</h1>
      <div className="col">
        {/* <iframe
            width="300"
            height="150"
            src="https://www.youtube.com/embed/GJ825HreLJw"
            frameborder="0"
            allowfullscreen
          /> */}{" "}
        <div className="preoder">
          <a href="https://www.youtube.com/embed/GJ825HreLJw">
            <button className="btn btn-dark">Watch Trailer</button>
          </a>

          <img className="SOTOIcon " src={SOTO} alt="SOTO Icon" />
        </div>
        <button className="btn btn-dark">Pre Order Now</button>
      </div>
    </div>
  );
}
