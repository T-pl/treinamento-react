import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import './modal.css'

function ModalAddProducts(props) {
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
      <Modal.Body>
      <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>PRODUTO:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite o Nome do Produto"
                autoFocus
              />
            </Form.Group>
          </Form>
      </Modal.Body>
      <Modal.Footer>
           <Button variant="success" className="btnSubmit" >ENVIAR</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalAddProducts;