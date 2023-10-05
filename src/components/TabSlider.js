import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "../assets/css/styles.css";
import Carousel from "react-multi-carousel";
import PartnerImage from "../images/getreal/partners/partner.png";
import PartnerImage1 from "../images/getreal/partners/partner1.png";
import PartnerImage2 from "../images/getreal/partners/partner2.png";
import PartnerImage3 from "../images/getreal/partners/partner3.png";
import PartnerImage4 from "../images/getreal/partners/partner4.png";

import FirstImageSlide1 from "../images/getreal/aman.png";
import FirstImageSlide2 from "../images/getreal/arpan.png";
import FirstImageSlide3 from "../images/getreal/pankaj.png";
import FirstImageSlide4 from "../images/getreal/shushank.png";
import FirstImageSlide5 from "../images/getreal/sonia.png";
import FirstImageSlide6 from "../images/getreal/tiksha.png";
import FirstImageSlide7 from "../images/getreal/sagar.png";

import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const TabSlider = () => {
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
      items: 2,
    },
  };

  return (
    <>
      <Container fluid className="mobilepadding">
        <Row className="mobilepadding">
          <Col></Col>
          <Tabs className="tab-mobile">
            <Col sm={12} md={1} className="text-center float-left">
              <p></p>
            </Col>
            <Col
              sm={12}
              md={4}
              className="px-5 mobile-rect text-center float-left"
            >
              <h2 className="text-left fw-medium" style={{ fontSize: "42px" }}>
                {"Students at the heart of everthing we do"}
              </h2>

              <TabList className="tabslid text-left p-0 py-3">
                <Tab> Students </Tab>
                <Tab> Partners </Tab>
              </TabList>
              <p className="pt-4 text-left paragraph2">
                {
                  " Megamind made Process so easy for me, in every step they helped me in understanding"
                }
              </p>
              <h2 className="pt-3 fw-medium text-left"> Tilak Gautam </h2>
              <p className="paragraph3 text-left">
                {"Msc Digital marketing. UWE Bristol"}
              </p>
            </Col>

            <Col sm={12} md={7} className="text-center float-left mobile-left">
              <TabPanel>
                <Carousel
                  responsive={responsive}
                  autoPlay
                  autoPlaySpeed={4000}
                  additionalTransfrom={80}
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
                  <div className="card cover2">
                    {/* <h4>aman </h4> */}
                    <Popup
                      trigger={
                        <img
                          src={FirstImageSlide1}
                          alt="img name"
                          className="w-100"
                        />
                      }
                      modal
                      nested
                    >
                      {(close) => (
                        <div className="modal">
                          <div className="text-right pb-2">
                            <button
                              onClick={() => close()}
                              className="btn btn-dark"
                            >
                              x
                            </button>
                          </div>
                          <div className="content">
                            <iframe
                              width="640"
                              height="360"
                              src="https://www.youtube.com/embed/GXHjr14eIMA?rel=0&amp;controls=0&amp;enablejsapi=1&autoplay=1"
                              title="YouTube video player"
                              frameborder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowfullscreen
                            ></iframe>
                          </div>
                        </div>
                      )}
                    </Popup>
                  </div>
                  <div className="card cover2">
                    {/* <h4> arpan </h4> */}
                    <Popup
                      trigger={
                        <img
                          src={FirstImageSlide2}
                          alt="img name"
                          className="w-100"
                        />
                      }
                      modal
                      nested
                    >
                      {(close) => (
                        <div className="modal">
                          <div className="text-right pb-2">
                            <button
                              onClick={() => close()}
                              className="btn btn-dark"
                            >
                              x
                            </button>
                          </div>
                          <div className="content">
                            <iframe
                              width="640"
                              height="360"
                              src="https://www.youtube.com/embed/zvwbPWfa2WQ?rel=0&amp;controls=0&amp;enablejsapi=1&autoplay=1"
                              title="YouTube video player"
                              frameborder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowfullscreen
                            ></iframe>
                          </div>
                        </div>
                      )}
                    </Popup>
                  </div>
                  <div className="card cover2">
                    {/* pankaj */}
                    <Popup
                      trigger={
                        <img
                          src={FirstImageSlide3}
                          alt="img name"
                          className="w-100"
                        />
                      }
                      modal
                      nested
                    >
                      {(close) => (
                        <div className="modal">
                          <div className="text-right pb-2">
                            <button
                              onClick={() => close()}
                              className="btn btn-dark"
                            >
                              x
                            </button>
                          </div>
                          <div className="content">
                            <iframe
                              width="640"
                              height="360"
                              src="https://www.youtube.com/embed/6drEHSuM9hI?rel=0&amp;controls=0&amp;enablejsapi=1&autoplay=1"
                              title="YouTube video player"
                              frameborder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowfullscreen
                            ></iframe>
                          </div>
                        </div>
                      )}
                    </Popup>
                  </div>
                  <div className="card cover2">
                    {/* shushank */}
                    <Popup
                      trigger={
                        <img
                          src={FirstImageSlide4}
                          alt="img name"
                          className="w-100"
                        />
                      }
                      modal
                      nested
                    >
                      {(close) => (
                        <div className="modal">
                          <div className="text-right pb-2">
                            <button
                              onClick={() => close()}
                              className="btn btn-dark"
                            >
                              x
                            </button>
                          </div>
                          <div className="content">
                            <iframe
                              width="640"
                              height="360"
                              src="https://www.youtube.com/embed/AS-QgN5f6SY?rel=0&amp;controls=0&amp;enablejsapi=1&autoplay=1"
                              title="YouTube video player"
                              frameborder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowfullscreen
                            ></iframe>
                          </div>
                        </div>
                      )}
                    </Popup>
                  </div>
                  <div className="card cover2">
                    {/* sonia */}
                    <Popup
                      trigger={
                        <img
                          src={FirstImageSlide5}
                          alt="img name"
                          className="w-100"
                        />
                      }
                      modal
                      nested
                    >
                      {(close) => (
                        <div className="modal">
                          <div className="text-right pb-2">
                            <button
                              onClick={() => close()}
                              className="btn btn-dark"
                            >
                              x
                            </button>
                          </div>
                          <div className="content">
                            <iframe
                              width="640"
                              height="360"
                              src="https://www.youtube.com/embed/dYSmzC4z6g0?rel=0&amp;controls=0&amp;enablejsapi=1&autoplay=1"
                              title="YouTube video player"
                              frameborder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowfullscreen
                            ></iframe>
                          </div>
                        </div>
                      )}
                    </Popup>
                  </div>
                  <div className="card cover2">
                    {/* tiksha */}
                    <Popup
                      trigger={
                        <img
                          src={FirstImageSlide6}
                          alt="img name"
                          className="w-100"
                        />
                      }
                      modal
                      nested
                    >
                      {(close) => (
                        <div className="modal">
                          <div className="text-right pb-2">
                            <button
                              onClick={() => close()}
                              className="btn btn-dark"
                            >
                              x
                            </button>
                          </div>
                          <div className="content">
                            <iframe
                              width="640"
                              height="360"
                              src="https://www.youtube.com/embed/zYxZSvhBkRw?rel=0&amp;controls=0&amp;enablejsapi=1&autoplay=1"
                              title="YouTube video player"
                              frameborder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowfullscreen
                            ></iframe>
                          </div>
                        </div>
                      )}
                    </Popup>
                  </div>
                  <div className="card cover2">
                    {/* sagar */}
                    <Popup
                      trigger={
                        <img
                          src={FirstImageSlide7}
                          alt="img name"
                          className="w-100"
                        />
                      }
                      modal
                      nested
                    >
                      {(close) => (
                        <div className="modal">
                          <div className="text-right pb-2">
                            <button
                              onClick={() => close()}
                              className="btn btn-dark"
                            >
                              x
                            </button>
                          </div>
                          <div className="content">
                            <iframe
                              width="640"
                              height="360"
                              src="https://www.youtube.com/embed/QJmlkbjjWIo?rel=0&amp;controls=0&amp;enablejsapi=1&autoplay=1"
                              title="YouTube video player"
                              frameborder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowfullscreen
                            ></iframe>
                          </div>
                        </div>
                      )}
                    </Popup>
                  </div>
                </Carousel>
              </TabPanel>
              <TabPanel>
                <Carousel
                  responsive={responsive}
                  autoPlay
                  autoPlaySpeed={4000}
                  additionalTransfrom={100}
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
                  <div className="card cover2">
                    <Popup
                      trigger={
                        <img
                          src={PartnerImage4}
                          alt="img name"
                          className="w-100"
                        />
                      }
                      modal
                      nested
                    >
                      {(close) => (
                        <div className="modal">
                          <div className="text-right pb-2">
                            <button
                              onClick={() => close()}
                              className="btn btn-dark"
                            >
                              x
                            </button>
                          </div>
                          <div className="content">
                            <iframe
                              width="640"
                              height="360"
                              src="https://www.youtube.com/embed/WVGQysGs3Yo?rel=0&amp;controls=0&amp;enablejsapi=1&autoplay=1"
                              title="YouTube video player"
                              frameborder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowfullscreen
                            ></iframe>
                          </div>
                        </div>
                      )}
                    </Popup>
                  </div>
                  <div className="card cover2">
                    <Popup
                      trigger={
                        <img
                          src={PartnerImage2}
                          alt="img name"
                          className="w-100"
                        />
                      }
                      modal
                      nested
                    >
                      {(close) => (
                        <div className="modal">
                          <div className="text-right pb-2">
                            <button
                              onClick={() => close()}
                              className="btn btn-dark"
                            >
                              x
                            </button>
                          </div>
                          <div className="content">
                            <iframe
                              width="640"
                              height="360"
                              src="https://www.youtube.com/embed/39_uIRjteGY?rel=0&amp;controls=0&amp;enablejsapi=1&autoplay=1"
                              title="YouTube video player"
                              frameborder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowfullscreen
                            ></iframe>
                          </div>
                        </div>
                      )}
                    </Popup>
                  </div>
                  <div className="card cover2">
                    <Popup
                      trigger={
                        <img
                          src={PartnerImage1}
                          alt="img name"
                          className="w-100"
                        />
                      }
                      modal
                      nested
                    >
                      {(close) => (
                        <div className="modal">
                          <div className="text-right pb-2">
                            <button
                              onClick={() => close()}
                              className="btn btn-dark"
                            >
                              x
                            </button>
                          </div>
                          <div className="content">
                            <iframe
                              width="640"
                              height="360"
                              src="https://www.youtube.com/embed/DUrcEsQevdo?rel=0&amp;controls=0&amp;enablejsapi=1&autoplay=1"
                              title="YouTube video player"
                              frameborder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowfullscreen
                            ></iframe>
                          </div>
                        </div>
                      )}
                    </Popup>
                  </div>
                  <div className="card cover2">
                    <Popup
                      trigger={
                        <img
                          src={PartnerImage}
                          alt="img name"
                          className="w-100"
                        />
                      }
                      modal
                      nested
                    >
                      {(close) => (
                        <div className="modal">
                          <div className="text-right pb-2">
                            <button
                              onClick={() => close()}
                              className="btn btn-dark"
                            >
                              x
                            </button>
                          </div>
                          <div className="content">
                            <iframe
                              width="640"
                              height="360"
                              src="https://www.youtube.com/embed/GJmZpTVSUJU?rel=0&amp;controls=0&amp;enablejsapi=1&autoplay=1"
                              title="YouTube video player"
                              frameborder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowfullscreen
                            ></iframe>
                          </div>
                        </div>
                      )}
                    </Popup>
                  </div>

                  <div className="card cover2">
                    <Popup
                      trigger={
                        <img
                          src={PartnerImage3}
                          alt="img name"
                          className="w-100"
                        />
                      }
                      modal
                      nested
                    >
                      {(close) => (
                        <div className="modal">
                          <div className="text-right pb-2">
                            <button
                              onClick={() => close()}
                              className="btn btn-dark"
                            >
                              x
                            </button>
                          </div>
                          <div className="content">
                            <iframe
                              width="640"
                              height="360"
                              src="https://www.youtube.com/embed/4uwxbG3HA7c?rel=0&amp;controls=0&amp;enablejsapi=1&autoplay=1"
                              title="YouTube video player"
                              frameborder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowfullscreen
                            ></iframe>
                          </div>
                        </div>
                      )}
                    </Popup>
                  </div>
                </Carousel>
              </TabPanel>
            </Col>
          </Tabs>
        </Row>
      </Container>
    </>
  );
};

export default TabSlider;
