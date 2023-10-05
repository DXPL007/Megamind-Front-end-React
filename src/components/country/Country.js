import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import LivingImage from "../../images/country/lo-hi.png";
import CountryImag1 from "../../images/country/icon/1.png";
import CountryImag2 from "../../images/country/icon/2.png";
import CountryImag3 from "../../images/country/icon/3.png";
import CountryImag4 from "../../images/country/icon/4.png";
import CountryImag5 from "../../images/country/icon/5.png";
import CountryImag6 from "../../images/country/icon/6.png";
import CountryImag7 from "../../images/country/icon/7.png";
import CountryImag8 from "../../images/country/icon/8.png";
import CountryA1 from "../../images/country/icon/a1.png";
import CountryA2 from "../../images/country/icon/a2.png";
import CountryA3 from "../../images/country/icon/a3.png";
import CountryA4 from "../../images/country/icon/a4.png";
import CountryA5 from "../../images/country/icon/a5.png";
import CountryA6 from "../../images/country/icon/a6.png";
import CountryA7 from "../../images/country/icon/a7.png";
import CountryA8 from "../../images/country/icon/a8.png";
import FoodImage1 from "../../images/country/rent.png";
import FoodImage2 from "../../images/country/fast-food.png";
import FoodImage3 from "../../images/country/transportation.png";
import FoodImage4 from "../../images/country/miscellaneous.png";
import TryImage from "../../images/country/iocnimds.png";
import CounSelling from "../../images/country/counselling.png";
import PreParation from "../../images/country/ExamPreparation.jpg";
import Application from "../../images/country/Application.jpg";
import Payment from "../../images/country/Payment.jpg";
import SopLop from "../../images/country/sos.png";
import OfferLetter from "../../images/country/offerletter.png";
import StudentVisa from "../../images/country/visa.png";
import AccomGuid from "../../images/country/rules.png";
import PreDepature from "../../images/country/depeart.png";
import ApliCheck from "../../images/country/apliactionchecklist.jpg";
import UGChecklist from "../../images/country/UGChecklist.jpg";
import PGChecklist from "../../images/country/PGChecklist.jpg";
import VisaChecklist from "../../images/country/VisaChecklist.jpg";
import PdfDownloade from "../../images/country/Application-Check-List-UG-A4.pdf";

import "./country.css";
import { TiTick } from "react-icons/ti";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

var articles = [
  {
    title: "Study in Canada",
    titlee: "for Indian Students",
    desc: "Want to study in Canada? Megamind offers the proper guidance for all the students aspiring to study in Canada. We strive to nurture our students with the best overseas education counselling and help them live their dream of studying abroad.",
  },
];

var [{ title, desc, titlee }] = articles;

