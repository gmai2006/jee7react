const cols = [
  { title: 'taxClassId', field: 'taxClassId' },
  { title: 'taxRateId', field: 'taxRateId' },
  { title: 'based', field: 'based' },
  { title: 'priority', field: 'priority' },

];


export const OcTaxRule = {
  cols: cols,
  title: 'Table OcTaxRule',
  url: 'http://localhost:8080/jee7app/rest/octaxrule/selectAll'
}