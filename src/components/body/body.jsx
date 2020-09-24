import React from "react";
import "./body.css";
import SOTO from "../../assests/imags/soto.png";

export default function Body() {
  return (
    <div className="container">
      <h1 className="col"> SINS OF THE OCEANS</h1>
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
            <button className="btn btn-dark btn-lg">Watch Trailer</button>
          </a>

          <img className="SOTOIcon " src={SOTO} alt="SOTO Icon" />
        </div>
        <button className="btn btn-dark btn-lg">Pre Order Now</button>
      </div>
    </div>
  );
}
