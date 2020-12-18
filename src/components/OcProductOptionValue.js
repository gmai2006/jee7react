const cols = [
  { title: 'productOptionId', field: 'productOptionId' },
  { title: 'productId', field: 'productId' },
  { title: 'optionId', field: 'optionId' },
  { title: 'optionValueId', field: 'optionValueId' },
  { title: 'quantity', field: 'quantity' },
  { title: 'subtract', field: 'subtract' },
  { title: 'price', field: 'price' },
  { title: 'pricePrefix', field: 'pricePrefix' },
  { title: 'points', field: 'points' },
  { title: 'pointsPrefix', field: 'pointsPrefix' },
  { title: 'weight', field: 'weight' },
  { title: 'weightPrefix', field: 'weightPrefix' },

];


export const OcProductOptionValue = {
  cols: cols,
  title: 'Table OcProductOptionValue',
  url: 'http://localhost:8080/jee7app/rest/ocproductoptionvalue/selectAll'
}