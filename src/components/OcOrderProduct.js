const cols = [
  { title: 'orderId', field: 'orderId' },
  { title: 'productId', field: 'productId' },
  { title: 'name', field: 'name' },
  { title: 'model', field: 'model' },
  { title: 'quantity', field: 'quantity' },
  { title: 'price', field: 'price' },
  { title: 'total', field: 'total' },
  { title: 'tax', field: 'tax' },
  { title: 'reward', field: 'reward' },

];


export const OcOrderProduct = {
  cols: cols,
  title: 'Table OcOrderProduct',
  url: 'http://localhost:8080/jee7app/rest/ocorderproduct/selectAll'
}