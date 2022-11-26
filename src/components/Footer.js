import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/Home.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  //const navIcon1 = "https://cdn-icons-png.flaticon.com/512/25/25231.png"
  return (
    <footer className="footer">
      <Container>
        <br /><br />
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            {/* <img src={logo} alt="Logo" /> */}
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://github.com/TeenoTS"><img src={navIcon1} alt="" /></a>
              <a href="https://www.facebook.com/Thitiphat.Soisungnoen/"><img src={navIcon2} alt="" /></a>
              <a href="https://www.instagram.com/teeno_ts/"><img src={navIcon3} alt="" /></a>
            </div>
            <p className="text">Thank you for visiting</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
