import Table from 'react-bootstrap/Table';
import dataInfoSearch from '../datafake/dataInfoSearch.json';
import './tableSearchProducts.css'
import dataProduct from '../datafake/dataProduct.json'


function TableSearchProducts({produtoBuscado, valueInput}) {
    
       
    const rowsData = dataInfoSearch.map((info, key) =>{
     return info.Name === valueInput ? (
        <tr key={info.id}>
          <td>{info.Date}</td>
          <td>{info.Name}</td>
          <td>{info.Local}</td>
        </tr>
      ) : null;
        
          
      })

  return (
    <Table striped bordered hover className='tableInfo'>
      <thead>
        <tr>
          <th className='titleColumn'>DATA E HORA DO PEDIDO</th>
          <th  className='titleColumn'>FUNCIONÁRIO</th>
          <th  className='titleColumn'>LOCAL DO PEDIDO</th>
        </tr>
      </thead>
      <tbody className='tableBody'>
        {rowsData}
      </tbody>
    </Table>
  )
}

export default TableSearchProducts;