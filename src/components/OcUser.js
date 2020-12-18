const cols = [
  { title: 'userGroupId', field: 'userGroupId' },
  { title: 'username', field: 'username' },
  { title: 'password', field: 'password' },
  { title: 'salt', field: 'salt' },
  { title: 'firstname', field: 'firstname' },
  { title: 'lastname', field: 'lastname' },
  { title: 'email', field: 'email' },
  { title: 'image', field: 'image' },
  { title: 'code', field: 'code' },
  { title: 'ip', field: 'ip' },
  { title: 'status', field: 'status' },
  { title: 'dateAdded', field: 'dateAdded' },

];


export const OcUser = {
  cols: cols,
  title: 'Table OcUser',
  url: 'http://localhost:8080/jee7app/rest/ocuser/selectAll'
}