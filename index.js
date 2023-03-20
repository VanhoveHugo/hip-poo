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

console.log(Hugo._toString());
console.log(Jules._toString());


Hugo.eat();
Hugo.eat();
Hugo.swim();
Hugo.swim();
Hugo.swim();

console.log(Jules._toString());
