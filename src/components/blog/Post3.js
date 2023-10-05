// Post1.js
import React from "react";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Blogimage1 from "../../images/blog/blog.jpg";
import Blogimage2 from "../../images/blog/blog2.jpg";
import Blogimage3 from "../../images/blog/blog3.jpg";


const Post3 = () => {
  return (
    <>
     <Container className="py-5 blog-bg" fluid>
        <Row className="" style={{ width: "90%", margin: "auto" }}>
          <Col sm={12} md={5} className="py-5">
            <h2 className="display-6 fw-bold text-white">BLOG</h2>
            <h4 className="text-white">
              {" Have a dream of completing your higher education Abroad-Leave it to us, Your perfect partner for Overseas Education"}
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
                        src={Blogimage3}
                        title=""
                        alt=""
                        height={380}
                        width={"100%"}
                      />
                    </div>
                    <div className="article-title">
                      <h2>
                        Have a dream of completing your higher education Abroad-
                        Leave it to us, Your perfect partner for Overseas
                        Education
                      </h2>
                    </div>
                    <div className="article-content">
                      <p className="para text-justify">
                        Over the decades now, international education has gained
                        a lot of fascination among Indian students. In the
                        recent trend, acquiring knowledge has become a priority
                        for a rewarding and successful career. Overseas
                        education can give a smooth and favorable shift in
                        students’ career pathways when done under proper
                        guidance and support that is where we at Megaminds being
                        the best abroad education consultants in Delhi come in.
                        We at Megaminds are your one-stop destination for all
                        your Overseas Education consultations, be it career
                        guidance, university selection, guidance through the
                        application process, or IELTS preparation, we have it
                        all for you under one roof.
                      </p>
                      <p className="para text-justify">
                        We are the best and top-notch Overseas Education
                        Consultants in Delhi NCR providing an exceptional
                        personalized range of all-around services for overseas
                        education. We at Megaminds, India’s leading overseas
                        education consultants in Delhi NCR have been there in
                        the industry tirelessly since 2003 transforming your
                        dream of studying abroad into a reality.
                      </p>
                      <p className="para text-justify">
                        If you have made up your mind and looking for the best
                        Abroad Education Consultants in Delhi, look nowhere your
                        search ends here with us at Megamind. We have a team of
                        highly qualified trained expert counselors who are
                        competent enough to counsel aspirants and guide them
                        throughout the process. In simpler terms, we make things
                        easier for you.
                      </p>
                      <p className="para text-justify">
                        With more than 20 years of expertise, we can proudly say
                        that we have successfully turned the dreams of countless
                        students into reality and shaped their futures. We
                        simplify the process for aspirants looking for a perfect
                        guide and expert advice from the Overseas Education
                        Consultants in Delhi NCR
                      </p>
                      <p className="para text-justify">
                        We guide you to navigate the process, counsel and guide
                        you through legal and documentation procedures. From
                        start to the end we simplify things for you to ensure
                        100% satisfaction of the students and assist you in
                        every way possible. We at Megamind strive to provide.
                        Looking for Best Abroad Education Consultants in Delhi
                        or Overseas Education Consultants in Delhi NCR, we are
                        just a call away!
                      </p>
                    </div>
                    <div className="nav tag-cloud">
                      <Link to="#">Marketing</Link>
                      <Link to="#">Research</Link>
                      <Link to="#">Managment</Link>
                    </div>
                  </article>
                </Col>

                <Col md={4} sm={12} className="m-15px-tb blog-aside">
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
                            <Link className="date" to="/post1">
                              15 July 2023
                            </Link>
                          </div>
                        </div>
                        <div className="lpa-right">
                          <Link to="post1">
                            <img src={Blogimage1} title="" alt="" />
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
                              26 Jun 2023
                            </Link>
                          </div>
                        </div>
                        <div className="lpa-right">
                          <Link to="/post2">
                            <img src={Blogimage2} title="" alt="" />
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
                              26 April 2023
                            </Link>
                          </div>
                        </div>
                        <div className="lpa-right">
                          <Link to="/post3">
                            <img src={Blogimage3} title="" alt="name" />
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

export default Post3;
