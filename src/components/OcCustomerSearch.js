const cols = [
  { title: 'storeId', field: 'storeId' },
  { title: 'languageId', field: 'languageId' },
  { title: 'customerId', field: 'customerId' },
  { title: 'keyword', field: 'keyword' },
  { title: 'categoryId', field: 'categoryId' },
  { title: 'subCategory', field: 'subCategory' },
  { title: 'description', field: 'description' },
  { title: 'products', field: 'products' },
  { title: 'ip', field: 'ip' },
  { title: 'dateAdded', field: 'dateAdded' },

];


export const OcCustomerSearch = {
  cols: cols,
  title: 'Table OcCustomerSearch',
  url: 'http://localhost:8080/jee7app/rest/occustomersearch/selectAll'
}