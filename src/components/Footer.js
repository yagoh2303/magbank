import React from "react";
import { Container, Col, Row, Image} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebookSquare,
    faTwitter,
    faYoutube

    
} from '@fortawesome/free-brands-svg-icons';

import logo from '../assets/MAGbank.png';
import applestore from '../assets/applestore.png';
import googleplay from '../assets/googleplay.png';
import './Footer.scss';


const Footer = () =>  (

    <footer className='footer'>
        <Container>
            <Row className='py-5 logo'>
                <Col xs={12} lg={6} className='text-lg-left'>
                    <Image src={logo} />
                </Col>
                <Col xs={12} lg={4} className='store'>
                    <Image src={applestore}  />
                    <Image src={googleplay} className='mx-2' />
                </Col>
                <Col xs={12} lg={2} className='d-flex align-items-center justify-content-center'>
                    <FontAwesomeIcon icon={faFacebookSquare} color='#7c7c7c' size='2x' / > 
                    <FontAwesomeIcon icon={faTwitter} color='#7c7c7c' size='2x' className='mx-2'  /> 
                    <FontAwesomeIcon icon={faYoutube} color='#7c7c7c' size='2x' /> 

                </Col>
            </Row>
        </Container>
    </footer>
);

export default Footer;