import React from "react";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Client0 from '../images/universal/Layer0.jpg';
import Client1 from '../images/universal/Layer1.jpg';
import Client2 from '../images/universal/Layer2.jpg';
import Client3 from '../images/universal/Layer3.jpg';
import Client4 from '../images/universal/Layer4.jpg';
import Client5 from '../images/universal/Layer5.jpg';
import Client6 from '../images/universal/Layer6.jpg';
import Client7 from '../images/universal/Layer7.jpg';
import Client8 from '../images/universal/Layer8.jpg';
import Client9 from '../images/universal/Layer9.jpg';
import Client10 from '../images/universal/Layer10.jpg';
import Client11 from '../images/universal/Layer11.jpg';



function UniversityPartner() {

	return (

		<>
		

			<Container style={{background: "#f9fafc"}} fluid>
                    <Row className="py-4" style={{ width:"80%",margin:"auto"}}>
						
					<Col sm={12} md={12} className="py-5 text-center">
					<h2 className="h-one"> <span style={{color:"blue"}}>650+</span> University Partners</h2>
					</Col>
						<Col sm={12} md={3}>
							<ul className="list-style-none">
								<li>  <img src={Client0} className="w-100 pb-3" alt="logo" /></li>
								<li>  <img src={Client4} className="w-100 pb-3" alt="logo" /></li>
								<li>  <img src={Client8} className="w-100 pb-3" alt="logo" /></li>
							</ul>
						</Col>

						<Col sm={12} md={3}>
							<ul className="list-style-none">
							    <li>  <img src={Client1} className="w-100 pb-3" alt="logo" /></li>
								<li>  <img src={Client5} className="w-100 pb-3" alt="logo" /></li>
								<li>  <img src={Client9} className="w-100 pb-3" alt="logo" /></li>
						
		
							</ul>
						</Col>

						<Col sm={12} md={3}>
							<ul className="list-style-none">
							   <li>  <img src={Client2} className="w-100 pb-3" alt="logo" /></li>
								<li>  <img src={Client6} className="w-100 pb-3" alt="logo" /></li>
								<li>  <img src={Client10} className="w-100 pb-3" alt="logo" /></li>
							</ul>
						</Col>

						<Col sm={12} md={3}>
							<ul className="list-style-none">
						     	<li>  <img src={Client3} className="w-100 pb-3" alt="logo" /></li>
								<li>  <img src={Client7} className="w-100 pb-3" alt="logo" /></li>
								<li>  <img src={Client11} className="w-100 pb-3" alt="logo" /></li>
							</ul>
						</Col>

						
						<Col sm={12} md={12} className="py-5 text-center">
	                     <p>
						Admission counselling services to these universities is FREE for students. As their official partners, we <br/>receive a student advisory fee from universities
						 </p>
						 <a href="./" className="my-5 btn btn-pad btn-primary"> View All Universities </a>
						</Col>




					</Row>

				</Container>

		

		</>
	)

}
export default UniversityPartner;
