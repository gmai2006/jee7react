const cols = [
  { title: 'customerGroupId', field: 'customerGroupId' },
  { title: 'storeId', field: 'storeId' },
  { title: 'languageId', field: 'languageId' },
  { title: 'firstname', field: 'firstname' },
  { title: 'lastname', field: 'lastname' },
  { title: 'email', field: 'email' },
  { title: 'telephone', field: 'telephone' },
  { title: 'fax', field: 'fax' },
  { title: 'password', field: 'password' },
  { title: 'salt', field: 'salt' },
  { title: 'cart', field: 'cart' },
  { title: 'wishlist', field: 'wishlist' },
  { title: 'newsletter', field: 'newsletter' },
  { title: 'addressId', field: 'addressId' },
  { title: 'customField', field: 'customField' },
  { title: 'ip', field: 'ip' },
  { title: 'status', field: 'status' },
  { title: 'approved', field: 'approved' },
  { title: 'safe', field: 'safe' },
  { title: 'token', field: 'token' },
  { title: 'code', field: 'code' },
  { title: 'dateAdded', field: 'dateAdded' },

];


export const OcCustomer = {
  cols: cols,
  title: 'Table OcCustomer',
  url: 'http://localhost:8080/jee7app/rest/occustomer/selectAll'
}