const cols = [
  { title: 'orderId', field: 'orderId' },
  { title: 'code', field: 'code' },
  { title: 'title', field: 'title' },
  { title: 'value', field: 'value' },
  { title: 'sortOrder', field: 'sortOrder' },

];


export const OcOrderTotal = {
  cols: cols,
  title: 'Table OcOrderTotal',
  url: 'http://localhost:8080/jee7app/rest/ocordertotal/selectAll'
}