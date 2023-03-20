const express = require('express');
const app = express();
const runner = require('./test-runner');

const Hippo = require('./models/hippo');

const Hugo = new Hippo({
    name: 'Hugo',
    weight: 1000,
    tusksSize: 50
})

const Jules = new Hippo({
    name: 'Jules',
    weight: 2000,
    tusksSize: 100
})

Hugo.eat();
Hugo.eat();
Hugo.swim();
Hugo.swim();
Hugo.swim();

console.log(Jules._toString());

app.listen(3000, () => {
    console.log("Listening on port " + 3000);
    console.log('Running Tests...');
    setTimeout(() => {
        try {
            runner.run();
        } catch (e) {
            console.log('Tests are not valid:');
            console.log(e);
        }
    }, 1500);
});

module.exports = app; // for testing