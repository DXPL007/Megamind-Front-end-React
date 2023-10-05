// Post1.js
import React from "react";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Blogimage1 from "../../images/blog/blog.jpg";
import Blogimage2 from "../../images/blog/blog2.jpg";
import BlogImage3 from "../../images/blog/blog3.jpg";

const Post2 = () => {
  return (
    <>
      <Container className="py-5 blog-bg" fluid>
        <Row className="" style={{ width: "90%", margin: "auto" }}>
          <Col sm={12} md={5} className="py-5">
            <h2 className="display-6 fw-bold text-white">BLOG</h2>
            <h4 className="text-white">
              {
                " Are you thinking to study abroad? You are at the right place, we are your perfect partner for guiding you through education overseas "
              }
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
                        src={Blogimage2}
                        title=""
                        alt=""
                        height={380}
                        width={"100%"}
                      />
                    </div>
                    <div className="article-title">
                      <h2>
                        Are you thinking to study abroad? You are at the right
                        place, we are your perfect partner for guiding you
                        through education overseas
                      </h2>
                    </div>
                    <div className="article-content">
                      <p className="para text-justify">
                        No wonder today, thousands of students are seeking
                        overseas education to make a remarkable career in their
                        desired field to have international exposure. With an
                        ample number of options available for the aspirants
                        across the globe, having top-ranked universities, and
                        vibrant nightlife thousands of young aspirants are
                        considering Germany for their higher education overseas.
                        Owing to the country’s top-quality education system
                        Germany is considered the most sought-after country for
                        overseas education. If you are looking for guidance to
                        widen your academic horizons by having job opportunities
                        globally in this competitive market, you are in the
                        right place.
                      </p>
                      <p className="para text-justify">
                        We at Megaminds are your perfect partner and the best
                        Germany Education Consultants in Delhi to guide you
                        throughout the process and end up making you land your
                        dream university in no time. If you are planning to
                        study in Germany and eyeing the Germany Education
                        Consultants in Delhi we at Megaminds are there for you.
                        We simplify things for you right from the start till the
                        end.
                      </p>
                      <p className="para text-justify">
                        We have a team of experienced counselors and
                        professionals who are competent enough to counsel on
                        admissions processes along with relevant information to
                        get you through the most sought-after universities in
                        Germany. Study in Germany Consultants in Delhi have
                        profound knowledge about the international education
                        system hence, can be a perfect guide in helping
                        aspirants to fulfill their dream of getting higher
                        education overseas.
                      </p>
                      <p className="para text-justify">
                        With the increasing trend of overseas education, it is
                        normal for students to get confounded that is where we
                        come to the rescue the best in Study in Germany
                        Consultants in Delhi. We are your gateway to your dream
                        destination abroad. With more than 20 years of
                        expertise, we stand out to be the best and top-notch
                        Germany Education Consultants in Delhi serving more than
                        serving 150+ Universities. We have the most credible
                        counselors providing unmatched career counseling and
                        visa services, giving end-to-end service to aspirants
                        and helping them shine bright in the future
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
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Post2;
