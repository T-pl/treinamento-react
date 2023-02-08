import React from 'react'
import './modal.css'
function Modal({closeModal}) {
  return (
    <div className="modalBackground">

    <div className='modalContainer'>
        <div className='headerModal'>
            <h2>INFORME O PRODUTO</h2>
            <button onClick={() =>closeModal(false)}>(ESC) FECHAR</button>
        </div>

        <form  action="#">
            <label htmlFor="#">PRODUTO:</label>
            <input type="text" />
            <input type="submit" value="ENVIAR" />
        </form>


    </div>
    </div>
  )
}

export default Modal