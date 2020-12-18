const cols = [
  { title: 'voucherId', field: 'voucherId' },
  { title: 'orderId', field: 'orderId' },
  { title: 'amount', field: 'amount' },
  { title: 'dateAdded', field: 'dateAdded' },

];


export const OcVoucherHistory = {
  cols: cols,
  title: 'Table OcVoucherHistory',
  url: 'http://localhost:8080/jee7app/rest/ocvoucherhistory/selectAll'
}