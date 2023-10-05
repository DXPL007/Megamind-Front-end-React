import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./university.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { NavLink, Outlet } from "react-router-dom";
import ProgImage from "../../images/university/programlist.png";
import UniversityIcon from "../../images/university/icond.png";
import UniversityImage from "../../images/university/univers.png";
import AccOmmo from "../../images/university/accour.png";
import AccOmmo1 from "../../images/university/accour2.png";
import AccOmmo2 from "../../images/university/accour3.png";
import AccOmmo3 from "../../images/university/accour4.png";

import LifeImage from "../../images/university/life/1.png";
import LifeImage1 from "../../images/university/life/2.png";
import LifeImage2 from "../../images/university/life/3.png";
import LifeImage3 from "../../images/university/life/4.png";
import LifeImage4 from "../../images/university/life/5.png";
import LifeImage5 from "../../images/university/life/6.png";
import LifeImage6 from "../../images/university/life/7.png";
import LifeImage7 from "../../images/university/life/8.png";
import LifeImage8 from "../../images/university/life/9.png";
import LifeImage9 from "../../images/university/life/10.png";
import LifeImage10 from "../../images/university/life/11.png";
import LifeImage11 from "../../images/university/life/12.png";

import CountryA1 from "../../images/country/icon/a1.png";
import CountryA2 from "../../images/country/icon/a2.png";
import CountryA3 from "../../images/country/icon/a3.png";
import CountryA4 from "../../images/country/icon/a4.png";
import CountryA5 from "../../images/country/icon/a5.png";
import CountryA6 from "../../images/country/icon/a6.png";

var articles = [
  {
    title: "Algonquin ",
    titlee: "College",
  },
];

var [{ title, titlee }] = articles;

