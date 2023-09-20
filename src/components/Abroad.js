import React from "react";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



function Abroad() {

    return (
        <>

            <Container className="Bg-Aboard" fluid>
                <Row className="py-5" style={{ width: "80%", margin: "auto" }}>

                    <Col sm={12} md={2}>
                        <ul className="list-style-none">
                     
                    
                        </ul>
                    </Col>

                    <Col sm={12} md={8}>
                        <ul className="list-style-none text-center list-blocker">
                        <p className="pt-5 h-two"> </p>
                        <p className="pt-2"> </p>
                        <button type="submit" class=" mt-button2 btn btn-primary">Course Finder</button>
                         

                        </ul>
                    </Col>

                    <Col sm={12} md={2}>
                        <ul className="list-style-none">
                 
                        </ul>
                    </Col>

                </Row>
            </Container>



        </>
    )

}
export default Abroad;
