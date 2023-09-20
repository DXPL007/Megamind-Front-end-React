import React from "react";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

import Client0 from '../images/clientlogo/1copy.png';
import Client1 from '../images/clientlogo/2copy.png';
import Client2 from '../images/clientlogo/3copy.png';
import Client3 from '../images/clientlogo/4copy.png';
import Client4 from '../images/clientlogo/5copy.png';
import Client5 from '../images/clientlogo/6copy.png';
import Client6 from '../images/clientlogo/7copy.png';
import Client7 from '../images/clientlogo/8copy.png';
import Row from 'react-bootstrap/Row';


function ClientView() {
    return (
        <>


            
            <Container style={{background: ""}} fluid>
                    <Row className="pb-5 border-bottom" style={{ width:"80%",margin:"auto"}}>

                    <Col sm={12} md={12} className="py-5 text-center">
                    <h2 className="h-one text-black" style={{letterSpacing: "-1px"}}> Accreditation & Association</h2>
                     </Col>
                        <div className="slider">
                            <div className="slide-track">

                                <div className="slide">
                                    <img src={Client0} alt="logo" />
                                </div>

                                <div className="slide">
                                    <img src={Client1} alt="logo" />
                                </div>

                                <div className="slide">
                                    <img src={Client2} alt="logo" />
                                </div>

                                <div className="slide">
                                    <img src={Client3} alt="logo" />
                                </div>

                                <div className="slide">
                                    <img src={Client4} alt="logo" />
                                </div>

                                <div className="slide">
                                    <img src={Client5} alt="logo" />
                                </div>

                                <div className="slide">
                                    <img src={Client6} alt="logo" />
                                </div>


                                <div className="slide">
                                    <img src={Client4} alt="logo" />
                                </div>

                                <div className="slide">
                                    <img src={Client5} alt="logo" />
                                </div>

                                <div className="slide">
                                    <img src={Client6} alt="logo" />
                                </div>
                                <div className="slide">
                                    <img src={Client7} alt="logo" />
                                </div>

                                <div className="slide">
                                    <img src={Client0} alt="logo" />
                                </div>

                                <div className="slide">
                                    <img src={Client1} alt="logo" />
                                </div>

                                <div className="slide">
                                    <img src={Client2} alt="logo" />
                                </div>

                                <div className="slide">
                                    <img src={Client3} alt="logo" />
                                </div>

                                <div className="slide">
                                    <img src={Client4} alt="logo" />
                                </div>

                                <div className="slide">
                                    <img src={Client5} alt="logo" />
                                </div>

                                <div className="slide">
                                    <img src={Client6} alt="logo" />
                                </div>


                                <div className="slide">
                                    <img src={Client4} alt="logo" />
                                </div>

                                <div className="slide">
                                    <img src={Client5} alt="logo" />
                                </div>

                                <div className="slide">
                                    <img src={Client6} alt="logo" />
                                </div>
                                <div className="slide">
                                    <img src={Client7} alt="logo" />
                                </div>



                            </div>
                        </div>

                    </Row>
                </Container>
    
        </>
    )
}

export default ClientView;


