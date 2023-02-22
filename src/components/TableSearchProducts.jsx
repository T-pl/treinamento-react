import Table from 'react-bootstrap/Table';
import dataInfoSearch from '../datafake/dataInfoSearch.json';
import './tableSearchProducts.css'
import products from '../datafake/dataProduct.json'

function TableSearchProducts({ productName }, event) {

  const produtoId = products.find(product => {
    return product.name.toLowerCase() === productName;
  })?.product_id;
  if (!produtoId) {
    
    return <div style={{ color: 'red' }}>Produto não encontrato.</div>;
    
  } 

  const productOnTable = dataInfoSearch.filter(mesa => {
    return mesa.product_ids.includes(produtoId);
  });

  const rowsData = productOnTable.map((info, table_id) => {
    if (info.product_ids.includes(produtoId)) {
      return (
        <tr key={table_id}>
          <td>{info.date_time}</td>
          <td>{info.server_name}</td>
          <td>{info.table_id}</td>
        </tr>
      );
    }
    return null;
  }).filter(row => row != null);

  
  return (
    <Table className='tableProduct' striped bordered hover>
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