import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./contact.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import Imagesl from "../../images/contact/conayts.png";
import ClientView from "../ClientView";

function Contact() {
  const [value, setValue] = useState();

  return (
    <>
      <Container className="top-bg" fluid>
        <Row className="" style={{ width: "80%", margin: "auto" }}>
          <Col sm={12} md={12} className="py-5">
            <div className="heightConatct"></div>
          </Col>

          <Col sm={12} md={6} className="py-5"></Col>
        </Row>
      </Container>

      <Container className="pb-5" fluid>
        <Row className="py-5 mt-5" style={{ width: "80%", margin: "auto" }}>
          <div className="contact-u" sm={12} md={12}>
            <Row className="">
              <Col sm={12} md={7}>
                <img src={Imagesl} alt="imager" width={"100%"}></img>
              </Col>

              <Col sm={12} md={5}>
                <div className="conatct-boxx m-3" id="enquiry">
                  <h2 className="text-center fw-bold"> Contact Form </h2>
                  <Form
                    className="py-3"
                    onSubmit="return confirm('Do you want to submit?') "
                    method="Get"
                  >
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
                      <PhoneInput
                        className="form-control"
                        placeholder="Contact No"
                        value={value}
                        onChange={setValue}
                        defaultCountry="IN"
                        rules={{ required: true }}
                        required
                      />
                    </div>

                    <div class="form-group">
                      <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Email Id"
                        required
                      />
                    </div>

                    <Row>
                      <Col sm={6} md={6} className="col">
                        <div class="form-group">
                          <select class="custom-select form-control" required>
                            <option value="">City</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                          <div class="invalid-feedback">
                            Example invalid custom select feedback
                          </div>
                        </div>
                      </Col>
                      <Col sm={6} md={6} className="col">
                        <div class="form-group">
                          <select class="custom-select form-control" required>
                            <option value="">State</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                          <div class="invalid-feedback">
                            Example invalid custom select feedback
                          </div>
                        </div>
                      </Col>
                    </Row>

                    <input
                      type="submit"
                      class="mt-btn btn btn-secondary btn-sm"
                      value="Submit"
                    />
                  </Form>
                </div>
              </Col>
            </Row>
          </div>
        </Row>
      </Container>

      <ClientView />
    </>
  );
}

export default Contact;
