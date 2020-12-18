const cols = [
  { title: 'couponId', field: 'couponId' },
  { title: 'orderId', field: 'orderId' },
  { title: 'customerId', field: 'customerId' },
  { title: 'amount', field: 'amount' },
  { title: 'dateAdded', field: 'dateAdded' },

];


export const OcCouponHistory = {
  cols: cols,
  title: 'Table OcCouponHistory',
  url: 'http://localhost:8080/jee7app/rest/occouponhistory/selectAll'
}