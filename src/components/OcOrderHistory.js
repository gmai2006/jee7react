const cols = [
  { title: 'orderId', field: 'orderId' },
  { title: 'orderStatusId', field: 'orderStatusId' },
  { title: 'notify', field: 'notify' },
  { title: 'comment', field: 'comment' },
  { title: 'dateAdded', field: 'dateAdded' },

];


export const OcOrderHistory = {
  cols: cols,
  title: 'Table OcOrderHistory',
  url: 'http://localhost:8080/jee7app/rest/ocorderhistory/selectAll'
}