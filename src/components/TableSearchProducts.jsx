import Table from 'react-bootstrap/Table';
import dataInfoSearch from '../datafake/dataInfoSearch.json';
import './tableSearchProducts.css'



function TableSearchProducts() {


  const rowsData = dataInfoSearch.map((info, table_id) => {
    return (
      <tr key={table_id}>
        <td>{info.date_time}</td>
        <td>{info.server_name}</td>
        <td>{info.table_id}</td>
      </tr>
    );


  })

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th className='titleColumn'>DATA E HORA DO PEDIDO</th>
          <th className='titleColumn'>FUNCIONÁRIO</th>
          <th className='titleColumn'>LOCAL DO PEDIDO</th>
        </tr>
      </thead>
      <tbody className='tableBody'>
        {rowsData}
      </tbody>
    </Table>
  )
}

export default TableSearchProducts;