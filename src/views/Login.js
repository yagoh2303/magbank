import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Form, Button, Image } from 'react-bootstrap';
import logo from '../assets/logo.svg'

import './Login.scss'

const Login = () => (
    <section className='login'>
        <div className='login__container'>
        <Row>
            <Col className='text-center'>
                <Image src={logo} className='my-5'/>
                <Form>
                <Form.Group className="mb-3 text-light">
                    <Form.Label><strong>Número da conta</strong></Form.Label>
                        <Form.Control type="number" />
                </Form.Group>

                    <Form.Group className="mb-3 text-light">
                        <Form.Label><strong>Senha</strong></Form.Label>
                        <Form.Control type="password" />
                    </Form.Group>
                   
                    <Link to='/dashboard'>
                    <Button variant="success" type="submit">
                        Criar conta
                    </Button>
                    </Link>
                </Form>
            </Col>
        </Row>
        </div>
    </section>

);

export default Login;