const cols = [
  { title: 'orderId', field: 'orderId' },
  { title: 'orderProductId', field: 'orderProductId' },
  { title: 'productOptionId', field: 'productOptionId' },
  { title: 'productOptionValueId', field: 'productOptionValueId' },
  { title: 'name', field: 'name' },
  { title: 'value', field: 'value' },
  { title: 'type', field: 'type' },

];


export const OcOrderOption = {
  cols: cols,
  title: 'Table OcOrderOption',
  url: 'http://localhost:8080/jee7app/rest/ocorderoption/selectAll'
}