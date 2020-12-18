const cols = [
  { title: 'name', field: 'name' },
  { title: 'key', field: 'key' },
  { title: 'status', field: 'status' },
  { title: 'dateAdded', field: 'dateAdded' },
  { title: 'dateModified', field: 'dateModified' },

];


export const OcApi = {
  cols: cols,
  title: 'Table OcApi',
  url: 'http://localhost:8080/jee7app/rest/ocapi/selectAll'
}