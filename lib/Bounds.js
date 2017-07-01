/**
 *  Bounds represents a rectangular area
 * @param  {[type]} lat1 [description]
 * @param  {[type]} lng1 [description]
 * @param  {[type]} lat2 [description]
 * @param  {[type]} lng2 [description]
 * @return {Object}      representing Bounds
 */
var Bounds = module.exports = function(lat1, lng1, lat2, lng2) {
    this._sw = {};
    this._ne = {};

    this._sw.lat = Math.min(lat1, lat2);
    this._sw.lng = Math.min(lng1, lng2);
    this._ne.lat = Math.max(lat1, lat2);
    this._ne.lng = Math.max(lng1, lng2);

    var self = this;
    /**
     *
     * @type {Object}
     */
    return {
        sw: {
            lat: self._sw.lat,
            lng: self._sw.lng
        },
        ne: {
            lat: self._ne.lat,
            lng: self._ne.lng
        },
        getNorthEast: function() {
            return self._ne;
        },
        getSouthWest: function() {
            return self._sw;
        },
        getNorth: function() {
            return self._ne.lat;
        },
        getSouth: function() {
            return self._sw.lat;
        },
        getEast: function() {
            return self._ne.lng;
        },
        getWest: function() {
            return self._sw.lng;
        }
    }
}
