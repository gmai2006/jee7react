const cols = [
  { title: 'returnId', field: 'returnId' },
  { title: 'returnStatusId', field: 'returnStatusId' },
  { title: 'notify', field: 'notify' },
  { title: 'comment', field: 'comment' },
  { title: 'dateAdded', field: 'dateAdded' },

];


export const OcReturnHistory = {
  cols: cols,
  title: 'Table OcReturnHistory',
  url: 'http://localhost:8080/jee7app/rest/ocreturnhistory/selectAll'
}