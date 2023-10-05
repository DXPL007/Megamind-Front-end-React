// Posts.js
import React from "react";
import { Link } from "react-router-dom";
import "./Post.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BlogImage1 from "../../images/blog/blog.jpg";
import BlogImage2 from "../../images/blog/blog2.jpg";
import BlogImage3 from "../../images/blog/blog3.jpg";
import { MdDateRange } from "react-icons/md";

const Blog = () => {
  return (
    <>
      <Container className="py-5 blog-bg" fluid>
        <Row className="" style={{ width: "90%", margin: "auto" }}>
          <Col sm={12} md={5} className="py-5">
            <h2 className="display-2 fw-bold text-white">Blog</h2>
          </Col>

          <Col sm={12} md={7} className="py-5"></Col>
        </Row>
      </Container>

      <Container className="padding-top-4 pb-5" fluid>
        <Row
          className="align-items-start"
          style={{ width: "85%", margin: "auto" }}
        >
          <Col md={8} sm={12} className="m-15 px-tb">
            <Row>
              {/* First Blog Start Here */}
              {/* First Blog Start Here */}

              <Col sm={12} md={12}>
                <div className="blog-grid">
                  <div className="blog-img">
                    <div className="date">
                      <span>15</span>
                      <label>JUKY</label>
                    </div>
                    <Link to="/post1">
                      <img
                        src={BlogImage1}
                        title=""
                        alt=""
                        height={220}
                        width={350}
                      />
                    </Link>
                  </div>
                  <div className="blog-info">
                    <h5>
                      <Link to="/post1">
                        Is studying in Australia your DREAM? We make it happen
                      </Link>
                    </h5>
                    <p>
                      Is studying in Australia your DREAM? We make it happen
                      Deciding on studying abroad is a big decision and at
                      <Link to="/post1" className="px-btn-arrow ps-2">
                        <span>Read More</span>
                      </Link>
                    </p>
                 
                    <div className="btn-bar">
                      <Link className="date px-2" to="/post1">
                      <MdDateRange/> 15 July 2023
                      </Link>
                     
                    </div>
                  </div>
                </div>
              </Col>
              {/* Second Blog Start Here */}
              {/* Second Blog Start Here */}
              <Col md={12} sm={12}>
                <div className="blog-grid">
                  <div className="blog-img">
                    <div className="date">
                      <span>26</span>
                      <label>JUN</label>
                    </div>
                    <Link to="#">
                      <img
                        src={BlogImage2}
                        title=""
                        alt="study"
                        height={220}
                        width={340}
                      />
                    </Link>
                  </div>
                  <div className="blog-info">
                    <h5>
                      <Link to="/Post2">
                        Are you thinking to study abroad? You are at the right
                        place, we are your perfect partner for guiding you
                        through education overseas
                      </Link>
                    </h5>
                    <p className="">
                      Are you thinking to study abroad? You are at the right
                      place, we are your perfect partner for guiding you
                      <Link to="/post1" className="px-btn-arrow ps-2">
                        <span>Read More</span>
                      </Link>
                    </p>
                 
                    <div className="btn-bar">
                      <Link className="date px-2" to="/post1">
                      <MdDateRange/> 15 July 2023
                      </Link>
                    </div>
                  </div>
                </div>
              </Col>
              {/* Third Blog Start Here */}
              {/* Third Blog Start Here */}
              <Col md={12} sm={12}>
                <div className="blog-grid">
                  <div className="blog-img">
                    <div className="date">
                      <span>26</span>
                      <label>APRIL</label>
                    </div>
                    <Link to="/post3">
                      <img
                        src={BlogImage3}
                        title=""
                        alt=""
                        height={220}
                        width={400}
                      />
                    </Link>
                  </div>
                  <div className="blog-info">
                    <h5>
                      <Link to="/post3">
                        Have a dream of completing your higher education Abroad-
                        Leave it to us, Your perfect partner for Overseas
                        Education
                      </Link>
                    </h5>
                    <p>
                      Have a dream of completing your higher education Abroad-
                      Leave it to us, Your perfect partner for Overseas
                      Education Over
                      <Link to="/post1" className="px-btn-arrow ps-2">
                        <span>Read More</span>
                      </Link>
                    </p>
                 
                    <div className="btn-bar">
                      <Link className="date px-2" to="/post1">
                      <MdDateRange/> 15 July 2023
                      </Link>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>

          {/* <!-- Latest Post --> */}

          <Col md={4} sm={12} className="m-15 px-tb blog-aside">
            {/* <!-- Latest Post --> */}
            <div className="widget widget-latest-post">
              <div className="widget-title">
                <h3>Latest Post</h3>
              </div>
              <div className="widget-body">
                <div className="latest-post-aside media">
                  <div className="lpa-left media-body">
                    <div className="lpa-title">
                      <h5>
                        <Link to="/post1">
                          Is studying in Australia your DREAM? We make it happen
                        </Link>
                      </h5>
                    </div>
                    <div className="lpa-meta">
                      <Link className="date" to="/">
                        15 Juky 2023
                      </Link>
                    </div>
                  </div>
                  <div className="lpa-right">
                    <Link to="#">
                      <img src={BlogImage1} title="" alt="" />
                    </Link>
                  </div>
                </div>

                <div className="latest-post-aside media">
                  <div className="lpa-left media-body">
                    <div className="lpa-title">
                      <h5>
                        <Link to="#">
                          Are you thinking to study abroad? You are at the right
                          place, we are your perfect partner for guiding you
                          through education overseas
                        </Link>
                      </h5>
                    </div>
                    <div className="lpa-meta">
                      <Link className="date" to="#">
                        26 Jun 2023
                      </Link>
                    </div>
                  </div>
                  <div className="lpa-right">
                    <Link to="#">
                      <img src={BlogImage2} title="" alt="" />
                    </Link>
                  </div>
                </div>

                <div className="latest-post-aside media">
                  <div className="lpa-left media-body">
                    <div className="lpa-title">
                      <h5>
                        <Link to="#">
                          Have a dream of completing your higher education
                          Abroad- Leave it to us, Your perfect partner for
                          Overseas Education
                        </Link>
                      </h5>
                    </div>
                    <div className="lpa-meta">
                      <Link className="date" to="#">
                        26 April 2023
                      </Link>
                    </div>
                  </div>
                  <div className="lpa-right">
                    <Link to="#">
                      <img src={BlogImage3} title="" alt="name" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="widget widget-tags">
              <div className="widget-title">
                <h3>Latest Tags</h3>
              </div>
              <div className="widget-body">
                <div className="nav tag-cloud">
                  <Link to="#">Marketing</Link>
                  <Link to="#">Research</Link>
                  <Link to="#">Managment</Link>
                </div>
              </div>
            </div>
            {/* <!-- End widget Tags --> */}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Blog;
