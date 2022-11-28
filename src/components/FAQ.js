import React, {useState} from 'react';
import { Row, Col, Container, Accordion } from 'react-bootstrap';
import IconText from './IconItems';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCreditCard, faWallet, faShieldAlt, faUserTie} from '@fortawesome/free-solid-svg-icons';

import './FAQ.scss';

const Faq = () => {
    const options = [
        { icon: faCreditCard, text:'Cartão de crédito e débito'},
        { icon: faWallet, text:'Conta e abertura'},
        { icon: faShieldAlt,text:'Tolken digital'},
        { icon: faUserTie, text:'Produtos e serviços'}

    ];

    const [index, setIndex] = useState(0);

    return (
    <section className='faq text-light'>
    <Container className='py-5'>
        <Row className='justify-content-center'>
            <h2 className='faq-title my-5'>Dúvidas frequentes</h2>
        </Row>
         
        <Row className='d-flex align-items-center justify-content-center'>
            <Col className="d-lg-none mb-5" xs={12}>
                <Row>
                    {
                        options.map(({icon}, key) => (
                            <Col className='d-flex justify-content-center' key={key}>
                                <FontAwesomeIcon icon={icon} size='2x' color="#FFF" onClick={() => setIndex(key)}/>
                            </Col>
                        ))
                    }
                </Row>
            </Col>

            <Col className="d-none d-lg-block">

                {
                    options.map(({ icon, text }, key) => (
                        <IconText icon={icon} size={3} className='mb-3' textClassName='lead' color="#FFF" onClick={() => setIndex(key)} key={key}> {text}</IconText>
                    ))
                }
                
            </Col>
            <Col>
                <Accordion defaultActiveKey={`${index}`}>
                <Accordion.Item eventKey="0" className='faq_card text-light'>
                    <Accordion.Header className='header'>Lorem ipsum dolor sit</Accordion.Header>
                    <Accordion.Body >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className='faq_card text-light'>
                    <Accordion.Header>Duis aute irure dolor </Accordion.Header>
                    <Accordion.Body >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className='faq_card text-light'>
                    <Accordion.Header>Excepteur sint occaecat cupidatat </Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" className='faq_card text-light'>
                    <Accordion.Header>Duis aute irure dolor in </Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                </Accordion>
            </Col>
        </Row>
    </Container>
    </section>


);

} 


export default Faq;