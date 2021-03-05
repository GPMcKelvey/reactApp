class User {
    constructor(first, last, e) {
        this.f = first;
        this.l = last;
        this.email = e;
    }
}

let userOne = new User("Paul", "O'Connor", "poconnor@elevenfifty.org");
console.log(userOne.first); //undefined
console.log(userOne.f); //Paul
console.log(userOne.l); //O'Connor
console.log(userOne); //User {f: "Paul", l: "O'Connor", email: "poconnor@elevenfifty.org"}


class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
}

let newCar = new Car("Mazda", "RX-7", "1985");
console.log(newCar);