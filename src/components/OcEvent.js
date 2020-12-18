const cols = [
  { title: 'code', field: 'code' },
  { title: 'trigger', field: 'trigger' },
  { title: 'action', field: 'action' },
  { title: 'status', field: 'status' },
  { title: 'dateAdded', field: 'dateAdded' },

];


export const OcEvent = {
  cols: cols,
  title: 'Table OcEvent',
  url: 'http://localhost:8080/jee7app/rest/ocevent/selectAll'
}