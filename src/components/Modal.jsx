import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import './modal.css'
import TableSearchProducts from './TableSearchProducts';
import { useState } from 'react';

function ModalAddProducts(props) {
  const [valueInput, setInputValue] = useState('');
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      backdrop="static"
    
    >
      <Modal.Header  className='headerSection '>
        <Modal.Title id="contained-modal-title-vcenter">
          INFORME O PRODUTO
        </Modal.Title>
        <Button variant='danger' className='btnClose' onClick={props.onHide}> (ESC) FECHAR</Button>
      </Modal.Header>
      <Modal.Body  >
      <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>PRODUTO:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite o Nome do Produto"
                autoFocus
                value={valueInput}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
      <h2 className='titleResults'> RESULTADOS: </h2>
      <TableSearchProducts valueInput ={valueInput} />
      </Modal.Body>
      <Modal.Footer >
           <Button variant="success" className="btnSubmit" >BUSCAR</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalAddProducts;