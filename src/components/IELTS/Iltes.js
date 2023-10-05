import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "react-phone-number-input/style.css";
import "./ielts.css";
import PhoneInput from "react-phone-number-input";
import { Link } from "react-router-dom";
import ImageIelt1 from "../../images/ielts/ielty.png";
import ImageIelt2 from "../../images/ielts/ielty2.png";
import ImageIelt3 from "../../images/ielts/ielty3.png";
import ImageIelt4 from "../../images/ielts/ielty4.png";
import PricrIamge from "../../images/ielts/price.png";
import PricrIamge2 from "../../images/ielts/price2.png";
import PricrIamge3 from "../../images/ielts/price3.png";

function Ielts() {
  const [value, setValue] = useState();

  return (
    <>
      <Container className="iets-bg" fluid>
        <Row className="" style={{ width: "90%", margin: "auto" }}>
          <Col sm={12} md={7} className="py-5 col custom-border4">
            <div className="topts-boxx" id="metsa">
              <h2 className="text-center fw-bold text-white custom-border3 py-2">
                {" Why IELTS First?"}
              </h2>
              <p className="text-center text-white m-0">
                {
                  "ELTS First is the fastest emerging leader in the test preparation with a high success achievement rate."
                }
              </p>
              <p className="text-center text-white m-0">
                {
                  "We have vast experience in providing quality IELTS training & helped thousands of students to successfully achieve their targeted IELTS Score Band."
                }
              </p>
              <div className="d-grid dgrids pt-3">
                <div>
                  <img src={ImageIelt1} alt="imageNew" />
                  <p className="text-center text-white">{"PREPARATION"}</p>
                </div>
                <div>
                  <img src={ImageIelt2} alt="imageNew" />
                  <p className="text-center text-white">{"FOCUS"}</p>
                </div>
                <div>
                  <img src={ImageIelt3} alt="imageNew" />
                  <p className="text-center text-white">{"TIME"}</p>
                </div>
                <div>
                  <img src={ImageIelt4} alt="imageNew" />
                  <p className="text-center text-white">{"SUCCESS"}</p>
                </div>
              </div>
              <h2 className="text-center fw-bold text-white pt-0">
                {" Book your Demo Class now!"}{" "}
              </h2>
              <button
                class="mt-btn w-25 btnww btn btn-light mt-0 mb-4"
                style={{ fontSize: "18px" }}
              >
                Our Services
              </button>
            </div>
          </Col>
          <Col sm={12} md={1} className="py-5 maincol">
            {" "}
          </Col>
          <Col sm={12} md={4} className="py-5 col bo-img">
            <div className="ielts-boxx mx-3" id="metsa">
              <h3 className="text-center fw-bold text-white custom-bordder2 py-2">
                {" FREE COUNSELLING"}
              </h3>
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
                    placeholder="Full Name :"
                    required
                  />
                </div>

                <div class="form-group">
                  <PhoneInput
                    className="form-control cotrosls"
                    placeholder="Contact No :"
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
                    placeholder="Email :"
                    required
                  />
                </div>

                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    id="inlineFormInputName"
                    placeholder="Courses :"
                    required
                  />
                </div>

                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    id="inlineFormInputName"
                    placeholder="State :"
                    required
                  />
                </div>

                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    id="inlineFormInputName"
                    placeholder="Select Class Mode :"
                    required
                  />
                </div>

                <input
                  type="submit"
                  class="mt-btn w-50 btn btn-primary"
                  value="GET STARTED"
                />
              </Form>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="pb-5" fluid>
        <Row className="py-5 mt-5" style={{ width: "85%", margin: "auto" }}>
          <Col md={12} sm={12} className="mb-5">
            <div className="dispay-irlts">
              <h2 className="display-6 text-center fw-bold m-0 py-2">
                {" Our Courses Packages "}
              </h2>
            </div>
            <div className="dispay-ir">
              <h4 className="text-center fw-bold py-2 m-0">
                {"  IELTS GENREL PACKAGES "}
              </h4>
            </div>
          </Col>
          <div id="generic_price_table">
            <section>
              <div class="container">
                <div class="row">
                  <div class="col-md-4">
                    <div class="generic_content clearfix">
                      <div class="generic_head_price clearfix">
                        <div class="generic_head_content clearfix">
                          <img src={PricrIamge} alt="" width={"100%"} />
                        </div>

                        <div class="generic_price_tag clearfix">
                          <h4 className="fw-bold color-price pb-3">
                            {" "}
                            EXPRESS PROGRAM <br />( GENRERAL )
                          </h4>
                          <span class="price custom-border5">
                            <span class="currency">RS 7,990</span>
                          </span>
                        </div>
                      </div>

                      <div class="generic_feature_list px-5">
                        <ul>
                          <li>{"Duration : 16 Sessions"}</li>
                          <li>{"5 Classes / Week"}</li>
                          <li>{"15-20 Students per Batch"}</li>
                          <li>{"Excellent Faculty Members"}</li>
                          <li>{"Time Saving Shortcuts & Tricks"}</li>
                          <li>{"Quality Study Material"}</li>
                          <li>
                            {
                              "Rs 3999 per 10 sessions of Grammar ( if required )"
                            }
                          </li>
                        </ul>
                      </div>

                      <div class="generic_price_btn clearfix">
                        <Link class="" to="">
                          VIEW COURSE
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-4">
                    <div class="generic_content active clearfix">
                      <div class="generic_head_price clearfix">
                        <div class="generic_head_content clearfix">
                          <img src={PricrIamge2} alt="" width={"100%"} />
                        </div>

                        <div class="generic_price_tag clearfix">
                          <h4 className="fw-bold color-price pb-3">
                            {" "}
                            EXPRESS PROGRAM <br />( GENRERAL )
                          </h4>
                          <span class="price custom-border5">
                            <span class="currency">RS 7,990</span>
                          </span>
                        </div>
                      </div>

                      <div class="generic_feature_list px-5">
                        <ul>
                          <li>{"Duration : 16 Sessions"}</li>
                          <li>{"5 Classes / Week"}</li>
                          <li>{"15-20 Students per Batch"}</li>
                          <li>{"Excellent Faculty Members"}</li>
                          <li>{"Time Saving Shortcuts & Tricks"}</li>
                          <li>{"Quality Study Material"}</li>
                          <li>
                            {
                              "Rs 3999 per 10 sessions of Grammar ( if required )"
                            }
                          </li>
                        </ul>
                      </div>

                      <div class="generic_price_btn clearfix">
                        <Link class="" to="">
                          VIEW COURSE
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="generic_content clearfix">
                      <div class="generic_head_price clearfix">
                        <div class="generic_head_content clearfix">
                          <img src={PricrIamge3} alt="" width={"100%"} />
                        </div>

                        <div class="generic_price_tag clearfix">
                          <h4 className="fw-bold color-price pb-3">
                            {" "}
                            EXPRESS PROGRAM <br />( GENRERAL )
                          </h4>
                          <span class="price custom-border5">
                            <span class="currency">RS 7,990</span>
                          </span>
                        </div>
                      </div>

                      <div class="generic_feature_list px-5">
                        <ul>
                          <li>{"Duration : 16 Sessions"}</li>
                          <li>{"5 Classes / Week"}</li>
                          <li>{"15-20 Students per Batch"}</li>
                          <li>{"Excellent Faculty Members"}</li>
                          <li>{"Time Saving Shortcuts & Tricks"}</li>
                          <li>{"Quality Study Material"}</li>
                          <li>
                            {
                              "Rs 3999 per 10 sessions of Grammar ( if required )"
                            }
                          </li>
                        </ul>
                      </div>

                      <div class="generic_price_btn clearfix">
                        <Link class="" to="">
                          VIEW COURSE
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </Row>
      </Container>


      <Container className="pb-5" fluid>
        <Row className="pb-5" style={{ width: "85%", margin: "auto" }}>
          <Col md={12} sm={12} className="mb-5 pb-5">
            <div className="dispay-New">
              <h2 className="display-6 text-center fw-bold m-0 py-2">
                {" IELTS Academic Packages"}
              </h2>
            </div>
          </Col>
          <div id="generic_price_table">
            <section>
              <div class="container">
                <div class="row">
                  <div class="col-md-4">
                    <div class="generic_content clearfix">
                      <div class="generic_head_price clearfix">
                        <div class="generic_head_content clearfix">
                          <img src={PricrIamge} alt="" width={"100%"} />
                        </div>

                        <div class="generic_price_tag clearfix">
                          <h4 className="fw-bold color-price pb-3">
                            {" "}
                            EXPRESS PROGRAM <br />( GENRERAL )
                          </h4>
                          <span class="price custom-border5">
                            <span class="currency">RS 7,990</span>
                          </span>
                        </div>
                      </div>

                      <div class="generic_feature_list px-5">
                        <ul>
                          <li>{"Duration : 16 Sessions"}</li>
                          <li>{"5 Classes / Week"}</li>
                          <li>{"15-20 Students per Batch"}</li>
                          <li>{"Excellent Faculty Members"}</li>
                          <li>{"Time Saving Shortcuts & Tricks"}</li>
                          <li>{"Quality Study Material"}</li>
                          <li>
                            {
                              "Rs 3999 per 10 sessions of Grammar ( if required )"
                            }
                          </li>
                        </ul>
                      </div>

                      <div class="generic_price_btn clearfix">
                        <Link class="" to="">
                          VIEW COURSE
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-4">
                    <div class="generic_content active clearfix">
                      <div class="generic_head_price clearfix">
                        <div class="generic_head_content clearfix">
                          <img src={PricrIamge2} alt="" width={"100%"} />
                        </div>

                        <div class="generic_price_tag clearfix">
                          <h4 className="fw-bold color-price pb-3">
                            {" "}
                            EXPRESS PROGRAM <br />( GENRERAL )
                          </h4>
                          <span class="price custom-border5">
                            <span class="currency">RS 7,990</span>
                          </span>
                        </div>
                      </div>

                      <div class="generic_feature_list px-5">
                        <ul>
                          <li>{"Duration : 16 Sessions"}</li>
                          <li>{"5 Classes / Week"}</li>
                          <li>{"15-20 Students per Batch"}</li>
                          <li>{"Excellent Faculty Members"}</li>
                          <li>{"Time Saving Shortcuts & Tricks"}</li>
                          <li>{"Quality Study Material"}</li>
                          <li>
                            {
                              "Rs 3999 per 10 sessions of Grammar ( if required )"
                            }
                          </li>
                        </ul>
                      </div>

                      <div class="generic_price_btn clearfix">
                        <Link class="" to="">
                          VIEW COURSE
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="generic_content clearfix">
                      <div class="generic_head_price clearfix">
                        <div class="generic_head_content clearfix">
                          <img src={PricrIamge3} alt="" width={"100%"} />
                        </div>

                        <div class="generic_price_tag clearfix">
                          <h4 className="fw-bold color-price pb-3">
                            {" "}
                            EXPRESS PROGRAM <br />( GENRERAL )
                          </h4>
                          <span class="price custom-border5">
                            <span class="currency">RS 7,990</span>
                          </span>
                        </div>
                      </div>

                      <div class="generic_feature_list px-5">
                        <ul>
                          <li>{"Duration : 16 Sessions"}</li>
                          <li>{"5 Classes / Week"}</li>
                          <li>{"15-20 Students per Batch"}</li>
                          <li>{"Excellent Faculty Members"}</li>
                          <li>{"Time Saving Shortcuts & Tricks"}</li>
                          <li>{"Quality Study Material"}</li>
                          <li>
                            {
                              "Rs 3999 per 10 sessions of Grammar ( if required )"
                            }
                          </li>
                        </ul>
                      </div>

                      <div class="generic_price_btn clearfix">
                        <Link class="" to="">
                          VIEW COURSE
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default Ielts;
