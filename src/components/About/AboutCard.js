import React from "react";
import Card from "react-bootstrap/Card";
// import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Himanshu Galav </span> from 
            <span className="purple"> Alwar, Rajasthan, India.</span>
            <br /> I am a pre-final year student pursuing an
            <span className="purple"> Bachelor of Technology </span> in
            <span className="purple"> Electrical Engineering </span> at
            <span className="purple"> IIT Ropar. </span>
            <br />
            <br />
            Currently, I am looking for a internship under a industrial company. 
            <br />
            <br />
            Apart from coding, I have gained the knowledge of Electrical Enginnering as well.
            My goal is to leverage my knowledge of electrical engineering and software development
            to make meaningful contributions in the technology industry.
          </p>

          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul> */}
          <br />
          <br />
          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Himanshu Galav</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
