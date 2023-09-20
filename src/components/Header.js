import React from "react";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "../fonts/font.css";
import { BrowserRouter, Routes, Route, NavLink, } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Megamindlogo from '../images/megamind-logo.png';
import { BiSolidPhoneCall } from "react-icons/bi";
import WhatsappIocn from '../images/whatsapicon.png'





function Header() {
  return (

    <>

      <BrowserRouter>
        <nav className="navbar navbar-expand-lg height">
          <Container className="d-block">

            <Row className="d-flex align-items-center justify-content-center">
              <Col md={2} sm={12}>
                <NavLink className="navbar-brand" to="/" style={({ isActive }) => ({ color: isActive ? 'black' : 'white' })}>
                  <img src={Megamindlogo} className="" width="190px" alt="Megamind logo" />
                </NavLink>
                <Button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </Button>
              </Col>
              <Col md={7} sm={12}>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-end w-100">
                    <li className="nav-item">
                      <NavLink className="nav-link active" aria-current="page" style={({ isActive }) => ({ color: isActive ? '#0693e3' : 'white',  textDecoration: 'underline', textUnderlineOffset: "4px"})}>Home</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" style={({ isActive }) => ({ color: isActive ? 'black' : 'white' })}>Services</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" style={({ isActive }) => ({ color: isActive ? 'black' : 'white' })}>Countries</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" style={({ isActive }) => ({ color: isActive ? 'black' : 'white' })}>Financial Services</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" style={({ isActive }) => ({ color: isActive ? 'black' : 'white' })}>Conatct Us</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" style={({ isActive }) => ({ color: isActive ? 'black' : 'white' })}>Blog</NavLink>
                    </li>

                  </ul>
                  <div>

                  </div>

                </div>

              </Col>
              <Col md={3} sm={12} className="">
                <Row className="d-flex align-items-end">
                  <Col md={9} sm={12} className="d-flex align-items-end justify-content-end">
                    <NavLink to="/" exact className="text-color fw-medium">
                      <BiSolidPhoneCall className="border-color" /> 8882255001
                    </NavLink>

                  </Col>

                  <Col md={3} sm={12} className="d-flex">

                    <NavLink className="myText d-flex" style={({ isActive }) => ({ color: isActive ? 'green' : 'black' })}>
                    <img src={WhatsappIocn} className="w-80 box-sadeo" alt="ImageMaker" />
                    </NavLink>

                  </Col>

                </Row>


              </Col>
            </Row>




          </Container>
        </nav>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>

      </BrowserRouter>
    </>
  )
};

export default Header;