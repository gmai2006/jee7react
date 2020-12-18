const cols = [
  { title: 'customerId', field: 'customerId' },
  { title: 'firstname', field: 'firstname' },
  { title: 'lastname', field: 'lastname' },
  { title: 'company', field: 'company' },
  { title: 'address1', field: 'address1' },
  { title: 'address2', field: 'address2' },
  { title: 'city', field: 'city' },
  { title: 'postcode', field: 'postcode' },
  { title: 'countryId', field: 'countryId' },
  { title: 'zoneId', field: 'zoneId' },
  { title: 'customField', field: 'customField' },

];


export const OcAddress = {
  cols: cols,
  title: 'Table OcAddress',
  url: 'http://localhost:8080/jee7app/rest/ocaddress/selectAll'
}