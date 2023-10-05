import React from "react";
import Container from 'react-bootstrap/Container';
import "../fonts/font.css";
import { BrowserRouter, Routes, Route, NavLink, } from "react-router-dom";
import Home from "./Home";
import Megamindlogo from '../images/megamind-logo.png';
import { BiSolidPhoneCall } from "react-icons/bi";
import WhatsappIocn from '../images/whatsapicon.png'
import Country from "./country/Country";
import Services from "./services/Services";
import FinanceServices from "./financeservices/Finance-Services";
import Contact from "./contact/Contact";
import Ielts from "./IELTS/Iltes";
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import University from "./University/University";
import About from "./about/About";
import Blog from "./blog/Blog";
import Post1 from "./blog/Post1";




function Header() {
  return (

    <>

      <BrowserRouter>


        {['lg'].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3 height">
          <Container fluid>
            <Navbar.Brand href="#"> 
             <NavLink className="navbar-brand" id="top" to="./" style={({ isActive }) => ({ color: isActive ? 'black' : 'white' })}>
                  <img src={Megamindlogo} className="" width="170px" alt="Megamind logo"/>
                </NavLink>
                </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <NavLink className="navbar-brand" id="top" to="./" style={({ isActive }) => ({ color: isActive ? 'black' : 'white' })}>
                  <img src={Megamindlogo} className="" width="170px" alt="Megamind logo"/>
                </NavLink>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                <NavLink className="nav-link active" to="./" aria-current="page" style={({ isActive }) => ({ color: isActive ? '#0693e3' : 'black',  textDecoration: 'underline', textUnderlineOffset: "4px"})}>Home</NavLink>
                <NavLink className="nav-link" to="/services" style={({ isActive }) => ({ color: isActive ? '#0693e3' : 'black' })}>Services</NavLink>
                
                <NavDropdown
                    title="Countries"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item>
                    <NavLink className="nav-link" to="/country" exact style={({ isActive }) => ({ color: isActive ? '#0693e3' : 'black' })}>Study in Canada</NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action4">
                    <NavLink className="nav-link" to="/country" exact style={({ isActive }) => ({ color: isActive ? '#0693e3' : 'black' })}>Study in Germany</NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>
                    <NavLink className="nav-link" to="/country" exact style={({ isActive }) => ({ color: isActive ? '#0693e3' : 'black' })}>Study in Australia</NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>
                    <NavLink className="nav-link" to="/country" exact style={({ isActive }) => ({ color: isActive ? '#0693e3' : 'black' })}>Study in U.K</NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>
                    <NavLink className="nav-link" to="/country" exact style={({ isActive }) => ({ color: isActive ? '#0693e3' : 'black' })}>Study in Ireland</NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>
                    <NavLink className="nav-link" to="/country" exact style={({ isActive }) => ({ color: isActive ? '#0693e3' : 'black' })}>Study in New Zealand</NavLink>
                    </NavDropdown.Item>
                  </NavDropdown>
                <NavLink className="nav-link" to="/financeservices" exact style={({ isActive }) => ({ color: isActive ? '#0693e3' : 'black' })}>Financial Services</NavLink>
                <NavLink className="nav-link" to="/contact" exact style={({ isActive }) => ({ color: isActive ? '#0693e3' : 'black' })}>Conatct Us</NavLink>
                <NavLink className="nav-link" to="/blog" style={({ isActive }) => ({ color: isActive ? 'black' : 'white' })}>Blog</NavLink>
              
                </Nav>
                <Form className="d-flex align-items-center">
                <NavLink to="tel:+918882255001" target="_blank" className="text-color mabottom fw-medium">
                      <BiSolidPhoneCall className="border-color" /> 8882255001
                    </NavLink>
                    <NavLink to="https://wa.me/+918882255001" target="_blank" className="" style={({ isActive }) => ({ color: isActive ? 'green' : 'black' })}>
                    <img src={WhatsappIocn} className="" width={"50px"} alt="ImageMaker" />
                    </NavLink>
                 
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}

 

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/services" element={<Services/>} />
          <Route exact path="/country" element={<Country/>} />
          <Route exact path="/contact" element={<Contact/>} />
          <Route exact path="/ielts" element={<Ielts/>} />
      
          <Route exact path="/financeservices" element={<FinanceServices />} />
          <Route exact path="/university" element={<University/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/blog" element={<Blog/>} />
          <Route exact path="/post1" element={<Post1/>} />


        </Routes>

      </BrowserRouter>
    </>
  )
};

export default Header;