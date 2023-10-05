// Post1.js
import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Col from 'react-bootstrap/Col';

const Post1 = () => {
  return (

<>

    <Col sm={12} md={8}>
    <Card className="flexrow">
      <Card.Img
        variant="top"
         src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230305183140/Javascript.jpg"/>
      <Card.Body>
        <Card.Title>JAVASCRIPT</Card.Title>
        <Card.Text>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </Card.Text>
        <Link exact to="/post1" className="btn btn-primary">
          Read More
        </Link>
      </Card.Body>
    </Card>
    </Col>


</>
  );
};

export default Post1;
