const cols = [
  { title: 'customerId', field: 'customerId' },
  { title: 'orderId', field: 'orderId' },
  { title: 'description', field: 'description' },
  { title: 'amount', field: 'amount' },
  { title: 'dateAdded', field: 'dateAdded' },

];


export const OcCustomerTransaction = {
  cols: cols,
  title: 'Table OcCustomerTransaction',
  url: 'http://localhost:8080/jee7app/rest/occustomertransaction/selectAll'
}