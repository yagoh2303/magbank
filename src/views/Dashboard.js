import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCircle } from '@fortawesome/free-solid-svg-icons';

import './Dashboard.scss';
 
const Dashboard = () => (
    <Container className='dashboard py-4'>
        <Row>
            <Col xs={12} lg={3}>
                <Row>
                    <Col xs={4} className='mb-5'>
                        <span className='dashboard__user-avatar'>
                            <FontAwesomeIcon icon={faCircle} size='5x' color='#f8f9fa' />
                            <FontAwesomeIcon className='dashboard__user-icon' icon={faUser} size='3x' color='#7c7d7d' />
                        </span>
                        
                    </Col>

                    <Col xs={8}>
                        <h3>Yago Henrique</h3>
                        <p className='text-muted'>ag: 1123 c/c: 5811-1</p>
                    </Col>
                </Row>
                <Row><Button className='dashboard__button dashboard__button--active' variant='link' size='lg'>Minha conta</Button></Row>
                <Row><Button variant='link' className='dashboard__button' size='lg'>Pagamentos</Button></Row>
                <Row><Button variant='link' className='dashboard__button' size='lg'>Extrato</Button></Row>
            </Col>

            <Col xs={12} lg={3} className='dashboard__informations'>
                <h3 className='mb-4'>Conta Corrente</h3>
                <h6>Saldo em conta corrente</h6>
                <h4 className='mb-4'>
                    <small>R$</small>4.000<small>,00</small> 
                
                </h4>
                <h6 className='mb-3'>Cheque especial</h6>
                <p>Limite disponível</p>
                <p>R$ 6.000,00</p>

                <Button className='mt-4' variant='secondary'>Ver extrato</Button>
            </Col>

            <Col xs={12} lg={6}>
            </Col>
        </Row>
    </Container>


);

export default Dashboard;