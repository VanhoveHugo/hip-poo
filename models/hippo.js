class Hippo {
    constructor(d) {
        this._name = d.name
        this._weight = d.weight
        this._tusksSize = d.tusksSize
    }
    get name() {
        return this._name
    }
    get weight() {
        return this._weight
    }
    get tusksSize() {
        return this._tusksSize
    }

    swim() {
        console.log("I'm swimming")
        this._weight -= 300
    }
    eat() {
        console.log("I'm eating")
        this._weight += 1000
    }
    fight(p1, p2) {
        if(p1._tusksSize > p2._tusksSize) {
            console.log(`${p1._name} won the fight`)
            p1._weight += 500
            p2._weight -= 500
        } else if(p1._tusksSize < p2._tusksSize) {
            console.log(`${p2._name} won the fight`)
            p2._weight += 500
            p1._weight -= 500
        }
    }

    _toString() {
        return `Hippo ${this._name} is ${this._weight} pounds and has ${this._tusksSize}cm tusks.`
    }
}

module.exports = Hippo