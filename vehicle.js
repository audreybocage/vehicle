class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk() {
        return "Beep."
    }

    toString() {
         console.log(`The vehicle is a ${this.make} ${this.model} from ${this.year} `)
    }
}

class Car extends Vehicle {
constructor(make, model, year){
    super(make, model, year)
}
 
numWheels() {
    return 4
}
}

class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year)
    }

    revEngine() {
        console.log('VROOM!!!');
    }

    numWheels() {
        return 2;
    }
}

class Garage extends Vehicle {
    constructor(cap) {
        this.cap = cap;
        this.vehicles = [];
    }
   
    add(newVehicle) {
        if (!(newVehicle instanceof Vehicle)) {
            return "Only vehicles are allowed in here!";
          }
          if (this.vehicles.length >= this.capacity) {
            return "Sorry, we're full.";
          }
          this.vehicles.push(newVehicle);
          return "Vehicle added!";

    }
}