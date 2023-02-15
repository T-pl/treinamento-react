import Table from 'react-bootstrap/Table';
import dataInfoSearch from '../datafake/dataInfoSearch.json';
import './tableSearchProducts.css'
import products from '../datafake/dataProduct.json'

function TableSearchProducts({ productName }) {
  const produtoId = products.filter(product => {
    const productFound = product.name.toLowerCase().includes(productName)
    if (productFound) {
      return console.log(product.product_id);
    }
    return true
  });
  if (produtoId.length === 0) {
    return console.log('Não há produtos correspondentes');
  }
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