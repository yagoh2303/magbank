import React from 'react';
import {Col, Table, Tab, Tabs} from 'react-bootstrap';

const AccountHistory = () => (

    <Col xs={12} lg={8} className='mt-5'>
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
    </Tabs>
</Col>
)

export default AccountHistory;