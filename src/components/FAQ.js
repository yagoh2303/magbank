import React from 'react';
import { Row, Col, Container, Accordion } from 'react-bootstrap';
import IconText from './IconItems';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCreditCard, faWallet, faShieldAlt, faUserTie} from '@fortawesome/free-solid-svg-icons';

import './FAQ.scss';

const Faq = () => (
    <section className='faq text-light'>
    <Container className='py-5'>
        <Row className='d-flex align-items-center justify-content-center'>
            <Col className="d-lg-none mb-5" xs={12}>
                <Row>
                    <Col className='d-flex justify-content-center'>
                        <FontAwesomeIcon icon={faCreditCard} size='2x' color="#FFF"/>
                    </Col>
                    <Col className='d-flex justify-content-center'>
                        <FontAwesomeIcon icon={faWallet} size='2x' color="#FFF" />
                    </Col>
                    <Col className='d-flex justify-content-center'>
                        <FontAwesomeIcon icon={faShieldAlt} size='2x' color="#FFF" />
                    </Col>
                    <Col className='d-flex justify-content-center'>
                        <FontAwesomeIcon icon={faUserTie} size='2x' color="#FFF" />
                    </Col>
                </Row>
            </Col>
            <Col className="d-none d-lg-block">
                <IconText icon={faCreditCard} size={3} className='mb-3' textClassName='lead' color="#FFF">Cartão de crédito e débito</IconText>
                <IconText icon={faWallet} size={3} className='mb-3' textClassName='lead' color="#FFF">Conta e abertura</IconText>
                <IconText icon={faShieldAlt} size={3} className='mb-3' textClassName='lead' color="#FFF">Tolken digital</IconText>
                <IconText icon={faUserTie} size={3} textClassName='lead' color="#FFF">Produtos e serviços</IconText>

            </Col>
            <Col>
                <Accordion defaultActiveKey="0">
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

export default Faq;