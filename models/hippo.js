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
        this._weight -= 300
        return `${this._name} swim and now weighs ${this._weight} pounds`
    }
    eat() {
        this._weight += 1000
        return `${this._name} eat and now weighs ${this._weight} pounds`
    }
    fight(p1, p2) {
        if(p1._tusksSize > p2._tusksSize) {
            p1._weight += 500
            p2._weight -= 500
            return `${p1._name} won the fight`
        } else if(p1._tusksSize < p2._tusksSize) {
            p2._weight += 500
            p1._weight -= 500
            return `${p2._name} won the fight`
        }
    }

    _toString() {
        return `Hippo ${this._name} is ${this._weight} pounds and has ${this._tusksSize}cm tusks.`
    }
}

module.exports = Hippo