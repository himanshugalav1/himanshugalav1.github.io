import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I am a 3rd-year Electrical Engineering student at Indian Institute of Technology, Ropar with a keen interest 
            in software development. I am passionate about software and web development.
              <br />
              <br />I am fluent in classics like
              <i> <b className="purple"> C++, Python, HTML, CSS and Reactjs. </b> </i>
              <br />
              <br />
              I aim to combine my &nbsp;
              <i> <b className="purple">Electrical engineering </b> </i>
              and knowledge with 
              <i> <b className="purple">Software development </b> </i>
              skills for impactful  
              <i> <b className="purple">technological advancements. </b> </i>
              <br />
              <br />
              <br />
              <br />
              <i> <strong> <b className="purple h3">"</b> </strong> </i> 
              &nbsp; Learning to code is useful no matter what your career ambitions are. &nbsp; 
              <i> <strong> <b className="purple h3">"</b> </strong> </i> &nbsp;
              <i> <b className="purple h6"> ~ Avi Flombaum </b> </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/himanshugalav1"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/himanshugalav/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/its_himanshu_14_02/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
