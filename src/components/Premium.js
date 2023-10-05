import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { Grid, Paper } from '@mui/material';
import PremiumImage1 from '../images/premium/Screenshot_1.png';
import PremiumImage2 from '../images/premium/Screenshot_2.png';
import PremiumImage3 from '../images/premium/Screenshot_3.png';
import PremiumImage4 from '../images/premium/Screenshot_4.png';
import PremiumImage5 from '../images/premium/Screenshot_5.png';



function Premium() {

	return (

		<>


				<Container className='mobile-padding Bg-Back' fluid>
					<Row className="py-5">
   
						<Col sm={12} md={12} className="text-center">
							<h2 className="display-8 fw-medium text-black"> Premium Services</h2>
							<p className="fw-medium"> one stop solution for all your study abroad needs </p>
						</Col>

						<Col sm={12} md={12} className="padding-top-5">
						</Col>
						<Col sm={12} md={12} className="padding-top-5">
						</Col>
						<Col sm={12} md={12} className="padding-top-5">
						</Col>
						<Col sm={12} md={12} className="padding-top-5">
						</Col>
						<Col sm={12} md={12} className="padding-top-5">
						</Col>
						<Col sm={12} md={12} className="padding-top-4">
						</Col>
						<Col sm={12} md={12} className="padding-top-4">
						</Col>

					</Row>

					<Row className="mobile-padding text-center m-auto" style={{ width: "90%" }}>
						<Grid className="grid mobile-padding align-items-stretch grid-system justify-content-center">
                          

						<Grid item className="mx-2">
								<Paper className="grid-box">
									<img src={PremiumImage3}  className="w-75" alt="logo" />
									<p className='fw-medium text-medium'>international <br/> sim card</p>
								</Paper>
							</Grid>

							<Grid item className="mx-2">
								<Paper className="grid-box">
									<img src={PremiumImage1} className="w-75" alt="logo" />
									<p className='fw-medium text-medium'>international <br/> bank account</p>
								</Paper>
							</Grid>

						   <Grid item className="mx-2">
								<Paper className="grid-box">
									<img src={PremiumImage2} className="w-75" alt="logo" />
									<p className='fw-medium text-medium'> international <br/>money transfer </p>
								</Paper>
							</Grid>

						
							
							
							<Grid item className="mx-2">
								<Paper className="grid-box">
									<img src={PremiumImage4} className="w-75" alt="logo" />
									<p className='fw-medium text-medium'> housing <br/> <span style={{visibility:"hidden"}}>.</span></p>
								</Paper>
							</Grid>
							<Grid item className="mx-2">
								<Paper className="grid-box">
									<img src={PremiumImage5} className="w-75" alt="logo" />
									<p className='fw-medium text-medium'>credit card <br/><span style={{visibility:"hidden"}}>.</span></p>
								</Paper>
							</Grid>

						</Grid>


					</Row>
				</Container>



		</>
	)

}
export default Premium;