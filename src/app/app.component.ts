import { Component, OnInit } from '@angular/core';
import { CarFactoryService } from './car-factory.service';
import { SUVCar, SedanCar, SportsCar } from './car-models';
import { Car } from './car.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  brand: string = "";
  model: string = "";
  year: number = 0;
  numberOfDoors: number = 0;
  trunkSize: string = "";
  topSpeed: number = 0;

  constructor(public carFactoryService: CarFactoryService) { }

  sedanNew: any
  createSedan(): void {
    const car = new SedanCar(this.brand, this.model, this.year, this.numberOfDoors);
    const memoryLocation = `0x${(Math.random() * 0xFFFFFFFF).toString(16)}`;
    this.carFactoryService.registerCar('sedan', car);
    this.carFactoryService.addCreatedCar(car, memoryLocation);
    this.sedanNew = car
  }
  
  createSUV(): void {
    const car = new SUVCar(this.brand, this.model, this.year, this.trunkSize);
    const memoryLocation = `0x${(Math.random() * 0xFFFFFFFF).toString(16)}`;
    this.carFactoryService.registerCar('suv', car);
    this.carFactoryService.addCreatedCar(car, memoryLocation);
  }
  
  createSportsCar(): void {
    const car = new SportsCar(this.brand, this.model, this.year, this.topSpeed);
    const memoryLocation = `0x${(Math.random() * 0xFFFFFFFF).toString(16)}`;
    this.carFactoryService.registerCar('sports', car);
    this.carFactoryService.addCreatedCar(car, memoryLocation);
  }
  
  cloneCar(type: string): void {
    const clonedCar = this.carFactoryService.getCar(type);
    const memoryLocation = `0x${(Math.random() * 0xFFFFFFFF).toString(16)}`;
    this.carFactoryService.addClonedCar(clonedCar, memoryLocation);

    if(this.sedanNew === clonedCar){
      console.log("true")

    }else {
      console.log("false")
    }
    
  }
  
}
