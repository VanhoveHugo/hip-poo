const chai = require('chai');
const assert = chai.assert;
const server = require('../index');
const Hippo = require('../models/hippo');

suite('Unit Tests', function () {
    suite('Class Hippo', function () {
        test('Hippo can eat', function (done) {
            const Hugo = new Hippo({
                name: 'Hugo',
                weight: 1000,
                tusksSize: 50
            })
            Hugo.eat();
            assert.equal(Hugo.weight, 2000);
            done();
        });

        test('Hippo can swim', function (done) {
            const Hugo = new Hippo({
                name: 'Hugo',
                weight: 1000,
                tusksSize: 50
            })
            Hugo.swim();
            assert.equal(Hugo.weight, 700);
            done();
        });

        test('Hippo can fight', function (done) {
            const Hugo = new Hippo({
                name: 'Hugo',
                weight: 500,
                tusksSize: 50
            })
            const Jules = new Hippo({
                name: 'Jules',
                weight: 500,
                tusksSize: 100
            })
            Hugo.fight(Hugo, Jules);
            assert.equal(Hugo.weight, 0);
            assert.equal(Jules.weight, 1000);
            done();
        });

        test('Hippo can toString', function (done) {
            const Hugo = new Hippo({
                name: 'Hugo',
                weight: 1000,
                tusksSize: 50
            })
            assert.equal(Hugo._toString(), 'Hippo Hugo is 1000 pounds and has 50cm tusks.');
            done();
        });
    });
});