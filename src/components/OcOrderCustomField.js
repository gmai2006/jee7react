const cols = [
  { title: 'orderId', field: 'orderId' },
  { title: 'customFieldId', field: 'customFieldId' },
  { title: 'customFieldValueId', field: 'customFieldValueId' },
  { title: 'name', field: 'name' },
  { title: 'value', field: 'value' },
  { title: 'type', field: 'type' },
  { title: 'location', field: 'location' },

];


export const OcOrderCustomField = {
  cols: cols,
  title: 'Table OcOrderCustomField',
  url: 'http://localhost:8080/jee7app/rest/ocordercustomfield/selectAll'
}