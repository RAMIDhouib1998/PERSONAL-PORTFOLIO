import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";
import navIcon5 from "../assets/img/nav-icon5.svg";
import navIcon6 from "../assets/img/nav-icon6.svg";
import navIcon7 from "../assets/img/nav-icon7.svg";
import navIcon8 from "../assets/img/nav-icon8.svg";



export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/rami-dhouib-1163891b6/"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon7} alt="Icon" /></a>
              <a href="https://dribbble.com/ramiDhouib"><img src={navIcon4} alt="" /></a>
              <a href="https://twitter.com/Rami_Dhouib"><img src={navIcon5} alt="Icon" /></a>
              <a href="https://www.pinterest.de/ramidhouib389/"><img src={navIcon6} alt="Icon" /></a>
              
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
