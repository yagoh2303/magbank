import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Routes , Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCircle } from '@fortawesome/free-solid-svg-icons';

import AccountBalance from '../components/AccountBalance';
import AccountPayment from '../components/AccountPayment';
import AccountHistory from '../components/AccountHistory';


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
                <Row>
                    <Link to='/dashboard'>
                        <Button className='dashboard__button' variant='link' size='lg'>Minha conta</Button>
                    </Link>

                </Row>
                    
                
                <Row>
                    <Link to='/dashboard/payment'>
                        <Button variant='link' className='dashboard__button' size='lg'>Pagamentos</Button>
                    </Link>    
                </Row>
                    
                    
                <Row>
                    <Link to='/dashboard/history'>
                        <Button variant='link' className='dashboard__button' size='lg'>Extrato</Button>
                    </Link>    
                </Row>
                    
                    
            </Col>
            

        <Routes>
               
               <Route path='/' element={<AccountBalance />} />
               <Route path='/payment' element={<AccountPayment />} />
               <Route path='/history' element={<AccountHistory />} />

           </Routes>
           

        </Row>
    </Container>


);

export default Dashboard;