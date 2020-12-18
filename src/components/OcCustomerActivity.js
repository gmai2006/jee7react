const cols = [
  { title: 'customerId', field: 'customerId' },
  { title: 'key', field: 'key' },
  { title: 'data', field: 'data' },
  { title: 'ip', field: 'ip' },
  { title: 'dateAdded', field: 'dateAdded' },

];


export const OcCustomerActivity = {
  cols: cols,
  title: 'Table OcCustomerActivity',
  url: 'http://localhost:8080/jee7app/rest/occustomeractivity/selectAll'
}