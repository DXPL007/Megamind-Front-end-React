import React from "react";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { BrowserRouter, NavLink, } from "react-router-dom";
import logo from '../images/btimg.PNG';
import Maplogo from '../images/imagev.PNG';
import Megamindlogo from '../images/megamind-logo.png';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';



function Footer() {
   function sayHello() {
      alert('You clicked me!');
   }


   return (

      <>
         <BrowserRouter>

            <Container fluid>
               <Row className="py-5" style={{ width: "80%", margin: "auto" }}>
                  <Col sm={12} md={4}>
                     <div className="">
                        <NavLink className="" to="/" style={({ isActive }) => ({ color: isActive ? 'black' : 'white' })}>
                           <img src={Megamindlogo} className="pb-5" alt="Megamind logo" />
                        </NavLink>
                        <div className="pt-5">
                        <NavLink to="/" className="fa fa-facebook"></NavLink>
                        <NavLink to="/" className="fa fa-instagram"></NavLink>
                        <NavLink to="/" className="fa fa-linkedin"></NavLink>
                        <NavLink to="/" className="fa fa-youtube"></NavLink>
                        <NavLink to="/" className="fa fa-twitter"></NavLink>
                        </div>

                     </div>
                  </Col>
                  <Col sm={12} md={4}>
                     <h5 className="fw-bold text-black">DELHI OFFICE</h5>
                     <p className="fw-bold p-para pt-2"> Megamind Consultants</p>
                     <p className="fw-bold p-para"> info@megamindonline.com</p>
                     <p className="fw-bold p-para">2nd Floor, 49 Ring Road, lajpat Nagar-lll,<br/> New Delhi-110024, India</p>
                     <p className="fw-bold p-para"> +91-888-225-5001</p>
                  </Col>
                  <Col sm={12} md={4}>

                     <NavLink className="navbar-brand" to="/" style={({ isActive }) => ({ color: isActive ? 'black' : 'white' })}>
                        <img src={Maplogo} className="w-100" alt="logo" />
                     </NavLink>
                  </Col>

               </Row>


               <Row className="py-5 border-top" style={{ width: "80%", margin: "auto" }}>
                  <Col sm={12} md={2}>
                     <ul className="list-style-none p-0">
                        <li><NavLink className="list-style" to="/"> About Megamind </NavLink></li>
                        <li><NavLink className="list-style" to="/"> About Us </NavLink></li>
                        <li><NavLink className="list-style" to="/"> Work with us </NavLink></li>

                     </ul>
                  </Col>
                  <Col sm={12} md={3}>
                     <ul className="list-style-none p-0">
                        <li><NavLink className="list-style" to="/"> Home </NavLink></li>
                        <li><NavLink className="list-style" to="/"> About Us </NavLink></li>
                        <li><NavLink className="list-style" to="/"> IELTS Prepartion </NavLink></li>
                        <li><NavLink className="list-style" to="/"> Premium University Counselling </NavLink></li>
                        <li><NavLink className="list-style" to="/"> Human Resource </NavLink></li>
                        <li><NavLink className="list-style" to="/"> Student Testimonials </NavLink></li>
                        <li><NavLink className="list-style" to="/"> Registration Form </NavLink></li>
                        <li><NavLink className="list-style" to="/"> Visa Services </NavLink></li>
                        <li><NavLink className="list-style" to="/"> Blog </NavLink></li>
                        <li><NavLink className="list-style" to="/"> Consultant Study in Australia </NavLink></li>
                        <li><NavLink className="list-style" to="/"> Consultant Study in Canada </NavLink></li>
                        <li><NavLink className="list-style" to="/"> Consultant Study in United Kingdom  </NavLink></li>
                     </ul>
                  </Col>
                  <Col sm={12} md={2}>
                     <ul className="list-style-none p-0">
                        <li><NavLink className="list-style" to="/"> Study Abroad </NavLink></li>
                        <li><NavLink className="list-style" to="/"> Study in Germany </NavLink></li>
                        <li><NavLink className="list-style" to="/"> Study in Canada </NavLink></li>
                        <li><NavLink className="list-style" to="/"> Study in Australia </NavLink></li>
                        <li><NavLink className="list-style" to="/"> Study in United Kingdom </NavLink></li>
                        <li><NavLink className="list-style" to="/"> Study in Ireland </NavLink></li>
                        <li><NavLink className="list-style" to="/"> Study in New-Zealand </NavLink></li>
                     </ul>

                  </Col>

                  <Col sm={12} md={1}>
                     <ul className="list-style-none p-0">
                        <li><NavLink className="list-style" to="/"> Tests </NavLink></li>
                        <li><NavLink className="list-style" to="/"> IELTS </NavLink></li>
                        <li><NavLink className="list-style" to="/"> GMAT </NavLink></li>
                        <li><NavLink className="list-style" to="/"> GRE </NavLink></li>
                        <li><NavLink className="list-style" to="/"> SAT </NavLink></li>
                        <li><NavLink className="list-style" to="/"> TOEFL </NavLink></li>
                        <li><NavLink className="list-style" to="/"> PTE </NavLink></li>
                     </ul>
                  </Col>


                  <Col sm={12} md={2}>
                     <ul className="list-style-none p-0">
                        <li><NavLink className="list-style" to="/"> University of West london </NavLink></li>
                        <li><NavLink className="list-style" to="/"> Study Abroad Consultants in Delhi </NavLink></li>
                        <li><NavLink className="list-style" to="/">  MBA in Canada </NavLink></li>
                        <li><NavLink className="list-style" to="/"> Top Colleges in Toronto </NavLink></li>
                        <li><NavLink className="list-style" to="/"> Universities in Canada </NavLink></li>
                        <li><NavLink className="list-style" to="/"> Colleges in Toronto </NavLink></li>
                        <li><NavLink className="list-style" to="/"> Colleges in Vancouver </NavLink></li>
                        <li><NavLink className="list-style" to="/"> 2 Years Programs in Canada </NavLink></li>
                        <li><NavLink className="list-style" to="/"> MBA in UK </NavLink></li>
                     </ul>

                  </Col>


                  <Col sm={12} md={2}>
                     <ul className="list-style-none">
                        <li><NavLink className="list-style" to="/"> Other Links </NavLink></li>
                        <li><NavLink className="list-style" to="/"> Privacy Policy </NavLink></li>
                        <li><NavLink className="list-style" to="/"> Terms & Conditions </NavLink></li>
                        <li><NavLink className="list-style" to="/"> Responsible Disclosure Policy </NavLink></li>
                        <li><NavLink className="list-style" to="/"> EEO Policy </NavLink></li>
                        <li><NavLink className="list-style" to="/"> Sitemap </NavLink></li>
                     </ul>

                  </Col>
               </Row>


               <Row className="border-top pt-3" style={{ width: "80%", margin: "auto" }}>
                  <Col sm={12} md={8}>
                     <p style={{ lineHeight: "54px" }} className="p-para"> @Copyright 2021. MegaMind Consultants All rights reserved. | Powered by DigitalXplode </p>
                  </Col>

                  <Col sm={12} md={4}>
                     <a onClick={sayHello} href="./" className="btn btn-pad2 btn-sm btn-outline-primary">Back on Top <BsFillArrowUpCircleFill style={{fontSize:"22px",marginLeft:"10"}}/></a>
                  </Col>

               </Row>
            </Container>

            <Container fluid>

               <Row className="">
                  <Col sm={12} md={12} className="p-0">

                     <NavLink className="navbar-brand" to="/" style={({ isActive }) => ({ color: isActive ? 'black' : 'white' })}>
                        <img src={logo} className="w-100" alt="logo" />
                     </NavLink>
                  </Col>
               </Row>
            </Container>

         </BrowserRouter>

      </>
   )

}
export default Footer;