function Country() {
  var links = document.querySelectorAll(".toplist li a");
  links.forEach(function (element) {
    element.addEventListener("click", function (e) {
      // PreventDefault to prevent redirect
      e.preventDefault();
      links.forEach(function (element) {
        element.classList.remove("active");
      });
      this.classList.add("active");
    });
  });

  function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
      dots.style.display = "contents";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "contents";
    }
  }

  // Function will execute on click of button
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("../../images/country/Application-Check-List-PG.pdf").then(
      (response) => {
        response.blob().then((blob) => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement("a");
          alink.href = fileURL;
          alink.download = "../../images/country/Application-Check-List-PG.pdf";
          alink.click();
        });
      }
    );
  };

  return (
    <>
      <Container className="padding-top-4 pb-10 country-bg" fluid>
        <Row className="" style={{ width: "88%", margin: "auto" }}>
          <Col sm={12} md={5} className="pb-5 pt-5">
            <img className="w-10" src={TryImage} alt="Flag" />
            <h2 className="display-4 fw-thin">
              {title} <br />
              {titlee}
            </h2>
            <p class="py-4" style={{ fontSize: "18px" }}>
              {desc}
            </p>
            <Link
              to="https://megamindonline.com/course-finder/"
              target="_blank"
            >
              <button
                type="submit"
                class="px-4 py-2 mr-3 btn btn-primary"
                style={{ fontSize: "14px" }}
              >
                {"Get Your Shortlist for free"}
              </button>
            </Link>
            <a href="./#enquiry">
              <button
                type="submit"
                class="px-4 py-2 btn country-mobile btn-secondary btn-white border-0 fw-medium"
                style={{ fontSize: "14px" }}
              >
                {"Talk to an expert "}
              </button>
            </a>
          </Col>

          <Col sm={12} md={7} className="pb-10 countriDisplay">
            {/* <img className="w-100" src={TryImage} alt="Flag" /> */}
          </Col>
        </Row>
      </Container>

      <Container className="padding-5" fluid>
        <Row className="" style={{ width: "85%", margin: "auto" }}>
          <Col sm={12} md={12} className="pb-4">
            <h2 className="display-6"> Fast Facts</h2>
          </Col>

          <Col sm={4} md={3} className="padding-5">
            <div className="Countrty-Icon">
              <img className="w-0" src={CountryImag1} alt="Flag" />
              <p className="fw-bold">
                {"Capital"}
                <br />
                {"Ottawa"}
              </p>
            </div>
          </Col>
          <Col sm={4} md={3} className="padding-5">
            <div className="Countrty-Icon">
              <img className="" src={CountryImag2} alt="Flag" />
              <p className="fw-bold">
                {"Population"}
                <br /> {"38.01 Million"}
              </p>
            </div>
          </Col>

          <Col sm={4} md={3} className="padding-5">
            <div className="Countrty-Icon">
              <img className="" src={CountryImag3} alt="Flag" />
              <p className="fw-bold">
                {"Language"}
                <br /> {"English"}
              </p>
            </div>
          </Col>

          <Col sm={4} md={3} className="padding-5">
            <div className="Countrty-Icon">
              <img className="" src={CountryImag4} alt="Flag" />
              <p className="fw-bold">
                {"International"}
                <br /> {"Students 530,540"}
              </p>
            </div>
          </Col>

          <Col sm={4} md={3} className="padding-5">
            <div className="Countrty-Icon">
              <img className="" src={CountryImag5} alt="Flag" />
              <p className="fw-bold">
                {"GDP"}
                <br /> {"$1.64 Trillion"}
              </p>
            </div>
          </Col>

          <Col sm={4} md={3} className="padding-5">
            <div className="Countrty-Icon">
              <img className="" src={CountryImag6} alt="Flag" />
              <p className="fw-bold">
                {"Currecy"}
                <br /> {"Canadian Dollar"}
              </p>
            </div>
          </Col>

          <Col sm={4} md={3} className="padding-5">
            <div className="Countrty-Icon">
              <img className="" src={CountryImag7} alt="Flag" />
              <p className="fw-bold">
                {"Currecy"}
                <br /> {"Canadian Dollar"}
              </p>
            </div>
          </Col>

          <Col sm={4} md={3} className="padding-5">
            <div className="Countrty-Icon">
              <img className="" src={CountryImag8} alt="Flag" />
              <p className="fw-bold">
                {" Universities"}
                Capital <br /> Ottawa{"534 "}
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="pb-5 margin-top-2" fluid>
        <Row className="hero-bg" style={{ width: "85%", margin: "auto" }}>
          <Col sm={12} md={6} className="hero-inner pb-5">
            <div className="Study-wa">
              <h2 className="display-6"> Why Study in Canada</h2>
              <ul className="list-none pt-4">
                <li>
                  <TiTick className="list-p" />
                  {"Cost Effective Quality Education "}
                </li>
                <li>
                  <TiTick className="list-p" />
                  {"Easy Visa Policy"}
                </li>
                <li>
                  <TiTick className="list-p" />
                  {"Lot Of Opportunity"}
                </li>
                <li>
                  <TiTick className="list-p" />
                  {"Post-study work permit up to 3 years study "}
                </li>
                <li>
                  <TiTick className="list-p" />
                  {"Great scholarships "}
                </li>
                <li>
                  <TiTick className="list-p" />
                  {"Multilingual Society "}
                </li>
                <li>
                  <TiTick className="list-p" />
                  {"Safety, care an support for international students "}
                </li>
                <li>
                  <TiTick className="list-p" />
                  {" Unemployment rate is one of the lowest in the world "}
                </li>
                <li>
                  <TiTick className="list-p" />
                  {"Affordable Living Cost "}
                </li>
                <li>
                  <TiTick className="list-p" />
                  {" Low Tuition Fee "}
                </li>
              </ul>
            </div>
          </Col>
          <Col sm={12} md={6} className="hero-sec pb-5">
            <div className="Study-Ca">
              <p className="co-para m-0">
                {
                  "Canada is a nation renowned for its excellent living and educational standards. When it comes to overall quality of life, the nation comes first."
                }
              </p>
              <br />
              <p className="co-para m-0">
                {
                  "Different student organizations support the professional and personal growth of overseas students. Numerous colleges throughout the nation provide high-quality education at extremely affordable rates. For the past 20 years, Canada has been the top pick for all Indian international students. Indian students don't have trouble adjusting to Canada because there are many Indians, and Indian food is readily available."
                }
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <Container
        className="py-5 MobilePhone"
        style={{ background: "#f9fafc" }}
        fluid
      >
        <Row className="" style={{ width: "90%", margin: "auto" }}>
          <Col sm={12} md={12} className="">
            <Tabs>
              <TabList className="tabrect">
                <Tab className="tabrect-under tabcolor-1">
                  {"University List "}
                </Tab>
                <Tab className="tabrect-under tabcolor-2"> {"Services"} </Tab>
                <Tab className="tabrect-under tabcolor-3">
                  {"Application & Visa Checklist "}
                </Tab>
                <Tab className="tabrect-under tabcolor-4">{"Testimonial"}</Tab>
                <Tab className="tabrect-under tabcolor-5"> {"Team"} </Tab>
              </TabList>

              {/* University List TAB START HERE */
              /* University List TAB START HERE */}

              <TabPanel className="tabrect-t pt-2">
                <Tabs>
                  <TabPanel className="pt-0">
                    <div className="d-grid innergrid2">
                      <ul className="ul-text toplist">
                        <li>
                          <Link
                            className=""
                            to="/university"
                            exact
                          >
                            Acadia University
                          </Link>
                        </li>
                        <li>
                          <Link className="" to="">
                            Acsenda School of Management
                          </Link>
                        </li>
                        <li>
                          <Link className="" to="">
                            Algonquin College
                          </Link>
                        </li>
                        <li>
                          <Link className="" to="">
                            Ascent College
                          </Link>
                        </li>
                        <li>
                          <Link className="" to="">
                            Avalon College
                          </Link>
                        </li>
                        <li>
                          <Link className="" to="">
                            Aviron College
                          </Link>
                        </li>
                        <li>
                          <Link className="" to="">
                            Bow Valley College
                          </Link>
                        </li>
                        <li>
                          <Link className="" to="">
                            Cambrian College
                          </Link>
                        </li>
                        <li>
                          <Link className="" to="">
                            Canada College
                          </Link>
                        </li>
                        <li>
                          <Link className="" to="">
                            Cape Breton University
                          </Link>
                        </li>
                        <li>
                          <Link className="" to="">
                            Capilano University
                          </Link>
                        </li>
                      </ul>
                      <ul className="list2 ul-text toplist">
                        <li>
                          <Link to="">CCSQ-College</Link>
                        </li>
                        <li>
                          <Link to="">CDE College</Link>
                        </li>
                        <li>
                          <Link to="">Cegep Gaspe</Link>
                        </li>
                        <li>
                          <Link to="">Cegep Marie</Link>
                        </li>
                        <li>
                          <Link to="">Centennial College</Link>
                        </li>
                        <li>
                          <Link to="">Coast Mountain College</Link>
                        </li>
                        <li>
                          <Link to="">
                            College National Of Science & Technology
                          </Link>
                        </li>
                        <li>
                          <Link to="">College of New Caledonia</Link>
                        </li>
                        <li>
                          <Link to="">College of the Rockies</Link>
                        </li>
                        <li>
                          <Link to="">College Saint-Michel</Link>
                        </li>
                      </ul>
                      <ul className="ul-text toplist">
                        <li>
                          <Link to="">Conestoga College</Link>
                        </li>
                        <li>
                          <Link to="">Confederation College</Link>
                        </li>
                        <li>
                          <Link to="">Douglas College</Link>
                        </li>
                        <li>
                          <Link to="">Durham College</Link>
                        </li>
                        <li>
                          <Link to="">Fanshawe College</Link>
                        </li>
                        <li>
                          <Link to="">Fleming College</Link>
                        </li>
                        <li>
                          <Link to="">George Brown College</Link>
                        </li>
                        <li>
                          <Link to="">Georgian College</Link>
                        </li>
                        <li>
                          <Link to="">Trent University</Link>
                        </li>
                        <li>
                          <Link to="">University Canada West</Link>
                        </li>
                        <li>
                          <Link to="">University of New Brunswick</Link>
                        </li>
                      </ul>
                    </div>
                  </TabPanel>
                </Tabs>
                <div class="pagination" id="myDIV">
                  <Link className="border-0 btm" to="#">
                    Prev
                  </Link>
                  <Link to="#" className="btm active">
                    1
                  </Link>
                  <Link to="#">2</Link>
                  <Link to="#" className="btm">
                    3
                  </Link>
                  <Link to="#" className="btm">
                    4
                  </Link>
                  <Link to="#" className="btm">
                    5
                  </Link>
                  <Link to="#" className="btm">
                    6
                  </Link>
                  <Link className="border-0" to="#">
                    Next
                  </Link>
                </div>
              </TabPanel>

              {/* service TAB START HERE */
              /* service TAB START HERE */}

              <TabPanel className="tabrect-t pt-2">
                <Tabs>
                  <TabPanel className="pt-0">
                    <div className="d-grid innergrid2 px-4">
                      <div class="wrimagecard wrimagecard-topimage">
                        <Link to="#">
                          <div class="wrimagecard-topimage_header">
                            <center>
                              <img
                                src={CounSelling}
                                alt="counselling"
                                width={"38%"}
                              />
                            </center>
                          </div>
                          <div class="wrimagecard-topimage_title">
                            <h5>
                              {
                                " Counselling Regarding Countries, Colleges, Courses "
                              }
                            </h5>
                          </div>
                        </Link>
                      </div>

                      <div class="wrimagecard wrimagecard-topimage">
                        <Link to="#">
                          <div class="wrimagecard-topimage_header">
                            <center>
                              <img
                                src={PreParation}
                                alt="PreParation"
                                width={"38%"}
                              />
                            </center>
                          </div>
                          <div class="wrimagecard-topimage_title">
                            <h5> Your Exam Preparation (IELTS/PTE) </h5>
                          </div>
                        </Link>
                      </div>

                      <div class="wrimagecard wrimagecard-topimage">
                        <Link to="#">
                          <div class="wrimagecard-topimage_header">
                            <center>
                              <img
                                src={Application}
                                alt="Application"
                                width={"38%"}
                              />
                            </center>
                          </div>
                          <div class="wrimagecard-topimage_title">
                            <h5>
                              {"Submiting Complete Application to Colleges "}
                            </h5>
                          </div>
                        </Link>
                      </div>

                      <div class="wrimagecard wrimagecard-topimage">
                        <Link to="#">
                          <div class="wrimagecard-topimage_header">
                            <center>
                              <img src={Payment} alt="Payment" width={"38%"} />
                            </center>
                          </div>
                          <div class="wrimagecard-topimage_title">
                            <h5> Free Payment & education loans </h5>
                          </div>
                        </Link>
                      </div>

                      <div class="wrimagecard wrimagecard-topimage">
                        <Link to="#">
                          <div class="wrimagecard-topimage_header">
                            <center>
                              <img src={SopLop} alt="SopLop" width={"38%"} />
                            </center>
                          </div>
                          <div class="wrimagecard-topimage_title">
                            <h5> Preparing LOR's SOP's & Colleges Essays </h5>
                          </div>
                        </Link>
                      </div>

                      <div class="wrimagecard wrimagecard-topimage">
                        <Link to="#">
                          <div class="wrimagecard-topimage_header">
                            <center>
                              <img
                                src={OfferLetter}
                                alt="OfferLetter"
                                width={"38%"}
                              />
                            </center>
                          </div>
                          <div class="wrimagecard-topimage_title">
                            <h5> Receiving offer letters </h5>
                          </div>
                        </Link>
                      </div>

                      <div class="wrimagecard wrimagecard-topimage">
                        <Link to="#">
                          <div class="wrimagecard-topimage_header">
                            <center>
                              <img
                                src={StudentVisa}
                                alt="StudentVisa"
                                width={"38%"}
                              />
                            </center>
                          </div>
                          <div class="wrimagecard-topimage_title">
                            <h5> Students Visa Guidance </h5>
                          </div>
                        </Link>
                      </div>

                      <div class="wrimagecard wrimagecard-topimage">
                        <Link to="#">
                          <div class="wrimagecard-topimage_header">
                            <center>
                              <img
                                src={AccomGuid}
                                alt="AccomGuid"
                                width={"38%"}
                              />
                            </center>
                          </div>
                          <div class="wrimagecard-topimage_title">
                            <h5> Accommadation Guidance </h5>
                          </div>
                        </Link>
                      </div>

                      <div class="wrimagecard wrimagecard-topimage">
                        <Link to="#">
                          <div class="wrimagecard-topimage_header">
                            <center>
                              <img
                                src={PreDepature}
                                alt="PreDepature"
                                width={"38%"}
                              />
                            </center>
                          </div>
                          <div class="wrimagecard-topimage_title">
                            <h5> Pre-Depature Orientation </h5>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </TabPanel>
                </Tabs>
              </TabPanel>

              {/* Application & Visa Checklist TAB START HERE */
              /* Application & Visa Checklist TAB START HERE */}

              <TabPanel className="tabrect-t pt-2">
                <Tabs>
                  <TabPanel className="pt-0">
                    <div className="d-grid innergrid3 px-4">
                      <div class="wrimagecard wrimagecard-topimage">
                        <Link onClick={onButtonClick}>
                          <div class="wrimagecard-topimage_header">
                            <center>
                              <img
                                src={ApliCheck}
                                alt="Application"
                                width={"100%"}
                              />
                            </center>
                          </div>
                          <div class="wrimagecard-topimage_title">
                            <h5> {"Application Checklist"} </h5>
                          </div>
                        </Link>
                      </div>

                      <div class="wrimagecard wrimagecard-topimage">
                        <a href={PdfDownloade} download>
                          <div class="wrimagecard-topimage_header">
                            <center>
                              <img
                                src={UGChecklist}
                                alt="Application"
                                width={"100%"}
                              />
                            </center>
                          </div>
                          <div class="wrimagecard-topimage_title">
                            <h5> {"UG Checklist"} </h5>
                          </div>
                        </a>
                      </div>

                      <div class="wrimagecard wrimagecard-topimage">
                        <a
                          href="../../images/country/Application-Check-List-PG.pdf"
                          download
                        >
                          <div class="wrimagecard-topimage_header">
                            <center>
                              <img
                                src={PGChecklist}
                                alt="Application"
                                width={"100%"}
                              />
                            </center>
                          </div>
                          <div class="wrimagecard-topimage_title">
                            <h5> {"PG Checklist"} </h5>
                          </div>
                        </a>
                      </div>

                      <div class="wrimagecard wrimagecard-topimage">
                        <Link href="#" download>
                          <div class="wrimagecard-topimage_header">
                            <center>
                              <img
                                src={VisaChecklist}
                                alt="Application"
                                width={"100%"}
                              />
                            </center>
                          </div>
                          <div class="wrimagecard-topimage_title">
                            <h5> {"Visa Checklist"} </h5>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </TabPanel>
                </Tabs>
              </TabPanel>

              {/* Testimonial TAB START HERE */
              /* Testimonial TAB START HERE */}

              <TabPanel className="tabrect-t pt-2">
                <Tabs>
                  <TabPanel className="pt-0">
                    <div className="d-grid innergrid2 px-4">
                      <div class="wrimagecard wrimagecard-topimage Co-Card">
                        <iframe
                          width="auto"
                          height="169"
                          src="https://www.youtube.com/embed/zvwbPWfa2WQ?rel=0&amp;controls=0&amp;enablejsapi=1&autoplay=0"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowfullscreen
                        ></iframe>
                      </div>

                      <div class="wrimagecard wrimagecard-topimage Co-Card">
                        <iframe
                          width="auto"
                          height="169"
                          src="https://www.youtube.com/embed/QJmlkbjjWIo?rel=0&amp;controls=0&amp;enablejsapi=1&autoplay=0"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowfullscreen
                        ></iframe>
                      </div>

                      <div class="wrimagecard wrimagecard-topimage Co-Card">
                        <iframe
                          width="auto"
                          height="169"
                          src="https://www.youtube.com/embed/dYSmzC4z6g0?rel=0&amp;controls=0&amp;enablejsapi=1&autoplay=0"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowfullscreen
                        ></iframe>
                      </div>

                      <div class="wrimagecard wrimagecard-topimage Co-Card">
                        <iframe
                          width="auto"
                          height="169"
                          src="https://www.youtube.com/embed/AS-QgN5f6SY?rel=0&amp;controls=0&amp;enablejsapi=1&autoplay=0"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowfullscreen
                        ></iframe>
                      </div>

                      <div class="wrimagecard wrimagecard-topimage Co-Card">
                        <iframe
                          width="auto"
                          height="169"
                          src="https://www.youtube.com/embed/zYxZSvhBkRw?rel=0&amp;controls=0&amp;enablejsapi=1&autoplay=0"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowfullscreen
                        ></iframe>
                      </div>

                      <div class="wrimagecard wrimagecard-topimage Co-Card">
                        <iframe
                          width="auto"
                          height="169"
                          src="https://www.youtube.com/embed/OuqxPEpMyV0?rel=0&amp;controls=0&amp;enablejsapi=1&autoplay=0"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowfullscreen
                        ></iframe>
                      </div>

                      <span id="dots"></span>
                      <span id="more">
                        <div class="wrimagecard wrimagecard-topimage Co-Card">
                          <iframe
                            width="auto"
                            height="169"
                            src="https://www.youtube.com/embed/lF7XItt1Xx8?rel=0&amp;controls=0&amp;enablejsapi=1&autoplay=0"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen
                          ></iframe>
                        </div>
                      </span>
                    </div>
                    <button onClick={myFunction} id="myBtn">
                      Read more
                    </button>
                  </TabPanel>
                </Tabs>
              </TabPanel>

              {/* TEAM TAB START HERE */
              /* TEAM TAB START HERE */}
              <TabPanel className="tabrect-t">
                <h1 className="text-center"> Team </h1>
              </TabPanel>
            </Tabs>
          </Col>
        </Row>
      </Container>

      <Container
        className="py-5 DesktopDisplay"
        style={{ background: "#f9fafc" }}
        fluid
      >
        <Row className="" style={{ width: "90%", margin: "auto" }}>
          <Col sm={12} md={12} className="">
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>University List</Accordion.Header>
                <Accordion.Body>
                <div className="d-grid innergrid2">
                      <ul className="ul-text toplist">
                        <li>
                          <Link
                            className=""
                            to="https://mockup4clients.com/megamind/algonquin-college.php"
                            exact
                            target="_blank"
                          >
                            Acadia University
                          </Link>
                        </li>
                        <li>
                          <Link className="" to="">
                            Acsenda School of Management
                          </Link>
                        </li>
                        <li>
                          <Link className="" to="">
                            Algonquin College
                          </Link>
                        </li>
                        <li>
                          <Link className="" to="">
                            Ascent College
                          </Link>
                        </li>
                        <li>
                          <Link className="" to="">
                            Avalon College
                          </Link>
                        </li>
                        <li>
                          <Link className="" to="">
                            Aviron College
                          </Link>
                        </li>
                        <li>
                          <Link className="" to="">
                            Bow Valley College
                          </Link>
                        </li>
                        <li>
                          <Link className="" to="">
                            Cambrian College
                          </Link>
                        </li>
                        <li>
                          <Link className="" to="">
                            Canada College
                          </Link>
                        </li>
                        <li>
                          <Link className="" to="">
                            Cape Breton University
                          </Link>
                        </li>
                        <li>
                          <Link className="" to="">
                            Capilano University
                          </Link>
                        </li>
                      </ul>
                      <ul className="list2 ul-text toplist">
                        <li>
                          <Link to="">CCSQ-College</Link>
                        </li>
                        <li>
                          <Link to="">CDE College</Link>
                        </li>
                        <li>
                          <Link to="">Cegep Gaspe</Link>
                        </li>
                        <li>
                          <Link to="">Cegep Marie</Link>
                        </li>
                        <li>
                          <Link to="">Centennial College</Link>
                        </li>
                        <li>
                          <Link to="">Coast Mountain College</Link>
                        </li>
                        <li>
                          <Link to="">
                            College National Of Science & Technology
                          </Link>
                        </li>
                        <li>
                          <Link to="">College of New Caledonia</Link>
                        </li>
                        <li>
                          <Link to="">College of the Rockies</Link>
                        </li>
                        <li>
                          <Link to="">College Saint-Michel</Link>
                        </li>
                      </ul>
                      <ul className="ul-text toplist">
                        <li>
                          <Link to="">Conestoga College</Link>
                        </li>
                        <li>
                          <Link to="">Confederation College</Link>
                        </li>
                        <li>
                          <Link to="">Douglas College</Link>
                        </li>
                        <li>
                          <Link to="">Durham College</Link>
                        </li>
                        <li>
                          <Link to="">Fanshawe College</Link>
                        </li>
                        <li>
                          <Link to="">Fleming College</Link>
                        </li>
                        <li>
                          <Link to="">George Brown College</Link>
                        </li>
                        <li>
                          <Link to="">Georgian College</Link>
                        </li>
                        <li>
                          <Link to="">Trent University</Link>
                        </li>
                        <li>
                          <Link to="">University Canada West</Link>
                        </li>
                        <li>
                          <Link to="">University of New Brunswick</Link>
                        </li>
                      </ul>
                    </div>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>Services</Accordion.Header>
                <Accordion.Body>
                <div className="d-grid minnergrid2">
                      <div class="wrimagecard wrimagecard-topimage">
                        <Link to="#">
                          <div class="wrimagecard-topimage_header">
                            <center>
                              <img
                                src={CounSelling}
                                alt="counselling"
                                width={"38%"}
                              />
                            </center>
                          </div>
                          <div class="wrimagecard-topimage_title">
                            <h5>
                              {
                                " Counselling Regarding Countries, Colleges, Courses "
                              }
                            </h5>
                          </div>
                        </Link>
                      </div>

                      <div class="wrimagecard wrimagecard-topimage">
                        <Link to="#">
                          <div class="wrimagecard-topimage_header">
                            <center>
                              <img
                                src={PreParation}
                                alt="PreParation"
                                width={"38%"}
                              />
                            </center>
                          </div>
                          <div class="wrimagecard-topimage_title">
                            <h5> Your Exam Preparation (IELTS/PTE) </h5>
                          </div>
                        </Link>
                      </div>

                      <div class="wrimagecard wrimagecard-topimage">
                        <Link to="#">
                          <div class="wrimagecard-topimage_header">
                            <center>
                              <img
                                src={Application}
                                alt="Application"
                                width={"38%"}
                              />
                            </center>
                          </div>
                          <div class="wrimagecard-topimage_title">
                            <h5>
                              {"Submiting Complete Application to Colleges "}
                            </h5>
                          </div>
                        </Link>
                      </div>

                      <div class="wrimagecard wrimagecard-topimage">
                        <Link to="#">
                          <div class="wrimagecard-topimage_header">
                            <center>
                              <img src={Payment} alt="Payment" width={"38%"} />
                            </center>
                          </div>
                          <div class="wrimagecard-topimage_title">
                            <h5> Free Payment & education loans </h5>
                          </div>
                        </Link>
                      </div>

                      <div class="wrimagecard wrimagecard-topimage">
                        <Link to="#">
                          <div class="wrimagecard-topimage_header">
                            <center>
                              <img src={SopLop} alt="SopLop" width={"38%"} />
                            </center>
                          </div>
                          <div class="wrimagecard-topimage_title">
                            <h5> Preparing LOR's SOP's & Colleges Essays </h5>
                          </div>
                        </Link>
                      </div>

                      <div class="wrimagecard wrimagecard-topimage">
                        <Link to="#">
                          <div class="wrimagecard-topimage_header">
                            <center>
                              <img
                                src={OfferLetter}
                                alt="OfferLetter"
                                width={"38%"}
                              />
                            </center>
                          </div>
                          <div class="wrimagecard-topimage_title">
                            <h5> Receiving offer letters </h5>
                          </div>
                        </Link>
                      </div>

                      <div class="wrimagecard wrimagecard-topimage">
                        <Link to="#">
                          <div class="wrimagecard-topimage_header">
                            <center>
                              <img
                                src={StudentVisa}
                                alt="StudentVisa"
                                width={"38%"}
                              />
                            </center>
                          </div>
                          <div class="wrimagecard-topimage_title">
                            <h5> Students Visa Guidance </h5>
                          </div>
                        </Link>
                      </div>

                      <div class="wrimagecard wrimagecard-topimage">
                        <Link to="#">
                          <div class="wrimagecard-topimage_header">
                            <center>
                              <img
                                src={AccomGuid}
                                alt="AccomGuid"
                                width={"38%"}
                              />
                            </center>
                          </div>
                          <div class="wrimagecard-topimage_title">
                            <h5> Accommadation Guidance </h5>
                          </div>
                        </Link>
                      </div>

                      <div class="wrimagecard wrimagecard-topimage">
                        <Link to="#">
                          <div class="wrimagecard-topimage_header">
                            <center>
                              <img
                                src={PreDepature}
                                alt="PreDepature"
                                width={"38%"}
                              />
                            </center>
                          </div>
                          <div class="wrimagecard-topimage_title">
                            <h5> Pre-Depature Orientation </h5>
                          </div>
                        </Link>
                      </div>
                    </div>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header> Application & Visa Checklist </Accordion.Header>
                <Accordion.Body>
                <div className="d-grid minnergrid2">
                      <div class="wrimagecard wrimagecard-topimage">
                        <Link onClick={onButtonClick}>
                          <div class="wrimagecard-topimage_header">
                            <center>
                              <img
                                src={ApliCheck}
                                alt="Application"
                                width={"100%"}
                              />
                            </center>
                          </div>
                          <div class="wrimagecard-topimage_title">
                            <h5> {"Application Checklist"} </h5>
                          </div>
                        </Link>
                      </div>

                      <div class="wrimagecard wrimagecard-topimage">
                        <a href={PdfDownloade} download>
                          <div class="wrimagecard-topimage_header">
                            <center>
                              <img
                                src={UGChecklist}
                                alt="Application"
                                width={"100%"}
                              />
                            </center>
                          </div>
                          <div class="wrimagecard-topimage_title">
                            <h5> {"UG Checklist"} </h5>
                          </div>
                        </a>
                      </div>

                      <div class="wrimagecard wrimagecard-topimage">
                        <a
                          href="../../images/country/Application-Check-List-PG.pdf"
                          download
                        >
                          <div class="wrimagecard-topimage_header">
                            <center>
                              <img
                                src={PGChecklist}
                                alt="Application"
                                width={"100%"}
                              />
                            </center>
                          </div>
                          <div class="wrimagecard-topimage_title">
                            <h5> {"PG Checklist"} </h5>
                          </div>
                        </a>
                      </div>

                      <div class="wrimagecard wrimagecard-topimage">
                        <Link href="#" download>
                          <div class="wrimagecard-topimage_header">
                            <center>
                              <img
                                src={VisaChecklist}
                                alt="Application"
                                width={"100%"}
                              />
                            </center>
                          </div>
                          <div class="wrimagecard-topimage_title">
                            <h5> {"Visa Checklist"} </h5>
                          </div>
                        </Link>
                      </div>
                    </div>
                </Accordion.Body>
              </Accordion.Item>


              <Accordion.Item eventKey="1">
                <Accordion.Header> Testimonial </Accordion.Header>
                <Accordion.Body>
                <div className="d-grid minnergrid2">
                      <div class="wrimagecard wrimagecard-topimage Co-Card">
                        <iframe
                          width="auto"
                          height="169"
                          src="https://www.youtube.com/embed/zvwbPWfa2WQ?rel=0&amp;controls=0&amp;enablejsapi=1&autoplay=0"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowfullscreen
                        ></iframe>
                      </div>

                      <div class="wrimagecard wrimagecard-topimage Co-Card">
                        <iframe
                          width="auto"
                          height="169"
                          src="https://www.youtube.com/embed/QJmlkbjjWIo?rel=0&amp;controls=0&amp;enablejsapi=1&autoplay=0"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowfullscreen
                        ></iframe>
                      </div>

                      <div class="wrimagecard wrimagecard-topimage Co-Card">
                        <iframe
                          width="auto"
                          height="169"
                          src="https://www.youtube.com/embed/dYSmzC4z6g0?rel=0&amp;controls=0&amp;enablejsapi=1&autoplay=0"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowfullscreen
                        ></iframe>
                      </div>

                      <div class="wrimagecard wrimagecard-topimage Co-Card">
                        <iframe
                          width="auto"
                          height="169"
                          src="https://www.youtube.com/embed/AS-QgN5f6SY?rel=0&amp;controls=0&amp;enablejsapi=1&autoplay=0"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowfullscreen
                        ></iframe>
                      </div>

                      <div class="wrimagecard wrimagecard-topimage Co-Card">
                        <iframe
                          width="auto"
                          height="169"
                          src="https://www.youtube.com/embed/zYxZSvhBkRw?rel=0&amp;controls=0&amp;enablejsapi=1&autoplay=0"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowfullscreen
                        ></iframe>
                      </div>

                      <div class="wrimagecard wrimagecard-topimage Co-Card">
                        <iframe
                          width="auto"
                          height="169"
                          src="https://www.youtube.com/embed/OuqxPEpMyV0?rel=0&amp;controls=0&amp;enablejsapi=1&autoplay=0"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowfullscreen
                        ></iframe>
                      </div>

                      <span id="dots"></span>
                      <span id="more">
                        <div class="wrimagecard wrimagecard-topimage Co-Card">
                          <iframe
                            width="auto"
                            height="169"
                            src="https://www.youtube.com/embed/lF7XItt1Xx8?rel=0&amp;controls=0&amp;enablejsapi=1&autoplay=0"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen
                          ></iframe>
                        </div>
                      </span>
                    </div>
                    <button onClick={myFunction} id="myBtn">
                      Read more
                    </button>
                </Accordion.Body>
              </Accordion.Item>



              <Accordion.Item eventKey="1">
                <Accordion.Header> Team </Accordion.Header>
                <Accordion.Body>
                  Our Team
                </Accordion.Body>
              </Accordion.Item>

            </Accordion>
          </Col>
        </Row>
      </Container>

      <Container className="mobile-padding mt-5" fluid>
        <Row className="l-canda pb-5" style={{ width: "85%", margin: "auto" }}>
          <Col sm={12} md={6} className="p-5">
            <h2 className="text-center text-black fw-bold pt-3 pb-5">
              Cost Of Living in Canada
            </h2>
            <div className="Count-C text-center">
              <img className="w-95" src={LivingImage} alt="Flag" />
            </div>
          </Col>

          <Col sm={12} md={6} className="p-4">
            <h2 className="text-center text-black fw-bold pt-4 pb-4">
              Monthly Living Expenses in Canada
            </h2>
            <div className="Count-Cd  text-center px-4">
              <div className="Count-Cda py-4">
                <img className="" src={FoodImage1} alt="Flag" />
                <h5 className="fw-bold text-black m-0 pt-2"> Rent </h5>
                <h5 className="fw-meduim m-0 pb-3"> CA$ 318 - CA$ 2389 </h5>
              </div>
              <div className="Count-Cda py-4">
                <img className="" src={FoodImage2} alt="Flag" />
                <h5 className="fw-bold text-black m-0 pt-2"> Food </h5>
                <h5 className="fw-meduim m-0 pb-3"> CA$ 318 - CA$ 637 </h5>
              </div>
              <div className="Count-Cda py-4">
                <img className="" src={FoodImage3} alt="Flag" />
                <h5 className="fw-bold text-black m-0 pt-2"> Transport </h5>
                <h5 className="fw-meduim  m-0 pb-3"> CA$ 63 - CA$ 159 </h5>
              </div>
              <div className="Count-Cda py-4">
                <img className="" src={FoodImage4} alt="Flag" />
                <h5 className="fw-bold text-black m-0 pt-2"> Miscellaneous </h5>
                <h5 className="fw-meduim m-0 pb-3"> CA$ 79 - CA$ 398 </h5>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="mobile-padding" fluid>
        <Row className="" style={{ width: "85%", margin: "auto" }}>
          <Col sm={12} md={12} className="pb-4">
            <h2 className="display-6 text-center">
              {" Part Time Careers and work Opportunities in Canada"}
            </h2>
          </Col>

          <Col sm={4} md={3} className="padding-b-5">
            <div className="Countrty-Icon">
              <img className="w-0" src={CountryA1} alt="Flag" />
              <p className="fw-bold">
                {"Arts and "}
                <br />
                {"Humanities"}
              </p>
            </div>
          </Col>
          <Col sm={4} md={3} className="padding-b-5">
            <div className="Countrty-Icon">
              <img className="" src={CountryA2} alt="Flag" />
              <p className="fw-bold">
                {"Law and"}
                <br /> {"Legal Studies"}
              </p>
            </div>
          </Col>

          <Col sm={4} md={3} className="padding-b-5">
            <div className="Countrty-Icon">
              <img className="" src={CountryA3} alt="Flag" />
              <p className="fw-bold">{"Architecture"}</p>
            </div>
          </Col>

          <Col sm={4} md={3} className="padding-b-5">
            <div className="Countrty-Icon">
              <img className="" src={CountryA4} alt="Flag" />
              <p className="fw-bold">
                {"Medicine and"}
                <br /> {"Life Sciences"}
              </p>
            </div>
          </Col>

          <Col sm={4} md={3} className="padding-b-5">
            <div className="Countrty-Icon">
              <img className="" src={CountryA5} alt="Flag" />
              <p className="fw-bold">
                {"Social"}
                <br /> {"Sciences"}
              </p>
            </div>
          </Col>

          <Col sm={4} md={3} className="padding-b-5">
            <div className="Countrty-Icon">
              <img className="" src={CountryA6} alt="Flag" />
              <p className="fw-bold">
                {"Engineering "}
                <br /> {"and Technology"}
              </p>
            </div>
          </Col>

          <Col sm={4} md={3} className="padding-b-5">
            <div className="Countrty-Icon">
              <img className="" src={CountryA7} alt="Flag" />
              <p className="fw-bold">{"Design"}</p>
            </div>
          </Col>

          <Col sm={4} md={3} className="padding-b-5">
            <div className="Countrty-Icon">
              <img className="" src={CountryA8} alt="Flag" />
              <p className="fw-bold">
                {" Natural"}
                Capital <br /> Ottawa{"Sciences"}
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Country;
