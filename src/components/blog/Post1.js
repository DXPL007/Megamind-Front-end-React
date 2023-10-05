// Post1.js
import React from "react";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import BlogImage1 from "../../images/blog/blog.jpg";
import Blogige2 from "../../images/blog/blog2.jpg";
import BlogIme3 from "../../images/blog/blog3.jpg";
import "../blog/Post.css";

const Post1 = () => {
  return (
    <>
      <Container className="py-5 blog-bg" fluid>
        <Row className="" style={{ width: "90%", margin: "auto" }}>
          <Col sm={12} md={5} className="py-5">
            <h2 className="display-6 fw-bold text-white">BLOG</h2>
            <h4 className="text-white">
              {"Is studying in Australia your DREAM? We make it happen "}
            </h4>
          </Col>

          <Col sm={12} md={7} className="py-5"></Col>
        </Row>
      </Container>

      <Container className="padding-top-4" fluid>
      <Row className="align-items-start">
          <div className="blog-single gray-bg">
            <div className="container">
              <div className="row align-items-start">
                <Col md={8} className="m-15 px-tb">
                  <article className="article">
                    <div className="article-img">
                      <img
                        src={BlogImage1}
                        title=""
                        alt=""
                        height={380}
                        width={"100%"}
                      />
                    </div>
                    <div className="article-title">
                      <h2>
                        Is studying in Australia your DREAM? We make it happen
                      </h2>
                    </div>
                    <div className="article-content">
                      <p className="para text-justify">
                        Deciding on studying abroad is a big decision and at the
                        same time, it’s challenging to choose the right
                        destination for overseas education. Australia is
                        considered one of the most chosen and sought-after
                        destinations for overseas education among thousands of
                        students globally because of the diversified culture,
                        top-ranked universities, and globally recognized degrees
                        with the interactive learning environment. Studying in
                        Australia can be affordable with proper consultation and
                        guidance from Australia Education Consultants in Delhi.
                      </p>
                      <p className="para text-justify">
                        We at Megaminds are your one-stop destination for proper
                        career guidance and one of the best Study in Australia
                        Consultants in Delhi. Studying in Australia comes with
                        unparallel and remarkable career growth and scalable
                        growth opportunities for aspirants looking for overseas
                        education. This isn’t easy – We make it possible for you
                        without any hassle. We have been there in the industry
                        since last more than 20 years having skilled and
                        qualified professional career counselors who are
                        competent enough to guide you through the process from
                        start to the end.
                      </p>
                      <p className="para text-justify">
                        We ensure proper assistance right from the counselling
                        sessions to application procedures, visa assistance to
                        preparing you for the exams along with the university
                        selection process. We have it all for you under one
                        roof. We ensure to guide students keeping in mind their
                        needs and requirements, and give them what works for
                        them the best. We have been the leaders and are known as
                        the best and top-notch Australia Education Consultants
                        in Delhi for more than 20+years helping thousands of
                        students to get the best universities to study abroad.
                      </p>
                      <p className="para text-justify">
                        We have placed more than 10000+ students globally and
                        have 150+university in the kitty with the highest
                        student visa success rate. If you are looking for Study
                        in Australia Consultants in Delhi, you have certainly
                        landed in the right place. We are the premium Australia
                        Education Consultants in Delhi, your gateway to your
                        dream destination. Still, confused about what to choose?
                        Don’t Worry our expert Education Consultants can help!
                        We are just a click away!
                      </p>
                    </div>
                    <div className="nav tag-cloud">
                      <Link to="#">Marketing</Link>
                      <Link to="#">Research</Link>
                      <Link to="#">Managment</Link>
                    </div>
                  </article>
                </Col>

                <Col sm={12} md={4} className="m-15 px-tb blog-aside">
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
                                Is studying in Australia your DREAM? We make it
                                happen
                              </Link>
                            </h5>
                          </div>
                          <div className="lpa-meta">
                            <Link className="date" to="/">
                              15 July 2023
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
                              <Link to="/post2">
                                Are you thinking to study abroad? You are at the
                                right place, we are your perfect partner for
                                guiding you through education overseas
                              </Link>
                            </h5>
                          </div>
                          <div className="lpa-meta">
                            <Link className="date" to="/post2">
                              26 JUN 2023
                            </Link>
                          </div>
                        </div>
                        <div className="lpa-right">
                          <Link to="/post2">
                            <img src={Blogige2} alt="sudf" />
                          </Link>
                        </div>
                      </div>

                      <div className="latest-post-aside media">
                        <div className="lpa-left media-body">
                          <div className="lpa-title">
                            <h5>
                              <Link to="/post3">
                                Have a dream of completing your higher education
                                Abroad- Leave it to us, Your perfect partner for
                                Overseas Education
                              </Link>
                            </h5>
                          </div>
                          <div className="lpa-meta">
                            <Link className="date" to="/post3">
                              26 APRIL 2023
                            </Link>
                          </div>
                        </div>
                        <div className="lpa-right">
                          <Link to="/post3">
                            <img src={BlogIme3} title="" alt="" />
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
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Post1;
