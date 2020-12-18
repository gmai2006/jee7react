const cols = [
  { title: 'productId', field: 'productId' },
  { title: 'customerGroupId', field: 'customerGroupId' },
  { title: 'quantity', field: 'quantity' },
  { title: 'priority', field: 'priority' },
  { title: 'price', field: 'price' },
  { title: 'dateStart', field: 'dateStart' },
  { title: 'dateEnd', field: 'dateEnd' },

];


export const OcProductDiscount = {
  cols: cols,
  title: 'Table OcProductDiscount',
  url: 'http://localhost:8080/jee7app/rest/ocproductdiscount/selectAll'
}