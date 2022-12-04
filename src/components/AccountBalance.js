import React from 'react';
import {Col, Table, Button, Tabs, Tab} from 'react-bootstrap'

const AccountBalance = () => (
    <>
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


            <Col xs={12} lg={5} className='mt-5'>
                <Tabs className='mt-5 py-4' defaultActiveKey='latest'>
                    <Tab eventKey='latest' title='Últimos lançamentos'>
                        <Table>
                            <thead>
                                <tr>
                                    <th>Data</th>
                                    <th>Descrição</th>
                                    <th>Valor</th>
                                </tr>
                            </thead>
                            <tbody>
                            <tr className='row__impar'>
                                <td>11/11</td>
                                <td>VENDA DE CURSO - PROGRAMAÇÃO</td>
                                <td><strong>R$600,00</strong></td>
                            
                            </tr>
                            <tr>
                                <td>13/11</td>
                                <td>SALÁRIO DE EMPRESA 1</td>
                                <td><strong>R$2500,00</strong></td>
                            
                            </tr>
                            <tr className='row__impar'>
                                <td>14/11</td>
                                <td>ALUGUEL</td>
                                <td><strong>R$800,00</strong></td>
                            
                            </tr>
                            <tr>
                                <td>17/11</td>
                                <td>SALÁRIO DE EMPRESA 2</td>
                                <td><strong>R$1700,00</strong></td>
                            
                            </tr>
                            </tbody>
                        </Table>
                    </Tab>
                    <Tab eventKey='future' title='Lançamentos futuros' disabled></Tab>
                </Tabs>
            </Col>
    
    </>
)

export default AccountBalance