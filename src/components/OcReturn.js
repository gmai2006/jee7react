const cols = [
  { title: 'orderId', field: 'orderId' },
  { title: 'productId', field: 'productId' },
  { title: 'customerId', field: 'customerId' },
  { title: 'firstname', field: 'firstname' },
  { title: 'lastname', field: 'lastname' },
  { title: 'email', field: 'email' },
  { title: 'telephone', field: 'telephone' },
  { title: 'product', field: 'product' },
  { title: 'model', field: 'model' },
  { title: 'quantity', field: 'quantity' },
  { title: 'opened', field: 'opened' },
  { title: 'returnReasonId', field: 'returnReasonId' },
  { title: 'returnActionId', field: 'returnActionId' },
  { title: 'returnStatusId', field: 'returnStatusId' },
  { title: 'comment', field: 'comment' },
  { title: 'dateOrdered', field: 'dateOrdered' },
  { title: 'dateAdded', field: 'dateAdded' },
  { title: 'dateModified', field: 'dateModified' },

];


export const OcReturn = {
  cols: cols,
  title: 'Table OcReturn',
  url: 'http://localhost:8080/jee7app/rest/ocreturn/selectAll'
}