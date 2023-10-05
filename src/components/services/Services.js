import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./service.css";
import { Link } from "react-router-dom";
import GridImage from "../../images/services/chat.png";
import { BsArrowRightCircle } from "react-icons/bs";

function Services() {
  return (
    <>
      <Container className="py-5 service-bg" fluid>
        <Row className="" style={{ width: "80%", margin: "auto" }}>
          <Col sm={12} md={5} className="py-5">
            <h2 className="display-2 fw-bold text-white">Our Services</h2>
          </Col>

          <Col sm={12} md={7} className="py-5"></Col>
        </Row>
      </Container>

      <Container className="py-5" fluid>
        <Row className="" style={{ width: "75%", margin: "auto" }}>
          <Col sm={12} md={12} className="py-4">
            <h2 className="display-6 fw-bold text-center text-black">
              Our Services
            </h2>
          </Col>

          <Col sm={12} md={4} className="pt-4">
            <div className="box-part text-left">
              <div className="timicon">
                <img className="w-80" src={GridImage} alt="Flag" />
              </div>
              <div className="title">
                <h3 className="fw-bold py-3">
                  Comprehensive <br />
                  Counselling
                </h3>
              </div>
              <div className="text pb-4">
                <span>
                  Our certified counsellors, are experts in professionally
                  guiding students to make their choice of course and country of
                  study. They assist the students by providing authentic...
                </span>
              </div>
              <Link To="/" className="linkclass mt-3">
                Read More <BsArrowRightCircle />
              </Link>
            </div>
          </Col>
          <Col sm={12} md={4} className="pt-4">
            <div className="box-part text-left">
              <div className="timicon">
                <img className="w-80" src={GridImage} alt="Flag" />
              </div>
              <div className="title">
                <h3 className="fw-bold  py-3">
                  Application <br />
                  Processing
                </h3>
              </div>
              <div className="text pb-4">
                <span>
                  Our certified counsellors, are experts in professionally
                  guiding students to make their choice of course and country of
                  study. They assist the students by providing authentic...
                </span>
              </div>
              <Link To="/" className="linkclass mt-3">
                Read More <BsArrowRightCircle />
              </Link>
            </div>
          </Col>
          <Col sm={12} md={4} className="pt-4">
            <div className="box-part text-left">
              <div className="timicon">
                <img className="w-80" src={GridImage} alt="Flag" />
              </div>
              <div className="title">
                <h3 className="fw-bold">
                  Advice on <br /> Selection of
                  <br /> Programs
                </h3>
              </div>
              <div className="text pb-4">
                <span>
                  Our certified counsellors, are experts in professionally
                  guiding students to make their choice of course and country of
                  study. They assist the students by providing authentic...
                </span>
              </div>
              <Link To="/" className="linkclass mt-3">
                Read More <BsArrowRightCircle />
              </Link>
            </div>
          </Col>
          <Col sm={12} md={4} className="">
            <div className="box-part text-left">
              <div className="timicon">
                <img className="w-80" src={GridImage} alt="Flag" />
              </div>
              <div className="title">
                <h3 className="fw-bold">
                  Scholarship <br />
                  Application <br /> Assistance
                </h3>
              </div>
              <div className="text pb-4">
                <span>
                  Our certified counsellors, are experts in professionally
                  guiding students to make their choice of course and country of
                  study. They assist the students by providing authentic...
                </span>
              </div>
              <Link To="/" className="linkclass mt-3">
                Read More <BsArrowRightCircle />
              </Link>
            </div>
          </Col>
          <Col sm={12} md={4} className="">
            <div className="box-part text-left">
              <div className="timicon">
                <img className="w-80" src={GridImage} alt="Flag" />
              </div>
              <div className="title">
                <h3 className="fw-bold py-3">
                  Student Visa <br />
                  Guidance
                </h3>
              </div>
              <div className="text pb-4">
                <span>
                  Our certified counsellors, are experts in professionally
                  guiding students to make their choice of course and country of
                  study. They assist the students by providing authentic...
                </span>
              </div>
              <Link To="/" className="linkclass mt-3">
                Read More <BsArrowRightCircle />
              </Link>
            </div>
          </Col>

          <Col sm={12} md={4} className="">
            <div className="box-part text-left">
              <div className="timicon">
                <img className="w-80" src={GridImage} alt="Flag" />
              </div>
              <div className="title">
                <h3 className="fw-bold py-3">
                  Pre-departure <br />
                  Support
                </h3>
              </div>
              <div className="text pb-4">
                <span>
                  Our certified counsellors, are experts in professionally
                  guiding students to make their choice of course and country of
                  study. They assist the students by providing authentic...
                </span>
              </div>
              <Link To="/" className="linkclass mt-3">
                Read More <BsArrowRightCircle />
              </Link>
            </div>
          </Col>

          <Col sm={12} md={4} className=""></Col>
          <Col sm={12} md={4} className="">
            <div className="box-part text-left">
              <div className="timicon">
                <img className="w-80" src={GridImage} alt="Flag" />
              </div>
              <div className="title">
                <h3 className="fw-bold py-3">
                  Value Added <br />
                  Services
                </h3>
              </div>
              <div className="text pb-4">
                <span>
                  Our certified counsellors, are experts in professionally
                  guiding students to make their choice of course and country of
                  study. They assist the students by providing authentic...
                </span>
              </div>
              <Link To="/" className="linkclass mt-3">
                Read More <BsArrowRightCircle />
              </Link>
            </div>
          </Col>

          <Col sm={12} md={4} className=""></Col>
        </Row>
      </Container>
    </>
  );
}
export default Services;
