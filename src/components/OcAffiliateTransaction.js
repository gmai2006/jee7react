const cols = [
  { title: 'affiliateId', field: 'affiliateId' },
  { title: 'orderId', field: 'orderId' },
  { title: 'description', field: 'description' },
  { title: 'amount', field: 'amount' },
  { title: 'dateAdded', field: 'dateAdded' },

];


export const OcAffiliateTransaction = {
  cols: cols,
  title: 'Table OcAffiliateTransaction',
  url: 'http://localhost:8080/jee7app/rest/ocaffiliatetransaction/selectAll'
}