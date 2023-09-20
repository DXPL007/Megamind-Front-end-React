import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import ArtbordImage from '../images/ArtbordImage.png';
import Flag0 from '../images/flag/flag0.png';
import Flag1 from '../images/flag/flag1.png';
import Flag2 from '../images/flag/flag2.png';
import Flag3 from '../images/flag/flag3.png';
import Flag4 from '../images/flag/flag4.png';
import Flag5 from '../images/flag/flag5.png';
import FlagImage from '../images/flag.jpg';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { NavLink } from "react-router-dom";


function ArtboardHome() {

  // `value` will be the parsed phone number in E.164 format.
  // Example: "+12133734253".
  const [value, setValue] = useState()

    return (


        <Container className='Bg-Home' fluid>
            <Row className="py-5" style={{ width: "80%", margin: "auto" }}>

                <Col sm={12} md={4}>
                    <h2 className="text-left display-8 fw-light text-black"> Your Study <br /> Abroad Expert </h2>
                    <p className="m-0 pt-2 pb-4 paragraph"> The largest Personalised student Counselling Study Abroad Platform in the World. Obsessed with Student Success. </p>
                    <div className='d-flex pt-5 pb-4'>
                    <NavLink> <img src={Flag0} className="w-100 Flag" style={{ marginTop: '-50px' }} alt="ImageMaker" /></NavLink>
                    <NavLink> <img src={Flag1} className="w-100 Flag" style={{ marginTop: '-50px' }} alt="ImageMaker" /></NavLink>
                    <NavLink><img src={Flag2} className="w-100 Flag" style={{ marginTop: '-50px' }} alt="ImageMaker" /></NavLink>
                    <NavLink><img src={Flag3} className="w-100 Flag" style={{ marginTop: '-50px' }} alt="ImageMaker" /></NavLink>
                    <NavLink><img src={Flag4} className="w-100 Flag" style={{ marginTop: '-50px' }} alt="ImageMaker" /></NavLink>
                    <NavLink> <img src={Flag5} className="w-100 Flag" style={{ marginTop: '-50px' }} alt="ImageMaker" /></NavLink>
                    {/* <NavLink> <img src={ArtbordImage} className="w-100 Flag" style={{ marginTop: '-50px' }} alt="ImageMaker" /></NavLink> */}
                    </div>
                    <button type="submit" class="mt-button btn btn-primary w-60">Download Brouchur</button>

                </Col>

                <Col sm={12} md={4}>
                    
                    <NavLink> <img src={ArtbordImage} className="w-100" style={{ marginTop: '-50px' }} alt="ImageMaker" /></NavLink>
                
                </Col>



                <Col sm={12} md={4}>

                    <div className='card-boxx m-3'>
                        <h4 className='text-center fw-thin'>Enquery Now </h4>
                        <Form className='py-3'>
                            <div class="form-group">
                                <input type="text" class="form-control" id="inlineFormInputName" placeholder="Enter Your Name" />
                            </div>

                            <div class="form-group">
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email ID" />
                            </div>
                            <div class="form-group">
                                <PhoneInput  className="form-control" placeholder="Enter phone number" value={value} onChange={setValue} defaultCountry="IN" rules={{ required: true }}/>
                            
                            </div>

                            <div class="form-group">
                                <select class="form-control" id="exampleFormControlSelect1">
                                    <option>Aurstalia</option>
                                    <option>Canada</option>
                                    <option>Franch</option>
                                    <option>India</option>
                                </select>
                            </div>

                            <button type="submit" class="mt-btn btn btn-primary">Submit</button>
                        </Form>
                    </div>
                </Col>
            </Row>

        </Container>




    );

}

export default ArtboardHome