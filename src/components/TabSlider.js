
import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


function TabSlider() {


    return (

        <>

            <Container fluid className='p-0'>
                <Row>
                
                    <Tabs> 
                    <Col sm={12} md={1} className="text-center float-left"><p></p></Col>
                        <Col sm={12} md={4} className="py-5 px-5 text-center float-left">
                            <h2 className="py-5 text-left fw-medium" style={{fontSize:"42px"}}> Students at the heart of everthing we do </h2>

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
                                        <li class="card cover">
                                        </li>
                                        <li class="card cover2">
                                        </li>
                                        <li class="card cover">
                                        </li>
                                        <li class="card cover2">
                                        </li>
                                        <li class="card cover">
                                        </li>
                                        <li class="card cover2">
                                        </li>
                                        <li class="card cover">
                                        </li>
                                        <li class="card cover2">
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






