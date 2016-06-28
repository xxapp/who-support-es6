var math = require('../../dist/babel/export');
var importedObj = require('../../dist/babel/import');
var expect = require('chai').expect;

describe('Test ES6 Module Export', function () {
    it('export a function', function () {
        expect(math.sum(1, 1)).to.be.equal(2);
    });
    it('export a variable', function () {
        expect(math.pi).to.be.equal(3.141593);
    });
})

describe('Test ES6 Module Import', function () {
    it('import *', function () {
        expect(importedObj.math.sum(1, 1)).to.be.equal(2);
    });
    it('import {sum, pi}', function () {
        expect(importedObj.pi).to.be.equal(3.141593);
    });
})