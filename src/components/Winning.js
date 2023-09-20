import React from "react";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Winning0 from '../images/winning/Screenshot_1.png';
import Winning1 from '../images/winning/Screenshot_2.png';
import Winning2 from '../images/winning/Screenshot_3.png';
import Winning3 from '../images/winning/Screenshot_4.png';



function Winning() {

	return (

		<>
	

			<Container fluid>
                    <Row className="pb-5 pt-5" style={{ width:"80%",margin:"auto"}}>
					<Col sm={12} md={12} className="py-5 text-center">
					<h2 className="display-6 text-black"> Our Winning Record </h2>
                    <p>No tall claims, we back the efficiency of our consultancy with stats. Check for yourselves!</p>
					</Col>
						<Col sm={12} md={3}>
							<ul className="list-style-none">
                            <li className="text-center">  
                              <img src={Winning0} className="w-100 pb-3" alt="logo" />
                              <p className="text-font">15 k +</p>
                                    <h5>Successful Admits</h5>
                              </li>
				
							</ul>
						</Col>
						<Col sm={12} md={3}>
							<ul className="list-style-none">
                            <li className="text-center">  
                                     <img src={Winning1} className="w-100 pb-3" alt="logo" />
                                     <p className="text-font">$15 Million+</p>
                                    <h5>Scholorships Achievd</h5>
                                
                                </li>
		
							</ul>
						</Col>
						<Col sm={12} md={3}>
							<ul className="list-style-none">
                            <li className="text-center">  
                                 <img src={Winning2} className="w-100 pb-3" alt="logo" />
                                 <p className="text-font">3500 Cr+</p>
                                 <h5>Loans Sanctioned</h5>
                               </li>

							</ul>

						</Col>

						<Col sm={12} md={3}>
							<ul className="list-style-none">
						     	<li className="text-center">  
                                    <img src={Winning3} className="w-100 pb-3" alt="logo" />
                                    <p className="text-font"> 98% </p>
                                    <h5>Visa Success Rate</h5>
                                </li>
			
							</ul>
						</Col>

                        <Col sm={12} md={12} className="text-center py-5">
                  <a  href="./" className="btn btn-pad btn-primary">Say hii! Get a Call From Counselling Expert</a>
                  </Col>
					</Row>

				</Container>

	

		</>
	)

}
export default Winning;