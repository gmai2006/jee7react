const cols = [
  { title: 'model', field: 'model' },
  { title: 'sku', field: 'sku' },
  { title: 'upc', field: 'upc' },
  { title: 'ean', field: 'ean' },
  { title: 'jan', field: 'jan' },
  { title: 'isbn', field: 'isbn' },
  { title: 'mpn', field: 'mpn' },
  { title: 'location', field: 'location' },
  { title: 'quantity', field: 'quantity' },
  { title: 'stockStatusId', field: 'stockStatusId' },
  { title: 'image', field: 'image' },
  { title: 'manufacturerId', field: 'manufacturerId' },
  { title: 'shipping', field: 'shipping' },
  { title: 'price', field: 'price' },
  { title: 'points', field: 'points' },
  { title: 'taxClassId', field: 'taxClassId' },
  { title: 'dateAvailable', field: 'dateAvailable' },
  { title: 'weight', field: 'weight' },
  { title: 'weightClassId', field: 'weightClassId' },
  { title: 'length', field: 'length' },
  { title: 'width', field: 'width' },
  { title: 'height', field: 'height' },
  { title: 'lengthClassId', field: 'lengthClassId' },
  { title: 'subtract', field: 'subtract' },
  { title: 'minimum', field: 'minimum' },
  { title: 'sortOrder', field: 'sortOrder' },
  { title: 'status', field: 'status' },
  { title: 'viewed', field: 'viewed' },
  { title: 'dateAdded', field: 'dateAdded' },
  { title: 'dateModified', field: 'dateModified' },

];


export const OcProduct = {
  cols: cols,
  title: 'Table OcProduct',
  url: 'http://localhost:8080/jee7app/rest/ocproduct/selectAll'
}