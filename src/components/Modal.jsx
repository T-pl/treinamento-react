import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import './modal.css'
import TableSearchProducts from './TableSearchProducts';
import { useState } from 'react';
import productsOnTable from '../datafake/dataInfoSearch.json'
import products from '../datafake/dataProduct.json'

function ModalSearchProducts(props) {
  const [valueInput, setInputValue] = useState('');
  const [showTable, setShowTable] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filteredTables, setFilteredTables] = useState([]);



  // const handleFilteredTables = () => {
  //   const filteredTables = productsOnTable.filter(table => {
  //     const tableProductIds = productsOnTable.product_ids;
  //     for (let i = 0; i < tableProductIds.length; i++) {
  //       if (filteredProducts.find(product => product.product_id === tableProductIds[i])) {
  //         return true;
  //       }
  //     }
  //     return false;
  //   });
  //   setFilteredTables(filteredTables)
  // }


  const handleShowTable = () => {
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
        {showTable && <TableSearchProducts productName={valueInput} />}
      </Modal.Body>
      <Modal.Footer >
        <Button variant="success" className="btnSubmit" onClick={handleShowTable} >BUSCAR</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalSearchProducts;