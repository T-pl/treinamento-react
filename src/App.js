
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import ModalSearchProducts from './components/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Buscar Produto
      </Button>
      <ModalSearchProducts
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

    </>
  );
}

export default App;
