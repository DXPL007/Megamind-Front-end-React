import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import ArtbordImage from "../images/ArtbordImage.png";
import Flag0 from "../images/flag/flag0.png";
import Flag1 from "../images/flag/flag1.png";
import Flag2 from "../images/flag/flag2.png";
import Flag3 from "../images/flag/flag3.png";
import Flag4 from "../images/flag/flag4.png";
import Flag5 from "../images/flag/flag5.png";
import Flag6 from "../images/flag/flag6.png";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { NavLink } from "react-router-dom";
import Modal from "react-modal";
import axios from 'axios';
// import $ from 'jquery';


const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function ArtboardHome() {
  const [value, setValue] = useState();
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function sendEmail(e)
  {
	  e.preventDefault();
	  //alert("sendEmail called...");
	  var name = document.getElementById("inlineFormInputName").value;
	  var email = document.getElementById("exampleInputEmail1").value;
	  var country = document.getElementById("exampleFormControlSelect1").value;
	  var mobile_no = document.getElementById("mobile_no").value;;
      var geturl = 'https://megamindonline.com/admin/webmanager/controller.php?command=SEND_ENQUIRY_EMAIL&name='+name+"&email="+email+"&country="+country+"&mobile="+mobile_no;
	  console.log("geturl="+geturl);
      axios.get(geturl).then(res => 
        {
		  alert("Your enquiry has been registered successfully.");
		}); 
  }

  return (
    <>
    
      <Container className="Bg-Home" fluid>
        <Row className="py-5" style={{ width: "80%", margin: "auto" }} id="enquiry">
          <Col sm={12} md={4}>
            <h2 className="text-left display-8 fw-light text-black">
              {" Your Study  "}
              <br /> {"Abroad Expert"}
            </h2>
            <p className="m-0 pt-2 pb-4 paragraph">
              {
                " The largest Personalised student Counselling Study Abroad Platform in the World. Obsessed with Student Success. "
              }
            </p>
            <div className="d-flex pt-5 pb-4 ">
            <NavLink to="/country?code=UK" target="_blank">
                <img
                  src={Flag0}
                  className=" zoom-thumbnail w-100 Flag"
                  style={{ marginTop: "-50px" }}
                  alt="ImageMaker"
                  title="United Kingdom"
                />
              </NavLink>
              <NavLink to="/country?code=USA" target="_blank">
                <img
                  src={Flag1}
                  className="zoom-thumbnail  w-100 Flag"
                  style={{ marginTop: "-50px" }}
                  alt="ImageMaker"
                  title=" United States of America"
                />
              </NavLink>
              <NavLink to="/country?code=GERMANY" target="_blank">
                <img
                  src={Flag3}
                  className="zoom-thumbnail  w-100 Flag"
                  style={{ marginTop: "-50px" }}
                  alt="ImageMaker"
                  title="Germany"
                />
              </NavLink>
              <NavLink to="/country?code=Australia" target="_blank">
                <img
                  src={Flag5}
                  className="zoom-thumbnail  w-100 Flag"
                  style={{ marginTop: "-50px" }}
                  alt="ImageMaker"
                  title="Australia"
                />
              </NavLink>
              <NavLink to="/country?code=New Zealand" target="_blank">
                <img
                  src={Flag4}
                  className="zoom-thumbnail  w-100 Flag"
                  style={{ marginTop: "-50px" }}
                  alt="ImageMaker"
                  title="New Zealand"
                />
              </NavLink>
              <NavLink to="/country?code=CANADA" target="_blank">
                <img
                  src={Flag2}
                  className="zoom-thumbnail  w-100 Flag"
                  style={{ marginTop: "-50px" }}
                  alt="ImageMaker"
                  title="Canada"
                />
              </NavLink>
              <NavLink to="/country?code=IRELAND" target="_blank">
                <img
                  src={Flag6}
                  className="zoom-thumbnail  w-100 Flag"
                  style={{ marginTop: "-50px" }}
                  alt="ImageMaker"
                  title="Canada"
                />
              </NavLink>
              {/* <NavLink> <img src={ArtbordImage} className="w-100 Flag" style={{ marginTop: '-50px' }} alt="ImageMaker" /></NavLink> */}
            </div>
            <button
              type="submit"
              onClick={openModal}
              class="mt-button btn btn-primary w-60"
            >
              Download Brochure
            </button>
          </Col>

          <Col sm={12} md={4}>
            <NavLink>
              <img
                src={ArtbordImage}
                className="w100"
                style={{ marginTop: "-50px" }}
                alt="ImageMaker"
              />
            </NavLink>
          </Col>

          <Col sm={12} md={4}>
            <div className="card-boxx m-3">
              <h4 className="text-center fw-thin">Enquiry Now </h4>
              <Form className="py-3"  method="Post">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    id="inlineFormInputName"
                    placeholder="Enter Your Name"
                    required
                  />
                </div>

                <div class="form-group">
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Email ID"
                    required
                  />
                </div>

                <div class="form-group">
                  <select class="form-control" id="exampleFormControlSelect1" required>
                    <option>Canada</option>
                    <option>Germany</option>
                    <option>Australia</option>
                    <option>U.K.</option>
                    <option>New Zealand</option>
                    <option>Ireland</option>
                  </select>
                </div>
                <div class="form-group">
                  <PhoneInput
                    className="form-control"
					         id="mobile_no"
                    placeholder="Enter phone number"
                    value={value}
                    onChange={setValue}
                    defaultCountry="IN"
                    rules={{ required: true }}
                    required
                  />
                </div>

                <input type="button" class="mt-btn btn btn-primary" value="Submit" onClick={sendEmail}/>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="makin">
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <button onClick={closeModal} className="btn btn-primary float-right">
            x
          </button>

          <form action="https://shorturl.at/imxS7" target="_blank" className="py-3" style={{ width: "300px" }}>
            <div class="form-group">
              <label for="name" className="py-2">
                {"Full Name"}
              </label>
              <input
                type="name"
                id="name"
                class="form-control"
                name="name"
                placeholder="Enter Full Name"
                required
              />
            </div>
            <div class="form-group pb-4">
              <label for="Email" className="py-2">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="Email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                required
              />
            </div>
            <input
              type="submit"
              onclick="downloadFile()"
              className="btn py-3 btn-primary w-100"
              value="Download Brochure"
            />
          </form>
        </Modal>
      </div>
    </>
  );
}

export default ArtboardHome;
