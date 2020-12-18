const cols = [
  { title: 'name', field: 'name' },
  { title: 'code', field: 'code' },
  { title: 'type', field: 'type' },
  { title: 'discount', field: 'discount' },
  { title: 'logged', field: 'logged' },
  { title: 'shipping', field: 'shipping' },
  { title: 'total', field: 'total' },
  { title: 'dateStart', field: 'dateStart' },
  { title: 'dateEnd', field: 'dateEnd' },
  { title: 'usesTotal', field: 'usesTotal' },
  { title: 'usesCustomer', field: 'usesCustomer' },
  { title: 'status', field: 'status' },
  { title: 'dateAdded', field: 'dateAdded' },

];


export const OcCoupon = {
  cols: cols,
  title: 'Table OcCoupon',
  url: 'http://localhost:8080/jee7app/rest/occoupon/selectAll'
}