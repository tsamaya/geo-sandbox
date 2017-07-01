var BBOX = require('./lib/Bounds');


var bbox = new BBOX(10,10,20,20);

console.log('North', bbox.getNorth());
console.log('South', bbox.getSouth());
console.log('East', bbox.getEast());
console.log('West', bbox.getWest());
