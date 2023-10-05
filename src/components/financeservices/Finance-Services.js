import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./finance.css";
import FirstImage1 from "../../images/finance/first1.png";
import FirstImage2 from "../../images/finance/first2.png";
import FirstImage3 from "../../images/finance/first3.png";
import FirstImage4 from "../../images/finance/first4.png";
import FirstImage5 from "../../images/finance/first5.png";
import FirstImage6 from "../../images/finance/first6.png";
import LeftImage from "../../images/finance/arrow-left.png";
import RightImage from "../../images/finance/arrow-right.png";
import ImageEmi from "../../images/finance/ghfdh.png";









function FinanceServices() {
  return (
    <>
      <Container className="py-5" fluid style={{ background: "#d7ebf6" }}>
        <Row className="" style={{ width: "75%", margin: "auto" }}>
          <Col sm={12} md={6} className="py-2">
            <h2
              className="display-3 fw-bolder text-black"
              style={{ lineHeight: "56px" }}
            >
              <span style={{ color: "#006bb9" }}>Finance</span> Your{" "}
              <span style={{ color: "#006bb9" }}> Study Abroad </span> Dreams
            </h2>
            <p className="h2 fw-bold text-black">
              {"with "}
              <span style={{ color: "#006bb9" }}>{"Affrordable Loans "}</span>
              {" from"}
              <span style={{ color: "#006bb9" }}>
                {" 10+ Banking Partners"}
              </span>
            </p>
            <button
              type="submit"
              class="my-2 py-2 px-6 btn btn-primary btn-sm fw-bold"
            >
              {"Calculate your EMI "}
            </button>
            <br />
            <button
              type="submit"
              class="py-2 px-6 btn btn-outline-primary btn-sm fw-bold"
            >
              {" Request Callback "}
            </button>
          </Col>

          <Col sm={12} md={6} className="py-5 px-5">
           <img src={ImageEmi} alt="Emi Calculater" width={"100%"}/>
          </Col>
        </Row>
      </Container>

      <Container className="py-5" fluid>
        <Row className="" style={{ width: "87%", margin: "auto" }}>
          <Col sm={12} md={12} className="py-2 text-center pb-4">
            <h2 className="display-6 fw-medium text-black">
              WHY <strong style={{ color: "#006bb9" }}>CHOOSE</strong> US ?
            </h2>
          </Col>
          <Col sm={12} md={4} className="">
            <div class="box-part box-layou text-left px-5 py-4">
              <img src={FirstImage1} alt="most" />
              <div class="title pt-2 custom-border2">
                <h5>Comprehensive</h5>
              </div>
              <div class="text pb-3">
                <small>
                Avail up to 100% finance for your tuition fee & living costs
                </small>
              </div>
            </div>
          </Col>
          <Col sm={12} md={4} className="">
            <div class="box-part box-layou text-left px-5 py-4">
              <img src={FirstImage2} alt="most" />
              <div class="title pt-2 custom-border2">
                <h5>Entirely Digital</h5>
              </div>
              <div class="text pb-3">
                <small>
                Cut the queue with our truly online, end-to-end loan offering
                </small>
              </div>
            </div>
          </Col>
          <Col sm={12} md={4} className="">
            <div class="box-part box-layou text-left px-5 py-4">
              <img src={FirstImage3} alt="most" />
              <div class="title pt-2 custom-border2">
                <h5>Lowest Interest Rates</h5>
              </div>
              <div class="text pb-3">
                <small>
                Access global education opportunities with the lowest loan interest rates
                </small>
              </div>
            </div>
          </Col>
          <Col sm={12} md={4} className="">
            <div class="box-part box-layou text-left px-5 py-4">
              <img src={FirstImage4} alt="most" />
              <div class="title pt-2 custom-border2">
                <h5>Fast Processing</h5>
              </div>
              <div class="text pb-3">
                <small>
                Avail up to 100% finance for your tuition fee & living costs
                </small>
              </div>
            </div>
          </Col>
          <Col sm={12} md={4} className="">
            <div class="box-part box-layou text-left px-5 py-4">
              <img src={FirstImage5} alt="most" />
              <div class="title pt-2 custom-border2">
                <h5>Flexible Repayment</h5>
              </div>
              <div class="text pb-3">
                <small>
                Get easy EMIs with flexible repayment structures
                </small>
              </div>
            </div>
          </Col>
          <Col sm={12} md={4} className="">
            <div class="box-part box-layou text-left px-5 py-4">
              <img src={FirstImage6} alt="most" />
              <div class="title pt-2 custom-border2">
                <h5>Easy Application</h5>
              </div>
              <div class="text pb-3">
                <small>
                File a common application for all lenders & we take care of the rest
                </small>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="py-5" fluid style={{ background: "#f3f3f3" }}>
        <Row className="" style={{ width: "87%", margin: "auto" }}>
          <Col sm={12} md={12} className="py-2 text-center pb-4">
            <h2 className="display-6 fw-medium text-black">
              <strong style={{ color: "#006bb9" }}>HOW </strong>IT{" "}
              <strong style={{ color: "#006bb9" }}>WORK</strong>
            </h2>
          </Col>
          <Col sm={12} md={3} className="">
            <div class="box-part box-layou text-left px-4">
              <div class="title pt-2 custom-border2">
                <h5>Requirement</h5>
              </div>
              <div class="text pb-3">
                <small>
                Avail up to 100% finance for your tuition fee & living costs
                </small>
              </div>
            </div>
          </Col>
          <Col sm={12} md={3} className="">
            <div class="box-part box-layou text-left px-4">
              <div class="title pt-2 custom-border2">
                <h5>Documentation</h5>
              </div>
              <div class="text pb-3">
                <small>
                      Upload your documents for verification
                </small>
              </div>
            </div>
          </Col>
          <Col sm={12} md={3} className="">
            <div class="box-part box-layou text-left px-4">
              <div class="title pt-2 custom-border2">
                <h5> Application </h5>
              </div>
              <div class="text pb-3">
                <small>
                Apply to multiple loan providers as per eligibility
                </small>
              </div>
            </div>
          </Col>

          <Col sm={12} md={3} className="">
            <div class="box-part box-layou text-left px-4">
              <div class="title pt-2 custom-border2">
                <h5> Disbursal </h5>
              </div>
              <div class="text pb-3">
                <small>
                Take disbursal from the bank sanctioning loan at best interest rate
                </small>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="pb-5">
        <Row>
          <div class="col-sm-12">
            <div id="myCarousel" class="carousel makecarsoule slide" data-ride="carousel">
              <h2 className="text-center pb-3">
                Customer <b>Testimonials</b>
              </h2>


              {/* <!-- Wrapper for carousel items --> */}
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="row">
                    <div class="col-sm-4">
                      <div class="testi">
                        <div class="testimonial">
                          <p>
                          {"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo  viverra maecenas accumsan lacus vel facilisis. "}
                          </p>
                        </div>
                        <div class="media">
                          <div class="media-body">
                            <div class="overview">
                              <div class="name">
                              <b>{"Harish Kumar"}</b>
                              </div>
                              <div class="details">
                              {"University Name"}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-4">
                      <div class="testi">
                        <div class="testimonial">
                          <p>
                          {"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo  viverra maecenas accumsan lacus vel facilisis. "}
=
                          </p>
                        </div>
                        <div class="media">
                          <div class="media-body">
                            <div class="overview">
                              <div class="name">
                              <b>{"Harish Kumar"}</b>
                              </div>
                              <div class="details">
                              {"University Name"}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-4">
                      <div class="testi">
                        <div class="testimonial">
                          <p>
                          {"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo  viverra maecenas accumsan lacus vel facilisis. "}
                         
                          </p>
                        </div>
                        <div class="media">
                          <div class="media-body">
                            <div class="overview">
                              <div class="name">
                              <b>{"Harish Kumar"}</b>
                              </div>
                              <div class="details">
                              {"University Name"}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="row">
                    <div class="col-sm-4">
                      <div class="testi">
                        <div class="testimonial">
                          <p>
                          {"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo  viverra maecenas accumsan lacus vel facilisis. "}
                          </p>
                        </div>
                        <div class="media">
                          <div class="media-body">
                            <div class="overview">
                              <div class="name">
                              <b>{"Harish Kumar"}</b>
                              </div>
                              <div class="details">
                              {"University Name"}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-4">
                      <div class="testi">
                        <div class="testimonial">
                          <p>
                          {"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo  viverra maecenas accumsan lacus vel facilisis. "}
                          </p>
                        </div>
                        <div class="media">
                          <div class="media-body">
                            <div class="overview">
                              <div class="name">
                                <b>{"Harish Kumar"}</b>
                              </div>
                              <div class="details">
                              {"University Name"}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-4">
                      <div class="testi">
                        <div class="testimonial">
                          <p>
                          {"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo  viverra maecenas accumsan lacus vel facilisis. "}

                          </p>
                        </div>
                        <div class="media">
                          <div class="media-body">
                            <div class="overview">
                              <div class="name">
                              <b>{"Harish Kumar"}</b>
                              </div>
                              <div class="details">
                              {"University Name"}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="row">
                    <div class="col-sm-4">
                      <div class="testi">
                        <div class="testimonial">
                          <p>
                          {"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo  viverra maecenas accumsan lacus vel facilisis. "}

                          </p>
                        </div>
                        <div class="media">
                          <div class="media-body">
                            <div class="overview">
                              <div class="name">
                              <b>{"Harish Kumar"}</b>
                              </div>
                              <div class="details">
                              {"University Name"}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-4">
                      <div class="testi">
                        <div class="testimonial">
                          <p>
                          {"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo  viverra maecenas accumsan lacus vel facilisis. "}

                          </p>
                        </div>
                        <div class="media">
                          <div class="media-body">
                            <div class="overview">
                              <div class="name">
                                <b>{"Harish Kumar"}</b>
                              </div>
                              <div class="details">
                              {"University Name"}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-4">
                      <div class="testi">
                        <div class="testimonial">
                          <p>
                          {"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo  viverra maecenas accumsan lacus vel facilisis. "}

                          </p>
                        </div>
                        <div class="media">
                          <div class="media-body">
                            <div class="overview">
                    
                              <div class="name text-white">
                              <b>{"Harish Kumar"}</b>
                              </div>
                              <div class="details">
                                {"University Name"}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Carousel controls --> */}
              <a
                class="carousel-control-prev"
                href="#myCarousel"
                data-slide="prev"
              >
               
               <img src={RightImage} alt="most" />
              </a>
              <a
                class="carousel-control-next"
                href="#myCarousel"
                data-slide="next"
              >
             <img src={LeftImage} alt="most" />
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
}
export default FinanceServices;
