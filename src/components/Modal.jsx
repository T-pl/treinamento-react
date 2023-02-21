import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import CloseButton from 'react-bootstrap/CloseButton';
import './modal.css'
import TableSearchProducts from './TableSearchProducts';
import { useState } from 'react';

function ModalSearchProducts(props) {
  const [valueInput, setInputValue] = useState('');
  const [showTable, setShowTable] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleShowTable = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
     setShowTable(true);
  }

  const handleInputChange = (event) => {
    setInputValue(event.target.value.toLowerCase());
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      backdrop="static"

    >
      <Modal.Header className='headerSection '>
        <Modal.Title id="contained-modal-title-vcenter">
          INFORME O PRODUTO
        </Modal.Title>
        <CloseButton style={{width: '15px !important', height: '15px !important'}} aria-label="Hide" id='btnClose' onClick={props.onHide}/>
      </Modal.Header>
      <Modal.Body  >
        <Form noValidate validated={validated}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>PRODUTO:</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Digite o Nome do Produto"
              autoFocus
              value={valueInput}
              onChange={handleInputChange}
              
            />
          </Form.Group>
        </Form>
        <h2 className='titleResults'> RESULTADOS: </h2>
        {showTable ? <TableSearchProducts 
          productName={valueInput}
          handleShowTable={handleShowTable}
          /> : null}
          
      </Modal.Body>
      <Modal.Footer >
        <Button
        title="Pressione Enter para buscar"
          variant="success"
          type="button"
          className="btnSubmit"
          onClick={handleShowTable}>(ENT) BUSCAR</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalSearchProducts;