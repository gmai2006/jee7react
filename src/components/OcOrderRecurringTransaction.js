const cols = [
  { title: 'orderRecurringId', field: 'orderRecurringId' },
  { title: 'reference', field: 'reference' },
  { title: 'type', field: 'type' },
  { title: 'amount', field: 'amount' },
  { title: 'dateAdded', field: 'dateAdded' },

];


export const OcOrderRecurringTransaction = {
  cols: cols,
  title: 'Table OcOrderRecurringTransaction',
  url: 'http://localhost:8080/jee7app/rest/ocorderrecurringtransaction/selectAll'
}