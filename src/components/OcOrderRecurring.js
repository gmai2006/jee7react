const cols = [
  { title: 'orderId', field: 'orderId' },
  { title: 'reference', field: 'reference' },
  { title: 'productId', field: 'productId' },
  { title: 'productName', field: 'productName' },
  { title: 'productQuantity', field: 'productQuantity' },
  { title: 'recurringId', field: 'recurringId' },
  { title: 'recurringName', field: 'recurringName' },
  { title: 'recurringDescription', field: 'recurringDescription' },
  { title: 'recurringFrequency', field: 'recurringFrequency' },
  { title: 'recurringCycle', field: 'recurringCycle' },
  { title: 'recurringDuration', field: 'recurringDuration' },
  { title: 'recurringPrice', field: 'recurringPrice' },
  { title: 'trial', field: 'trial' },
  { title: 'trialFrequency', field: 'trialFrequency' },
  { title: 'trialCycle', field: 'trialCycle' },
  { title: 'trialDuration', field: 'trialDuration' },
  { title: 'trialPrice', field: 'trialPrice' },
  { title: 'status', field: 'status' },
  { title: 'dateAdded', field: 'dateAdded' },

];


export const OcOrderRecurring = {
  cols: cols,
  title: 'Table OcOrderRecurring',
  url: 'http://localhost:8080/jee7app/rest/ocorderrecurring/selectAll'
}