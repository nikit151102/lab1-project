import { Car } from './car.model';

export class SedanCar extends Car {
    type = 'Sedan';
    numberOfDoors: number;

    constructor(brand: string, model: string, year: number, numberOfDoors: number) {
        super();
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.numberOfDoors = numberOfDoors;
    }
}

export class SUVCar extends Car {
    type = 'SUV';
    trunkSize: string;

    constructor(brand: string, model: string, year: number, trunkSize: string) {
        super();
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.trunkSize = trunkSize;
    }
}

export class SportsCar extends Car {
    type = 'Sports';
    topSpeed: number;

    constructor(brand: string, model: string, year: number, topSpeed: number) {
        super();
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.topSpeed = topSpeed;
    }
}