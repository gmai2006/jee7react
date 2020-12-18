const cols = [
  { title: 'apiId', field: 'apiId' },
  { title: 'customerId', field: 'customerId' },
  { title: 'sessionId', field: 'sessionId' },
  { title: 'productId', field: 'productId' },
  { title: 'recurringId', field: 'recurringId' },
  { title: 'option', field: 'option' },
  { title: 'quantity', field: 'quantity' },
  { title: 'dateAdded', field: 'dateAdded' },

];


export const OcCart = {
  cols: cols,
  title: 'Table OcCart',
  url: 'http://localhost:8080/jee7app/rest/occart/selectAll'
}