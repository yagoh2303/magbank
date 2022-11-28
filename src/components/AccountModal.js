import React from "react";
import { Modal, Button, Form } from 'react-bootstrap';

const AccountModal = ({show, handleClose}) => (
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Abra sua conta</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Seu nome</Form.Label>
                    <Form.Control type="text" placeholder="Digite seu nome" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Seu e-mail</Form.Label>
                    <Form.Control type="email" placeholder="Digite seu e-mail" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCity">
                    <Form.Label>Sua cidade</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option value="1">Recife - PE</option>
                        <option value="2">Jaboatão dos Guararapes - PE</option>
                         <option value="3">Abreu e Lima - PE</option>
                    </Form.Select>
                </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Li e aceito os termos de uso" />
                    </Form.Group>
           
            </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Criar conta
          </Button>
        </Modal.Footer>
      </Modal>

);

export default AccountModal;