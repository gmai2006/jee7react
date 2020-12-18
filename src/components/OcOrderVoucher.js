const cols = [
  { title: 'orderId', field: 'orderId' },
  { title: 'voucherId', field: 'voucherId' },
  { title: 'description', field: 'description' },
  { title: 'code', field: 'code' },
  { title: 'fromName', field: 'fromName' },
  { title: 'fromEmail', field: 'fromEmail' },
  { title: 'toName', field: 'toName' },
  { title: 'toEmail', field: 'toEmail' },
  { title: 'voucherThemeId', field: 'voucherThemeId' },
  { title: 'message', field: 'message' },
  { title: 'amount', field: 'amount' },

];


export const OcOrderVoucher = {
  cols: cols,
  title: 'Table OcOrderVoucher',
  url: 'http://localhost:8080/jee7app/rest/ocordervoucher/selectAll'
}