import { Injectable } from '@angular/core';
import { Car } from './car.model';

@Injectable({
    providedIn: 'root',
})
export class CarFactoryService {
    private prototypes: { [key: string]: Car } = {};
    private createdCars: { car: Car, memoryLocation: string }[] = [];
    private clonedCars: { car: Car, memoryLocation: string }[] = [];

    registerCar(type: string, car: Car): void {
        this.prototypes[type] = car;
    }

    getCar(type: string): Car {
        return this.prototypes[type].clone();
    }

    getCreatedCars():  { car: Car, memoryLocation: string }[] {
        return this.createdCars;
    }
    addCreatedCar(car: Car, memoryLocation: string): void {
        this.createdCars.push({ car, memoryLocation }); // Добавляем memoryLocation
      }

    getClonedCars(): { car: Car, memoryLocation: string }[] {
        return this.clonedCars;
    }

    addClonedCar(car: Car,memoryLocation:string): void {
        this.clonedCars.push({car,memoryLocation});
    }
}
