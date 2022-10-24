import React from 'react';
import { Card, Button, Image, Row, Col } from 'react-bootstrap'
import logo from '../assets/logo__magic-pay--mobile.png';
import logoDesktop from '../assets/logo__magic-pay.png';
import "./Hero.scss"




const Hero = () => (
    <Card className='text-center text-light hero'>
        <Row className="my-lg-5">
            <Col lg className="text-lg-end my-lg-5">
                <Image className='d-lg-none' src={logo} />
                <Image className='d-none d-lg-inline-block' src={logoDesktop} />

            </Col>

            <Col lg className="text-lg-start my-lg-5">
                <p>Pague suas contas pelo nosso APP.</p>
                <Button variant='outline-light'>Acesse sua conta</Button>
            </Col>

        </Row>
        
        
    </Card>
); 

export default Hero;
