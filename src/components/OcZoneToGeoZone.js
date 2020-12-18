const cols = [
  { title: 'countryId', field: 'countryId' },
  { title: 'zoneId', field: 'zoneId' },
  { title: 'geoZoneId', field: 'geoZoneId' },
  { title: 'dateAdded', field: 'dateAdded' },
  { title: 'dateModified', field: 'dateModified' },

];


export const OcZoneToGeoZone = {
  cols: cols,
  title: 'Table OcZoneToGeoZone',
  url: 'http://localhost:8080/jee7app/rest/oczonetogeozone/selectAll'
}