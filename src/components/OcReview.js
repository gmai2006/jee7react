const cols = [
  { title: 'productId', field: 'productId' },
  { title: 'customerId', field: 'customerId' },
  { title: 'author', field: 'author' },
  { title: 'text', field: 'text' },
  { title: 'rating', field: 'rating' },
  { title: 'status', field: 'status' },
  { title: 'dateAdded', field: 'dateAdded' },
  { title: 'dateModified', field: 'dateModified' },

];


export const OcReview = {
  cols: cols,
  title: 'Table OcReview',
  url: 'http://localhost:8080/jee7app/rest/ocreview/selectAll'
}