import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';



function StudySlider() {

    
    return (

        <section class="pt-5" style={{ background:"#f9fafc"}}>
    
            <Container fluid>
                <Row className="pt-5" style={{ width: "80%", margin: "auto" }}>

                   <Col sm={12} md={12} className="text-center">
					<h2 className="display-6 fw-medium m-0"> Explore our top study destinations </h2>
                    <p className='m-0'> Countries That We Provide Services from Last 3 Years </p>
					</Col>

                    <Col sm={12} md={12} style={{ textAlign: "left !important" }}>
                        <a className="btn bts-bt btn-left" href="#carouselExampleIndicators2" role="button" data-slide="prev">
                         <BsFillArrowLeftCircleFill/>
                        </a>
                    </Col>

                    <Col sm={12} md={12}>
                        <div id="carouselExampleIndicators2" class="carousel slide" data-ride="carousel">

                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <Row>
                                        <Col sm={12} md={4} className="mb-3">
                                            <div className="card-box">
                                                <img className="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d" />
                                                <h4 className="Box-Title">Special title treatment</h4>

                                            </div>
                                        </Col>
                                        <Col sm={12} md={4} className="mb-3">
                                            <div className="card-box">
                                                <img className="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=42b2d9ae6feb9c4ff98b9133addfb698" />
                                                <h4 className="Box-Title">Special title treatment</h4>

                                            </div>
                                        </Col>
                                        <Col sm={12} md={4} className="mb-3">
                                            <div className="card-box">
                                                <img className="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=3d2e8a2039c06dd26db977fe6ac6186a" />

                                                <h4 className="Box-Title">Special title treatment</h4>

                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="carousel-item">
                                    <Row>

                                        <Col sm={12} md={4} className="mb-3">
                                            <div className="card-box">
                                                <img className="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532771098148-525cefe10c23?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=3f317c1f7a16116dec454fbc267dd8e4" />
                                                <h4 className="Box-Title">Special title treatment</h4>

                                            </div>
                                        </Col>
                                        <Col sm={12} md={4} className="mb-3">
                                            <div className="card-box">
                                                <img className="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532715088550-62f09305f765?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=ebadb044b374504ef8e81bdec4d0e840" />

                                                <h4 className="Box-Title">Special title treatment</h4>

                                            </div>
                                        </Col>
                                        <Col sm={12} md={4} className="mb-3">
                                            <div className="card-box">
                                                <img className="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=0754ab085804ae8a3b562548e6b4aa2e" />
                                                <h4 className="Box-Title">Special title treatment</h4>
                                            </div>
                                        </Col>

                                    </Row>
                                </div>
                                <div className="carousel-item">
                                    <Row>

                                        <Col sm={12} md={4} className="mb-3">
                                            <div className="card-box">
                                                <img className="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=ee8417f0ea2a50d53a12665820b54e23" />
                                        
                                                    <h4 className="Box-Title">Special title treatment</h4>
                                    

                                            </div>
                                        </Col>
                                        <Col sm={12} md={4} className="mb-3">
                                            <div className="card-box">
                                                <img className="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532777946373-b6783242f211?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=8ac55cf3a68785643998730839663129" />
                                               
                                                    <h4 className="Box-Title">Special title treatment</h4>
                                               
                                            </div>
                                        </Col>
                                        <Col sm={12} md={4} className="mb-3">
                                            <div className="card-box">
                                                <img className="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532763303805-529d595877c5?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=5ee4fd5d19b40f93eadb21871757eda6" />

                                                <h4 className="Box-Title">Special title treatment</h4>

                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col sm={12} md={12} className="text-right">
                        <a className="btn bts-bt btn-right" href="#carouselExampleIndicators2" role="button" data-slide="next">
                            <BsFillArrowRightCircleFill/>
                        </a>
                    </Col>
                </Row>

            </Container>
        </section>



    );

}

export default StudySlider