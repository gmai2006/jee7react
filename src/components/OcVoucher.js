const cols = [
  { title: 'orderId', field: 'orderId' },
  { title: 'code', field: 'code' },
  { title: 'fromName', field: 'fromName' },
  { title: 'fromEmail', field: 'fromEmail' },
  { title: 'toName', field: 'toName' },
  { title: 'toEmail', field: 'toEmail' },
  { title: 'voucherThemeId', field: 'voucherThemeId' },
  { title: 'message', field: 'message' },
  { title: 'amount', field: 'amount' },
  { title: 'status', field: 'status' },
  { title: 'dateAdded', field: 'dateAdded' },

];


export const OcVoucher = {
  cols: cols,
  title: 'Table OcVoucher',
  url: 'http://localhost:8080/jee7app/rest/ocvoucher/selectAll'
}