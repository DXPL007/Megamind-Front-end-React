import React, { useState } from 'react'
// import ModalVideo from 'react-modal-video'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "../assets/css/styles.css";
import { IoCloseOutline } from "react-icons/io5";
import { BiLoaderAlt } from "react-icons/bi";

function TabSlider() {

    const [modal, setModal] = useState(false);
    const [videoLoading, setVideoLoading] = useState(true);

    const openModal = () => {
        setModal(!modal);
    };
    const spinner = () => {
        setVideoLoading(!videoLoading);
    };


    return (

        <>

            <Container fluid className='p-0'>
                <Row>

                    <Tabs>
                        <Col sm={12} md={1} className="text-center float-left"><p></p></Col>
                        <Col sm={12} md={4} className="py-5 px-5 text-center float-left">
                            <h2 className="py-5 text-left fw-medium" style={{ fontSize: "42px" }}> Students at the heart of everthing we do </h2>

                            <TabList className="text-left p-0">
                                <Tab> Students </Tab>
                                <Tab> Partners </Tab>
                                <Tab>News / Events</Tab>
                            </TabList>
                            <p className='pt-4 text-left paragraph2'> "Edvoy made ir so easy for me, in every step they helped me in understanding" </p>
                            <h2 className="pt-3 fw-medium text-left"> Jyotisman </h2>
                            <p className='paragraph3 text-left'> Msc Digital marketing. UWE Bristol </p>
                        </Col>

                        <Col sm={12} md={7} className="py-5 text-center float-left">

                            <TabPanel>
                                <Container class=" p-0">
                                    <ul class="cards">
                                        <li class="card cover" onClick={openModal} >
                                            {/* <React.Fragment>
                                                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />

                                                <button className="btn-primary" onClick={() => setOpen(true)}>VIEW DEMO</button>
                                            </React.Fragment> */}
                                            {modal ? (
                                                <section className="modal__bg">
                                                    <div className="modal__align">
                                                        <div className="modal__content" modal={modal}>
                                                            <IoCloseOutline className="modal__close" arial-label="Close modal" onClick={setModal} />
                                                            <div className="modal__video-align">
                                                                {videoLoading ? (
                                                                    <div className="modal__spinner">
                                                                        <BiLoaderAlt className="modal__spinner-style" fadeIn="none" />
                                                                    </div>
                                                                ) : null}
                                                                <iframe className="modal__video-style" onLoad={spinner} loading="lazy" width="800" height="500" src="https://www.youtube.com/embed/4UZrsTqkcW4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </section>
                                            ) : null}

                                        </li>
                                        <li class="card cover2" onClick={openModal}>
                                        {modal ? (
                                                <section className="modal__bg">
                                                    <div className="modal__align">
                                                        <div className="modal__content" modal={modal}>
                                                            <IoCloseOutline className="modal__close" arial-label="Close modal" onClick={setModal} />
                                                            <div className="modal__video-align">
                                                                {videoLoading ? (
                                                                    <div className="modal__spinner">
                                                                        <BiLoaderAlt className="modal__spinner-style" fadeIn="none" />
                                                                    </div>
                                                                ) : null}
                                                                <iframe className="modal__video-style" onLoad={spinner} loading="lazy" width="800" height="500" src="https://www.youtube.com/embed/6PhsAKsaxqc?si=4zNbfMTBi1XnpXaT" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </section>
                                            ) : null}
                                        </li>
                                        <li class="card cover2" onClick={openModal}>
                                        {modal ? (
                                                <section className="modal__bg">
                                                    <div className="modal__align">
                                                        <div className="modal__content" modal={modal}>
                                                            <IoCloseOutline className="modal__close" arial-label="Close modal" onClick={setModal} />
                                                            <div className="modal__video-align">
                                                                {videoLoading ? (
                                                                    <div className="modal__spinner">
                                                                        <BiLoaderAlt className="modal__spinner-style" fadeIn="none" />
                                                                    </div>
                                                                ) : null}
                                                                <iframe className="modal__video-style" onLoad={spinner} loading="lazy" width="800" height="500" src="https://www.youtube.com/embed/6PhsAKsaxqc?si=4zNbfMTBi1XnpXaT" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </section>
                                            ) : null}
                                        </li>
                                        <li class="card cover2" onClick={openModal}>
                                        {modal ? (
                                                <section className="modal__bg">
                                                    <div className="modal__align">
                                                        <div className="modal__content" modal={modal}>
                                                            <IoCloseOutline className="modal__close" arial-label="Close modal" onClick={setModal} />
                                                            <div className="modal__video-align">
                                                                {videoLoading ? (
                                                                    <div className="modal__spinner">
                                                                        <BiLoaderAlt className="modal__spinner-style" fadeIn="none" />
                                                                    </div>
                                                                ) : null}
                                                                <iframe className="modal__video-style" onLoad={spinner} loading="lazy" width="800" height="500" src="https://www.youtube.com/embed/6PhsAKsaxqc?si=4zNbfMTBi1XnpXaT" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </section>
                                            ) : null}
                                        </li>
                                        <li class="card cover2" onClick={openModal}>
                                        {modal ? (
                                                <section className="modal__bg">
                                                    <div className="modal__align">
                                                        <div className="modal__content" modal={modal}>
                                                            <IoCloseOutline className="modal__close" arial-label="Close modal" onClick={setModal} />
                                                            <div className="modal__video-align">
                                                                {videoLoading ? (
                                                                    <div className="modal__spinner">
                                                                        <BiLoaderAlt className="modal__spinner-style" fadeIn="none" />
                                                                    </div>
                                                                ) : null}
                                                                <iframe className="modal__video-style" onLoad={spinner} loading="lazy" width="800" height="500" src="https://www.youtube.com/embed/6PhsAKsaxqc?si=4zNbfMTBi1XnpXaT" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </section>
                                            ) : null}
                                        </li>
                                        <li class="card cover2" onClick={openModal}>
                                        {modal ? (
                                                <section className="modal__bg">
                                                    <div className="modal__align">
                                                        <div className="modal__content" modal={modal}>
                                                            <IoCloseOutline className="modal__close" arial-label="Close modal" onClick={setModal} />
                                                            <div className="modal__video-align">
                                                                {videoLoading ? (
                                                                    <div className="modal__spinner">
                                                                        <BiLoaderAlt className="modal__spinner-style" fadeIn="none" />
                                                                    </div>
                                                                ) : null}
                                                                <iframe className="modal__video-style" onLoad={spinner} loading="lazy" width="800" height="500" src="https://www.youtube.com/embed/6PhsAKsaxqc?si=4zNbfMTBi1XnpXaT" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </section>
                                            ) : null}
                                        </li>
                                        <li class="card cover2" onClick={openModal}>
                                        {modal ? (
                                                <section className="modal__bg">
                                                    <div className="modal__align">
                                                        <div className="modal__content" modal={modal}>
                                                            <IoCloseOutline className="modal__close" arial-label="Close modal" onClick={setModal} />
                                                            <div className="modal__video-align">
                                                                {videoLoading ? (
                                                                    <div className="modal__spinner">
                                                                        <BiLoaderAlt className="modal__spinner-style" fadeIn="none" />
                                                                    </div>
                                                                ) : null}
                                                                <iframe className="modal__video-style" onLoad={spinner} loading="lazy" width="800" height="500" src="https://www.youtube.com/embed/6PhsAKsaxqc?si=4zNbfMTBi1XnpXaT" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </section>
                                            ) : null}
                                        </li>
               
                                    </ul>
                                </Container>
                            </TabPanel>
                            <TabPanel>
                                <Container class=" p-0">
                                    <ul class="cards">
                                        <li class="card cover">
                                        </li>
                                        <li class="card cover">
                                        </li>
                                        <li class="card cover">
                                        </li>
                                        <li class="card cover">
                                        </li>
                                        <li class="card cover">
                                        </li>
                                        <li class="card cover">
                                        </li>
                                        <li class="card cover">
                                        </li>
                                        <li class="card cover">
                                        </li>
                                        <li class="card cover">
                                        </li>
                                    </ul>
                                </Container>
                            </TabPanel>
                            <TabPanel>
                                <Container class=" p-0">
                                    <ul class="cards">
                                        <li class="card cover">
                                        </li>
                                        <li class="card cover">
                                        </li>
                                        <li class="card cover">
                                        </li>
                                        <li class="card cover">
                                        </li>
                                        <li class="card cover">
                                        </li>
                                        <li class="card cover">
                                        </li>
                                        <li class="card cover">
                                        </li>
                                        <li class="card cover">
                                        </li>
                                        <li class="card cover">
                                        </li>
                                    </ul>
                                </Container>
                            </TabPanel>
                        </Col>
                    </Tabs>

                </Row>
            </Container >



        </>
    )

}


export default TabSlider
