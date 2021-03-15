import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container, Row, Col
  } from 'reactstrap';
import worldPic from '../assets/world.jpg';
import arrowPic from '../assets/arrowFunction.jpg';

const FunctionalComponentDemo = () => {
    return (
        <Container className="main">
            <Row>
                <Col xs="12">
                <h1>Functional Component</h1>
                <p>Functional Components are the primary tool in React to build a small, modular piece of your page.</p>
                <dl>
                    <dt>Can use state</dt>
                    <dd>With the 'useState' hook, functional components can now both render a display to the page and update the information to be shown.</dd>
                    <dt>No 'this' keyword</dt>
                    <dd>Older class components use 'this', functional components have no 'this' object.</dd>
                    <dt>Can use effects</dt>
                    <dd>With the 'useEffect' hook, functional components can perform side effect with any props or state changes.</dd>
                    <dt>return()</dt>
                    <dd>Must return a single element, but this element may have nested elements inside.</dd>
                </dl>
                </Col>
                <h1>Functional Syntax versus Arrow Function</h1>
            </Row>
            <hr />
            <h1>Challenge</h1>
            <Row>
                <Col md="6">
                <HelloWorldFatArrow />
                </Col>
                <Col md="6">
                    <HelloWorld />
                </Col>
            </Row>
       </Container>
    );
};

export default FunctionalComponentDemo;


const HelloWorld = function () {
    return (
        <div>
            <Card>
                <img width="50%" height="280px" src={worldPic} alt="Card cap" />
                <CardBody>
                    <CardTitle>Regular Ol' Function</CardTitle>
                    <CardSubtitle>A JS Library</CardSubtitle>
                    <CardText><pre>const HelloWorld = function () </pre>.</CardText>
                    <Button>Why don't you ever take me anywhere?</Button>
                </CardBody>
            </Card>

        </div>
    );
};

const HelloWorldFatArrow = () => {
    return (
        <div>
            <Card>
                <img width="50%" height="280px" src={arrowPic} alt="Card cap" />
                <CardBody>
                    <CardTitle>Fat Arrow Function</CardTitle>
                    <CardSubtitle>A JS Library</CardSubtitle>
                    <CardText><pre>const HelloWorld = () => </pre>.</CardText>
                    <Button>Even just a weekend away?</Button>
                </CardBody>
            </Card>
        </div>
    );
};


