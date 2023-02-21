
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import ModalSearchProducts from './components/Modal';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button className='btnShowModal' variant="primary" onClick={() => 
      setModalShow(true)
        }>
      
      </Button>
      <ModalSearchProducts
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

    </>
  );
}

export default App;
