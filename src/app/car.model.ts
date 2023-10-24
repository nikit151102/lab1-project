export class Car {
    brand: string = '';
    model: string = '';
    year: number = 0;

    clone(): Car {
        const clonedCar = new Car();
        clonedCar.brand = this.brand;
        clonedCar.model = this.model;
        clonedCar.year = this.year;
        return clonedCar;
    }
}
