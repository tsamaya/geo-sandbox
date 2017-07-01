var expect = require('chai').expect;
var Bounds = require('../').Bounds;

describe('Bounds', function() {
  describe('#chai', function() {
    it('contains spec with an expectation', function() {
      expect(true).to.equal(true);
    });
  });
  describe('#init Bounds +', function() {
    function checkBounds(bbox) {
      expect(bbox.getNorth()).to.equal(50);
      expect(bbox.getSouth()).to.equal(40);
      expect(bbox.getEast()).to.equal(20);
      expect(bbox.getWest()).to.equal(10);
    }
    it('ctor with NE {lat:50,lng:20}, SW {lat:40,lng:10} ', function() {
      var bbox = new Bounds(50,20,40,10);
      checkBounds(bbox);
    });
    it('ctor with SW {lat:40,lng:10}, NE {lat:50,lng:20} ', function() {
      var bbox = new Bounds(40,10,50,20);
      checkBounds(bbox);
    });
  });
  describe('#init Bounds -', function() {
    function checkBounds(bbox) {
      expect(bbox.getNorth()).to.equal(-10);
      expect(bbox.getSouth()).to.equal(-40);
      expect(bbox.getEast()).to.equal(-20);
      expect(bbox.getWest()).to.equal(-60);
    }
    it('ctor with NE {lat:-10,lng:-20}, SW {lat:-40,lng:-60} ', function() {
      var bbox = new Bounds(-10,-20,-40,-60);
      checkBounds(bbox);
    });
    it('ctor with SW {lat:-40,lng:-60}, NE {lat:-10,lng:-20} ', function() {
      var bbox = new Bounds(-40,-60,-10,-20);
      checkBounds(bbox);
    });
  });
  describe('#init Bounds -lat +lng', function() {
    function checkBounds(bbox) {
      expect(bbox.getNorth()).to.equal(-30);
      expect(bbox.getSouth()).to.equal(-40);
      expect(bbox.getEast()).to.equal(20);
      expect(bbox.getWest()).to.equal(10);
    }
    it('ctor with NE {lat:-30,lng:20}, SW {lat:-40,lng:10} ', function() {
      var bbox = new Bounds(-30,20,-40,10);
      checkBounds(bbox);
    });
    it('ctor with SW {lat:-40,lng:10}, NE {lat:-30,lng:20} ', function() {
      var bbox = new Bounds(-40,10,-30,20);
      checkBounds(bbox);
    });
  });
  describe('#init Bounds +lat -lng', function() {
    function checkBounds(bbox) {
      expect(bbox.getNorth()).to.equal(40);
      expect(bbox.getSouth()).to.equal(30);
      expect(bbox.getEast()).to.equal(-20);
      expect(bbox.getWest()).to.equal(-60);
    }
    it('ctor with NE {lat:40,lng:-20}, SW {lat:30,lng:-60} ', function() {
      var bbox = new Bounds(40,-20,30,-60);
      checkBounds(bbox);
    });
    it('ctor with SW {lat:30,lng:-60} NE {lat:40,lng:-20} ', function() {
      var bbox = new Bounds(30,-60,40,-20);
      checkBounds(bbox);
    });
  });
  describe('#init Bounds nw se', function() {
    function checkBounds(bbox) {
      expect(bbox.getNorth()).to.equal(50);
      expect(bbox.getSouth()).to.equal(40);
      expect(bbox.getEast()).to.equal(20);
      expect(bbox.getWest()).to.equal(10);
    }
    it('ctor with NW {lat:50,lng:10}, SE {lat:40,lng:20} ', function() {
      var bbox = new Bounds(50,10,40,20);
      checkBounds(bbox);
    });
    it('ctor with SE {lat:40,lng:20}, NW {lat:50,lng:10} ', function() {
      var bbox = new Bounds(40,20,50,10);
      checkBounds(bbox);
    });
  });
});
