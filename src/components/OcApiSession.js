const cols = [
  { title: 'apiId', field: 'apiId' },
  { title: 'token', field: 'token' },
  { title: 'sessionId', field: 'sessionId' },
  { title: 'sessionName', field: 'sessionName' },
  { title: 'ip', field: 'ip' },
  { title: 'dateAdded', field: 'dateAdded' },
  { title: 'dateModified', field: 'dateModified' },

];


export const OcApiSession = {
  cols: cols,
  title: 'Table OcApiSession',
  url: 'http://localhost:8080/jee7app/rest/ocapisession/selectAll'
}