const University = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <Container className="padding-top-4 pb-10 university-bg" fluid>
        <Row className="" style={{ width: "80%", margin: "auto" }}>
          <Col sm={12} md={5} className="pb-5 pt-5">
            <h2 className="display-4 pb-3">
              {title} <br />
              {titlee}
            </h2>

            <Link
              to="https://megamindonline.com/course-finder/"
              target="_blank"
            >
              <button
                type="submit"
                className="px-4 mr-3 btn btn-primary"
                style={{ fontSize: "14px" }}
              >
                {"Apply Now "}
              </button>
            </Link>
            <a href="./#enquiry">
              <button
                type="submit"
                className="px-4 mr-3 btn btn-primary"
                style={{ fontSize: "14px" }}
              >
                {" Download Brochure "}
              </button>
            </a>
          </Col>

          <Col sm={12} md={7} className="pb-10 countriDisplay">
            {/* <img className="w-100" src={TryImage} alt="Flag" /> */}
          </Col>
        </Row>
      </Container>

      <Container className="pt-5 pb-5 margin-top-2" fluid>
        <Row className="" style={{ width: "90%", margin: "auto" }}>
          <Col sm={12} md={12} className="pb-4 text-center">
            <h2 className="display-6"> Algonquin College </h2>
          </Col>
        </Row>
        <Row className="hero-bg" style={{ width: "85%", margin: "auto" }}>
          <Col sm={12} md={6} className="univers-inner">
            <img src={UniversityImage} alt="imageuiversity" width={"100%"} />
          </Col>
          <Col sm={12} md={6} className="university-sec">
            <div className="Study-wa">
              <h2 className="display-6"> Why Algonquin College ? </h2>
              <ul className="list-no pt-4">
                <li className="d-flex align-items-start">
                  <img
                    className="margin-rightside"
                    src={UniversityIcon}
                    alt="Flag"
                    width={"20px"}
                  />
                  {
                    "Diverse areas of studies that answer to the needs of today’s employment market.Cost Effective Quality Education "
                  }
                </li>
                <li className="d-flex align-items-start">
                  <img
                    className="margin-rightside"
                    src={UniversityIcon}
                    alt="Flag"
                    width={"20px"}
                  />

                  {
                    "Diverse areas of studies that answer to the needs of today’s employment market."
                  }
                </li>
                <li className="d-flex align-items-start">
                  <img
                    className="margin-rightside"
                    src={UniversityIcon}
                    alt="Flag"
                    width={"20px"}
                  />

                  {
                    "A student-centered approach that promotes success through hands-on, experiential teaching."
                  }
                </li>
                <li className="d-flex align-items-start">
                  <img
                    className="margin-rightside"
                    src={UniversityIcon}
                    alt="Flag"
                    width={"20px"}
                  />

                  {
                    " 200 bachelor degrees, postgraduate, diploma and certificate programs."
                  }
                </li>
                <li className="d-flex align-items-start">
                  <img
                    className="margin-rightside"
                    src={UniversityIcon}
                    alt="Flag"
                    width={"20px"}
                  />
                  {
                    " Modern facilities and strategic partnerships that ensure students have access to the quality education."
                  }
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="padding-5" fluid>
        <Row className="" style={{ width: "90%", margin: "auto" }}>
          <Col sm={12} md={12} className="pb-4 text-center">
            <h2 className="display-6"> Available Courses </h2>
          </Col>

          {/* Fist Courses Start Here*/}

          <Col sm={12} md={4} className="mb-4">
            <div className="subcours">
              <div className="subcourses-pro col-sm-12 p-0">
                <img
                  src="https://images.leverageedu.com/university/courses.png"
                  alt="leverage"
                />
                <div style={{ marginLeft: "16px" }}>
                  <span className="subcourses_h-title__zuIFF">
                    Graduate Certificate in Adult Care Nurse Practitioner
                  </span>
                  <span class="subcourses_subHeading__eJmcM"></span>
                </div>
              </div>
              <div className="subcourses_line__UCMCv"></div>
              <Row className="align-items-center">
                <Col sm={4} md={4} className="clearfix">
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">CAD 14,181/year</h3>
                    <p className="subcoursesc-title">Fee</p>
                  </div>
                </Col>
                <Col sm={4} md={4}>
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">24 Months</h3>
                    <p className="subcoursesc-title">Duration</p>
                  </div>
                </Col>
                <Col sm={4} md={4}>
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">IELTS: 6.5</h3>
                    <p className="subcoursesc-title">Qualification</p>
                  </div>
                </Col>
                <Col sm={4} md={4} className="mt-2">
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">Bachelors</h3>
                    <p className="subcoursesc-title">Course level</p>
                  </div>
                </Col>
                <Col sm={4} md={4} className="mt-2">
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">On Campus </h3>
                    <p className="subcoursesc-title">Mode of Degree</p>
                  </div>
                </Col>
                <Col sm={4} md={4} className="mt-2">
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc"> Jan, May, Sep</h3>
                    <p className="subcoursesc-title">Intakes</p>
                  </div>
                </Col>
                <Col sm={4} md={12}>
                  <div className="subcour-bottom"></div>
                  <p className="Subcourses-Bottom">
                    <div className="maxHeight_2">
                      This course by Mcgill University will take you through all
                      the core insights of the field. Along with theoretical
                      concepts, you...
                    </div>
                    <Link className="text-primary cursor-pointer undefined">
                      Read More
                    </Link>
                  </p>
                </Col>
              </Row>
            </div>
            <div className="text-right w-100">
              <button className="subcourses-button btn-lg w-100">
                Apply Now
                <img
                  src="https://images.leverageedu.com/university/whitearrow.svg"
                  alt="whitearrow"
                  style={{ marginleft: "4px" }}
                />
              </button>
            </div>
          </Col>

          {/* Fist Courses End Here*/}

          {/* Second Courses Start Here*/}

          <Col sm={12} md={4} className="mb-4">
            <div className="subcours">
              <div className="subcourses-pro col-sm-12 p-0">
                <img
                  src="https://images.leverageedu.com/university/courses.png"
                  alt="leverage"
                />
                <div style={{ marginLeft: "16px" }}>
                  <span className="subcourses_h-title__zuIFF">
                    Graduate Certificate in Adult Care Nurse Practitioner
                  </span>
                  <span class="subcourses_subHeading__eJmcM"></span>
                </div>
              </div>
              <div className="subcourses_line__UCMCv"></div>
              <Row className="align-items-center">
                <Col sm={4} md={4} className="clearfix">
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">CAD 14,181/year</h3>
                    <p className="subcoursesc-title">Fee</p>
                  </div>
                </Col>
                <Col sm={4} md={4}>
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">24 Months</h3>
                    <p className="subcoursesc-title">Duration</p>
                  </div>
                </Col>
                <Col sm={4} md={4}>
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">IELTS: 6.5</h3>
                    <p className="subcoursesc-title">Qualification</p>
                  </div>
                </Col>
                <Col sm={4} md={4} className="mt-2">
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">Bachelors</h3>
                    <p className="subcoursesc-title">Course level</p>
                  </div>
                </Col>
                <Col sm={4} md={4} className="mt-2">
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">On Campus </h3>
                    <p className="subcoursesc-title">Mode of Degree</p>
                  </div>
                </Col>
                <Col sm={4} md={4} className="mt-2">
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc"> Jan, May, Sep</h3>
                    <p className="subcoursesc-title">Intakes</p>
                  </div>
                </Col>
                <Col sm={4} md={12}>
                  <div className="subcour-bottom"></div>
                  <p className="Subcourses-Bottom">
                    <div className="maxHeight_2">
                      This course by Mcgill University will take you through all
                      the core insights of the field. Along with theoretical
                      concepts, you...
                    </div>
                    <Link className="text-primary cursor-pointer undefined">
                      Read More
                    </Link>
                  </p>
                </Col>
              </Row>
            </div>
            <div className="text-right w-100">
              <button className="subcourses-button btn-lg w-100">
                Apply Now
                <img
                  src="https://images.leverageedu.com/university/whitearrow.svg"
                  alt="whitearrow"
                  style={{ marginleft: "4px" }}
                />
              </button>
            </div>
          </Col>

          {/* Second Courses End Here*/}

          {/* Third Courses Start Here*/}

          <Col sm={12} md={4} className="mb-4">
            <div className="subcours">
              <div className="subcourses-pro col-sm-12 p-0">
                <img
                  src="https://images.leverageedu.com/university/courses.png"
                  alt="leverage"
                />
                <div style={{ marginLeft: "16px" }}>
                  <span className="subcourses_h-title__zuIFF">
                    Graduate Certificate in Adult Care Nurse Practitioner
                  </span>
                  <span class="subcourses_subHeading__eJmcM"></span>
                </div>
              </div>
              <div className="subcourses_line__UCMCv"></div>
              <Row className="align-items-center">
                <Col sm={4} md={4} className="clearfix">
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">CAD 14,181/year</h3>
                    <p className="subcoursesc-title">Fee</p>
                  </div>
                </Col>
                <Col sm={4} md={4}>
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">24 Months</h3>
                    <p className="subcoursesc-title">Duration</p>
                  </div>
                </Col>
                <Col sm={4} md={4}>
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">IELTS: 6.5</h3>
                    <p className="subcoursesc-title">Qualification</p>
                  </div>
                </Col>
                <Col sm={4} md={4} className="mt-2">
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">Bachelors</h3>
                    <p className="subcoursesc-title">Course level</p>
                  </div>
                </Col>
                <Col sm={4} md={4} className="mt-2">
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">On Campus </h3>
                    <p className="subcoursesc-title">Mode of Degree</p>
                  </div>
                </Col>
                <Col sm={4} md={4} className="mt-2">
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc"> Jan, May, Sep</h3>
                    <p className="subcoursesc-title">Intakes</p>
                  </div>
                </Col>
                <Col sm={4} md={12}>
                  <div className="subcour-bottom"></div>
                  <p className="Subcourses-Bottom">
                    <div className="maxHeight_2">
                      This course by Mcgill University will take you through all
                      the core insights of the field. Along with theoretical
                      concepts, you...
                    </div>
                    <Link className="text-primary cursor-pointer undefined">
                      Read More
                    </Link>
                  </p>
                </Col>
              </Row>
            </div>
            <div className="text-right w-100">
              <button className="subcourses-button btn-lg w-100">
                Apply Now
                <img
                  src="https://images.leverageedu.com/university/whitearrow.svg"
                  alt="whitearrow"
                  style={{ marginleft: "4px" }}
                />
              </button>
            </div>
          </Col>

          {/* Third Courses End Here*/}

          {/* Fourth Courses Start Here*/}
          <Col sm={12} md={4} className="mb-4">
            <div className="subcours">
              <div className="subcourses-pro col-sm-12 p-0">
                <img
                  src="https://images.leverageedu.com/university/courses.png"
                  alt="leverage"
                />
                <div style={{ marginLeft: "16px" }}>
                  <span className="subcourses_h-title__zuIFF">
                    Graduate Certificate in Adult Care Nurse Practitioner
                  </span>
                  <span class="subcourses_subHeading__eJmcM"></span>
                </div>
              </div>
              <div className="subcourses_line__UCMCv"></div>
              <Row className="align-items-center">
                <Col sm={4} md={4} className="clearfix">
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">CAD 14,181/year</h3>
                    <p className="subcoursesc-title">Fee</p>
                  </div>
                </Col>
                <Col sm={4} md={4}>
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">24 Months</h3>
                    <p className="subcoursesc-title">Duration</p>
                  </div>
                </Col>
                <Col sm={4} md={4}>
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">IELTS: 6.5</h3>
                    <p className="subcoursesc-title">Qualification</p>
                  </div>
                </Col>
                <Col sm={4} md={4} className="mt-2">
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">Bachelors</h3>
                    <p className="subcoursesc-title">Course level</p>
                  </div>
                </Col>
                <Col sm={4} md={4} className="mt-2">
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">On Campus </h3>
                    <p className="subcoursesc-title">Mode of Degree</p>
                  </div>
                </Col>
                <Col sm={4} md={4} className="mt-2">
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc"> Jan, May, Sep</h3>
                    <p className="subcoursesc-title">Intakes</p>
                  </div>
                </Col>
                <Col sm={4} md={12}>
                  <div className="subcour-bottom"></div>
                  <p className="Subcourses-Bottom">
                    <div className="maxHeight_2">
                      This course by Mcgill University will take you through all
                      the core insights of the field. Along with theoretical
                      concepts, you...
                    </div>
                    <Link className="text-primary cursor-pointer undefined">
                      Read More
                    </Link>
                  </p>
                </Col>
              </Row>
            </div>
            <div className="text-right w-100">
              <button className="subcourses-button btn-lg w-100">
                Apply Now
                <img
                  src="https://images.leverageedu.com/university/whitearrow.svg"
                  alt="whitearrow"
                  style={{ marginleft: "4px" }}
                />
              </button>
            </div>
          </Col>
          {/* Fourth Courses End Here*/}

          {/* Five Courses Start Here*/}
          <Col sm={12} md={4} className="mb-4">
            <div className="subcours">
              <div className="subcourses-pro col-sm-12 p-0">
                <img
                  src="https://images.leverageedu.com/university/courses.png"
                  alt="leverage"
                />
                <div style={{ marginLeft: "16px" }}>
                  <span className="subcourses_h-title__zuIFF">
                    Graduate Certificate in Adult Care Nurse Practitioner
                  </span>
                  <span class="subcourses_subHeading__eJmcM"></span>
                </div>
              </div>
              <div className="subcourses_line__UCMCv"></div>
              <Row className="align-items-center">
                <Col sm={4} md={4} className="clearfix">
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">CAD 14,181/year</h3>
                    <p className="subcoursesc-title">Fee</p>
                  </div>
                </Col>
                <Col sm={4} md={4}>
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">24 Months</h3>
                    <p className="subcoursesc-title">Duration</p>
                  </div>
                </Col>
                <Col sm={4} md={4}>
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">IELTS: 6.5</h3>
                    <p className="subcoursesc-title">Qualification</p>
                  </div>
                </Col>
                <Col sm={4} md={4} className="mt-2">
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">Bachelors</h3>
                    <p className="subcoursesc-title">Course level</p>
                  </div>
                </Col>
                <Col sm={4} md={4} className="mt-2">
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">On Campus </h3>
                    <p className="subcoursesc-title">Mode of Degree</p>
                  </div>
                </Col>
                <Col sm={4} md={4} className="mt-2">
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc"> Jan, May, Sep</h3>
                    <p className="subcoursesc-title">Intakes</p>
                  </div>
                </Col>
                <Col sm={4} md={12}>
                  <div className="subcour-bottom"></div>
                  <p className="Subcourses-Bottom">
                    <div className="maxHeight_2">
                      This course by Mcgill University will take you through all
                      the core insights of the field. Along with theoretical
                      concepts, you...
                    </div>
                    <Link className="text-primary cursor-pointer undefined">
                      Read More
                    </Link>
                  </p>
                </Col>
              </Row>
            </div>
            <div className="text-right w-100">
              <button className="subcourses-button btn-lg w-100">
                Apply Now
                <img
                  src="https://images.leverageedu.com/university/whitearrow.svg"
                  alt="whitearrow"
                  style={{ marginleft: "4px" }}
                />
              </button>
            </div>
          </Col>
          {/* Five Courses End Here*/}

          {/* Six Courses Start Here*/}
          <Col sm={12} md={4} className="mb-4">
            <div className="subcours">
              <div className="subcourses-pro col-sm-12 p-0">
                <img
                  src="https://images.leverageedu.com/university/courses.png"
                  alt="leverage"
                />
                <div style={{ marginLeft: "16px" }}>
                  <span className="subcourses_h-title__zuIFF">
                    Graduate Certificate in Adult Care Nurse Practitioner
                  </span>
                  <span class="subcourses_subHeading__eJmcM"></span>
                </div>
              </div>
              <div className="subcourses_line__UCMCv"></div>
              <Row className="align-items-center">
                <Col sm={4} md={4} className="clearfix">
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">CAD 14,181/year</h3>
                    <p className="subcoursesc-title">Fee</p>
                  </div>
                </Col>
                <Col sm={4} md={4}>
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">24 Months</h3>
                    <p className="subcoursesc-title">Duration</p>
                  </div>
                </Col>
                <Col sm={4} md={4}>
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">IELTS: 6.5</h3>
                    <p className="subcoursesc-title">Qualification</p>
                  </div>
                </Col>
                <Col sm={4} md={4} className="mt-2">
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">Bachelors</h3>
                    <p className="subcoursesc-title">Course level</p>
                  </div>
                </Col>
                <Col sm={4} md={4} className="mt-2">
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc">On Campus </h3>
                    <p className="subcoursesc-title">Mode of Degree</p>
                  </div>
                </Col>
                <Col sm={4} md={4} className="mt-2">
                  <div className="subcourses_details__6Pow6">
                    <h3 className="Subcourses-Desc"> Jan, May, Sep</h3>
                    <p className="subcoursesc-title">Intakes</p>
                  </div>
                </Col>
                <Col sm={4} md={12}>
                  <div className="subcour-bottom"></div>
                  <p className="Subcourses-Bottom">
                    <div className="maxHeight_2">
                      This course by Mcgill University will take you through all
                      the core insights of the field. Along with theoretical
                      concepts, you...
                    </div>
                    <Link className="text-primary cursor-pointer undefined">
                      Read More
                    </Link>
                  </p>
                </Col>
              </Row>
            </div>
            <div className="text-right w-100">
              <button className="subcourses-button btn-lg w-100">
                Apply Now
                <img
                  src="https://images.leverageedu.com/university/whitearrow.svg"
                  alt="whitearrow"
                  style={{ marginleft: "4px" }}
                />
              </button>
            </div>
          </Col>
          {/* Six Courses End Here*/}
        </Row>
      </Container>


      <Container fluid>
        <Row className="" style={{ width: "85%", margin: "auto" }}>
          <Col sm={12} md={12} className="pb-4 text-center">
            <h2 className="display-6"> Program List </h2>
          </Col>

          <Col sm={12} md={12} className="">
            <div className="University-Icon">
              <img className="" src={ProgImage} alt="Flag" width={"100%"} />
            </div>
          </Col>
          <Col sm={12} md={12} className="text-center">
            <Link to="/" target="_blank">
              <button
                type="submit"
                className="px-4 text-center mr-3 py-2 btn-large btn btn-primary"
                style={{ fontSize: "14px" }}
              >
                {" Download "}
              </button>
            </Link>
          </Col>
        </Row>
      </Container>

      
      <Container className="mobile-padding" fluid>
        <Row className="" style={{ width: "85%", margin: "auto" }}>

            <hr />
            <div class="gal">
            <img className="" src={LifeImage} alt="Flag" width={"100%"} />
            <img className="" src={LifeImage1} alt="Flag" width={"100%"} />
            <img className="" src={LifeImage2} alt="Flag" width={"100%"} />
            <img className="" src={LifeImage3} alt="Flag" width={"100%"} />
            <img className="" src={LifeImage4} alt="Flag" width={"100%"} />
            <img className="" src={LifeImage5} alt="Flag" width={"100%"} />
            <img className="" src={LifeImage6} alt="Flag" width={"100%"} />
            <img className="" src={LifeImage7} alt="Flag" width={"100%"} />
            <img className="" src={LifeImage8} alt="Flag" width={"100%"} />
            <img className="" src={LifeImage9} alt="Flag" width={"100%"} />
            <img className="" src={LifeImage10} alt="Flag" width={"100%"} />
            <img className="" src={LifeImage11} alt="Flag" width={"100%"} />

            </div>

          </Row>
      </Container>


      <Container className="mt-5" fluid>
        <Row className="" style={{ width: "85%", margin: "auto" }}>
          <Col sm={12} md={12} className="pb-5">
            <h2 className="text-center">College Videos</h2>
          </Col>

          <Col sm={12} md={12} className="">
            <Carousel
              responsive={responsive}
              additionalTransfrom={80}
              arrows
              autoPlay
              autoPlaySpeed={4000}
              centerMode={false}
              className=""
              containerClass="container-with-dots innertslide"
              dotListClass=""
              draggable
              focusOnSelect={false}
              infinite
              itemClass=""
              keyBoardControl
              minimumTouchDrag={100}
              pauseOnHover
              renderArrowsWhenDisabled={false}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              rewind={false}
              rewindWithAnimation={false}
              rtl={false}
              shouldResetAutoplay
              showDots={false}
              sliderClass=""
              slidesToSlide={1}
              swipeable
            >
              <div className="card-boxer">
                <NavLink to="./country" exact target="_blank">
                  <iframe
                    width={"100%"}
                    height="250px"
                    src="https://www.youtube.com/embed/H0Ry6QBvjiI?si=3S-SRquOGM_PKSJQ"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                  <h5 className="Box-Title">Study in Canada</h5>
                </NavLink>
              </div>

              <div className="card-boxer">
                <NavLink to="./country" exact target="_blank">
                  <iframe
                    width={"100%"}
                    height="250px"
                    src="https://www.youtube.com/embed/H0Ry6QBvjiI?si=3S-SRquOGM_PKSJQ"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                  <h5 className="Box-Title">Study in Germany</h5>
                </NavLink>
                <Outlet />
              </div>

              <div className="card-boxer">
                <NavLink to="./country" exact target="_blank">
                  <iframe
                    width={"100%"}
                    height="250px"
                    src="https://www.youtube.com/embed/H0Ry6QBvjiI?si=3S-SRquOGM_PKSJQ"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                  <h5 className="Box-Title">Study in Australia</h5>
                </NavLink>
                <Outlet />
              </div>

              <div className="card-boxer">
                <NavLink to="./country" exact target="_blank">
                  <iframe
                    width={"100%"}
                    height="250px"
                    src="https://www.youtube.com/embed/H0Ry6QBvjiI?si=3S-SRquOGM_PKSJQ"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                  <h5 className="Box-Title">Study in U.K.</h5>
                </NavLink>
              </div>

              <div className="card-boxer">
                <NavLink to="./country" exact target="_blank">
                  <iframe
                    width={"100%"}
                    height="250px"
                    src="https://www.youtube.com/embed/H0Ry6QBvjiI?si=3S-SRquOGM_PKSJQ"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                  <h5 className="Box-Title">Study in New Zealand</h5>
                </NavLink>
              </div>

              <div className="card-boxer">
                <NavLink to="./country" exact target="_blank">
                  <iframe
                    width={"100%"}
                    height="250px"
                    src="https://www.youtube.com/embed/H0Ry6QBvjiI?si=3S-SRquOGM_PKSJQ"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                  <h5 className="Box-Title">Study in Ireland</h5>
                </NavLink>
              </div>
            </Carousel>
          </Col>
        </Row>
      </Container>

      <Container className="pt-5" fluid>
        <Row className="" style={{ width: "85%", margin: "auto" }}>
          <Col sm={12} md={12} className="pb-5">
            <h2 className="display-6 text-center">{" Accommodations "}</h2>
          </Col>

          <Col sm={4} md={4} className="padding-b-5">
            <div className="Countrty-Icon">
              <img className="w-0" src={CountryA1} alt="Flag" />
              <p className="fw-bold">
                {"Arts and "}
                <br />
                {"Humanities"}
              </p>
            </div>
          </Col>
          <Col sm={4} md={4} className="padding-b-5">
            <div className="Countrty-Icon">
              <img className="" src={CountryA2} alt="Flag" />
              <p className="fw-bold">
                {"Law and"}
                <br /> {"Legal Studies"}
              </p>
            </div>
          </Col>

          <Col sm={4} md={4} className="padding-b-5">
            <div className="Countrty-Icon">
              <img className="" src={CountryA3} alt="Flag" />
              <p className="fw-bold">{"Architecture"}</p>
            </div>
          </Col>

          <Col sm={4} md={4} className="padding-b-5">
            <div className="Countrty-Icon">
              <img className="" src={CountryA4} alt="Flag" />
              <p className="fw-bold">
                {"Medicine and"}
                <br /> {"Life Sciences"}
              </p>
            </div>
          </Col>

          <Col sm={4} md={4} className="padding-b-5">
            <div className="Countrty-Icon">
              <img className="" src={CountryA5} alt="Flag" />
              <p className="fw-bold">
                {"Social"}
                <br /> {"Sciences"}
              </p>
            </div>
          </Col>

          <Col sm={4} md={4} className="padding-b-5">
            <div className="Countrty-Icon">
              <img className="" src={CountryA6} alt="Flag" />
              <p className="fw-bold">
                {"Engineering "}
                <br /> {"and Technology"}
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      
      <Container className="mb-5" fluid>
        <Row className="pb-5" style={{ width: "85%", margin: "auto" }}>
          <Col sm={12} md={6} className="Lorem mt-5 pt-5">
            <img className="" src={AccOmmo} alt="Flag" width={"100%"} />
            <div className="LoremIpsum">
              <p> Lorem Ipsum </p>
            </div>
          </Col>
          <Col sm={12} md={6} className="Lorem mt-5 pt-5">
            <img className="" src={AccOmmo1} alt="Flag" width={"100%"} />
            <div className="LoremIpsum">
              <p> Lorem Ipsum </p>
            </div>
          </Col>
          <Col sm={12} md={6} className="Lorem mt-5 pt-5">
            <img className="" src={AccOmmo2} alt="Flag" width={"100%"} />
            <div className="LoremIpsum">
              <p> Lorem Ipsum </p>
            </div>
          </Col>
          <Col sm={12} md={6} className="Lorem mt-5 pt-5">
            <img className="" src={AccOmmo3} alt="Flag" width={"100%"} />
            <div className="LoremIpsum">
              <p> Lorem Ipsum </p>
            </div>
          </Col>
        </Row>
      </Container>


   
    </>
  );
};

export default University;
