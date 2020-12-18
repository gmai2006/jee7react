const cols = [
  { title: 'storeId', field: 'storeId' },
  { title: 'code', field: 'code' },
  { title: 'key', field: 'key' },
  { title: 'value', field: 'value' },
  { title: 'serialized', field: 'serialized' },

];


export const OcSetting = {
  cols: cols,
  title: 'Table OcSetting',
  url: 'http://localhost:8080/jee7app/rest/ocsetting/selectAll'
}